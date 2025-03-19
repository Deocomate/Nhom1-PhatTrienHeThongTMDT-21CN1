package com.hau.api_backend.service;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.BlogResponse;
import com.hau.api_backend.entity.Blog;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.BlogCategoryMapper;
import com.hau.api_backend.repository.BlogCategoryRepository;
import com.hau.api_backend.mapper.BlogMapper;
import com.hau.api_backend.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogRepository blogRepository;
    private final BlogMapper blogMapper;
    private final BlogCategoryRepository blogCategoryRepository;
    private final BlogCategoryMapper blogCategoryMapper;

    @Value("${app.base-url}")
    String appBaseUrl;
//    public ApiResponse<List<BlogResponse>> getAllBlogs(int page, int size) {
//        Pageable pageable = PageRequest.of(page, size);
//        Page<Blog> blogPage = blogRepository.findAll(pageable);
//
//        List<BlogResponse> blogResponses = blogPage.getContent().stream()
//                .map(this::mapBlogWithCategory) // Sử dụng phương thức riêng
//                .collect(Collectors.toList());
//
//        return ApiResponse.<List<BlogResponse>>builder()
//                .code(HttpStatus.OK.value())
//                .message("Lấy danh sách bài viết thành công")
//                .data(blogResponses)
//                .timestamp(LocalDateTime.now())
//                .build();
//    }

    public ApiResponse<BlogResponse> getBlogBySlug(String slug) {
        Blog blog = blogRepository.findBlogBySlug(slug)
                .orElseThrow(() -> new AppException(ErrorCode.BLOG_NOT_FOUND, "slug")); // Thay AppException bằng xử lý exception thích hợp

        return ApiResponse.<BlogResponse>builder()
                .code(HttpStatus.OK.value())
                .message("Lấy bài viết theo slug thành công")
                .data(mapBlogWithCategory(blog)) // Sử dụng phương thức riêng
                .timestamp(LocalDateTime.now())
                .build();
    }

    // Phương thức riêng để map Blog và BlogCategory
    private BlogResponse mapBlogWithCategory(Blog blog) {
        BlogResponse blogResponse = blogMapper.toBlogResponse(blog);
        blogResponse.setBlogCategory(blogCategoryRepository.findById(blog.getBlogCategoryId())
                .map(blogCategoryMapper::toBlogCategoryResponse)
                .orElse(null));
        return blogResponse;
    }


    public ApiResponse<Page<BlogResponse>> getBlogs(String title, int pageIndex, int pageSize) {
        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        Page<Blog> blogPage;

        if (title != null && !title.isEmpty()) {
            blogPage = blogRepository.searchByTitle(title, pageable).orElseThrow(() -> new AppException(ErrorCode.BLOG_NOT_FOUND));
        } else {
            blogPage = blogRepository.findAll(pageable);
        }

        List<BlogResponse> blogResponses = blogPage.getContent().stream()
                .map(blog -> {
                    BlogResponse response = mapBlogWithCategory(blog);
                    checkThumbnail(response);
                    return response;
                }).collect(Collectors.toList());

        return ApiResponse.<Page<BlogResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_BLOG.getMessage())
                .data(new PageImpl<>(blogResponses, pageable, blogPage.getTotalElements()))
                .timestamp(LocalDateTime.now())
                .build();
    }




    private void checkThumbnail(BlogResponse response) {
        if(response.getThumbnail() != null)
            response.setThumbnail(appBaseUrl + response.getThumbnail());
    }
}