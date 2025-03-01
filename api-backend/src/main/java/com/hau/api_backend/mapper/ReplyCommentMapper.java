package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.request.replyComment.ReplyCommentCreationRequest;
import com.hau.api_backend.dto.response.ReplyCommentResponse;
import com.hau.api_backend.entity.ReplyComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface ReplyCommentMapper {
    @Mapping(source = "id", target = "id")
    ReplyCommentResponse toReplyCommentResponse(ReplyComment replyComment);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    ReplyComment toReplyComment(ReplyCommentCreationRequest request);
}
