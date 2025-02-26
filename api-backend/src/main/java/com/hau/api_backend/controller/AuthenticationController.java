package com.hau.api_backend.controller;

import com.hau.api_backend.dto.request.AuthenticationRequest;
import com.hau.api_backend.dto.request.IntrospectRequest;
import com.hau.api_backend.dto.request.LogoutRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.AuthenticationResponse;
import com.hau.api_backend.dto.response.IntrospectResponse;
import com.hau.api_backend.service.AuthenticationService;
import com.nimbusds.jose.JOSEException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;

    @PostMapping("/login")
    ResponseEntity<ApiResponse<AuthenticationResponse>> login(@RequestBody AuthenticationRequest request) {
        ApiResponse<AuthenticationResponse> apiResponse = authenticationService.login(request);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout(@RequestBody LogoutRequest request) throws ParseException, JOSEException {
        ApiResponse<Void> apiResponse = authenticationService.logout(request);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @PostMapping("/introspect")
    ResponseEntity<ApiResponse<IntrospectResponse>> introspect(@RequestBody IntrospectRequest request) {
        ApiResponse<IntrospectResponse> apiResponse = authenticationService.introspect(request);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }


}