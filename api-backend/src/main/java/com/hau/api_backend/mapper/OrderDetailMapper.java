package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.request.orderdetail.OrderDetailCreationRequest;
import com.hau.api_backend.dto.response.OrderDetailResponse;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.entity.OrderDetail;
import com.hau.api_backend.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface OrderDetailMapper {

    @Mapping(source = "product.id", target = "productId")
    @Mapping(source = "product.title", target = "productTitle")
    @Mapping(source = "order.id", target = "orderId")
    @Mapping(source = "priceAtOrder", target = "totalPrice")
    @Mapping(source = "product.price", target = "price")
    OrderDetailResponse toResponse(OrderDetail orderDetail);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "product", source = "product")
    @Mapping(target = "order", source = "order")
    @Mapping(target = "quantity", source = "request.quantity")
    @Mapping(target = "priceAtOrder", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    OrderDetail toOrderDetail(OrderDetailCreationRequest request, Product product, Order order, int orderId);
}