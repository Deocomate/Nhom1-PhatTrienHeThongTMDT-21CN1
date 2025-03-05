package com.hau.api_backend.service;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.ProductWithCategoryResponse;
import com.hau.api_backend.entity.Category;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.ProductWithCategoryMapper;
import com.hau.api_backend.repository.CategoryRepository;
import com.hau.api_backend.repository.ProductRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ProductWithCategoryService {
    int DEFAULT_PAGE_SIZE = 10;
    ProductRepository productRepository;
    CategoryRepository categoryRepository;
    ProductWithCategoryMapper productWithCategoryMapper;

    public ApiResponse<ProductWithCategoryResponse> getAllProductsWithCategories() {
        List<Product> products = productRepository.findAll();
        List<Category> categories = categoryRepository.findAll();

        ProductWithCategoryResponse response = productWithCategoryMapper.toProductWithCategoryResponse(products, categories);

        return ApiResponse.<ProductWithCategoryResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_PRODUCT_WITH_CATEGORY.getMessage())
                .data(response)
                .timestamp(LocalDateTime.now())
                .build();
    }

//    public ApiResponse<ProductWithCategoryResponse> getProductsWithCategories(int page) {
//        int pageIndex = (page > 0) ? page - 1 : 0;
//        Pageable pageable = PageRequest.of(pageIndex, DEFAULT_PAGE_SIZE);
//
//        Page<Product> pagedProducts = productRepository.findAll(pageable); // Lấy danh sách sản phẩm theo phân trang
//        List<Category> categories = categoryRepository.findAll(); // Lấy toàn bộ danh mục
//
//        ProductWithCategoryResponse response = productWithCategoryMapper.toProductWithCategoryResponse(pagedProducts.getContent(), categories);
//
//        return ApiResponse.<ProductWithCategoryResponse>builder()
//                .code(HttpStatus.OK.value())
//                .message(SuccessMessage.GET_ALL_PRODUCT_WITH_CATEGORY.getMessage())
//                .data(response)
//                .timestamp(LocalDateTime.now())
//                .build();
//    }

    public ApiResponse<ProductWithCategoryResponse> getPagedProductsWithCategories(int page) {
        int pageIndex = (page > 0) ? page - 1 : 0;
        Pageable pageable = PageRequest.of(pageIndex, DEFAULT_PAGE_SIZE);

        Page<Product> pagedProducts = productRepository.findAll(pageable);
        List<Category> categories = categoryRepository.findAll();

        ProductWithCategoryResponse response = productWithCategoryMapper.toProductWithCategoryAndPaginateResponse(pagedProducts, categories, DEFAULT_PAGE_SIZE);

        return ApiResponse.<ProductWithCategoryResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_PRODUCT_WITH_CATEGORY.getMessage())
                .data(response)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<ProductWithCategoryResponse> getPagedProductWithCategorySlugFiltered(String slug, int page) {
        int pageIndex = (page > 0) ? page - 1 : 0;
        Pageable pageable = PageRequest.of(pageIndex, DEFAULT_PAGE_SIZE);
        ArrayList<Integer> categoryIdList = new ArrayList<>();
        Category parentCategory = categoryRepository.findBySlug(slug)
                .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND, "slug"));
        categoryIdList.add(parentCategory.getId());
        List<Category> subCategories = categoryRepository.findByParentId(parentCategory.getId())
                .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND, "categoryId"));
        for(Category item: subCategories) {
            categoryIdList.add(item.getId());
        }
        Page<Product> pagedProducts = productRepository.findByCategoryIdIn(categoryIdList ,pageable);


        ProductWithCategoryResponse response = productWithCategoryMapper.toProductWithCategoryAndPaginateResponse(pagedProducts, subCategories, DEFAULT_PAGE_SIZE);

        return ApiResponse.<ProductWithCategoryResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_PRODUCT_WITH_CATEGORY_SLUG.getMessage())
                .data(response)
                .timestamp(LocalDateTime.now())
                .build();
    }
}
