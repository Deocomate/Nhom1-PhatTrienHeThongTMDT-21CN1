package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.OrderCreationRequest;
import com.hau.api_backend.dto.request.OrderUpdateRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.OrderResponse;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.OrderMapper;
import com.hau.api_backend.repository.CustomerRepository;
import com.hau.api_backend.repository.OrderRepository;
import com.hau.api_backend.repository.UserRepository;
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
public class OrderService {
    OrderRepository orderRepository;
    OrderMapper orderMapper;
    CustomerRepository customerRepository;
    private final UserRepository userRepository;


    public ApiResponse<OrderResponse> createOrder(OrderCreationRequest request) {
        if (!customerRepository.existsById(request.getCustomerId())) {
            throw new AppException(ErrorCode.CUSTOMER_NOT_FOUND, "customerId");
        }

        if (!userRepository.existsById(request.getUserId())) {
            throw new AppException(ErrorCode.USER_NOT_FOUND, "userId");
        }

        Order order = orderMapper.toOrder(request);
        Order savedOrder = orderRepository.save(order);

        OrderResponse orderResponse = orderMapper.toOrderResponse(savedOrder);

        return ApiResponse.<OrderResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.CREATED_ORDER.getMessage())
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();

    }

    public ApiResponse<OrderResponse> updateOrder(int id, OrderUpdateRequest request) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId"));

        orderMapper.updateOrder(order, request);
        Order updateOrder = orderRepository.save(order);
        OrderResponse orderResponse = orderMapper.toOrderResponse(updateOrder);

        return ApiResponse.<OrderResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.UPDATE_ORDER.getMessage())
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();
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
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId"));
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
            throw new AppException(ErrorCode.CUSTOMER_NOT_FOUND, "customerId");
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