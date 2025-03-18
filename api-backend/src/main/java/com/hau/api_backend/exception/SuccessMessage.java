package com.hau.api_backend.exception;

import lombok.Getter;

@Getter
public enum SuccessMessage {
    CREATED_CUSTOMER("Tạo khách hàng thành công"),
    CREATED_ORDER("Tạo đơn hàng thành công"),
    UPDATE_CUSTOMER("Cập nhật khách hàng thành công"),
    GET_ALL_CUSTOMER("Lấy tất cả khách hàng thành công"),
    GET_CUSTOMER_BY_ID("Lấy khách hàng theo ID thành công"),
    DELETE_CUSTOMER("Xóa khách hàng thành công"),
    GET_ALL_PRODUCT("Lấy tất cả sản phẩm thành công"),
    GET_PRODUCT_BY_ID("Lấy sản phẩm theo ID thành công"),
    GET_BLOG_CATEGORY_BY_ID("Lấy danh mục blog theo ID thành công"),
    UPDATE_ORDER("Cập nhật đơn hàng thành công"),
    GET_ORDER_BY_ID("Lấy đơn hàng theo ID thành công"),
    GET_ORDER_BY_CUSTOMER_ID("Lấy tất cả đơn hàng theo ID khách hàng thành công"),
    GET_ALL_ORDER("Lấy tất cả đơn hàng thành công"),
    LOGIN_SUCCESS("Đăng nhập thành công"),
    INTROSPECTION_SUCCESS("Kiểm tra token thành công"),
    LOGOUT_SUCCESS("Đăng xuất thành công"),
    CREATED_CUSTOMER_CARE("Tạo liên hệ thành công"),
    GET_ALL_CUSTOMER_CARE("Lấy thông tin liên hệ thành công"),
    SEND_COMMENT_SUCCESS("Gửi bình luận thành công"),
    GET_COMMENT_BY_PRODUCT_ID_SUCCESS("Lấy bình luận theo ID sản phẩm thành công"),
    GET_COMMENT_SUCCESS("Lấy bình luận thành công"),
    GET_ALL_REPLY_COMMENT_SUCCESS("Lấy tất cả phản hồi bình luận thành công"),
    SENT_REPLY_COMMENT("Gửi phản hồi bình luận thành công"),
    GET_ALL_WISHLIST_SUCCESS("Lấy tất cả sản phẩm yêu thích thành công"),
    CREATED_WISHLIST("Tạo sản phẩm yêu thích thành công"),
    DELETED_WISHLIST("Đã xóa sản phẩm yêu thích"),
    GET_WISHLIST_BY_PRODUCTID("Lấy sản phẩm yêu thích theo productId thành công"),
    GET_WISHLIST_BY_CUSTOMER("Lấy sản phẩm yêu thích theo customerId thành công"),
    GET_ALL_CATETORY("Lấy tất cả danh mục thành công"),
    GET_CATEGORY_BY_PARRENT_ID("Lấy danh mục theo parrentId"),
    GET_ALL_PRODUCT_WITH_CATEGORY("Lấy tất cả sản phẩm với danh mục thành công"),
    GET_ALL_PRODUCT_WITH_CATEGORY_SLUG("Lấy tất cả sản phẩm với slug danh mục thành công"),
    GET_ALL_BLOG_CATEGORIES("Lấy tất cả danh mục blog thành công"),
    GET_BLOG_BY_SLUG("Lấy bài viết theo slug thành công"),
    GET_CATEGORY_BY_SlUG("Lấy danh mục theo slug thành công"),
    GET_CATEGORY_BY_ID("Lấy danh mục theo id");
    private final String message;

    SuccessMessage(String message) {
        this.message = message;
    }
}