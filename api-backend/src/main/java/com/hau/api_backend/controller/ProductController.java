package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.ProductResponse;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.repository.ProductRepository;
import com.hau.api_backend.service.BasePaginationService;
import com.hau.api_backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final ProductRepository productRepository;
    private final BasePaginationService<Product> productPaginationService;


//    @GetMapping
//    public Page<Product> getProductsByPaginate(
//            @RequestParam(defaultValue = "0") int pageIndex,
//            @RequestParam(defaultValue = "10") int pageSize) {
//        return productPaginationService.getPagedData(productRepository, pageIndex, pageSize);
//    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<ProductResponse>>> getProducts(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String sortBy,
            @RequestParam(defaultValue = "false") boolean priority,
            @RequestParam(defaultValue = "asc") String direction,
            @RequestParam(defaultValue = "0") int pageIndex,
            @RequestParam(defaultValue = "10") int pageSize) {

        ApiResponse<Page<ProductResponse>> apiResponse = productService.getProducts(title, sortBy, priority, direction, pageIndex, pageSize);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }


    @GetMapping("/category/{categoryId}")
    public ResponseEntity<ApiResponse<Page<ProductResponse>>> getProductByCategory(
            @PathVariable int categoryId,
            @RequestParam(required = false) String sortBy,
            @RequestParam(defaultValue = "false") boolean priority,
            @RequestParam(defaultValue = "asc") String direction,
            @RequestParam(defaultValue = "0") int pageIndex,
            @RequestParam(defaultValue = "10") int pageSize) {

        ApiResponse<Page<ProductResponse>> apiResponse = productService.getProductsByCategoryId(categoryId, sortBy, priority, direction, pageIndex, pageSize);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductResponse>> getProductById(@PathVariable int id) {
        ApiResponse<ProductResponse> apiResponse = productService.getProductById(id);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/slug/{slug:[a-zA-Z0-9-]+}")
    public ResponseEntity<ApiResponse<ProductResponse>> getProductBySlug(@PathVariable String slug) {
        ApiResponse<ProductResponse> apiResponse = productService.getProductBySlug(slug);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/getAllProductByCategoryId/{categoryId}")
    public Page<Product> getProductsByCategory(
            @PathVariable int categoryId,
            @RequestParam(defaultValue = "0") int pageIndex,
            @RequestParam(defaultValue = "10") int pageSize) {

        Pageable pageable = PageRequest.of(pageIndex, pageSize);
        return productRepository.findByCategoryId(categoryId, pageable).orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND, "categoryId"));
    }

//    @GetMapping("/{id}/images")
//    public ResponseEntity<ApiResponse<List<ProductImageResponse>>> getProductImages(@PathVariable int id) {
//        ApiResponse<List<ProductImageResponse>> apiResponse = productService.getProductImages(id);
//        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
//    }

}