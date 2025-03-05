package com.hau.api_backend.dto.request;

import lombok.Builder;
import lombok.Data;
@Builder
@Data
public class PaymentCreationRequest {
    private String vnpAmount;
    private String vnpOrderInfo;
    private String vnpPayDate;
    private String vnpTransactionStatus;
    private String vnpTxnRef;
    private int orderId;
}