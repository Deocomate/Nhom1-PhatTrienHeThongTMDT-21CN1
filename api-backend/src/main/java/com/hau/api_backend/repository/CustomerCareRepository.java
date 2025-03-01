package com.hau.api_backend.repository;

import com.hau.api_backend.entity.CustomerCare;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerCareRepository extends JpaRepository<CustomerCare, Integer> {
}
