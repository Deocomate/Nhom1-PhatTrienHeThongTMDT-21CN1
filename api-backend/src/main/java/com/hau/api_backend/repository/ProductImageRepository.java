package com.hau.api_backend.repository;

import com.hau.api_backend.entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ProductImageRepository extends JpaRepository<ProductImage, Integer> {
}
