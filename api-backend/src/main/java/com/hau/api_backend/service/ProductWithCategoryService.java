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
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import org.springframework.data.domain.Sort;


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

    public ApiResponse<ProductWithCategoryResponse> getPagedProductsWithCategories(
            int page, String sortBy, String direction, Integer minPrice, Integer maxPrice) {
        int pageIndex = (page > 0) ? page - 1 : 0;

        // Kiểm tra xem sortBy có hợp lệ không
        String validSortBy = (sortBy != null) ? sortBy : "price"; // Mặc định sắp xếp theo id nếu không có tham số sortBy

        // Xác định hướng sắp xếp (ASC hoặc DESC)
        Sort.Direction sortDirection = (direction != null && direction.equalsIgnoreCase("desc"))
                ? Sort.Direction.DESC
                : Sort.Direction.ASC;

        Pageable pageable = PageRequest.of(pageIndex, DEFAULT_PAGE_SIZE, Sort.by(sortDirection, validSortBy));

        // Truy vấn sản phẩm theo phân trang và điều kiện lọc
        Page<Product> pagedProducts = (minPrice != null && maxPrice != null)
                ? productRepository.findByPriceBetween(minPrice, maxPrice, pageable)
                : productRepository.findAll(pageable);

        List<Category> categories = categoryRepository.findAll();
        ProductWithCategoryResponse response = productWithCategoryMapper
                .toProductWithCategoryAndPaginateResponse(pagedProducts, categories, DEFAULT_PAGE_SIZE);

        return ApiResponse.<ProductWithCategoryResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_PRODUCT_WITH_CATEGORY.getMessage())
                .data(response)
                .timestamp(LocalDateTime.now())
                .build();
    }


    public ApiResponse<ProductWithCategoryResponse> getPagedProductWithCategorySlugFiltered(
            String slug, int page, String sortBy, String direction, Integer minPrice, Integer maxPrice) {
        int pageIndex = (page > 0) ? page - 1 : 0;

        // Kiểm tra và thiết lập thông tin sắp xếp
        String validSortBy = (sortBy != null) ? sortBy : "price";
        Sort.Direction sortDirection = (direction != null && direction.equalsIgnoreCase("desc"))
                ? Sort.Direction.DESC
                : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(pageIndex, DEFAULT_PAGE_SIZE, Sort.by(sortDirection, validSortBy));

        Page<Product> pagedProducts;
        List<Category> categories;

        if (slug != null) {
            // Nếu có slug, lấy danh mục cha
            Category parentCategory = categoryRepository.findBySlug(slug)
                    .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND, "slug"));

            // Lấy danh sách danh mục con
            List<Category> subCategories = categoryRepository.findByParentId(parentCategory.getId())
                    .orElse(new ArrayList<>()); // Nếu không có danh mục con, trả về danh sách rỗng

            List<Integer> categoryIdList = new ArrayList<>();
            categoryIdList.add(parentCategory.getId());
            subCategories.forEach(cat -> categoryIdList.add(cat.getId()));

            // Truy vấn sản phẩm theo danh mục và khoảng giá
            pagedProducts = productRepository.findByCategoryIdInAndPriceBetween(categoryIdList, minPrice, maxPrice, pageable);
            categories = subCategories;
        } else {
            // Nếu không có slug, chỉ lọc theo khoảng giá
            pagedProducts = productRepository.findByPriceBetween(minPrice, maxPrice, pageable);
            categories = categoryRepository.findAll();
        }

        // Tạo response
        ProductWithCategoryResponse response = productWithCategoryMapper
                .toProductWithCategoryAndPaginateResponse(pagedProducts, categories, DEFAULT_PAGE_SIZE);



        return ApiResponse.<ProductWithCategoryResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_PRODUCT_WITH_CATEGORY_SLUG.getMessage())
                .data(response)
                .timestamp(LocalDateTime.now())
                .build();
    }


}
