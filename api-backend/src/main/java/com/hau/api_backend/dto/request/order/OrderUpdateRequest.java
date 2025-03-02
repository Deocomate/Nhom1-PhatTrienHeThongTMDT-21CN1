package com.hau.api_backend.dto.request.order;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class OrderUpdateRequest {
    @Pattern(regexp = "^(waiting|processing|shipped|admin_cancelled|customer_cancelled)$", message = "Invalid status value. Must be waiting, processing, shipped, admin_cancelled or customer_cancelled")
    @NotBlank
    String status;
    @Pattern(regexp = "^(fail|pending|success)$", message = "Invalid payment status value. Must be fail, pending or success")
    @NotBlank
    String paymentStatus;
}
