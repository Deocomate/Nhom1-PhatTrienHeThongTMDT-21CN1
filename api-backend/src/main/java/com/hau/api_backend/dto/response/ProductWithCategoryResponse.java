package com.hau.api_backend.dto.response;


import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductWithCategoryResponse {
    private int totalPages;
    private long totalProducts;
    private int pageSize;
    private int pageIndex;
    private List<CategoryResponse> categories;
    private List<ProductResponse> products;
}

