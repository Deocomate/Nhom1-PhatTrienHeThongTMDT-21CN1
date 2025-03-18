package com.hau.api_backend.dto.response;

import com.hau.api_backend.entity.Blog;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class BlogResponse {
    int id;
    String title;
    String content;
    String thumbnail;
    BlogCategoryResponse blogCategory;
    String slug;
    int priority;
    LocalDateTime created_at;
    LocalDateTime updated_at;
    List<Blog> blogs;

}
