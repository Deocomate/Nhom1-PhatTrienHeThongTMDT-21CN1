package com.hau.api_backend.service;


import com.hau.api_backend.dto.request.order.OrderCreationRequest;
import com.hau.api_backend.dto.request.order.OrderUpdateRequest;
import com.hau.api_backend.dto.request.orderdetail.OrderDetailCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.OrderDetailResponse;
import com.hau.api_backend.dto.response.OrderResponse;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.entity.OrderDetail;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.OrderDetailMapper;
import com.hau.api_backend.mapper.OrderMapper;
import com.hau.api_backend.repository.*;
import jakarta.transaction.Transactional;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.Objects.isNull;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class OrderService {
    OrderRepository orderRepository;
    CustomerRepository customerRepository;
    UserRepository userRepository;
    ProductRepository productRepository;
    OrderDetailRepository orderDetailRepository;
    OrderMapper orderMapper;
    OrderDetailMapper orderDetailMapper;
    OrderDetailService orderDetailService;
    EmailService emailService; // Inject EmailService

    @Transactional
    public ApiResponse<OrderResponse> createOrderWithDetails(OrderCreationRequest orderRequest) {
        if (!customerRepository.existsById(orderRequest.getCustomerId())) {
            throw new AppException(ErrorCode.CUSTOMER_NOT_FOUND, "customerId");
        }

        if (!userRepository.existsById(orderRequest.getUserId())) {
            throw new AppException(ErrorCode.USER_NOT_FOUND, "userId");
        }

        Order order = orderMapper.toOrder(orderRequest);
        Order savedOrder = orderRepository.save(order);

        int totalPrice = 0;
        List<OrderDetailCreationRequest> orderDetails = orderRequest.getOrderDetails();
        if (!isNull(orderDetails) && !orderDetails.isEmpty()) {
            for (OrderDetailCreationRequest detailRequest : orderDetails) {
                Product product = productRepository.findById(detailRequest.getProductId())
                        .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND, "productId"));

                if (detailRequest.getQuantity() <= 0) {
                    throw new AppException(ErrorCode.OUT_OF_STOCK, "quantity");
                }

                if (product.getQuantity() < detailRequest.getQuantity()) {
                    throw new AppException(ErrorCode.INSUFFICIENT_QUANTITY, "quantity");
                }

                OrderDetail orderDetail = orderDetailMapper.toOrderDetail(detailRequest, product, savedOrder, savedOrder.getId());
                int detailPrice = (int) (product.getPrice() * detailRequest.getQuantity());
                orderDetail.setPriceAtOrder(detailPrice);
                orderDetailRepository.save(orderDetail);

                product.setQuantity(product.getQuantity() - detailRequest.getQuantity());
                productRepository.save(product);

                totalPrice += detailPrice;

            }
        }

        savedOrder.setTotalPrice(totalPrice);
        orderRepository.save(savedOrder);

        OrderResponse orderResponse = createOrderResponseWithDetails(savedOrder);

        // Gửi email xác nhận nếu phương thức thanh toán là offline
        if (orderRequest.getPaymentMethod().equalsIgnoreCase("offline")) {
            findCustomerById(savedOrder, savedOrder, orderRequest.getCustomerId());
        }

        return ApiResponse.<OrderResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.CREATED_ORDER.getMessage())
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }
    @Transactional
    public ApiResponse<OrderResponse> updateOrder(int id, OrderUpdateRequest request) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId"));

        orderMapper.updateOrder(order, request);
        Order updatedOrder = orderRepository.save(order);

        OrderResponse orderResponse = createOrderResponseWithDetails(updatedOrder);

        // Gửi email xác nhận nếu thanh toán online thành công và trạng thái order đã được cập nhật
        if (request != null && request.getPaymentStatus() != null && request.getPaymentStatus().equalsIgnoreCase("success")) {
            findCustomerById(order, updatedOrder, order.getCustomerId());
        }

        return ApiResponse.<OrderResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.UPDATE_ORDER.getMessage())
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    private void findCustomerById(Order order, Order updatedOrder, int customerId) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new AppException(ErrorCode.CUSTOMER_NOT_FOUND, "customerId"));
        List<OrderDetail> orderDetailsList = orderDetailRepository.findByOrderId(order.getId());

        try {
            emailService.sendOrderConfirmationEmail(updatedOrder, customer, orderDetailsList);
        } catch (MessagingException | UnsupportedEncodingException e) {
            System.err.println("Failed to send email: " + e.getMessage());
        }
    }

    @Transactional
    public ApiResponse<OrderResponse> cancelOrder(int id/*, OrderCancelRequest cancelRequest*/) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId"));

        // Kiểm tra xem đơn hàng có thể bị hủy không (ví dụ: trạng thái không phải 'shipped')
        if (order.getStatus() == Order.Status.shipped) {
            throw new AppException(ErrorCode.ORDER_SUCCESS, "orderId");
        }
        if (order.getStatus() == Order.Status.processing) {
            throw new AppException(ErrorCode.ORDER_SUCCESS, "orderId");
        }
        if (order.getStatus() == Order.Status.customer_cancelled) {
            throw new AppException(ErrorCode.ORDER_CANCELED_BY_CUSTOMER, "orderId");
        }
        if (order.getStatus() == Order.Status.admin_cancelled) {
            throw new AppException(ErrorCode.ORDER_CANCELED_BY_ADMIN, "orderId");
        }

        // Cập nhật trạng thái đơn hàng thành 'customer_cancelled'
        order.setStatus(Order.Status.customer_cancelled);
        Order cancelledOrder = orderRepository.save(order);

        // Tạo OrderResponse và trả về
        OrderResponse orderResponse = createOrderResponseWithDetails(cancelledOrder);

        return ApiResponse.<OrderResponse>builder()
                .code(HttpStatus.OK.value())
                .message("Đơn hàng đã được hủy thành công.")
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    // get all order of all customer
    public ApiResponse<List<OrderResponse>> getOrdersByCustomerId(int customerId) {
        // kiểm tra customerID có tồn tại không
        if (!customerRepository.existsById(customerId)) {
            throw new AppException(ErrorCode.CUSTOMER_NOT_FOUND, "customerId");
        }

        List<Order> orders = orderRepository.findByCustomerIdOrderByIdDesc(customerId);
        List<OrderResponse> orderResponses = orders.stream()
                .map(this::createOrderResponseWithDetails)
                .collect(Collectors.toList());

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

    public ApiResponse<OrderResponse> getOrderById(int id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId"));

        OrderResponse orderResponse = createOrderResponseWithDetails(order);

        return ApiResponse.<OrderResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ORDER_BY_ID.getMessage())
                .data(orderResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    private OrderResponse createOrderResponseWithDetails(Order order) {
        OrderResponse orderResponse = orderMapper.toOrderResponse(order);
        List<OrderDetailResponse> orderDetailResponses = orderDetailService.getOrderDetailResponses(order);  // Sử dụng OrderDetailService
        orderMapper.toOrderResponseWithDetails(order, orderResponse, orderDetailResponses);
        return orderResponse;
    }

    // findById
    public Order findOrderById(int id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND, "orderId"));
    }
}