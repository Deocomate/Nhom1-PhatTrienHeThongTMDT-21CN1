package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.OrderResponse;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.entity.Order.PaymentStatus;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.service.OrderService;
import com.hau.api_backend.service.VNPayService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/vnpay")
@RequiredArgsConstructor
public class VNPayController {

    private final VNPayService vnPayService;
    private final OrderService orderService;
    private static final Logger logger = LoggerFactory.getLogger(VNPayController.class);

    @GetMapping("/pay/{orderId}")
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

        String paymentURL = vnPayService.createPaymentURL(order, request, bankCode);

        return new ResponseEntity<>(ApiResponse.<String>builder()
                .code(HttpStatus.OK.value())
                .message("Tạo URL thanh toán thành công")
                .data(paymentURL)
                .timestamp(LocalDateTime.now())
                .build(), HttpStatus.OK);
    }

    @GetMapping("/vnpay_return")
    public ResponseEntity<ApiResponse<String>> vnPayReturn(HttpServletRequest request) {
        String vnpResponseCode = request.getParameter("vnp_ResponseCode");
        String vnpTransactionStatus = request.getParameter("vnp_TransactionStatus");
        String orderId = request.getParameter("vnp_TxnRef");

        logger.info("vnpay_return called with vnpResponseCode: {}, vnpTransactionStatus: {}, orderId: {}", vnpResponseCode, vnpTransactionStatus, orderId);

        try {
            Order order = orderService.findOrderById(Integer.parseInt(orderId));

            if (order == null) {
                logger.warn("Order not found for orderId: {}", orderId);
                throw new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId");
            }

            if ("00".equals(vnpResponseCode) && "00".equals(vnpTransactionStatus)) {
                logger.info("Payment is successful for orderId: {}", orderId);
                // Giao dịch thành công
                order.setPaymentStatus(PaymentStatus.success);
                orderService.updateOrder(order.getId(), null); // Cập nhật trạng thái đơn hàng
                vnPayService.transactionSuccess(request); // Lưu thông tin thanh toán

                return new ResponseEntity<>(ApiResponse.<String>builder()
                        .code(HttpStatus.OK.value())
                        .message("Thanh toán thành công")
                        .data("Thanh toán thành công")
                        .timestamp(LocalDateTime.now())
                        .build(), HttpStatus.OK);
            } else {
                logger.warn("Payment is not successful for orderId: {}", orderId);
                // Giao dịch thất bại
                order.setPaymentStatus(PaymentStatus.fail);
                orderService.updateOrder(order.getId(), null); // Cập nhật trạng thái đơn hàng
                vnPayService.transactionSuccess(request); // Lưu thông tin thanh toán

                return new ResponseEntity<>(ApiResponse.<String>builder()
                        .code(HttpStatus.BAD_REQUEST.value())
                        .message("Thanh toán thất bại")
                        .data("Thanh toán thất bại")
                        .timestamp(LocalDateTime.now())
                        .build(), HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            logger.error("Error processing vnpay_return", e);
            return new ResponseEntity<>(ApiResponse.<String>builder()
                    .code(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .message("Lỗi xử lý thanh toán")
                    .data("Lỗi xử lý thanh toán")
                    .timestamp(LocalDateTime.now())
                    .build(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}