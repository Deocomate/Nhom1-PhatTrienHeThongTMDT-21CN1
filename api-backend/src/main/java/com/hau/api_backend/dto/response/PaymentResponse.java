package com.hau.api_backend.dto.response;

import lombok.Data;

@Data
public class PaymentResponse {
    private int id;
    private String vnpAmount;
    private String vnpOrderInfo;
    private String vnpPayDate;
    private String vnpTransactionStatus;
    private String vnpTxnRef;
    private int orderId;
}