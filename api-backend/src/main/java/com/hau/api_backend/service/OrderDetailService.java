package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.OrderDetailCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.OrderDetailResponse;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.entity.OrderDetail;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.OrderDetailMapper;
import com.hau.api_backend.repository.OrderDetailRepository;
import com.hau.api_backend.repository.OrderRepository;
import com.hau.api_backend.repository.ProductRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class OrderDetailService {

    OrderDetailRepository orderDetailRepository;
    ProductRepository productRepository;
    OrderRepository orderRepository;
    OrderDetailMapper orderDetailMapper;

    public ApiResponse<OrderDetailResponse> createOrderDetail(OrderDetailCreationRequest request) {

        Product product = productRepository.findById(request.getProductId())
                .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND, "productId"));

        Order order = orderRepository.findById(request.getOrderId())
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId"));

        if (request.getQuantity() <= 0) {
            throw new AppException(ErrorCode.OUT_OF_STOCK, "quantity");
        }

        if (product.getQuantity() < request.getQuantity()) {
            throw new AppException(ErrorCode.INSUFFICIENT_QUANTITY, "quantity");
        }

        // Sử dụng mapper để tạo OrderDetail
        OrderDetail orderDetail = orderDetailMapper.toOrderDetail(request, product, order);
        orderDetail.setPriceAtOrder((int) (product.getPrice() * request.getQuantity())); // Set priceAtOrder

        product.setQuantity(product.getQuantity() - request.getQuantity());
        OrderDetail savedOrderDetail = orderDetailRepository.save(orderDetail);
        OrderDetailResponse orderDetailResponse = orderDetailMapper.toResponse(savedOrderDetail);

        //Update total price after creating order detail
        updateOrderTotalPrice(order, (int) (product.getPrice() * request.getQuantity()));
        productRepository.save(product);

        return ApiResponse.<OrderDetailResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.CREATED_ORDER.getMessage())
                .data(orderDetailResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    private void updateOrderTotalPrice(Order order, int detailPrice){
        order.setTotalPrice(order.getTotalPrice() + detailPrice);
        orderRepository.save(order);
    }
}