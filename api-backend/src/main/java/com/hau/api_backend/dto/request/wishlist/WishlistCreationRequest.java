package com.hau.api_backend.dto.request.wishlist;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class WishlistCreationRequest {
    @Min(value = 0, message = "id = 0")
    int productId;
    @Min(value = 0, message = "id = 0")
    int customerId;
}
