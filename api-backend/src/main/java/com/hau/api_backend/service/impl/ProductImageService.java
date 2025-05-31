package com.hau.api_backend.service.impl;


import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.ProductImageResponse;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.repository.ProductRepository;
import lombok.AccessLevel;
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
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ProductImageService {
    ProductRepository productRepository;

    @NonFinal
    @Value("${app.base-url}")
    String appBaseUrl;

    public ApiResponse<List<ProductImageResponse>> getProductImages(int id) {
        Product product = findProductById(id);
        List<ProductImageResponse> productImageResponses = product.getProductImages().stream()
                .map(image -> {
                    // Tạo URL đầy đủ
                    return ProductImageResponse.builder()
                            .id(image.getId())
                            .productId(image.getProductId())
                            .url(appBaseUrl + image.getUrl()) // Tạo URL đầy đủ
                            .build();
                })
                .collect(Collectors.toList());

        return ApiResponse.<List<ProductImageResponse>>builder()
                .code(HttpStatus.OK.value())
                .message("Get product images success")
                .data(productImageResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }


    public Product findProductById(int id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND));
    }
}
