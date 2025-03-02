package com.hau.api_backend.repository;

import com.hau.api_backend.entity.ReplyComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReplyCommentRepository extends JpaRepository<ReplyComment, Integer> {
}
