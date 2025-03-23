package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.response.CategoryResponse;
import com.hau.api_backend.dto.response.ProductImageResponse;
import com.hau.api_backend.dto.response.ProductResponse;
import com.hau.api_backend.dto.response.ProductWithCategoryResponse;
import com.hau.api_backend.entity.Category;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.mapper.CategoryMapper;
import com.hau.api_backend.mapper.ProductMapper;
import lombok.experimental.NonFinal;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {ProductMapper.class, CategoryMapper.class})
public interface ProductWithCategoryMapper {

    String appBaseUrl = "http://127.0.0.1:8000";
    ProductMapper PRODUCT_MAPPER = Mappers.getMapper(ProductMapper.class);
    CategoryMapper CATEGORY_MAPPER = Mappers.getMapper(CategoryMapper.class);

    @Mapping(source = "categories", target = "categories", qualifiedByName = "mapCategories")
    @Mapping(source = "products", target = "products", qualifiedByName = "mapProducts")
    ProductWithCategoryResponse toProductWithCategoryResponse(List<Product> products, List<Category> categories);


    @Mapping(source = "products.totalPages", target = "totalPages")
    @Mapping(source = "products.totalElements", target = "totalProducts")
    @Mapping(source = "pageSize", target = "pageSize")
    @Mapping(target = "pageIndex", expression = "java(products.getNumber() + 1)")
    @Mapping(source = "categories", target = "categories")
    @Mapping(source = "products", target = "products", qualifiedByName = "mapPageProducts")
    ProductWithCategoryResponse toProductWithCategoryAndPaginateResponse(Page<Product> products, List<Category> categories, int pageSize);

    @Named("mapProducts")
    default List<ProductResponse> mapProducts(List<Product> products) {
        return products.stream()
                .map(PRODUCT_MAPPER::toProductResponse) // Explicitly use toProductResponse
                .collect(Collectors.toList());
    }

    @Named("mapCategories")
    default List<CategoryResponse> mapCategories(List<Category> categories) {
        return categories.stream()
                .map(CATEGORY_MAPPER::toCategoryResponse)
                .collect(Collectors.toList());
    }


    @Named("mapPageProducts")
    default List<ProductResponse> mapPageProducts(Page<Product> products) {
        return products.getContent().stream()
                .map(product -> {
                    ProductResponse response = PRODUCT_MAPPER.toProductResponse(product);
                    checkThumbnail(response); // Gọi hàm checkThumbnail
                    return response;
                })
                .collect(Collectors.toList());
    }



    default void checkThumbnail(ProductResponse response) {
        if (response.getThumbnail() != null) {
            response.setThumbnail(appBaseUrl + response.getThumbnail());
        }
        List<ProductImageResponse> images = response.getProductImagesResponses();
        if (images != null) {
            images.forEach(image -> image.setUrl(appBaseUrl + image.getUrl()));
        }
    }


}
