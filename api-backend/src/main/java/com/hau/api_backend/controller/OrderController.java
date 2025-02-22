package com.hau.api_backend.controller;

import com.hau.api_backend.dto.request.customerRequest.OrderCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.OrderResponse;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<ApiResponse<OrderResponse>> createOrder(@Valid @RequestBody OrderCreationRequest order) {
        ApiResponse<OrderResponse> apiResponse = orderService.createOrder(order);
        return new ResponseEntity<>(apiResponse, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<OrderResponse>>> getOrders() {
        ApiResponse<List<OrderResponse>> apiResponse = orderService.getAllOrders();
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<OrderResponse>> getOrderById(@PathVariable int id) {
        ApiResponse<OrderResponse> apiResponse = orderService.getOrderById(id);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}
