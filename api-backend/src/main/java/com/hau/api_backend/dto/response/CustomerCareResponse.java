package com.hau.api_backend.dto.response;


import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CustomerCareResponse {
    int id;
    String fullname;
    String email;
    String phone_number;
    String address;
    String content;
    CustomerResponse customerResponse;
}
