package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.BlogCategoryResponse;
import com.hau.api_backend.service.BlogCategoryService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/blog_category")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BlogCategoryController {
    BlogCategoryService blogCategoryService;

    @GetMapping
    ResponseEntity<ApiResponse<List<BlogCategoryResponse>>> getAllBlogCategory() {
        ApiResponse<List<BlogCategoryResponse>> apiResponse = blogCategoryService.getAllBlogCategories();
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/getBlogCategoryBySlug/{slug:[a-zA-Z0-9-]+}")
    public ResponseEntity<ApiResponse<BlogCategoryResponse>> getBlogCategoryBySlug(@PathVariable String slug) {
        ApiResponse<BlogCategoryResponse> apiResponse = blogCategoryService.getBlogCategoryBySlug(slug);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}
