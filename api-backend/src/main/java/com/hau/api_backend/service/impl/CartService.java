package com.hau.api_backend.service.impl;

import com.hau.api_backend.dto.request.cart.CartRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CartResponse;
import com.hau.api_backend.entity.Cart;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.mapper.CartMapper;
import com.hau.api_backend.repository.CartRepository;
import com.hau.api_backend.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final CartMapper cartMapper;

    public ApiResponse<List<CartResponse>> getCartByCustomerId(int customerId) {
        List<Cart> carts = cartRepository.findByCustomerId(customerId);

        // Lấy danh sách productIds từ carts
        List<Integer> productIds = carts.stream()
                .map(Cart::getProductId)
                .collect(Collectors.toList());

        // Lấy thông tin tất cả sản phẩm bằng một truy vấn duy nhất
        Map<Integer, Product> productMap = productRepository.findAllById(productIds)
                .stream()
                .collect(Collectors.toMap(Product::getId, p -> p));

        List<CartResponse> cartResponseList = carts.stream()
                .map(cart -> {
                    Product product = productMap.get(cart.getProductId());
                    if (product == null) {
                        throw new AppException(ErrorCode.PRODUCT_NOT_FOUND, "productId");
                    }
                    return cartMapper.toCartResponseDto(product, cart);
                })
                .collect(Collectors.toList());

        return ApiResponse.<List<CartResponse>>builder()
                .code(HttpStatus.OK.value())
                .message("Get cart by customer ID successfully")
                .data(cartResponseList)
                .timestamp(LocalDateTime.now())
                .build();
    }

    @Transactional
    public ApiResponse<List<CartResponse>> updateCartByCustomerId(CartRequest cartRequest) {
        int customerId = cartRequest.getCustomerId();

        // Xóa giỏ hàng cũ của customer
        cartRepository.deleteByCustomerId(customerId);

        List<CartResponse> cartResponseList = new ArrayList<>();

        List<CartRequest.CartDetail> cartDetails = cartRequest.getCartDetails();
        if (cartDetails != null) {
            for (CartRequest.CartDetail cartDetail : cartDetails) {
                int productId = cartDetail.getProductId();
                int quantity = cartDetail.getQuantity();

                Product product = productRepository.findById(productId)
                        .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND, "productId"));

                // Kiểm tra số lượng
                if (quantity > product.getQuantity()) {
                    throw new AppException(ErrorCode.INSUFFICIENT_QUANTITY, "quantity");
                }

                Cart cart = new Cart();
                cart.setCustomerId(customerId);
                cart.setProductId(productId);
                cart.setQuantity(quantity);
                cartRepository.save(cart);

                CartResponse cartResponseDto = cartMapper.toCartResponseDto(product, cart);
                cartResponseList.add(cartResponseDto);
            }
        }

        return ApiResponse.<List<CartResponse>>builder()
                .code(HttpStatus.OK.value())
                .message("Update cart by customer ID successfully")
                .data(cartResponseList)
                .timestamp(LocalDateTime.now())
                .build();
    }
}