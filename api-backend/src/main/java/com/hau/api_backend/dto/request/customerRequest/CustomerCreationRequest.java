package com.hau.api_backend.dto.request.customerRequest;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder

public class CustomerCreationRequest {
    @Email(message = "Invalid email format")
    @Size(min = 1, max = 50, message = "Password must be between 1 and 30 characters long")
    String email;
    @NotBlank(message = "Password is required")
    String password;
    @NotBlank(message = "Name is required")
    String fullName;
    @Pattern(regexp = "^(male|female)$", message = "Invalid gender value. Must be male or female")
    String gender;
    @NotBlank(message = "Phone Number is required")
    String phoneNumber;
    @NotBlank(message = "Address is required")
    String address;
}
