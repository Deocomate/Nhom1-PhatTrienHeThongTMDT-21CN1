package com.hau.api_backend.dto.request;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder

public class UserCreationRequest {
    String username;
    String email;
    String password;
    String fullName;
    String gender;
    String phoneNumber;
    String address;
    String profilePic;

}
