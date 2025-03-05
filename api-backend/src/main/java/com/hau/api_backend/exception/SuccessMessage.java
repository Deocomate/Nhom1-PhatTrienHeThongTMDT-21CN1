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
    LOGIN_SUCCESS("Login successful"),
    INTROSPECTION_SUCCESS("Token introspection successful"),
    LOGOUT_SUCCESS("Logout successful"),
    CREATED_CUSTOMER_CARE("Created contact success"),
    GET_ALL_CUSTOMER_CARE("Get contact success"),
    SEND_COMMENT_SUCCESS("Send comment success"),
    GET_COMMENT_BY_PRODUCT_ID_SUCCESS("Get comment by id success"),
    GET_COMMENT_SUCCESS("Get comment success"),
    GET_ALL_REPLY_COMMENT_SUCCESS("Get reply comment success"),
    SENT_REPLY_COMMENT("Send reply comment success"),
    GET_ALL_WISHLIST_SUCCESS("Get all wishlist success"),
    CREATED_WISHLIST("Created wishlist success"),
    DELETED_WISHLIST("Wishlist deleted"),
    GET_WISHLIST_BY_PRODUCTID("Get wishlist by productId success"),
    GET_WISHLIST_BY_CUSTOMER("Get wishlist by customerId success"),
    GET_ALL_CATETORY("Get all category success"),
    GET_CATEGORY_BY_PARRENT_ID("Get categories by parrentId"),
    GET_ALL_PRODUCT_WITH_CATEGORY("Get all product with category success")
    ;

    private final String message;

    SuccessMessage(String message) {
        this.message = message;
    }
}
