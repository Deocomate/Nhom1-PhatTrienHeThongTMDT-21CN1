package com.hau.api_backend.service;

import com.hau.api_backend.entity.Customer;
import com.hau.api_backend.entity.Order;
import com.hau.api_backend.entity.OrderDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.text.NumberFormat;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public void sendOrderConfirmationEmail(Order order, Customer customer, List<OrderDetail> orderDetails) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom(sender, "An Khang Pharmacy");
        helper.setTo(customer.getEmail());
        helper.setSubject("Xác Nhận Đơn Hàng #" + order.getId());

        // Định dạng tiền tệ Việt Nam
        NumberFormat currencyFormat = NumberFormat.getCurrencyInstance(new Locale("vi", "VN"));

        // Định dạng ngày giờ
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

        StringBuilder content = new StringBuilder();
        content.append("<div style='font-family: Arial, sans-serif; color: #333333; max-width: 600px; margin: 0 auto; border: 1px solid #dddddd; padding: 20px;'>");

        content.append("<h2 style='color: #007bff; text-align: center;'>Xác Nhận Đơn Hàng</h2>");
        content.append("<p>Xin chào, <b>").append(customer.getFullName()).append("</b>!</p>");
        content.append("<p>Cảm ơn bạn đã đặt hàng tại An Khang Pharmacy. Đơn hàng của bạn đã được xác nhận với các thông tin chi tiết sau:</p>");

        content.append("<div style='margin-top: 20px;'>");
        content.append("<h3 style='color: #007bff;'>Thông tin khách hàng:</h3>");
        content.append("<p><b>Họ và tên:</b> ").append(customer.getFullName()).append("</p>");
        content.append("<p><b>Địa chỉ nhận hàng:</b> ").append(customer.getAddress()).append("</p>");
        content.append("<p><b>Số điện thoại liên hệ:</b> ").append(customer.getPhoneNumber()).append("</p>");
        content.append("</div>");

        content.append("<div style='margin-top: 20px;'>");
        content.append("<h3 style='color: #007bff;'>Thông tin đơn hàng:</h3>");
        content.append("<p><b>ID đơn hàng:</b> #").append(order.getId()).append("</p>");
        content.append("<p><b>Ngày tạo đơn hàng:</b> ").append(order.getCreatedAt().format(dateFormatter)).append("</p>");
        content.append("<p><b>Trạng thái đơn hàng:</b> ").append(convertOrderStatus(order.getStatus().toString())).append("</p>");
        content.append("<p><b>Trạng thái thanh toán:</b> ").append(convertPaymentStatus(order.getPaymentStatus().toString())).append("</p>");

        String paymentMethod = order.getPaymentMethod().toString().equalsIgnoreCase("ONLINE") ? "Thanh toán qua ví VNPay" : "Thanh toán khi nhận hàng";
        content.append("<p><b>Phương thức thanh toán:</b> ").append(paymentMethod).append("</p>");
        content.append("</div>");

        content.append("<div style='margin-top: 20px;'>");
        content.append("<h3 style='color: #007bff;'>Chi tiết đơn hàng:</h3>");
        content.append("<table style='border-collapse: collapse; width: 100%; background-color: #f9f9f9;'>");
        content.append("<thead><tr><th style='border: 1px solid #bbbbbb; padding: 8px; text-align: left;'>Sản phẩm</th><th style='border: 1px solid #bbbbbb; padding: 8px; text-align: left;'>Số lượng</th><th style='border: 1px solid #bbbbbb; padding: 8px; text-align: left;'>Đơn giá</th><th style='border: 1px solid #bbbbbb; padding: 8px; text-align: left;'>Thành tiền</th></tr></thead>");
        content.append("<tbody>");
        for (OrderDetail detail : orderDetails) {
            content.append("<tr>");
            content.append("<td style='border: 1px solid #bbbbbb; padding: 8px;'>").append(detail.getProduct().getTitle()).append("</td>");
            content.append("<td style='border: 1px solid #bbbbbb; padding: 8px;'>").append(detail.getQuantity()).append("</td>");
            content.append("<td style='border: 1px solid #bbbbbb; padding: 8px;'>").append(currencyFormat.format(detail.getPriceAtOrder()/ detail.getQuantity())).append("</td>");
            content.append("<td style='border: 1px solid #bbbbbb; padding: 8px;'>").append(currencyFormat.format(detail.getPriceAtOrder())).append("</td>");
            content.append("</tr>");
        }
        content.append("</tbody></table>");
        content.append("</div>");

        content.append("<div style='margin-top: 20px; font-size: 1.2em; font-weight: bold;'>");
        content.append("<b>Tổng tiền đơn hàng:</b> <span style='color: red;'>").append(currencyFormat.format(order.getTotalPrice())).append("</span>");
        content.append("</div>");

        content.append("<p style='font-style: italic;'>Chúng tôi sẽ liên hệ với bạn qua email hoặc số điện thoại trong thời gian sớm nhất.</p>");
        content.append("<p style='font-style: italic;'>Mọi thắc mắc xin liên hệ về email: deocomate@gmail.com hoặc hotline: 0986.666.888.</p>");
        content.append("<p style='font-style: italic;'>Xin chân thành cảm ơn!</p>");
        content.append("<p style='color: #777777;'>Đội ngũ Admin An Khang Pharmacy</p>");
        content.append("<p style='color: #777777;'>Nhóm 1 21CN1</p>");

        content.append("</div>"); // Đóng container chính

        helper.setText(content.toString(), true);

        mailSender.send(message);
    }

    private String convertOrderStatus(String status) {
        return switch (status) {
            case "waiting" -> "Đang chờ xử lý";
            case "processing" -> "Đang xử lý";
            case "shipped" -> "Đã giao hàng";
            case "admin_cancelled" -> "Đã hủy bởi Admin";
            case "customer_cancelled" -> "Đã hủy bởi Khách hàng";
            default -> status;
        };
    }

    private String convertPaymentStatus(String status) {
        return switch (status) {
            case "pending" -> "Chờ thanh toán";
            case "success" -> "Đã thanh toán";
            case "fail" -> "Thanh toán thất bại";
            default -> status;
        };
    }
}