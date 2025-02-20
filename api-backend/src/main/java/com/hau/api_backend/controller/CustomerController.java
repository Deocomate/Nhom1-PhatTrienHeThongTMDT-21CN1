package com.hau.api_backend.controller;

import com.hau.api_backend.dto.request.customerRequest.CustomerCreationRequest;
import com.hau.api_backend.dto.request.customerRequest.CustomerUpdateRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CustomerResponse;
import com.hau.api_backend.service.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @PostMapping
    public ResponseEntity<ApiResponse<CustomerResponse>> createCustomer(@Valid @RequestBody CustomerCreationRequest customer) {
        ApiResponse<CustomerResponse> apiResponse = customerService.createCustomer(customer);
        return new ResponseEntity<>(apiResponse, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<CustomerResponse>> updateCustomer(
            @PathVariable Integer id,
            @Valid @RequestBody CustomerUpdateRequest request
    ) {
        ApiResponse<CustomerResponse> response = customerService.updateCustomer(id, request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<CustomerResponse>> getCustomerById(@PathVariable Integer id) {
        ApiResponse<CustomerResponse> apiResponse = customerService.getCustomerById(id);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<CustomerResponse>>> getAllCustomers() {
        ApiResponse<List<CustomerResponse>> apiResponse = customerService.getAllCustomers();
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteCustomer(@PathVariable int id) {
        ApiResponse<Void> apiResponse = customerService.deleteCustomer(id);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}
