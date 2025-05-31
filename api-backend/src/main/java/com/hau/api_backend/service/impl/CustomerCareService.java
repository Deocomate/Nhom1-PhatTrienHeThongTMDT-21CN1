package com.hau.api_backend.service.impl;

import com.hau.api_backend.dto.request.customerCare.CustomerCareCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CustomerCareResponse;
import com.hau.api_backend.entity.CustomerCare;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.CustomerCareMapper;
import com.hau.api_backend.repository.CustomerCareRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CustomerCareService {
    CustomerCareRepository customerCareRepository;
    CustomerCareMapper customerCareMapper;

    public ApiResponse<List<CustomerCareResponse>> getAllCustomerCare() {
        List<CustomerCare> customerCares = customerCareRepository.findAll();
        List<CustomerCareResponse> customerCareResponses = customerCares.stream()
                .map(customerCareMapper::toCustomerCareResponse)
                .collect(Collectors.toList());

        return ApiResponse.<List<CustomerCareResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_CUSTOMER_CARE.getMessage())
                .data(customerCareResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<CustomerCareResponse> createCustomerCare(CustomerCareCreationRequest request) {
        CustomerCare customerCare = customerCareMapper.toCustomerCare(request);
        CustomerCare saveCustomerCare = customerCareRepository.save(customerCare);

        CustomerCareResponse customerCareResponse = customerCareMapper.toCustomerCareResponse(saveCustomerCare);


        return ApiResponse.<CustomerCareResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.CREATED_CUSTOMER_CARE.getMessage())
                .data(customerCareResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

}
