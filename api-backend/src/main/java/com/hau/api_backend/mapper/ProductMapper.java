package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.response.CommentResponse;
import com.hau.api_backend.dto.response.ProductImageResponse;
import com.hau.api_backend.dto.response.ProductResponse;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.entity.ProductImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring", uses = {CommentMapper.class})
public interface ProductMapper {



    @Mapping(source = "id", target = "id")
    @Mapping(source = "brandId", target = "brandId")
    @Mapping(source = "productImages", target = "productImagesResponses", qualifiedByName = "mapProductImagesToResponses")
    @Mapping(source = "brand.name", target = "brandName")
    @Mapping(target = "categoryName", source = "category.name")
    ProductResponse toProductResponse(Product product);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "brandId", target = "brandId")
    @Mapping(source = "productImages", target = "productImagesResponses", qualifiedByName = "mapProductImagesToResponses")
    @Mapping(source = "brand.name", target = "brandName")
    @Mapping(target = "categoryName", source = "category.name")
    @Mapping(source = "comments", target = "commentsResponses")
    ProductResponse toProductWithCommentResponse(Product product);

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