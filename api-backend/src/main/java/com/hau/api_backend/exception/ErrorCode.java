package com.hau.api_backend.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {
    EMAIL_ALREADY_EXISTS("Email already exists"),
    CUSTOMER_NOT_FOUND("Customer not found"),
    PHONE_NUMBER_ALREADY_EXISTS("Phone Number already exists"),
    PRODUCT_NOT_FOUND("Product not found"),
    ORDER_NOT_FOUND("Order not found");


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }
}