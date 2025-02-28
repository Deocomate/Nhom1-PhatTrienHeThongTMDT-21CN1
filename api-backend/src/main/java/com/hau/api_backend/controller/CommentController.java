package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CommentResponse;
import com.hau.api_backend.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<CommentResponse>>> getAllComment() {
        ApiResponse<List<CommentResponse>> apiResponse = commentService.getAllComment();
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}
