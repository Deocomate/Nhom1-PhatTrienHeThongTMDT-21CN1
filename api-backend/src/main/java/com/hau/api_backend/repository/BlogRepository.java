package com.hau.api_backend.repository;

import com.hau.api_backend.entity.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
    Optional<Blog> findBlogBySlug(String slug);
    Page<Blog> findAll(Pageable pageable);
    @Query("SELECT b FROM Blog b WHERE LOWER(b.title) LIKE LOWER(CONCAT(:title, '%'))")
    Optional<Page<Blog>> searchByTitle(@Param("title") String title, Pageable pageable);


}
