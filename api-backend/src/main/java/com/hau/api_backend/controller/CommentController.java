package com.hau.api_backend.controller;

import com.hau.api_backend.dto.request.comment.CommentCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CommentResponse;
import com.hau.api_backend.service.CommentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/product/{productId}")
    public ResponseEntity<ApiResponse<List<CommentResponse>>> getCommentByProductId(@PathVariable int productId) {
        ApiResponse<List<CommentResponse>> apiResponse = commentService.findCommentByProductId(productId);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<CommentResponse>> getCommentByProductId(@Valid @RequestBody CommentCreationRequest request) {
        ApiResponse<CommentResponse> apiResponse = commentService.createComment(request);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }}
