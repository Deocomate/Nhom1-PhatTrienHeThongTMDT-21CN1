package com.hau.api_backend.service;

import com.hau.api_backend.config.PaymentConfig;
import com.hau.api_backend.dto.request.PaymentCreationRequest;
import com.hau.api_backend.dto.request.order.OrderUpdateRequest; // Import OrderUpdateRequest
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.entity.Order.PaymentStatus;
import com.hau.api_backend.entity.Payment;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.mapper.PaymentMapper;
import com.hau.api_backend.repository.OrderRepository;
import com.hau.api_backend.repository.PaymentRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentConfig paymentConfig;
    private final OrderRepository orderRepository;
    private final PaymentRepository paymentRepository;
    private final PaymentMapper paymentMapper;
    private final OrderService orderService; // Inject OrderService
    private static final Logger logger = LoggerFactory.getLogger(PaymentService.class);

    public String createPaymentURL(Order order, HttpServletRequest request, String bankCode) {
        if (order == null || !order.getPaymentMethod().toString().equalsIgnoreCase("ONLINE")) {
            throw new AppException(ErrorCode.ORDER_NOT_SUPPORTED, "orderId");
        }

        String vnp_TxnRef = String.valueOf(order.getId());
        String vnp_IpAddr = getIpAddress(request);
        long amount = order.getTotalPrice() * 100L;

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", "2.1.0");
        vnp_Params.put("vnp_Command", "pay");
        vnp_Params.put("vnp_TmnCode", paymentConfig.getTmnCode());
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");

        if (bankCode != null && !bankCode.isEmpty()) {
            vnp_Params.put("vnp_BankCode", bankCode);
        }
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_OrderType", "other");
        vnp_Params.put("vnp_Locale", "vn");
        vnp_Params.put("vnp_ReturnUrl", paymentConfig.getReturnUrl());
        vnp_Params.put("vnp_IpAddr", vnp_IpAddr);

        LocalDateTime localDateTime = LocalDateTime.now(ZoneId.of("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(Date.from(localDateTime.atZone(ZoneId.of("Etc/GMT+7")).toInstant()));
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List<String> fieldNames = new ArrayList<>(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator<String> itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = itr.next();
            String fieldValue = vnp_Params.get(fieldName);
            if ((fieldValue != null) && (!fieldValue.isEmpty())) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = hmacSHA512(paymentConfig.getSecretKey(), hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        return paymentConfig.getPayUrl() + "?" + queryUrl;
    }

    @Transactional
    public ApiResponse<String> processVnPayReturn(HttpServletRequest request) {
        // 1. Kiểm tra chữ ký
        Map<String, String> fields = new HashMap<>();
        for (Enumeration<String> params = request.getParameterNames(); params.hasMoreElements();) {
            String fieldName = params.nextElement();
            String fieldValue = request.getParameter(fieldName);
            if (fieldValue != null && !fieldValue.isEmpty()) {
                fields.put(fieldName, fieldValue);
            }
        }

        String vnp_SecureHash = request.getParameter("vnp_SecureHash");
        fields.remove("vnp_SecureHashType");
        fields.remove("vnp_SecureHash");
        String signValue = hashAllFields(fields);

        if (!signValue.equals(vnp_SecureHash)) {
            logger.warn("Invalid signature");
            return ApiResponse.<String>builder()
                    .code(HttpStatus.BAD_REQUEST.value())
                    .message("Invalid signature")
                    .data(null)
                    .timestamp(LocalDateTime.now())
                    .build();
        }

        // 2. Lấy các tham số
        String vnpResponseCode = request.getParameter("vnp_ResponseCode");
        String vnpTransactionStatus = request.getParameter("vnp_TransactionStatus");
        String vnpTxnRef = request.getParameter("vnp_TxnRef");
        int orderId = Integer.parseInt(vnpTxnRef);

        // 3. Tìm Order
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId"));

        // 4. Xử lý kết quả giao dịch
        if ("00".equals(vnpResponseCode) && "00".equals(vnpTransactionStatus)) {
            // Giao dịch thành công
            // Tạo OrderUpdateRequest để cập nhật paymentStatus
            OrderUpdateRequest orderUpdateRequest = OrderUpdateRequest.builder()
                    .paymentStatus("success")
                    .status(order.getStatus().toString()) // Giữ nguyên trạng thái đơn hàng
                    .build();

            // Cập nhật order bằng orderService
            orderService.updateOrder(order.getId(), orderUpdateRequest);

            // Tạo và lưu Payment
            PaymentCreationRequest paymentCreationRequest = PaymentCreationRequest.builder()
                    .vnpAmount(request.getParameter("vnp_Amount"))
                    .vnpOrderInfo(request.getParameter("vnp_OrderInfo"))
                    .vnpPayDate(request.getParameter("vnp_PayDate"))
                    .vnpTransactionStatus(request.getParameter("vnp_TransactionStatus"))
                    .vnpTxnRef(vnpTxnRef)
                    .orderId(orderId)
                    .build();

            Payment payment = paymentMapper.toPayment(paymentCreationRequest);
            payment.setOrder(order);
            paymentRepository.save(payment);

            return ApiResponse.<String>builder()
                    .code(HttpStatus.OK.value())
                    .message("Thanh toán thành công")
                    .data("Thanh toán thành công")  // Trả về thông báo, hoặc có thể trả về paymentResponse
                    .timestamp(LocalDateTime.now())
                    .build();
        } else {
            // Giao dịch thất bại
            // Tạo OrderUpdateRequest để cập nhật paymentStatus
            OrderUpdateRequest orderUpdateRequest = OrderUpdateRequest.builder()
                    .paymentStatus("fail")
                    .status(order.getStatus().toString()) // Giữ nguyên trạng thái đơn hàng
                    .build();

            // Cập nhật order bằng orderService
            orderService.updateOrder(order.getId(), orderUpdateRequest);
            return ApiResponse.<String>builder()
                    .code(HttpStatus.BAD_REQUEST.value())
                    .message("Thanh toán thất bại")
                    .data(null)
                    .timestamp(LocalDateTime.now())
                    .build();
        }
    }

    // *** Hàm hashAllFields (đã sửa để encode bằng US-ASCII) ***
    public String hashAllFields(Map<String, String> fields) {
        List<String> fieldNames = new ArrayList<>(fields.keySet());
        Collections.sort(fieldNames);
        StringBuilder sb = new StringBuilder();
        Iterator<String> itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = itr.next();
            String fieldValue = fields.get(fieldName);
            if ((fieldValue != null) && (!fieldValue.isEmpty())) {
                // *Sửa ở đây*: Encode *tất cả* các trường bằng US-ASCII
                sb.append(fieldName);
                sb.append("=");
                sb.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII)); // Dùng US-ASCII
            }
            if (itr.hasNext()) {
                sb.append("&");
            }
        }
        logger.info("Data before hash: {}", sb); // Log chuỗi hash
        return hmacSHA512(paymentConfig.getSecretKey(), sb.toString());
    }
    public String hmacSHA512(final String key, final String data) {
        try {

            if (key == null || data == null) {
                throw new NullPointerException();
            }
            final Mac hmac512 = Mac.getInstance("HmacSHA512");
            byte[] hmacKeyBytes = key.getBytes();
            final SecretKeySpec secretKey = new SecretKeySpec(hmacKeyBytes, "HmacSHA512");
            hmac512.init(secretKey);
            byte[] dataBytes = data.getBytes(StandardCharsets.UTF_8);
            byte[] result = hmac512.doFinal(dataBytes);
            StringBuilder sb = new StringBuilder(2 * result.length);
            for (byte b : result) {
                sb.append(String.format("%02x", b & 0xff));
            }
            return sb.toString();

        } catch (Exception ex) {
            return "";
        }
    }

    public String getIpAddress(HttpServletRequest request) {
        String ipAdress;
        try {
            ipAdress = request.getHeader("X-FORWARDED-FOR");
            if (ipAdress == null) {
                ipAdress = request.getRemoteAddr();
            }
        } catch (Exception e) {
            ipAdress = "Invalid IP:" + e.getMessage();
        }
        return ipAdress;
    }
}