package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.response.ProductImageResponse;
import com.hau.api_backend.dto.response.ProductResponse;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.entity.ProductImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "brandId", target = "brandId")
    @Mapping(source = "productImages", target = "productImagesResponses", qualifiedByName = "mapProductImagesToResponses")
    ProductResponse toProductResponse(Product product);

    @Named("mapProductImagesToResponses")
    default List<ProductImageResponse> mapImagesToResponses(List<ProductImage> images) {
        if (images == null) return null;
        return images.stream()
                .map(image -> ProductImageResponse.builder()
                        .id(image.getId())
                        .url(image.getUrl())
                        .productId(image.getProductId())
                        .build())
                .collect(Collectors.toList());
    }
}