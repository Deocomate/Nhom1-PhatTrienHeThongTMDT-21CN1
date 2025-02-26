package com.hau.api_backend.repository;

import com.hau.api_backend.entity.InvalidatedToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface InvalidatedRepository extends JpaRepository<InvalidatedToken, String> {
    List<InvalidatedToken> findByExpiryTimeBefore(LocalDateTime expiryTime);
}
