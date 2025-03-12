package com.hau.api_backend.dto.request.order;


import com.hau.api_backend.dto.request.orderdetail.OrderDetailCreationRequest;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class OrderCreationRequest {
    @NotNull
    int customerId;
    @NotNull
    int userId;
    String status = "waiting";
    @Pattern(regexp = "^(offline|online)$", message = "Invalid payment method value. Must be offline or online")
    @NotBlank
    String paymentMethod;
    @NotBlank
    String paymentStatus = "pending";
    @Valid
    List<OrderDetailCreationRequest> orderDetails;
    LocalDateTime createdAt;
}
