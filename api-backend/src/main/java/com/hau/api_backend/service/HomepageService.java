package com.hau.api_backend.service;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.HomepageResponse;
import com.hau.api_backend.entity.Homepage;
import com.hau.api_backend.mapper.HomepageMapper;
import com.hau.api_backend.repository.HomepageRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HomepageService {
    HomepageRepository homepageRepository;
    HomepageMapper homepageMapper;

    @NonFinal
    @Value("${app.base-url}")
    String baseUrl;

    public ApiResponse<HomepageResponse> getHomepage() {
        Homepage homepage = homepageRepository.findAll()
                .stream()
                .findFirst()
                .orElseThrow(() -> new EntityNotFoundException("Không tìm thấy dữ liệu trang chủ"));

        HomepageResponse homepageResponse = homepageMapper.toHomepageResponse(homepage);

        // Xử lý topBanner dưới dạng mảng JSON
        if (homepageResponse.getTopBanner() != null) {
            try {
                com.fasterxml.jackson.databind.ObjectMapper objectMapper = new com.fasterxml.jackson.databind.ObjectMapper();
                String[] topBannerItems = objectMapper.readValue(homepageResponse.getTopBanner(), String[].class);

                for (int i = 0; i < topBannerItems.length; i++) {
                    topBannerItems[i] = baseUrl + topBannerItems[i];
                }

                homepageResponse.setTopBanner(objectMapper.writeValueAsString(topBannerItems));
            } catch (Exception e) {
                // Nếu lỗi giữ nguyên giá trị
                System.err.println("Error processing topBanner JSON: " + e.getMessage());
            }
        }

        // Thêm baseUrl cho các ảnh
        if (homepageResponse.getBanner2() != null) {
            homepageResponse.setBanner2(baseUrl + homepageResponse.getBanner2());
        }
        if (homepageResponse.getBanner3() != null) {
            homepageResponse.setBanner3(baseUrl + homepageResponse.getBanner3());
        }
        if (homepageResponse.getCategory1Banner() != null) {
            homepageResponse.setCategory1Banner(baseUrl + homepageResponse.getCategory1Banner());
        }
        if (homepageResponse.getCategory2Banner() != null) {
            homepageResponse.setCategory2Banner(baseUrl + homepageResponse.getCategory2Banner());
        }

        return ApiResponse.<HomepageResponse>builder()
                .code(HttpStatus.OK.value())
                .message("Lấy dữ liệu trang chủ thành công")
                .data(homepageResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }
}
