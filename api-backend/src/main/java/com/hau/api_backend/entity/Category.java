package com.hau.api_backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String thumbnail;
    String slug;
    int priority;
    Integer parentId;
    @CreationTimestamp
    LocalDateTime createdAt;
    @CreationTimestamp
    LocalDateTime updatedAt;
    @OneToMany(mappedBy = "categoryId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    List<Product> products;

}
