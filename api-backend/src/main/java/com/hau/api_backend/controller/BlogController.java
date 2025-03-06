package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.BlogResponse;
import com.hau.api_backend.service.BlogService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/blog")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BlogController {
    BlogService blogService;

    @GetMapping("/slug/{slug:[a-zA-Z0-9-]+}")
    public ResponseEntity<ApiResponse<BlogResponse>> getBlogBySlug(@PathVariable String slug) {
        ApiResponse<BlogResponse> apiResponse = blogService.getBlogBySlug(slug);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}
