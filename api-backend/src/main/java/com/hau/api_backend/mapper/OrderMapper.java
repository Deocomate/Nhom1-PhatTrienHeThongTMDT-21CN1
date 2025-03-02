package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.request.order.OrderCreationRequest;
import com.hau.api_backend.dto.request.order.OrderUpdateRequest;
import com.hau.api_backend.dto.response.OrderDetailResponse;
import com.hau.api_backend.dto.response.OrderResponse;
import com.hau.api_backend.entity.Order;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface OrderMapper {

    @Mapping(target = "totalPrice", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Order toOrder(OrderCreationRequest order);

    @Mapping(target = "orderDetails", ignore = true)
    OrderResponse toOrderResponse(Order order);

    @Mapping(target = "totalPrice", ignore = true)
    @Mapping(target = "userId", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "paymentMethod", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "customerId", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    void updateOrder(@MappingTarget Order order, OrderUpdateRequest orderUpdateRequest);

    @AfterMapping
    default void toOrderResponseWithDetails(Order ignoredOrder, @MappingTarget OrderResponse orderResponse, List<OrderDetailResponse> orderDetails) {
        orderResponse.setOrderDetails(orderDetails);
    }
}