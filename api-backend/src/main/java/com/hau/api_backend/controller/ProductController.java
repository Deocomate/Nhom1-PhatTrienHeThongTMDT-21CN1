package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.ProductImageResponse;
import com.hau.api_backend.dto.response.ProductResponse;
import com.hau.api_backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<ProductResponse>>> getAllProduct() {
        ApiResponse<List<ProductResponse>> apiResponse = productService.getAllProduct();
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductResponse>> getProductById(@PathVariable int id) {
        ApiResponse<ProductResponse> apiResponse = productService.getProductById(id);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/{id}/images")
    public ResponseEntity<ApiResponse<List<ProductImageResponse>>> getProductImages(@PathVariable int id) {
        ApiResponse<List<ProductImageResponse>> apiResponse = productService.getProductImages(id);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}