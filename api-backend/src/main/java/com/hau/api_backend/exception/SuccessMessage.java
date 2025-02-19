package com.hau.api_backend.exception;

import lombok.Getter;

@Getter
public enum SuccessMessage {
    CREATED_CUSTOMER("Created customer success"),
    UPDATE_CUSTOMER("Update customer success"),
    GET_ALL_CUSTOMER("Get all customer success"),
    GET_CUSTOMER_BY_ID("Get customer by id success"),
    DELETE_CUSTOMER("Delete customer success");

    private final String message;

    SuccessMessage(String message) {
        this.message = message;
    }
}
