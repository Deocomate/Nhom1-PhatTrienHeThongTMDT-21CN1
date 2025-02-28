package com.hau.api_backend.mapper;


import com.hau.api_backend.dto.request.order.OrderCreationRequest;
import com.hau.api_backend.dto.response.OrderResponse;
import com.hau.api_backend.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Order toOrder(OrderCreationRequest order);

    OrderResponse toOrderResponse(Order order);

}
