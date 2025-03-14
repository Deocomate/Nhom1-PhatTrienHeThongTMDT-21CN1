package com.hau.api_backend.dto.response;


import com.hau.api_backend.entity.ProductImage;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductResponse {
    int id;
    String title;
    String thumbnail;
    int brandId;
    String brandName;
    String type;
    String activeIngredient;
    String indications;
    String manufacturer;
    int categoryId;
    String categoryName;
    String dosageForm;
    String noted;
    String description;
    Integer quantity;
    Double price;
    String registrationNumber;
    String slug;
    List<ProductImageResponse> productImagesResponses;
    List<CommentResponse> commentsResponses;
}
