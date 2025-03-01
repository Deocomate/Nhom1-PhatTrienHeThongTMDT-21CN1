package com.hau.api_backend.mapper;

import com.hau.api_backend.dto.request.comment.CommentCreationRequest;
import com.hau.api_backend.dto.response.CommentResponse;
import com.hau.api_backend.dto.response.ReplyCommentResponse;
import com.hau.api_backend.entity.Comment;
import com.hau.api_backend.entity.ReplyComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface CommentMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "customer", ignore = true)
    Comment toComment(CommentCreationRequest request);

    @Mapping(source = "customer.fullName", target = "customerName")
    @Mapping(source = "replyComments", target = "replyCommentResponses", qualifiedByName = "mapReplyCommentToResponses")
    CommentResponse toCommentResponse(Comment comment);

    @Named("mapReplyCommentToResponses")
    default List<ReplyCommentResponse> mapReplyCommentToResponses(List<ReplyComment> replyComments) {
        if(replyComments == null) return null;
        return replyComments.stream().map(replyComment -> ReplyCommentResponse.builder()
                .id(replyComment.getId())
                .commentId(replyComment.getCommentId())
                .replyContent(replyComment.getReplyContent())
                .build())
                .collect(Collectors.toList());

    }
}
