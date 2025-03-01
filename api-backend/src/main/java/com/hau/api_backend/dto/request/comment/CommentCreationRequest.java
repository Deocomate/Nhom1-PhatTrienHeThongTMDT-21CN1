package com.hau.api_backend.dto.request.comment;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class CommentCreationRequest {
    @NotNull
    int productId;
//    @Min(value = 1, message = "CustomerId must be greater than 0")
    int customerId;
    @NotBlank
    String content;
}
