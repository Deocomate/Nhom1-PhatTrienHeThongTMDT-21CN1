package com.hau.api_backend.service;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.ProductImageResponse;
import com.hau.api_backend.dto.response.ProductResponse;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.ProductMapper;
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
public class ProductService {
    ProductRepository productRepository;
    ProductMapper productMapper;

    @NonFinal
    @Value("${app.base-url}")
    String appBaseUrl;

    public ApiResponse<List<ProductResponse>> getAllProduct() {
        List<Product> products = productRepository.findAll();
        List<ProductResponse> productResponses = products.stream()
                .map(product -> {
                    ProductResponse response = productMapper.toProductResponse(product);
                    checkThumbnail(response);
                    return response;
                })
                .collect(Collectors.toList());

        return ApiResponse.<List<ProductResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_PRODUCT.getMessage())
                .data(productResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    private void checkThumbnail(ProductResponse response) {
        if (response.getThumbnail() != null) {
            response.setThumbnail(appBaseUrl + response.getThumbnail());
        } // Tạo URL đầy đủ cho thumbnail
        List<ProductImageResponse> images = response.getProductImagesResponses();
        if (images != null) {
            images.forEach(image -> image.setUrl(appBaseUrl + image.getUrl())); // Tạo URL đầy đủ cho ảnh
        }
    }

    public ApiResponse<ProductResponse> getProductById(int id) {
        Product product = findProductById(id);
        ProductResponse productResponse = productMapper.toProductWithCommentResponse(product);
        checkThumbnail(productResponse);
        return ApiResponse.<ProductResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_PRODUCT_BY_ID.getMessage())
                .data(productResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<ProductResponse> getProductBySlug(String slug) {
        Product product = productRepository.findProductBySlug(slug)
                .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND, "slug"));
        ProductResponse productResponse = productMapper.toProductWithCommentResponse(product);

        return ApiResponse.<ProductResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_PRODUCT_BY_ID.getMessage())
                .data(productResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }


//    public ApiResponse<List<ProductImageResponse>> getProductImages(int id) {
//        Product product = findProductById(id);
//        List<ProductImageResponse> productImageResponses = product.getProductImages().stream()
//                .map(image -> {
//                    // Tạo URL đầy đủ
//                    return ProductImageResponse.builder()
//                            .id(image.getId())
//                            .productId(image.getProductId())
//                            .url(appBaseUrl + "/" + imageBasePath + "/" + image.getUrl()) // Tạo URL đầy đủ
//                            .build();
//                })
//                .collect(Collectors.toList());
//
//        return ApiResponse.<List<ProductImageResponse>>builder()
//                .code(HttpStatus.OK.value())
//                .message("Get product images success")
//                .data(productImageResponses)
//                .timestamp(LocalDateTime.now())
//                .build();
//    }


    public Product findProductById(int id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND, "productId"));
    }


}