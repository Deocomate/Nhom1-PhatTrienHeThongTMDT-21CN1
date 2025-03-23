package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.authentication.AuthenticationRequest;
import com.hau.api_backend.dto.request.authentication.IntrospectRequest;
import com.hau.api_backend.dto.request.authentication.LogoutRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.AuthenticationResponse;
import com.hau.api_backend.dto.response.IntrospectResponse;
import com.hau.api_backend.dto.response.CustomerResponse;
import com.hau.api_backend.entity.InvalidatedToken;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.mapper.CustomerMapper;
import com.hau.api_backend.repository.CustomerRepository;
import com.hau.api_backend.repository.InvalidatedRepository;
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
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.Optional; // Import Optional
import java.util.UUID;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    CustomerRepository customerRepository;
    InvalidatedRepository invalidatedRepository;
    CustomerMapper customerMapper; // Inject CustomerMapper

    @NonFinal
    @Value("${jwt.signerKey}")
    String SINGER_KEY;

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

    public ApiResponse<Void> logout(LogoutRequest request) {
        try {
            SignedJWT signToken = verifyToken(request.getToken());

            String jit = signToken.getJWTClaimsSet().getJWTID();
            Date expiryTime = signToken.getJWTClaimsSet().getExpirationTime();

            InvalidatedToken invalidatedToken = InvalidatedToken.builder()
                    .id(jit)
                    .expiryTime(expiryTime)
                    .build();
            invalidatedRepository.save(invalidatedToken);

            return ApiResponse.<Void>builder()
                    .code(HttpStatus.OK.value())
                    .message(SuccessMessage.LOGOUT_SUCCESS.getMessage())
                    .timestamp(LocalDateTime.now())
                    .build();

        } catch (AppException e) {
            return createLogoutErrorResponse(e.getErrorCode().getMessage());
        } catch (ParseException | JOSEException e) {
            // Xử lý lỗi parsing và JOSE exceptions
            return createLogoutErrorResponse(ErrorCode.INVALID_TOKEN.getMessage());
        }
    }

    SignedJWT verifyToken(String token) throws ParseException, JOSEException {
        JWSVerifier verifier = new MACVerifier(SINGER_KEY.getBytes());
        SignedJWT signedJWT = SignedJWT.parse(token);
        Date expirationTime = signedJWT.getJWTClaimsSet().getExpirationTime();

        boolean verified = signedJWT.verify(verifier); // xác minh chữ ký
        // Nếu chữ ký không hợp lệ, trả về lỗi "Token verification failed"
        if (!verified) {
            throw new AppException(ErrorCode.TOKEN_VERIFICATION_FAILED, "token");
        }

        boolean isValid = expirationTime.after(new Date()); // xác thực token
        if (!isValid) {
            throw new AppException(ErrorCode.TOKEN_EXPIRED, "token");
        }
        return signedJWT;
    }

    String generateToken(String email) throws JOSEException {
        JWSHeader jwsHeader = new JWSHeader(JWSAlgorithm.HS512);
        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(email)
                .issuer("https://pharmacy.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(24, ChronoUnit.HOURS).toEpochMilli()
                ))
                .jwtID(UUID.randomUUID().toString())
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
            SignedJWT signedJWT = SignedJWT.parse(token);
            String email = signedJWT.getJWTClaimsSet().getSubject();

            // Check if the token is invalidated
            Optional<InvalidatedToken> invalidatedToken = invalidatedRepository.findById(signedJWT.getJWTClaimsSet().getJWTID());
            if (invalidatedToken.isPresent()) {
                // Token is invalidated
                return createIntrospectErrorResponse(ErrorCode.TOKEN_INVALIDATED.getMessage());
            }

            verifyToken(token);

            Customer customer = customerRepository.findByEmail(email)
                    .orElse(null);

            CustomerResponse customerResponse = null;
            if (customer != null) {
                customerResponse = customerMapper.toCustomerResponse(customer);
            }

            IntrospectResponse introspectResponse = IntrospectResponse.builder()
                    .valid(true)
                    .customer(customerResponse)
                    .build();

            return ApiResponse.<IntrospectResponse>builder()
                    .code(HttpStatus.OK.value())
                    .message(SuccessMessage.INTROSPECTION_SUCCESS.getMessage())
                    .data(introspectResponse)
                    .timestamp(LocalDateTime.now())
                    .build();

        } catch (AppException e) {
            return createIntrospectErrorResponse(e.getErrorCode().getMessage());
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

    ApiResponse<IntrospectResponse> createIntrospectErrorResponse(String message) {
        return ApiResponse.<IntrospectResponse>builder()
                .code(HttpStatus.BAD_REQUEST.value())
                .message(message)
                .data(IntrospectResponse.builder()
                        .valid(false)
                        .build())
                .timestamp(LocalDateTime.now())
                .build();
    }
    private ApiResponse<Void> createLogoutErrorResponse(String message) {
        return ApiResponse.<Void>builder()
                .code(HttpStatus.BAD_REQUEST.value())
                .message(message)
                .timestamp(LocalDateTime.now())
                .build();
    }

    @Scheduled(fixedRate = 600000) // Run every 600 seconds - 10 minute
    public void cleanupExpiredTokens() {
        LocalDateTime now = LocalDateTime.now();
        List<InvalidatedToken> expiredTokens = invalidatedRepository.findByExpiryTimeBefore(now);
        invalidatedRepository.deleteAll(expiredTokens);
        System.out.println("Cleaned up " + expiredTokens.size() + " expired tokens.");
    }
}