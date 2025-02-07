package com.hau.identity_service.exception;


import com.hau.api_backend.exception.ErrorCode;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class AppException extends RuntimeException {
    private ErrorCode errorCode;

}
