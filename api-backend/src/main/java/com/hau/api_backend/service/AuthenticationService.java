package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.AuthenticationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.AuthenticationResponse;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.repository.CustomerRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    CustomerRepository customerRepository;

    public ApiResponse<AuthenticationResponse> login(AuthenticationRequest request) {
        Customer customer = customerRepository.findByEmail(request.getEmail()).orElse(null);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

        if (customer == null || !passwordEncoder.matches(request.getPassword(), customer.getPassword())) {
            // Đăng nhập thất bại
            return createAuthenticationResponse(false, HttpStatus.UNAUTHORIZED, ErrorCode.INCORRECT_EMAIL_OR_PASSWORD.getMessage());
        }

        // Đăng nhập thành công
        return createAuthenticationResponse(true, HttpStatus.OK, SuccessMessage.LOGIN_SUCCESS.getMessage());
    }

    private ApiResponse<AuthenticationResponse> createAuthenticationResponse(
            boolean authenticated, HttpStatus status, String message) {
        return ApiResponse.<AuthenticationResponse>builder()
                .code(status.value())
                .message(message)
                .data(AuthenticationResponse.builder()
                        .authenticated(authenticated)
                        .build())
                .build();
    }
}