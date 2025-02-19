package com.hau.api_backend.dto.response;


import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CustomerResponse {
    int id;
    String email;
    String password;
    String fullName;
    String gender;
    String phoneNumber;
    String address;
    String profilePic;
}
