package com.hau.api_backend.service.impl;

import com.hau.api_backend.dto.response.OrderDetailResponse;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.entity.OrderDetail;
import com.hau.api_backend.mapper.OrderDetailMapper;
import com.hau.api_backend.repository.OrderDetailRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class OrderDetailService {

    OrderDetailRepository orderDetailRepository;
    OrderDetailMapper orderDetailMapper;

    public List<OrderDetailResponse> getOrderDetailResponses(Order order) {
        List<OrderDetail> orderDetails = orderDetailRepository.findByOrderId(order.getId());
        return orderDetails.stream()
                .map(orderDetailMapper::toResponse)
                .collect(Collectors.toList());
    }
}