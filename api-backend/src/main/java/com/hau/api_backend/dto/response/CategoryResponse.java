package com.hau.api_backend.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CategoryResponse {
    int id;
    String name;
    String thumbnail;
    String slug;
    int priority;
    Integer parentId;
    List<ProductResponse> productsResponses;

}
