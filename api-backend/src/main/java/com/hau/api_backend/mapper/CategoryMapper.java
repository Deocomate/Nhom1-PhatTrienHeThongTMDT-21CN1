package com.hau.api_backend.mapper;


import com.hau.api_backend.dto.response.CategoryResponse;
import com.hau.api_backend.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", uses = {ProductMapper.class})
public interface CategoryMapper {
    @Named("toCategoryResponse")
    @Mapping(source = "products", target = "productsResponses", ignore = true)
    CategoryResponse toCategoryResponse(Category category);

    @Mapping(source = "products", target = "productsResponses")
    CategoryResponse toCategoryWithProductResponse(Category category);
}
