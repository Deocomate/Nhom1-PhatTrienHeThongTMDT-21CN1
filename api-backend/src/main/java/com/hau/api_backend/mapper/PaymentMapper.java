package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.request.PaymentCreationRequest;
import com.hau.api_backend.dto.response.PaymentResponse;
import com.hau.api_backend.entity.Payment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PaymentMapper {

    @Mapping(source = "order.id", target = "orderId")
    PaymentResponse toPaymentResponse(Payment payment);

    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "order", ignore = true)
    Payment toPayment(PaymentCreationRequest request);
}