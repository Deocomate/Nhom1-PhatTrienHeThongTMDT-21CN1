package com.hau.api_backend.mapper;


import com.hau.api_backend.dto.response.CategoryResponse;
import com.hau.api_backend.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface CategoryMapper {
    CategoryResponse toCategoryResponse(Category category);
}
