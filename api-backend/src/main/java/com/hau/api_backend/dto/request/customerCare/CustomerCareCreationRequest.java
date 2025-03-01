package com.hau.api_backend.dto.request.customerCare;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class CustomerCareCreationRequest {
    @NotNull
    int id;
    @NotBlank
    String fullname;
    @NotBlank
    String email;
    @NotBlank
    String phone_number;
    @NotBlank
    String address;
    @NotBlank
    String content;
}
