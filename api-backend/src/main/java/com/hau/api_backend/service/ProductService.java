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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ProductService {
    ProductRepository productRepository;
    ProductMapper productMapper;
    private final String[] allowForSorting = {"price"};

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

    public Page<Product> getProducts(String title, String sortBy, boolean priority, String direction, int pageIndex, int pageSize) {
        Pageable pageable;

        // Danh sách các trường hợp được phép sắp xếp
        if (priority) {
            // Nếu `priority = true`, luôn sắp xếp theo priority trước
            Sort sort = direction != null && direction.equalsIgnoreCase("desc")
                    ? Sort.by("priority").descending()
                    : Sort.by("priority").ascending();
            pageable = PageRequest.of(pageIndex, pageSize, sort);
        } else if (sortBy != null && !sortBy.trim().isEmpty() && contains(allowForSorting, sortBy)) {
            // Nếu `priority = false`, chỉ sắp xếp theo `sortBy` nếu hợp lệ
            Sort sort = direction != null && direction.equalsIgnoreCase("desc")
                    ? Sort.by(sortBy).descending()
                    : Sort.by(sortBy).ascending();
            pageable = PageRequest.of(pageIndex, pageSize, sort);
        } else {
            // Không có `sortBy` và `priority = false` → Không sắp xếp
            pageable = PageRequest.of(pageIndex, pageSize);
        }

        return (title != null && !title.trim().isEmpty())
                ? productRepository.findByTitleContainingIgnoreCase(title, pageable)
                : productRepository.findAll(pageable);
    }

    public Page<Product> getProductsByCategoryId(int categoryId, String sortBy, boolean priority, String direction, int pageIndex, int pageSize) {
        Pageable pageable;

        // Danh sách các trường hợp được phép sắp xếp
        if (priority) {
            // Nếu `priority = true`, luôn sắp xếp theo priority trước
            Sort sort = direction != null && direction.equalsIgnoreCase("desc")
                    ? Sort.by("priority").descending()
                    : Sort.by("priority").ascending();
            pageable = PageRequest.of(pageIndex, pageSize, sort);
        } else if (sortBy != null && !sortBy.trim().isEmpty() && contains(allowForSorting, sortBy)) {
            // Nếu `priority = false`, chỉ sắp xếp theo `sortBy` nếu hợp lệ
            Sort sort = direction != null && direction.equalsIgnoreCase("desc")
                    ? Sort.by(sortBy).descending()
                    : Sort.by(sortBy).ascending();
            pageable = PageRequest.of(pageIndex, pageSize, sort);
        } else {
            // Không có `sortBy` và `priority = false` → Không sắp xếp
            pageable = PageRequest.of(pageIndex, pageSize);
        }

        return productRepository.findByCategoryId(categoryId, pageable)
                .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND, "categoryId"));
    }


    public boolean contains(String[] containList, String s) {
        for(String item: containList) {
            if(s.equals(item))
                return true;
        }

        return false;
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