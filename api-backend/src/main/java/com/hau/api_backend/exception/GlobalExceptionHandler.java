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
                "Lỗi trường dữ liệu",
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
                "Vi phạm tính toàn vẹn dữ liệu. Xem 'lỗi' để biết chi tiết.", // Consistent message
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
        if (ex.getMessage().contains("Có lỗi xảy ra vui lòng kiểm tra lại")) {
            field = "email";
            message = "Email already exists";
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
        List<Map<String, String>> errorDetails = new ArrayList<>();
        Map<String, String> detail = getStringStringMap(ex);
        errorDetails.add(detail);

        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Xử lý không thành công",
                errorDetails,
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    private static Map<String, String> getStringStringMap(AppException ex) {
        Map<String, String> detail = new HashMap<>();
        String field = ex.getField(); // Lấy field từ AppException

        // Nếu field vẫn là null, mặc định là "unknown"
        if (field == null) {
            field = "unknown";
        }

        detail.put("field", field);
        detail.put("message", ex.getErrorCode().getMessage());
        return detail;
    }

    // 6. Xử lý tất cả các exception chưa được xử lý (fallback)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(), // 500 Internal Server Error
                "Lỗi máy chủ (chưa xác định)",
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