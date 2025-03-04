package com.hau.api_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String title;
    String thumbnail;
    @Column(name = "brand_id")
    int brandId;
    @ManyToOne
    @JoinColumn(name = "brand_id",  referencedColumnName = "id", insertable = false, updatable = false)
    Brand brand;
    String type;

    @Column(name = "active_ingredient")
    String activeIngredient;

    String manufacturer;

    @Column(columnDefinition = "TEXT")
    String indications;


    @Column(name = "category_id")
    int categoryId;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id", insertable = false, updatable = false)
    Category category;

    @Column(name = "dosage_form")
    String dosageForm;

    @Column(columnDefinition = "TEXT")
    String noted;

    @Column(columnDefinition = "TEXT")
    String description;

    int quantity;
    double price;

    @Column(name = "registration_number")
    String registrationNumber;

    @Column(name = "slug")
    String slug;

    @CreationTimestamp
    LocalDateTime createdAt;

    @CreationTimestamp
    LocalDateTime updatedAt;

    @OneToMany(mappedBy = "productId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<ProductImage> productImages;

}
