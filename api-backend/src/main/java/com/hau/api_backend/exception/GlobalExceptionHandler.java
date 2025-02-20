package com.hau.api_backend.exception;

import com.hau.api_backend.dto.response.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.dao.DataIntegrityViolationException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {
    // 1. Handle Validation Exceptions (@Valid) - Handles both CustomerCreationRequest & CustomerUpdateRequest
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationExceptions(MethodArgumentNotValidException ex) {
        List<Map<String, String>> errorDetails = new ArrayList<>();

        // Extract validation errors from @Valid annotations
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            Map<String, String> detail = new HashMap<>();
            detail.put("field", error.getField());
            detail.put("message", error.getDefaultMessage());
            errorDetails.add(detail);
        });

        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Validation failed. See 'error' for details.",
                errorDetails, // List of detailed errors
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    // 2. Handle DataIntegrityViolationException (for Unique Constraints)
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorResponse> handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        List<Map<String, String>> errorDetails = new ArrayList<>();
        Map<String, String> detail = getStringStringMap(ex);
        errorDetails.add(detail);

        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Data integrity violation. See 'error' for details.", // Consistent message
                errorDetails,
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    private static Map<String, String> getStringStringMap(DataIntegrityViolationException ex) {
        Map<String, String> detail = new HashMap<>();
        String message = "Data integrity violation: " + ex.getMessage();
        String field = "unknown";  // Default field

        // Identify the specific unique constraint violation
        if (ex.getMessage().contains("customers_email_unique")) {
            field = "email";
            message = "Email already exists";
        } else if (ex.getMessage().contains("customers_phone_number_unique")) {
            field = "phoneNumber";
            message = "Phone number already exists";
        }

        detail.put("field", field); // Add field information
        detail.put("message", message);
        return detail;
    }


    // 3. Xử lý lỗi khi tham số không đúng kiểu (ví dụ: String thay vì Integer)
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handleTypeMismatch(MethodArgumentTypeMismatchException ex) {
        String name = ex.getName();
        String message = "Invalid type for parameter: " + name;

        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                message,
                null,
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }


    // 4. Xử lý các exception khi không tìm thấy tài nguyên
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFoundException(ResourceNotFoundException ex) {
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.NOT_FOUND.value(),
                ex.getMessage(),
                null,
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    // 5. Xử lý AppException
    @ExceptionHandler(AppException.class)
    public ResponseEntity<ErrorResponse> handleAppException(AppException ex) {
        // Create a list to hold the error details
        List<Map<String, String>> errorDetails = new ArrayList<>();


        Map<String, String> detail = getStringStringMap(ex);

        // Add the error to the list
        errorDetails.add(detail);

        // Create the ErrorResponse with the list of errors
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Validation failed. See 'error' for details.", // Consistent message
                errorDetails,
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    private static Map<String, String> getStringStringMap(AppException ex) {
        Map<String, String> detail = new HashMap<>();
        String field = null;

        // Set field name based on the ErrorCode
        if (ex.getErrorCode() == ErrorCode.EMAIL_ALREADY_EXISTS) {
            field = "email";
        } else if (ex.getErrorCode() == ErrorCode.PHONE_NUMBER_ALREADY_EXISTS) {
            field = "phoneNumber";
        }

        // If the field is still null, it means the ErrorCode is not handled
        if (field == null) {
            field = "unknown"; // Or handle it in another way, e.g., log the error
        }

        detail.put("field", field); // Use the ErrorCode name as field
        detail.put("message", ex.getErrorCode().getMessage());
        return detail;
    }

    // 6. Xử lý tất cả các exception chưa được xử lý (fallback)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(), // 500 Internal Server Error
                "Internal server error",
                null, // Không có error details cụ thể
                LocalDateTime.now()
        );
        // In stack trace để debug
        ex.printStackTrace();
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // Custom exception để báo hiệu resource không tìm thấy
    public static class ResourceNotFoundException extends RuntimeException {
        public ResourceNotFoundException(String message) {
            super(message);
        }
    }
}