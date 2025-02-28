package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.order.OrderCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.OrderResponse;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.OrderMapper;
import com.hau.api_backend.repository.CustomerRepository;
import com.hau.api_backend.repository.OrderRepository;
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
public class OrderService {
    OrderRepository orderRepository;
    OrderMapper orderMapper; // Đã được inject bởi Spring
    CustomerRepository customerRepository;

    public ApiResponse<OrderResponse> createOrder(OrderCreationRequest request) {
        Optional<Customer> existingCustomerWithId = customerRepository.findById(request.getCustomerId());
        if (existingCustomerWithId.isEmpty()) {
            throw new AppException(ErrorCode.CUSTOMER_NOT_FOUND);
        }


        Order order = orderMapper.toOrder(request); // Sử dụng mapper được inject
        Order saveOrder = orderRepository.save(order);
        OrderResponse orderResponse = orderMapper.toOrderResponse(saveOrder);

        return ApiResponse.<OrderResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.CREATED_ORDER.getMessage())  // Đã sửa message
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();

    }

    public ApiResponse<OrderResponse> updateOrder(){

    }

    // get all order of all customer
    public ApiResponse<List<OrderResponse>> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        List<OrderResponse> orderResponses = orders.stream()
                .map(orderMapper::toOrderResponse)
                .collect(Collectors.toList());

        return ApiResponse.<List<OrderResponse>>builder()
                .code(HttpStatus.OK.value())
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
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ORDER_BY_ID.getMessage())
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<List<OrderResponse>> getOrdersByCustomerId(int customerId) {
        // kiểm tra customerID có tồn tại không
        if (!customerRepository.existsById(customerId)) {
            throw new AppException(ErrorCode.CUSTOMER_NOT_FOUND);
        }

        List<Order> orders = orderRepository.findByCustomerIdOrderByIdDesc(customerId);
        List<OrderResponse> orderResponses = orders.stream()
                .map(orderMapper::toOrderResponse)
                .toList();
        if (orderResponses.isEmpty()) {
            return ApiResponse.<List<OrderResponse>>builder()
                    .code(HttpStatus.NOT_FOUND.value())
                    .message(ErrorCode.ORDER_NOT_FOUND_FOR_CUSTOMER.getMessage())
                    .data(orderResponses)
                    .timestamp(LocalDateTime.now())
                    .build();
        }

        return ApiResponse.<List<OrderResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ORDER_BY_CUSTOMER_ID.getMessage())
                .data(orderResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }
}