package com.hau.api_backend.controller;


import com.hau.api_backend.dto.request.comment.CommentCreationRequest;
import com.hau.api_backend.dto.request.replyComment.ReplyCommentCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.ReplyCommentResponse;
import com.hau.api_backend.service.ReplyCommentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/replyComments")
@RequiredArgsConstructor
public class ReplyCommentController {
    private final ReplyCommentService replyCommentService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<ReplyCommentResponse>>> getAllReplyComment() {
        ApiResponse<List<ReplyCommentResponse>> apiResponse = replyCommentService.getALlReplyComment();
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ReplyCommentResponse>> sendReplyComment(@Valid @RequestBody ReplyCommentCreationRequest request) {
        ApiResponse<ReplyCommentResponse> apiResponse = replyCommentService.sendReplyComment(request);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
}
