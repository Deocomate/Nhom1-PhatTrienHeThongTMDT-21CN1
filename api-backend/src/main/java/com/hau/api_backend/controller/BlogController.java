package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.BlogResponse;
import com.hau.api_backend.entity.Blog;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.repository.BlogRepository;
import com.hau.api_backend.service.BasePaginationService;
import com.hau.api_backend.service.BlogService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blog")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class BlogController {
    BlogService blogService;
    BasePaginationService<Blog> blogPaginationService;
    BlogRepository blogRepository;
    @GetMapping("/getBlogBySlug/{slug:[a-zA-Z0-9-]+}")
    public ResponseEntity<ApiResponse<BlogResponse>> getBlogBySlug(@PathVariable String slug) {
        ApiResponse<BlogResponse> apiResponse = blogService.getBlogBySlug(slug);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity<ApiResponse<List<BlogResponse>>> getAllBlogs(
//            @RequestParam(defaultValue = "0") int pageIndex, // Số trang mặc định là 0
//            @RequestParam(defaultValue = "10") int pageSize) {    // Lấy 10 sản phẩm đầu
//        ApiResponse<List<BlogResponse>> apiResponse = blogService.getAllBlogs(pageIndex, pageSize);
//        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
//    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<BlogResponse>>> getBlogsByPaginate(
            @RequestParam(defaultValue = "0") int pageIndex,
            @RequestParam(defaultValue = "10") int pageSize) {

        ApiResponse<Page<BlogResponse>> apiResponse = blogService.getBlogs(pageIndex, pageSize);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}