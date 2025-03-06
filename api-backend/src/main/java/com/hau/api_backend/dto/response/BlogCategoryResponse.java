package com.hau.api_backend.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class BlogCategoryResponse {
    int id;
    String name;
    String thumbnail;
    String slug;
    Integer priority;
}
