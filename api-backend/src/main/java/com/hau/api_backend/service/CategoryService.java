package com.hau.api_backend.service;


import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CategoryResponse;
import com.hau.api_backend.entity.Category;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.CategoryMapper;
import com.hau.api_backend.repository.CategoryRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class CategoryService {
    CategoryRepository categoryRepository;
    CategoryMapper categoryMapper;

    String imageBasePath = "userfiles/images";
    String appBaseUrl = "http://127.0.0.1:8000";

    public ApiResponse<List<CategoryResponse>> getAllCategory() {
        List<Category> categories = categoryRepository.findAll();

        List<CategoryResponse> categoryResponses = categories.stream()
                .map(category -> {
                    CategoryResponse response = categoryMapper.toCategoryResponse(category);
                    if(response.getThumbnail() != null) {
                        response.setThumbnail(appBaseUrl + "/" + imageBasePath + "/" + response.getThumbnail());
                    }

                    return response;
                })
                .collect(Collectors.toList());

        return ApiResponse.<List<CategoryResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_CATETORY.getMessage())
                .data(categoryResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<List<CategoryResponse>> getCategoryByParentId(Integer parentId) {
        List<Category> categories = categoryRepository.findByParentId(parentId)
                .orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND));

        List<CategoryResponse> categoryResponses = categories.stream()
                .map(category -> {
                    CategoryResponse response = categoryMapper.toCategoryResponse(category);
                    if(response.getThumbnail() != null) {
                        response.setThumbnail(appBaseUrl + "/" + imageBasePath + "/" + response.getThumbnail());
                    }

                    return response;
                })
                .collect(Collectors.toList());

        return ApiResponse.<List<CategoryResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_CATEGORY_BY_PARRENT_ID.getMessage())
                .data(categoryResponses)
                .timestamp(LocalDateTime.now())
                .build();

    }
}
