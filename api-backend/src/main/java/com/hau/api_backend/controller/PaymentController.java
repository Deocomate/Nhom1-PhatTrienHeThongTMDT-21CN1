package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.OrderResponse;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.service.OrderService;
import com.hau.api_backend.service.PaymentService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/vnpay")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;
    private final OrderService orderService;

    @GetMapping("/create/{orderId}")
    public ResponseEntity<ApiResponse<String>> payWithVNPay(@PathVariable int orderId, HttpServletRequest request, @RequestParam(value = "bankCode", required = false) String bankCode) {
        ApiResponse<OrderResponse> orderResponseApiResponse = orderService.getOrderById(orderId);
        if(orderResponseApiResponse == null || orderResponseApiResponse.getData() == null) {
            throw new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId");
        }
        OrderResponse orderResponse = (OrderResponse) orderResponseApiResponse.getData();

        // Lấy order từ database
        //Kiểm tra phương thức thanh toán
        if (!orderResponse.getPaymentMethod().equalsIgnoreCase("ONLINE")) {
            throw new AppException(ErrorCode.ORDER_NOT_FOUND, "Order không hỗ trợ thanh toán online");
        }

        Order order = orderService.findOrderById(orderId);

        String paymentURL = paymentService.createPaymentURL(order, request, bankCode);

        return new ResponseEntity<>(ApiResponse.<String>builder()
                .code(HttpStatus.OK.value())
                .message("Tạo URL thanh toán thành công")
                .data(paymentURL)
                .timestamp(LocalDateTime.now())
                .build(), HttpStatus.OK);
    }

    @GetMapping("/vnpay_return")
    public ResponseEntity<ApiResponse<String>> vnPayReturn(HttpServletRequest request) {
        // Gọi service, và trả về kết quả từ service
        return new ResponseEntity<>(paymentService.processVnPayReturn(request), HttpStatus.OK);
    }
}