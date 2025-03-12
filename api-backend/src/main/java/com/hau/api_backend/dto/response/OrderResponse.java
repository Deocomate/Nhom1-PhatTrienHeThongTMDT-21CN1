package com.hau.api_backend.dto.response;

import com.hau.api_backend.dto.request.orderdetail.OrderDetailCreationRequest;
import jakarta.validation.Valid;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderResponse {
    int id;
    int customerId;
    String status;
    String paymentMethod;
    String paymentStatus;
    int totalPrice;
    @Valid
    List<OrderDetailResponse> orderDetails;
    LocalDateTime createdAt;
}