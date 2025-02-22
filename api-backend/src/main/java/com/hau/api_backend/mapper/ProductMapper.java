package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.response.ProductResponse;
import com.hau.api_backend.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;


@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    @Mapping(target = "id", ignore = true)
    ProductResponse toProductResponse(Product product);
}
