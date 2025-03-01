package com.hau.api_backend.exception;

import lombok.Getter;

@Getter
public enum SuccessMessage {
    CREATED_CUSTOMER("Created customer success"),
    CREATED_ORDER("Created order success"),
    UPDATE_CUSTOMER("Update customer success"),
    GET_ALL_CUSTOMER("Get all customer success"),
    GET_CUSTOMER_BY_ID("Get customer by id success"),
    DELETE_CUSTOMER("Delete customer success"),
    GET_ALL_PRODUCT("Get all product success"),
    GET_PRODUCT_BY_ID("Get product by id success"),
    UPDATE_ORDER("Update order success"),
    GET_ORDER_BY_ID("Get order by id success"),
    GET_ORDER_BY_CUSTOMER_ID("Get all order by customer id success"),
    GET_ALL_ORDER("Get all order success"),
    CREATED_ORDER_SUCCESS("Created order success"),
    LOGIN_SUCCESS("Login successful"),
    INTROSPECTION_SUCCESS("Token introspection successful"),
    LOGOUT_SUCCESS("Logout successful"),
    CREATED_CUSTOMER_CARE("Created contact success"),
    GET_ALL_CUSTOMER_CARE("Get contact success"),
    SEND_COMMENT_SUCCESS("Send comment success"),
    GET_COMMENT_BY_PRODUCT_ID_SUCCESS("Get comment by id success"),
    GET_COMMENT_SUCCESS("Get comment success")
    ;

    private final String message;

    SuccessMessage(String message) {
        this.message = message;
    }
}
