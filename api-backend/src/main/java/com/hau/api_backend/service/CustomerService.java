package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.CustomerCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CustomerResponse;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.CustomerMapper;
import com.hau.api_backend.repository.CustomerRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CustomerService {
    CustomerRepository customerRepository;
    CustomerMapper customerMapper;

    public ApiResponse<CustomerResponse> createCustomer(CustomerCreationRequest request) {
        Customer customer = customerMapper.toCustomer(request);
        Customer saveCustomer = customerRepository.save(customer);
        CustomerResponse customerResponse = customerMapper.toCustomerResponse(saveCustomer);

        return ApiResponse.<CustomerResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.CREATED_USER.getMessage())
                .data(customerResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }
}
