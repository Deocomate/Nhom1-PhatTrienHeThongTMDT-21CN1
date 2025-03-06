package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.response.BlogCategoryResponse;
import com.hau.api_backend.entity.BlogCategory;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface BlogCategoryMapper {
//    BlogCategory toBlogCategory(BlogCategoryRequest blogCategory);

    BlogCategoryResponse toBlogCategoryResponse(BlogCategory blogCategory);
}
