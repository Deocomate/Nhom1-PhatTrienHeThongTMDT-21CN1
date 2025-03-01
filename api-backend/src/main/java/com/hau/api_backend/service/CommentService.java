package com.hau.api_backend.service;

import com.hau.api_backend.dto.request.comment.CommentCreationRequest;
import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.CommentResponse;
import com.hau.api_backend.entity.Comment;
import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.exception.AppException;
import com.hau.api_backend.exception.ErrorCode;
import com.hau.api_backend.exception.SuccessMessage;
import com.hau.api_backend.mapper.CommentMapper;
import com.hau.api_backend.repository.CommentRepository;
import com.hau.api_backend.repository.CustomerRepository;
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
public class CommentService {
    CommentRepository commentRepository;
    CommentMapper commentMapper;
    CustomerRepository customerRepository;

    public ApiResponse<List<CommentResponse>> getAllComment() {
        List<Comment> comments = commentRepository.findAll();

        List<CommentResponse> commentResponses = comments.stream()
                .map(commentMapper::toCommentResponse)
                .collect(Collectors.toList());
        return ApiResponse.<List<CommentResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_CUSTOMER.getMessage())
                .data(commentResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<List<CommentResponse>> findCommentByProductId(int productId) {
        List<Comment> comments = (List<Comment>) commentRepository.findByProductId(productId);
                if(comments == null) {
                    throw new AppException(ErrorCode.COMMENT_NOT_FOUND);
                }
        List<CommentResponse> commentResponses = comments.stream()
                .map(commentMapper::toCommentResponse)
                .collect(Collectors.toList());

        return ApiResponse.<List<CommentResponse>>builder()
                .code(HttpStatus.OK.value())
                .message(SuccessMessage.GET_ALL_CUSTOMER.getMessage())
                .data(commentResponses)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public ApiResponse<CommentResponse> createComment(CommentCreationRequest request) {
        // 🆕 Tìm Customer theo customerId
        System.out.println(request.getCustomerId());
        System.out.println(request.getProductId());
        Customer customer = customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new AppException(ErrorCode.CUSTOMER_NOT_FOUND));

        Comment comment = commentMapper.toComment(request);
        comment.setCustomer(customer); // Set customer object

        Comment saveComment = commentRepository.save(comment);

        CommentResponse commentResponse = commentMapper.toCommentResponse(saveComment);

        return ApiResponse.<CommentResponse>builder()
                .code(HttpStatus.CREATED.value())
                .message(SuccessMessage.CREATED_CUSTOMER.getMessage())
                .data(commentResponse)
                .timestamp(LocalDateTime.now())
                .build();
    }




}
