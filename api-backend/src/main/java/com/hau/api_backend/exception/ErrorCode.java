package com.hau.api_backend.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {
    UNCATEGORIZED("Uncategorized error"),
    EMAIL_EXISTED("Email already exists"),
    PASSWORD_NOTNULL("Password ")
    ;

    private final String message;

    ErrorCode(String message) {

        this.message = message;
    }
}
