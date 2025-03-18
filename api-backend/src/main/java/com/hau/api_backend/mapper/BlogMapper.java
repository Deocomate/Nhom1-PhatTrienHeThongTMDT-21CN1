package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.response.BlogResponse;
import com.hau.api_backend.entity.Blog;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface BlogMapper {

    @Mapping(target = "blogs", ignore = true)
    @Mapping(target = "blogCategory", ignore = true)
//    @Mapping(source = "updated_at", target = "updated_at") // Explicit mapping for updated_at
    BlogResponse toBlogResponse(Blog blog);
}