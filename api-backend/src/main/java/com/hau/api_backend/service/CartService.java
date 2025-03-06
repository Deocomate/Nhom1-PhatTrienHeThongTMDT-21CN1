package com.hau.api_backend.service;

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

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final CartMapper cartMapper;

    public ApiResponse<List<CartResponse>> getCartByCustomerId(int customerId) {
        List<Cart> carts = cartRepository.findByCustomerId(customerId);
        List<CartResponse> cartResponseDtos = new ArrayList<>();

        for (Cart cart : carts) {
            Product product = productRepository.findById(cart.getProductId())
                    .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND, "productId"));
            CartResponse cartResponseDto = cartMapper.toCartResponseDto(product, cart);
            cartResponseDtos.add(cartResponseDto);
        }

        return ApiResponse.<List<CartResponse>>builder()
                .code(HttpStatus.OK.value())
                .message("Get cart by customer ID successfully")
                .data(cartResponseDtos)
                .timestamp(LocalDateTime.now())
                .build();
    }

    @Transactional
    public ApiResponse<Void> updateCartByCustomerId(CartRequest cartRequest) {
        int customerId = cartRequest.getCustomerId();

        // Xóa giỏ hàng cũ của customer
        cartRepository.deleteByCustomerId(customerId);

        // Thêm sản phẩm mới vào giỏ hàng
        List<CartRequest.CartDetailDto> cartDetails = cartRequest.getCartDetails();
        if (cartDetails != null) { // Thêm kiểm tra null cho cartDetails
            for (CartRequest.CartDetailDto cartDetail : cartDetails) {
                Product product = productRepository.findById(cartDetail.getProductId())
                        .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND, "productId"));

                Cart cart = new Cart();
                cart.setCustomerId(customerId);
                cart.setProductId(cartDetail.getProductId());
                cart.setQuantity(cartDetail.getQuantity());
                cartRepository.save(cart);
            }
        }

        return ApiResponse.<Void>builder()
                .code(HttpStatus.OK.value())
                .message("Update cart by customer ID successfully")
                .timestamp(LocalDateTime.now())
                .build();
    }
}