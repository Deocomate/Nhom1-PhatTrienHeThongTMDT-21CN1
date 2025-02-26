package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.AuthenticationRequest;
import com.hau.api_backend.dto.request.IntrospectRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.AuthenticationResponse;
import com.hau.api_backend.dto.response.IntrospectResponse;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.repository.CustomerRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    CustomerRepository customerRepository;

    @NonFinal
    @Value("${jwt.signerKey}")
    protected String SINGER_KEY;

    public ApiResponse<AuthenticationResponse> login(AuthenticationRequest request) {
        Customer customer = customerRepository.findByEmail(request.getEmail()).orElse(null);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

        if (customer == null || !passwordEncoder.matches(request.getPassword(), customer.getPassword())) {
            // Đăng nhập thất bại
            return createAuthenticationResponse(false,
                    HttpStatus.UNAUTHORIZED,
                    ErrorCode.INCORRECT_EMAIL_OR_PASSWORD.getMessage(), null); // Token = null
        }

        // Đăng nhập thành công
        String token;
        try {
            token = generateToken(customer.getEmail());
        } catch (JOSEException e) {
            // Xử lý lỗi tạo token
            return createAuthenticationResponse(false, HttpStatus.INTERNAL_SERVER_ERROR, ErrorCode.FAILED_TO_GENERATE_TOKEN.getMessage(), null);
        }
        return createAuthenticationResponse(true,
                HttpStatus.OK,
                SuccessMessage.LOGIN_SUCCESS.getMessage(), token);
    }

    String generateToken(String email) throws JOSEException {
        JWSHeader jwsHeader = new JWSHeader(JWSAlgorithm.HS512);
        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(email)
                .issuer("https://pharmacy.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(30, ChronoUnit.MINUTES).toEpochMilli()
                ))
                .build();

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(jwsHeader, payload);

        jwsObject.sign(new MACSigner(SINGER_KEY.getBytes()));
        return jwsObject.serialize();
    }

    ApiResponse<AuthenticationResponse> createAuthenticationResponse(
            boolean authenticated, HttpStatus status, String message, String token) {
        return ApiResponse.<AuthenticationResponse>builder()
                .code(status.value())
                .message(message)
                .data(AuthenticationResponse.builder()
                        .authenticated(authenticated)
                        .token(token)
                        .build())
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<IntrospectResponse> introspect(IntrospectRequest request) {
        try {
            String token = request.getToken();

            JWSVerifier verifier = new MACVerifier(SINGER_KEY.getBytes());
            SignedJWT signedJWT = SignedJWT.parse(token);
            Date expirationTime = signedJWT.getJWTClaimsSet().getExpirationTime();

            boolean verified = signedJWT.verify(verifier); // xác minh chữ ký
            boolean isValid = verified && expirationTime.after(new Date()); // xác thực token

            // Nếu chữ ký không hợp lệ, trả về lỗi "Token verification failed"
            if (!verified) {
                return createIntrospectErrorResponse(ErrorCode.TOKEN_VERIFICATION_FAILED.getMessage());
            }
            // Nếu token hợp lệ, trả về kết quả thành công
            IntrospectResponse introspectResponse = IntrospectResponse.builder()
                    .valid(isValid)
                    .build();

            return ApiResponse.<IntrospectResponse>builder()
                    .code(HttpStatus.OK.value())
                    .message(SuccessMessage.INTROSPECTION_SUCCESS.getMessage())
                    .data(introspectResponse)
                    .timestamp(LocalDateTime.now())
                    .build();

        } catch (JOSEException e) {
            // Xử lý lỗi xảy ra trong quá trình xác minh chữ ký của token
            return createIntrospectErrorResponse(ErrorCode.TOKEN_VERIFICATION_FAILED.getMessage());
        } catch (ParseException e) {
            // Xử lý lỗi xảy ra trong quá trình phân tích cú pháp (parsing) token
            return createIntrospectErrorResponse(ErrorCode.TOKEN_PARSING_FAILED.getMessage());
        } catch (IllegalArgumentException e) {
            // Xử lý token null hoặc rỗng
            return createIntrospectErrorResponse(ErrorCode.TOKEN_MISSING.getMessage());
        }
    }

    private ApiResponse<IntrospectResponse> createIntrospectErrorResponse(String message) {
        return ApiResponse.<IntrospectResponse>builder()
                .code(HttpStatus.BAD_REQUEST.value())
                .message(message)
                .data(IntrospectResponse.builder()
                        .valid(false)
                        .build())
                .timestamp(LocalDateTime.now())
                .build();
    }
    }