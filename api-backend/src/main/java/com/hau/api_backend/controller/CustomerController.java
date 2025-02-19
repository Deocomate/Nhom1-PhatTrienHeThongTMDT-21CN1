package com.hau.api_backend.controller;

import com.hau.api_backend.dto.request.CustomerCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CustomerResponse;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.service.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @PostMapping
    public ResponseEntity<ApiResponse<CustomerResponse>> createCustomer(@Valid @RequestBody CustomerCreationRequest customer)  {
        ApiResponse<CustomerResponse> apiResponse = customerService.createCustomer(customer);
        return new ResponseEntity<>(apiResponse, HttpStatus.CREATED);
    }
}
