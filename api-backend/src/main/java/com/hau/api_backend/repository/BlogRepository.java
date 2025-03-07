package com.hau.api_backend.repository;

import com.hau.api_backend.entity.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
    Optional<Blog> findBlogBySlug(String slug);
    Page<Blog> findAll(Pageable pageable);
}
