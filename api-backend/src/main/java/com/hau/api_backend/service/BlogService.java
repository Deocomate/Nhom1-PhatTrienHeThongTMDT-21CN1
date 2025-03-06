package com.hau.api_backend.service;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.BlogResponse;
import com.hau.api_backend.entity.Blog;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.BlogMapper;
import com.hau.api_backend.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
public class BlogService {

    BlogMapper blogMapper;
    BlogRepository blogRepository;

    @NonFinal
    @Value("${app.base-url}")
    String appBaseUrl;

    public ApiResponse<BlogResponse> getBlogBySlug(String slug) {
        Blog blog = blogRepository.findBlogBySlug(slug)
                .orElseThrow(() -> new AppException(ErrorCode.BLOG_NOT_FOUND, "slug"));
        BlogResponse blogResponse = blogMapper.toBlogResponse(blog);

        return ApiResponse.<BlogResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_BLOG_BY_SLUG.getMessage())
                .data(blogResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    private BlogResponse checkThumbnail(BlogResponse response) {
        if (response.getThumbnail() != null) {
            response.setThumbnail(appBaseUrl + response.getThumbnail());
        }
        return response;
    }
}
