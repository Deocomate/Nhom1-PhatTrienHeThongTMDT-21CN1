package com.hau.api_backend.dto.response;


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
    String brand;
    String type;
    String activeIngredient;
    List<String> images;
    String indications;
    String manufacturer;
    Long categoryId;
    String dosageForm;
    String noted;
    String description;
    Integer quantity;
    Double price;
    String registrationNumber;

}
