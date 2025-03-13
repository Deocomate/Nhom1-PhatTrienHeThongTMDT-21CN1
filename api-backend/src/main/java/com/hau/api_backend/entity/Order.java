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

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    int customerId;
    int userId;
    @Enumerated(EnumType.STRING)
    Status status;
    @Enumerated(EnumType.STRING)
    PaymentMethod paymentMethod;
    @Enumerated(EnumType.STRING)
    PaymentStatus paymentStatus;
    int totalPrice;
    String note;
    @CreationTimestamp
    LocalDateTime createdAt;
    @UpdateTimestamp
    LocalDateTime updatedAt;

    public enum PaymentStatus {
        fail, pending, success
    }
    public enum PaymentMethod {
        online, offline
    }

    public enum Status{
        waiting, processing, shipped, admin_cancelled, customer_cancelled
    }

}
