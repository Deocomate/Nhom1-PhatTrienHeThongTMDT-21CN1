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

    public ApiResponse<ProductWithCategoryResponse> getPagedProductsWithCategories(int page, String sortBy, String direction, Integer minPrice, Integer maxPrice) {
        int pageIndex = (page > 0) ? page - 1 : 0;
        Pageable pageable = PageRequest.of(pageIndex, DEFAULT_PAGE_SIZE);

        Page<Product> pagedProducts = productRepository.findAll(pageable);
        List<Category> categories = categoryRepository.findAll();


        if (sortBy != null && direction != null) {
            List<Product> sortedProducts = new ArrayList<>(pagedProducts.getContent());
            Comparator<Product> comparator = getProductComparator(sortBy, direction);
            if (comparator != null) {
                sortedProducts.sort(comparator);
            }
            pagedProducts = new PageImpl<>(sortedProducts, pageable, pagedProducts.getTotalElements());
        }
        if(minPrice != null && maxPrice != null) {
            pagedProducts = productRepository.findByPriceBetween(minPrice, maxPrice, pageable);
        }
        ProductWithCategoryResponse response = productWithCategoryMapper.toProductWithCategoryAndPaginateResponse(pagedProducts, categories, DEFAULT_PAGE_SIZE);

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
        Pageable pageable = PageRequest.of(pageIndex, DEFAULT_PAGE_SIZE);

        Page<Product> pagedProducts;
        List<Category> categories;

        if (slug != null) {
            // Nếu có slug, lọc sản phẩm theo danh mục
            ArrayList<Integer> categoryIdList = new ArrayList<>();
            Category parentCategory = categoryRepository.findBySlug(slug)
                    .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND, "slug"));
            categoryIdList.add(parentCategory.getId());
            List<Category> subCategories = categoryRepository.findByParentId(parentCategory.getId())
                    .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND, "categoryId"));
            for (Category item : subCategories) {
                categoryIdList.add(item.getId());
            }
            // Lọc sản phẩm theo danh mục và khoảng giá
            pagedProducts = productRepository.findByCategoryIdInAndPriceBetween(categoryIdList, minPrice, maxPrice, pageable);
            categories = subCategories;
        } else {
            // Nếu không có slug, lọc sản phẩm theo khoảng giá
            pagedProducts = productRepository.findByPriceBetween(minPrice, maxPrice, pageable);
            categories = categoryRepository.findAll();
        }

        // Sắp xếp danh sách sản phẩm (nếu có yêu cầu sắp xếp)
        if (sortBy != null && direction != null) {
            List<Product> sortedProducts = new ArrayList<>(pagedProducts.getContent());
            Comparator<Product> comparator = getProductComparator(sortBy, direction);
            if (comparator != null) {
                sortedProducts.sort(comparator);
            }
            pagedProducts = new PageImpl<>(sortedProducts, pageable, pagedProducts.getTotalElements());
        }

        ProductWithCategoryResponse response = productWithCategoryMapper.toProductWithCategoryAndPaginateResponse(pagedProducts, categories, DEFAULT_PAGE_SIZE);

        return ApiResponse.<ProductWithCategoryResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_PRODUCT_WITH_CATEGORY_SLUG.getMessage())
                .data(response)
                .timestamp(LocalDateTime.now())
                .build();
    }

    // Phương thức hỗ trợ tạo Comparator dựa trên sortBy và direction
    private Comparator<Product> getProductComparator(String sortBy, String direction) {
        Comparator<Product> comparator = null;
        switch (sortBy.toLowerCase()) {
            case "id":
                comparator = Comparator.comparing(Product::getId);
                break;
            case "title":
                comparator = Comparator.comparing(Product::getTitle);
                break;
            case "price":
                comparator = Comparator.comparing(Product::getPrice);
                break;
            default:
                break;
        }

        if (comparator != null && direction.equalsIgnoreCase("desc")) {
            comparator = comparator.reversed(); // Đảo ngược hướng sắp xếp
        }

        return comparator;
    }
}
