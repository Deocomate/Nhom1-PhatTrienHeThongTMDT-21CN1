package com.hau.api_backend.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class BasePaginationService<T> {

    private static final int DEFAULT_PAGE_SIZE = 10; // Số bản ghi mặc định mỗi trang

    public Page<T> getPagedData(JpaRepository<T, Integer> repository, int page) {
//        int pageIndex = (page > 0) ? page - 1: 0;
        Pageable pageable = PageRequest.of(page, DEFAULT_PAGE_SIZE);
        return repository.findAll(pageable);
    }
}
