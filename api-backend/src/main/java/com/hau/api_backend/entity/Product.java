package com.hau.api_backend.entity;

import com.hau.api_backend.converter.StringListConverter;
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
    int Id;

    String title;
    String thumbnail;
    String brand;
    String type;

    @Column(name = "active_ingredient")
    String activeIngredient;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = StringListConverter.class)
    List<String> images; // Lưu danh sách URL ảnh dưới dạng chuỗi (phân tách bằng dấu phẩy)

    @Column(columnDefinition = "TEXT")
    String indications;

    String manufacturer;

    @Column(name = "category_id")
    int categoryId;

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

    @CreationTimestamp
    LocalDateTime createdAt;

    @CreationTimestamp
    LocalDateTime updatedAt;
}
