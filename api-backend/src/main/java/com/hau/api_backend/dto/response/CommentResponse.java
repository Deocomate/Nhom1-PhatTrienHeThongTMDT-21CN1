package com.hau.api_backend.dto.response;

import com.hau.api_backend.entity.Comment;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CommentResponse {
    int id;
    int productId;
    int customerId;
    String customerName;
    String content;
    List<ReplyCommentResponse> replyCommentResponses;
}
