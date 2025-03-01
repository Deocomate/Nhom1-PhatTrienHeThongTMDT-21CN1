package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.request.comment.CommentCreationRequest;
import com.hau.api_backend.dto.response.CommentResponse;
import com.hau.api_backend.entity.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface CommentMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Comment toComment(CommentCreationRequest order);

    CommentResponse toCommentResponse(Comment comment);
}
