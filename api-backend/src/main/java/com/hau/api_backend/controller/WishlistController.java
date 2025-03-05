package com.hau.api_backend.controller;


import com.hau.api_backend.dto.request.wishlist.WishlistCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.WishlistResponse;
import com.hau.api_backend.service.WishlistService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlists")
@RequiredArgsConstructor
public class WishlistController {
    private final WishlistService wishlistService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<WishlistResponse>>> getAllWishlist() {
        ApiResponse<List<WishlistResponse>> apiResponses = wishlistService.getAllWishlist();
        return new ResponseEntity<>(apiResponses, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<WishlistResponse>> createWishlist(@Valid @RequestBody WishlistCreationRequest request) {
        ApiResponse<WishlistResponse> apiResponse = wishlistService.createWishlish(request);
        return new ResponseEntity<>(apiResponse, HttpStatus.CREATED);
    }

    @DeleteMapping("/{customerId}/{productId}")
    public ResponseEntity<ApiResponse<Void>> deleteWishlist(@PathVariable int customerId, @PathVariable int productId) {
        ApiResponse<Void> apiResponse = wishlistService.deleteWishlistByCustomerAndProduct(customerId, productId);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<ApiResponse<List<WishlistResponse>>> getWishlistByProductId(@PathVariable int productId) {
        ApiResponse<List<WishlistResponse>> apiResponses = wishlistService.getWishlistByProductId(productId);
        return new ResponseEntity<>(apiResponses, HttpStatus.OK);
    }


    @GetMapping("/customers/{customerId}")
    public ResponseEntity<ApiResponse<List<WishlistResponse>>> getWishlistByCustomerId(@PathVariable int customerId) {
        ApiResponse<List<WishlistResponse>> apiResponses = wishlistService.getWishlistByCustomerId(customerId);
        return new ResponseEntity<>(apiResponses, HttpStatus.OK);
    }
}
