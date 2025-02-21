package com.hau.api_backend.dto.response;


import lombok.*;
import lombok.experimental.FieldDefaults;

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
}
