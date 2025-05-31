package com.hau.api_backend.service.impl;


import com.hau.api_backend.dto.request.replyComment.ReplyCommentCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.ReplyCommentResponse;
import com.hau.api_backend.entity.ReplyComment;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.ReplyCommentMapper;
import com.hau.api_backend.repository.CommentRepository;
import com.hau.api_backend.repository.ReplyCommentRepository;
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
public class ReplyCommentService {
    ReplyCommentRepository replyCommentRepository;
    ReplyCommentMapper replyCommentMapper;
    CommentRepository commentRepository;
    public ApiResponse<List<ReplyCommentResponse>> getALlReplyComment() {
        List<ReplyComment> replyComments = replyCommentRepository.findAll();
        List<ReplyCommentResponse> replyCommentResponses = replyComments.stream()
                .map(replyCommentMapper::toReplyCommentResponse)
                .collect(Collectors.toList());

        return ApiResponse.<List<ReplyCommentResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_REPLY_COMMENT_SUCCESS.getMessage())
                .data(replyCommentResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<ReplyCommentResponse> sendReplyComment(ReplyCommentCreationRequest request) {
        commentRepository.findById(request.getCommentId())
                .orElseThrow(() -> new AppException(ErrorCode.COMMENT_NOT_FOUND));

        ReplyComment replyComment = replyCommentMapper.toReplyComment(request);
        ReplyComment saveReplyComment = replyCommentRepository.save(replyComment);
        ReplyCommentResponse replyCommentResponse = replyCommentMapper.toReplyCommentResponse(saveReplyComment);

        return ApiResponse.<ReplyCommentResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.SENT_REPLY_COMMENT.getMessage())
                .data(replyCommentResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }
}
