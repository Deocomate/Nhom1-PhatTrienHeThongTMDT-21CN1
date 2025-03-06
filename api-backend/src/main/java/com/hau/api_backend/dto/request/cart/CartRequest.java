package com.hau.api_backend.dto.request.cart;

import lombok.Data;

import java.util.List;

@Data
public class CartRequest {
    private int customerId;
    private List<CartDetailDto> cartDetails;

    @Data
    public static class CartDetailDto {
        private int productId;
        private int quantity;
    }
}