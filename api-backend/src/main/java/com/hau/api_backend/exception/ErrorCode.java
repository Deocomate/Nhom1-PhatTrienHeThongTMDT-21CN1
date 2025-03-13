package com.hau.api_backend.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {
    EMAIL_ALREADY_EXISTS("Email đã tồn tại"),
    CUSTOMER_NOT_FOUND("Không tìm thấy khách hàng"),
    USER_NOT_FOUND("Không tìm thấy người dùng"),
    PRODUCT_NOT_FOUND("Không tìm thấy sản phẩm"),
    BLOG_CATEGORY_NOT_FOUND("Không tìm thấy danh mục bài viết"),
    BLOG_NOT_FOUND("Không tìm thấy bài viết"),
    ORDER_NOT_SUPPORTED("Đơn hàng không hỗ trợ thanh toán trực tuyến"),
    ORDER_SUCCESS("Đơn hàng đang được giao hoặc đã được giao"),
    ORDER_CANCELED_BY_CUSTOMER("Đơn hàng đã bị hủy bởi khách hàng"),
    ORDER_CANCELED_BY_ADMIN("Đơn hàng đã bị hủy bởi quản trị viên"),
    ORDER_NOT_FOUND_FOR_CUSTOMER("Không tìm thấy đơn hàng cho khách hàng này"),
    INCORRECT_EMAIL_OR_PASSWORD("Email hoặc mật khẩu không chính xác"),
    FAILED_TO_GENERATE_TOKEN("Không thể tạo token"),
    TOKEN_VERIFICATION_FAILED("Xác minh token thất bại"),
    TOKEN_PARSING_FAILED("Phân tích cú pháp token thất bại"),
    TOKEN_MISSING("Token bị thiếu"),
    TOKEN_EXPIRED("Token đã hết hạn"),
    INVALID_TOKEN("Token không hợp lệ"),
    TOKEN_INVALIDATED("Token đã bị vô hiệu"),
    COMMENT_NOT_FOUND("Không tìm thấy bình luận"),
    INSUFFICIENT_QUANTITY("Số lượng không đủ"),
    OUT_OF_STOCK("Hết hàng"),
    WISHLIST_NOT_FOUND("Không tìm thấy sản phẩm yêu thích"),
    CATEGORY_NOT_FOUND("Không tìm thấy danh mục"),
    ORDER_NOT_FOUND("Đơn hàng không tồn tại");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }
}