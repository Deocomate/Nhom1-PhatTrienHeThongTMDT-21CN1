package com.hau.api_backend.dto.request.customerRequest;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)

public class CustomerUpdateRequest {
    @Size(min = 1, max = 50, message = "Password must be between 1 and 30 characters long")
    String password;
    @NotBlank(message = "Name is required")
    String fullName;
    @Pattern(regexp = "^(male|female)$", message = "Invalid gender value. Must be male or female")
    String gender;
    @Size(min = 10, message = "Phone Number is required")
    String phoneNumber;
    @NotBlank(message = "Address is required")
    String address;
}
