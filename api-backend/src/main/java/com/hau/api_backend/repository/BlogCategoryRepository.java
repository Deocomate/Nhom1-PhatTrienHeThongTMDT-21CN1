package com.hau.api_backend.repository;

import com.hau.api_backend.entity.BlogCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BlogCategoryRepository extends JpaRepository<BlogCategory, Integer> {
    Optional<BlogCategory> findBlogCategoriesBySlug(String slug);
}
