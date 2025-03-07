package com.hau.api_backend.controller;

import com.hau.api_backend.dto.response.ApiResponse;
import com.hau.api_backend.dto.response.ProductWithCategoryResponse;
import com.hau.api_backend.entity.Comment;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.entity.Product;
import com.hau.api_backend.repository.CommentRepository;
import com.hau.api_backend.repository.OrderRepository;
import com.hau.api_backend.repository.ProductRepository;
import com.hau.api_backend.service.BasePaginationService;
import com.hau.api_backend.service.ProductWithCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pagination")
public class PaginationController {

    @Autowired
    private BasePaginationService<Product> productPaginationService;

    @Autowired
    private BasePaginationService<Comment> commentPaginationService;

    @Autowired
    private BasePaginationService<Order> orderPaginationService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductWithCategoryService productWithCategoryService;

    @GetMapping("/products")
    public Page<Product> getProductsByPaginate(@RequestParam(defaultValue = "0") int pageIndex, @RequestParam(defaultValue = "1") int pageSize) {
        return productPaginationService.getPagedData(productRepository, pageIndex, pageSize);
    }

    @GetMapping("/comments")
    public Page<Comment> getCommentsByPaginate(@RequestParam(defaultValue = "0") int pageIndex, @RequestParam(defaultValue = "1") int pageSize) {
        return commentPaginationService.getPagedData(commentRepository, pageIndex, pageSize);
    }

    @GetMapping("/orders")
    public Page<Order> getOrdersByPaginate(@RequestParam(defaultValue = "0") int pageIndex, @RequestParam(defaultValue = "1") int pageSize) {
        return orderPaginationService.getPagedData(orderRepository, pageIndex, pageSize);
    }

}
