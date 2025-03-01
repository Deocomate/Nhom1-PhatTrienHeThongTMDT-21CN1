package com.hau.api_backend.controller;

import com.hau.api_backend.dto.request.orderdetail.OrderDetailCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.OrderDetailResponse;
import com.hau.api_backend.service.OrderDetailService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/order-details")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class OrderDetailController {

    OrderDetailService orderDetailService;

    @PostMapping
    public ResponseEntity<ApiResponse<OrderDetailResponse>> createOrderDetail(@Valid @RequestBody OrderDetailCreationRequest request) {
        ApiResponse<OrderDetailResponse> apiResponse = orderDetailService.createOrderDetail(request);
        return new ResponseEntity<>(apiResponse, HttpStatus.CREATED);
    }
}