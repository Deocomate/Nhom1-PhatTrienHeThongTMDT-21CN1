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

    String imageBasePath = "userfiles/images";
    String appBaseUrl = "http://127.0.0.1:8000";

    public ApiResponse<List<ProductResponse>> getAllProduct() {
        List<Product> products = productRepository.findAll();
        List<ProductResponse> productResponses = products.stream()
                .map(product -> {
                    ProductResponse response = productMapper.toProductResponse(product);
                    if (response.getThumbnail() != null) {
                        response.setThumbnail(appBaseUrl + "/" + imageBasePath + "/" + response.getThumbnail());
                    } // Tạo URL đầy đủ cho thumbnail
                    List<ProductImageResponse> images = response.getProductImagesResponses();
                    if (images != null) {
                        images.forEach(image -> image.setUrl(appBaseUrl + "/" + imageBasePath + "/" + image.getUrl())); // Tạo URL đầy đủ cho ảnh
                    }
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

    public ApiResponse<ProductResponse> getProductById(int id) {
        Product product = findProductById(id);
        ProductResponse productResponse = productMapper.toProductResponse(product);
        if (productResponse.getThumbnail() != null) {
            productResponse.setThumbnail(appBaseUrl + "/" + imageBasePath + "/" + productResponse.getThumbnail());
        } // Tạo URL đầy đủ cho thumbnail
        List<ProductImageResponse> images = productResponse.getProductImagesResponses();
        if (images != null) {
            images.forEach(image -> image.setUrl(appBaseUrl + "/" + imageBasePath + "/" + image.getUrl())); // Tạo URL đầy đủ cho ảnh
        }
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
                .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND));
    }
}