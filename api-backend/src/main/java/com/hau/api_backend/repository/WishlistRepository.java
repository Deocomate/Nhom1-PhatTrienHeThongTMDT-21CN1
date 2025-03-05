package com.hau.api_backend.repository;

import com.hau.api_backend.entity.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
    void deleteByCustomerIdAndProductId(int customerId, int productId);
    List<Wishlist> findByProductId(int productId);
    List<Wishlist> findByCustomerId(int customerId);
}
