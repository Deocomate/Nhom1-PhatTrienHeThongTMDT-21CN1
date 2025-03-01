package com.hau.api_backend.dto.request.replyComment;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class ReplyCommentCreationRequest {
    @NotNull
    int commentId;
    @NotBlank(message = "Content is blank")
    String replyContent;
}
