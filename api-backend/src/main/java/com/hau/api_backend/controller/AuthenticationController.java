package com.hau.api_backend.controller;

import com.hau.api_backend.dto.request.AuthenticationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.AuthenticationResponse;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.service.AuthenticationService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> login(@RequestBody AuthenticationRequest request) {
        ApiResponse<AuthenticationResponse> apiResponse = authenticationService.login(request);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}
