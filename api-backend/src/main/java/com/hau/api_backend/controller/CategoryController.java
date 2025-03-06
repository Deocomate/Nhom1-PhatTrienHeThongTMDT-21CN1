package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CategoryResponse;
import com.hau.api_backend.dto.response.ProductWithCategoryResponse;
import com.hau.api_backend.service.CategoryService;
import com.hau.api_backend.service.ProductWithCategoryService;
import lombok.RequiredArgsConstructor;
import org.hibernate.usertype.LoggableUserType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor

public class CategoryController {
    private final CategoryService categoryService;
    private final ProductWithCategoryService productWithCategoryService;
//    @GetMapping
//    public ResponseEntity<ApiResponse<List<CategoryResponse>>> getAllCategory() {
//        ApiResponse<List<CategoryResponse>> apiResponse = categoryService.getAllCategory();
//        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
//    }
    @GetMapping
    public ResponseEntity<ApiResponse<ProductWithCategoryResponse>>getAllProductWithCategory() {
        ApiResponse<ProductWithCategoryResponse> apiResponse = productWithCategoryService.getAllProductsWithCategories();
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/parent")
    public ResponseEntity<ApiResponse<List<CategoryResponse>>> getCategoryByParentId(@RequestParam(value = "parentId", required = false) Integer parentId) {
        ApiResponse<List<CategoryResponse>> apiResponse = categoryService.getCategoryByParentId(parentId);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/slug/{parentSlug}")
    public ResponseEntity<ApiResponse<List<CategoryResponse>>> getCategoryByParentSlug(@PathVariable String parentSlug) {
        ApiResponse<List<CategoryResponse>> apiResponse = categoryService.getCategoryByParentSlug(parentSlug);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/productWithCategory")
    public ResponseEntity<ApiResponse<ProductWithCategoryResponse>> getProductsWithCategories(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(required = false) String sortBy, // Trường sắp xếp (ví dụ: "id", "name")
            @RequestParam(required = false) String direction,
            @RequestParam(required = false) Integer minPrice,
            @RequestParam(required = false) Integer maxPrice) {
        return ResponseEntity.ok(productWithCategoryService.getPagedProductsWithCategories(page, sortBy, direction, minPrice, maxPrice));
    }

    @GetMapping("/productWithCategory/{categorySlug}")
    public ResponseEntity<ApiResponse<ProductWithCategoryResponse>> getProductsWithCategories(
            @PathVariable String categorySlug,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(required = false) String sortBy, // Trường sắp xếp (ví dụ: "id", "name")
            @RequestParam(required = false) String direction,
            @RequestParam(required = false) Integer minPrice,
            @RequestParam(required = false) Integer maxPrice) { // Hướng sắp xếp (ví dụ: "asc", "desc")

        // Gọi service với tham số sắp xếp
        return ResponseEntity.ok(productWithCategoryService.getPagedProductWithCategorySlugFiltered(categorySlug, page, sortBy, direction, minPrice, maxPrice));
    }

 }
