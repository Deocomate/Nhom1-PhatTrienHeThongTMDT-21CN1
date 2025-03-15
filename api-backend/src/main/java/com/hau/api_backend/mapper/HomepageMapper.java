package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.response.HomepageResponse;
import com.hau.api_backend.entity.Homepage;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface HomepageMapper {
    HomepageResponse toHomepageResponse(Homepage homepage);
}
