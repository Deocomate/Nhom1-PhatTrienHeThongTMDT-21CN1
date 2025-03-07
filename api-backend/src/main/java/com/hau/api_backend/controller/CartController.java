package com.hau.api_backend.controller;

import com.hau.api_backend.dto.request.cart.CartRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CartResponse;
import com.hau.api_backend.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping("/getCartByCustomerId/{customer_id}")
    public ResponseEntity<ApiResponse<List<CartResponse>>> getCartByCustomerId(@PathVariable("customer_id") int customerId) {
        ApiResponse<List<CartResponse>> response = cartService.getCartByCustomerId(customerId);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/updateCartByCustomerId")
    public ResponseEntity<ApiResponse<List<CartResponse>>> updateCartByCustomerId(@RequestBody CartRequest cartRequest) {
        ApiResponse<List<CartResponse>> response = cartService.updateCartByCustomerId(cartRequest);
        return ResponseEntity.ok(response);
    }
}