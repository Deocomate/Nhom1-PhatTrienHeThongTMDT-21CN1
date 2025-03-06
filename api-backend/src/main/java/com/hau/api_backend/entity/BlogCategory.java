package com.hau.api_backend.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "blog_categories")
public class BlogCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String thumbnail;
    String slug;
    Integer priority;

    @CreationTimestamp
    LocalDateTime created_at;
    @UpdateTimestamp
    LocalDateTime updated_at;

    @OneToMany(mappedBy = "blogCategoryId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Blog> blogs;
}
