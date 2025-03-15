package com.hau.api_backend.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "pharmacy_homepage")
public class Homepage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @Column(columnDefinition = "TEXT", name = "top_banner")
    String topBanner;
    @Column(name = "banner_2")
    String banner2;
    @Column(name = "banner_3")
    String banner3;
    @Column(name = "category_1_banner")
    String category1Banner;
    @Column(name = "category_1_title")
    String category1Title;
    @Column(name = "category_1_id")
    String category1Id;
    @Column(name = "category_2_banner")
    String category2Banner;
    @Column(name = "category_2_title")
    String category2Title;
    @Column(name = "category_2_id")
    String category2Id;
    @Column(columnDefinition = "TEXT", name = "most_searches")
    String mostSearches;
}
