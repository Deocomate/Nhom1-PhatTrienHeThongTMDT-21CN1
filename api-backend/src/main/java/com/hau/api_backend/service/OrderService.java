package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.customerRequest.OrderCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.OrderResponse;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.CustomerMapper;
import com.hau.api_backend.mapper.OrderMapper;
import com.hau.api_backend.repository.CustomerRepository;
import com.hau.api_backend.repository.OrderRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class OrderService {
    OrderRepository orderRepository;
    OrderMapper orderMapper;
    CustomerRepository customerRepository;

    public ApiResponse<OrderResponse> createOrder(OrderCreationRequest request) {
        Optional<Customer> existingCustomerWithId = customerRepository.findById(request.getCustomerId());
        if(existingCustomerWithId.isEmpty()) {
            throw new AppException(ErrorCode.CUSTOMER_NOT_FOUND);
        }

        Order order = OrderMapper.INSTANCE.toOrder(request);
        Order saveOrder = orderRepository.save(order);
        OrderResponse orderResponse = orderMapper.toOrderResponse(saveOrder);

        return ApiResponse.<OrderResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.CREATED_CUSTOMER.getMessage())
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();

    }

    public ApiResponse<List<OrderResponse>> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        List<OrderResponse> orderResponses = orders.stream()
                .map(orderMapper::toOrderResponse)
                .collect(Collectors.toList());

        return ApiResponse.<List<OrderResponse>>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.GET_ALL_ORDER.getMessage())
                .data(orderResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<OrderResponse> getOrderById(int id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND));
        OrderResponse orderResponse = orderMapper.toOrderResponse(order);

        return ApiResponse.<OrderResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.GET_ORDER_BY_ID.getMessage())
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }
}
