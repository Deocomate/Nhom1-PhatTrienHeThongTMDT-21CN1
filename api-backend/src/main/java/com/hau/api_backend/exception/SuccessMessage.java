package com.hau.api_backend.exception;

import lombok.Getter;

@Getter
public enum SuccessMessage {
    CREATED_USER("Created customer success"),
    UPDATE_USER("Update customer success"),
    GET_ALL_USERS("Get all customer success"),
    GET_USER_BY_ID("Get customer by id success"),
    DELETE_USER("Delete customer success");

    private final String message;

    SuccessMessage(String message) {
        this.message = message;
    }
}
