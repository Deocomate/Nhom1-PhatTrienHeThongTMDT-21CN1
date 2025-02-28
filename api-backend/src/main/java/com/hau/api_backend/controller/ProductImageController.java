package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.ProductImageResponse;
import com.hau.api_backend.service.ProductImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/images")
@Controller
@RequiredArgsConstructor
public class ProductImageController {
    private final ProductImageService productImageService;
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<List<ProductImageResponse>>> getProductImages(@PathVariable int id) {
        ApiResponse<List<ProductImageResponse>> apiResponse = productImageService.getProductImages(id);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}
