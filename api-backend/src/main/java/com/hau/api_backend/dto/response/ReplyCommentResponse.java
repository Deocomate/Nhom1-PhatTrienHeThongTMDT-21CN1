package com.hau.api_backend.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ReplyCommentResponse {
    int id;
    int commentId;
    String replyContent;
}
