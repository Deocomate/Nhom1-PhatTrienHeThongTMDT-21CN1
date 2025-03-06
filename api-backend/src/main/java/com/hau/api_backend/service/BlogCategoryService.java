package com.hau.api_backend.service;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.BlogCategoryResponse;
import com.hau.api_backend.entity.BlogCategory;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.BlogCategoryMapper;
import com.hau.api_backend.repository.BlogCategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)

public class BlogCategoryService {

    private final BlogCategoryRepository blogCategoryRepository;
    private final BlogCategoryMapper blogCategoryMapper;


    @NonFinal
    @Value("${app.base-url}")
    String appBaseUrl;

    public ApiResponse<List<BlogCategoryResponse>> getAllBlogCategories() {
        List<BlogCategory> blogCategories = blogCategoryRepository.findAll();

        List<BlogCategoryResponse> blogCategoryResponses = blogCategories.stream()
                .map(blogCategoryMapper::toBlogCategoryResponse)
                .map(this::checkThumbnail)
                .collect(Collectors.toList());

        return ApiResponse.<List<BlogCategoryResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_BLOG_CATEGORIES.getMessage())
                .data(blogCategoryResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<BlogCategoryResponse> getBlogCategoryBySlug(String slug) {
        BlogCategory blogCategory = blogCategoryRepository.findBlogCategoriesBySlug(slug)
                .orElseThrow(() -> new AppException(ErrorCode.BLOG_CATEGORY_NOT_FOUND, "slug"));
        BlogCategoryResponse blogCategoryResponse = blogCategoryMapper.toBlogCategoryResponse(blogCategory);

        return ApiResponse.<BlogCategoryResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_BLOG_CATEGORY_BY_ID.getMessage())
                .data(blogCategoryResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    private BlogCategoryResponse checkThumbnail(BlogCategoryResponse response) {
        if (response.getThumbnail() != null) {
            response.setThumbnail(appBaseUrl + response.getThumbnail());
        }
        return response;
    }
}