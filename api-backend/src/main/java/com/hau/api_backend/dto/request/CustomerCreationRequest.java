package com.hau.api_backend.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder

public class CustomerCreationRequest {
    @Email
    @NotBlank
    String email;
    @NotBlank
    String password;
    @NotBlank
    String fullName;
    String gender;
    @NotBlank
    String phoneNumber;
    @NotBlank
    String address;
    String profilePic;
}
