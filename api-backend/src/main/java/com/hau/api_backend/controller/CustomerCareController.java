package com.hau.api_backend.controller;


import com.hau.api_backend.dto.request.customerCare.CustomerCareCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CustomerCareResponse;
import com.hau.api_backend.dto.response.CustomerResponse;
import com.hau.api_backend.service.CustomerCareService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/customerCares")
@RequiredArgsConstructor
public class CustomerCareController {
    private final CustomerCareService customerCareService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<CustomerCareResponse>>> getAllContact() {
        ApiResponse<List<CustomerCareResponse>> apiResponse = customerCareService.getAllCustomerCare();
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<CustomerCareResponse>> createContact(
            @Valid @RequestBody CustomerCareCreationRequest customerCare
            ) {
        ApiResponse<CustomerCareResponse> response = customerCareService.createCustomerCare(customerCare);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
