package com.hau.api_backend.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {
    EMAIL_ALREADY_EXISTS("Email already exists"),
    CUSTOMER_NOT_FOUND("Customer not found"),
    USER_NOT_FOUND("User not found"),
    PRODUCT_NOT_FOUND("Product not found"),
    ORDER_NOT_FOUND("Order not found"),
    ORDER_NOT_SUPPORTED("Order does not support online payment"),
    ORDER_SUCCESS("Order is being delivered or has been delivered"),
    ORDER_CANCELED_BY_CUSTOMER("Order was cancelled by customer"),
    ORDER_CANCELED_BY_ADMIN("Order was cancelled by admin"),
    ORDER_NOT_FOUND_FOR_CUSTOMER("Order not found for Customer"),
    INCORRECT_EMAIL_OR_PASSWORD("Incorrect email or password"),
    FAILED_TO_GENERATE_TOKEN("Failed to generate token"),
    TOKEN_VERIFICATION_FAILED("Token verification failed"),
    TOKEN_PARSING_FAILED("Token parsing failed"),
    TOKEN_MISSING("Token is missing"),
    TOKEN_EXPIRED("Token is expired"),
    INVALID_TOKEN("Invalid token"),
    TOKEN_INVALIDATED("Invalid token"),
    COMMENT_NOT_FOUND("comment not found"),
    INSUFFICIENT_QUANTITY("Insufficient quantity"),
    OUT_OF_STOCK("Out of stock"),
    WISHLIST_NOT_FOUND("wishlist not found"),
    CATEGORY_NOT_FOUND("Categoy not found"),

    ;

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }
}