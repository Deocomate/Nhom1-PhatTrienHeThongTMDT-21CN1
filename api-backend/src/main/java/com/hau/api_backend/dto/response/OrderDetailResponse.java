package com.hau.api_backend.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderDetailResponse {
    int id;
    int productId;
    String productTitle;
    int orderId;
    int quantity;
    int price;
    int totalPrice;
}