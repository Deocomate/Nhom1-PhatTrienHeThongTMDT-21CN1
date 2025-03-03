package com.hau.api_backend.repository;

import com.hau.api_backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    Optional<Product> findProductBySlug(String slug);
    Optional<List<Product>> findByCategoryId(int categoryId);

}
