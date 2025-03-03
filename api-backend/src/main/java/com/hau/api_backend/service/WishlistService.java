package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.wishlist.WishlistCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.WishlistResponse;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.entity.Wishlist;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.WishlistMapper;
import com.hau.api_backend.repository.CustomerRepository;
import com.hau.api_backend.repository.ProductRepository;
import com.hau.api_backend.repository.WishlistRepository;
import jakarta.transaction.Transactional;
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
public class WishlistService {
    WishlistRepository wishlistRepository;
    ProductRepository productRepository;
    CustomerRepository customerRepository;
    WishlistMapper wishlistMapper;

    public ApiResponse<List<WishlistResponse>> getAllWishlist() {
        List<Wishlist> wishlists = wishlistRepository.findAll();
        List<WishlistResponse> wishlistResponses = wishlists.stream()
                .map(wishlistMapper::toWishlistResponse)
                .collect(Collectors.toList());
        return ApiResponse.<List<WishlistResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_WISHLIST_SUCCESS.getMessage())
                .data(wishlistResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<WishlistResponse> createWishlish(WishlistCreationRequest request) {
        productRepository.findById(request.getProductId())
                .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND));
        customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new AppException(ErrorCode.COMMENT_NOT_FOUND));
        Wishlist wishlist = wishlistMapper.toWishlist(request);
        Wishlist saveWishlist = wishlistRepository.save(wishlist);
        WishlistResponse wishlistResponse = wishlistMapper.toWishlistResponse(saveWishlist);
        return ApiResponse.<WishlistResponse>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.CREATED_WISHLIST.getMessage())
                .data(wishlistResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }

    @Transactional
    public ApiResponse<Void> deleteWishlistByCustomerAndProduct(int customerId, int productId) {
        Wishlist wishlist = wishlistRepository.findAll().stream()
                .filter(w -> w.getCustomerId() == customerId && w.getProductId() == productId)
                .findFirst()
                .orElseThrow(() -> new AppException(ErrorCode.WISHLIST_NOT_FOUND));

        wishlistRepository.deleteByCustomerIdAndProductId(customerId, productId);

        return ApiResponse.<Void>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.DELETED_WISHLIST.getMessage())
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<List<WishlistResponse>> getWishlistByProductId(int productId) {
        productRepository.findById(productId)
                .orElseThrow(() -> new AppException(ErrorCode.PRODUCT_NOT_FOUND));
        List<Wishlist> wishlists = wishlistRepository.findByProductId(productId);
        List<WishlistResponse> wishlistResponses = wishlists.stream()
                .map(wishlistMapper::toWishlistResponse)
                .collect(Collectors.toList());

        return ApiResponse.<List<WishlistResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_WISHLIST_BY_PRODUCTID.getMessage())
                .data(wishlistResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<List<WishlistResponse>> getWishlistByCustomerId(int customerId) {
        customerRepository.findById(customerId)
                .orElseThrow(() -> new AppException(ErrorCode.CUSTOMER_NOT_FOUND));

        List<Wishlist> wishlists = wishlistRepository.findByCustomerId(customerId);
        List<WishlistResponse> wishlistResponses = wishlists.stream()
                .map(wishlistMapper::toWishlistResponse)
                .collect(Collectors.toList());

        return ApiResponse.<List<WishlistResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_WISHLIST_BY_CUSTOMER.getMessage())
                .data(wishlistResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }
}
