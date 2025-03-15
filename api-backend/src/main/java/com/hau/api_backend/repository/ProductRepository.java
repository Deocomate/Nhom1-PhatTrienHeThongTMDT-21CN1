package com.hau.api_backend.repository;

import com.hau.api_backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    Optional<Product> findProductBySlug(String slug);
    Optional<List<Product>> findByCategoryId(int categoryId);

    Page<Product> findByCategoryIdIn(List<Integer> categoryIds, Pageable pageable);
    @Query("SELECT p FROM Product p WHERE (:minPrice IS NULL OR p.price >= :minPrice) AND (:maxPrice IS NULL OR p.price <= :maxPrice)")
    Page<Product> findByPriceBetween(
            @Param("minPrice") Integer minPrice,
            @Param("maxPrice") Integer maxPrice,
            Pageable pageable);

    @Query("SELECT p FROM Product p WHERE p.category.id IN :categoryIds AND (:minPrice IS NULL OR p.price >= :minPrice) AND (:maxPrice IS NULL OR p.price <= :maxPrice)")
    Page<Product> findByCategoryIdInAndPriceBetween(
            @Param("categoryIds") List<Integer> categoryIds,
            @Param("minPrice") Integer minPrice,
            @Param("maxPrice") Integer maxPrice,
            Pageable pageable);

    Page<Product> findByCategoryId(int categoryId, Pageable pageable);
    Page<Product> findByTitleContainingIgnoreCase(String name, Pageable pageable);
}
