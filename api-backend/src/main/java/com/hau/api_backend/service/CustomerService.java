package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.customerRequest.CustomerCreationRequest;
import com.hau.api_backend.dto.request.customerRequest.CustomerUpdateRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CustomerResponse;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.CustomerMapper;
import com.hau.api_backend.repository.CustomerRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CustomerService {
    CustomerRepository customerRepository;
    CustomerMapper customerMapper;

    public ApiResponse<CustomerResponse> createCustomer(CustomerCreationRequest request) {
        //Check if email already exists before creating a customer
        Optional<Customer> existingCustomerWithEmail = customerRepository.findByEmail(request.getEmail());
        if (existingCustomerWithEmail.isPresent()) {
            throw new AppException(ErrorCode.EMAIL_ALREADY_EXISTS);
        }
        // Check if phone number already exists
        Optional<Customer> existingCustomerWithPhoneNumber = customerRepository.findByPhoneNumber(request.getPhoneNumber());
        if (existingCustomerWithPhoneNumber.isPresent()) {
            throw new AppException(ErrorCode.PHONE_NUMBER_ALREADY_EXISTS);
        }

        Customer customer = customerMapper.toCustomer(request);
        Customer saveCustomer = customerRepository.save(customer);
        CustomerResponse customerResponse = customerMapper.toCustomerResponse(saveCustomer);

        return ApiResponse.<CustomerResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.CREATED_CUSTOMER.getMessage())
                .data(customerResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<List<CustomerResponse>> getAllCustomers() {
        List<Customer> customers = customerRepository.findAll();
        List<CustomerResponse> customerResponses = customers.stream()
                .map(customerMapper::toCustomerResponse)
                .collect(Collectors.toList());

        return ApiResponse.<List<CustomerResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_CUSTOMER.getMessage())
                .data(customerResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<CustomerResponse> getCustomerById(int id) {
        Customer customer = findCustomerById(id);
        CustomerResponse customerResponse = customerMapper.toCustomerResponse(customer);
        return ApiResponse.<CustomerResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_CUSTOMER_BY_ID.getMessage())
                .data(customerResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<CustomerResponse> updateCustomer(int id, CustomerUpdateRequest request) {
        Customer customer = findCustomerById(id);
        customerMapper.updateCustomer(customer, request);
        Customer updateCustomer = customerRepository.save(customer);
        CustomerResponse customerResponse = customerMapper.toCustomerResponse(updateCustomer);

        return ApiResponse.<CustomerResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.UPDATE_CUSTOMER.getMessage())
                .data(customerResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<Void> deleteCustomer(int id) {
        if (!customerRepository.existsById(id)) {
            throw new AppException(ErrorCode.CUSTOMER_NOT_FOUND);
        }
        customerRepository.deleteById(id);
        return ApiResponse.<Void>builder()
                .code(HttpStatus.NO_CONTENT.value())
                .message(SuccessMessage.DELETE_CUSTOMER.getMessage())
                .timestamp(LocalDateTime.now())
                .build();
    }


    public Customer findCustomerById(int id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CUSTOMER_NOT_FOUND));
    }


}
