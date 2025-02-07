package com.hau.api_backend.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)

public class UserUpdateRequest {
    String email;
    String password;
    String fullName;
    String gender;
    String phoneNumber;
    String address;
    String profilePic;
}
