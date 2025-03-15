package com.hau.api_backend.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class HomepageResponse {
    Integer id;
    String topBanner;
    String banner2;
    String banner3;
    String category1Banner;
    String category1Title;
    String category1Id;
    String category2Banner;
    String category2Title;
    String category2Id;
    String mostSearches;
}
