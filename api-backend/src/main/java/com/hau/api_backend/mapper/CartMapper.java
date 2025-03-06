package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.response.CartResponse;
import com.hau.api_backend.entity.Cart;
import com.hau.api_backend.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CartMapper {
    @Mapping(source = "product", target = "product")
    @Mapping(source = "cart.quantity", target = "quantity")
    CartResponse toCartResponseDto(Product product, Cart cart);
}