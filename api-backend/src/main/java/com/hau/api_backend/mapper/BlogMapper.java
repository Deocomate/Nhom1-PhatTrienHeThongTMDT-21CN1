package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.response.BlogResponse;
import com.hau.api_backend.entity.Blog;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface BlogMapper {

    @Mapping(source = "created_at", target = "createdAt")
    BlogResponse toBlogResponse(Blog blog);
}