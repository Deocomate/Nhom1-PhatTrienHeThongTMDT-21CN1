package com.hau.api_backend.dto.request.cart;

import lombok.Data;

import java.util.List;

@Data
public class CartRequest {
    private int customerId;
    private List<CartDetail> cartDetails;

    @Data
    public static class CartDetail {
        private int productId;
        private int quantity;
    }
}