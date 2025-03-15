package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.HomepageResponse;
import com.hau.api_backend.service.HomepageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/homepage")
@RequiredArgsConstructor
public class HomepageController {
    private final HomepageService homepageService;

    @GetMapping
    public ApiResponse<HomepageResponse> getHomepage() {
        return homepageService.getHomepage();
    }
}
