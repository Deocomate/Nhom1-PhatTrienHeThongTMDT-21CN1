package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.request.wishlist.WishlistCreationRequest;
import com.hau.api_backend.dto.response.WishlistResponse;
import com.hau.api_backend.entity.Wishlist;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface WishlistMapper {

    WishlistResponse toWishlistResponse(Wishlist wishlist);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Wishlist toWishlist(WishlistCreationRequest request);
}
