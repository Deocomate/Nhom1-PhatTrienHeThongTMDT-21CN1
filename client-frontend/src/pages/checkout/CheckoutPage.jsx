// pages/checkout/CheckoutPage.jsx
"use client";

import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import {useAuth} from "@/auth/AuthProvider";
import {useCart} from "@/contexts/CartContext";
import {formatNumber} from "@/utils/NumberUltils";
import apiService from "@/lib/api/apiService"; // Import apiService
import React, {useState, useEffect} from "react";
import {useRouter} from "next/navigation";

export default function CheckoutPage() {
    const {user} = useAuth();
    const {cart, calculateTotal, clearCart} = useCart();
    const router = useRouter();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("offline"); // Default to COD (offline)
    const [orderNote, setOrderNote] = useState("");
    const [errors, setErrors] = useState([]); //for displaying errors


    useEffect(() => {
        if (user) {
            setFullName(user.fullName || "");
            setEmail(user.email || "");
            setPhoneNumber(user.phoneNumber || "");
            setAddress(user.address || "");
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        if (cart.length === 0) {
            setErrors(["Giỏ hàng của bạn đang trống."]);
            return;
        }

        const orderDetails = cart.map((item) => ({
            productId: item.id, quantity: item.quantity, // price and total price are no longer sent in the request.
        }));

        const orderData = {
            customerId: user.id, status: "waiting",  // Correct default status
            userId: 1, paymentMethod: paymentMethod,  // "offline" or "online"
            paymentStatus: "pending", //Correct default status.
            totalPrice: calculateTotal(), //remove
            orderDetails: orderDetails, note: orderNote,
        };


        try {
            const response = await apiService.post("/orders", orderData);

            if (response.code == 201) {
                // Order created successfully.
                // if (paymentMethod === 'online') {
                //     // Redirect user to VNPAY
                //     // const vnpayResponse = await apiService.get(`/vnpay/create/${response.id}`);
                //     //
                //     // if (vnpayResponse) {
                //     //     window.location.href = vnpayResponse; // Redirect to external URL
                //     //     return; // Stop further execution in this function
                //     // } else {
                //     //     setErrors(["Đã xảy ra lỗi khi tạo thanh toán VNPay."]);
                //     //     return; // Stop on error.
                //     // }
                // }
                clearCart();
                router.push(`/account`); // Or a thank-you page.
                alert("Đặt hàng thành công!");

            } else {
                setErrors(["Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại."]);
            }

        } catch (error) {
            console.error("Error creating order:", error);
            setErrors(["Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại."]);
        }
    };


    return (<>
        <BreadCrumbDefault name="Thanh Toán"/>
        <div className="ltn__checkout-area mb-105">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__checkout-inner">
                            <div className="ltn__checkout-single-content mt-50">
                                <h4 className="title-2">Chi Tiết Thanh Toán</h4>
                                <div className="ltn__checkout-single-content-info">
                                    <form onSubmit={handleSubmit}>
                                        {errors.length > 0 && (<div className="alert alert-danger" role="alert">
                                            <ul>
                                                {errors.map((error, index) => (<li key={index}>{error}</li>))}
                                            </ul>
                                        </div>)}
                                        <h6>Thông tin cá nhân</h6>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="input-item input-item-name ltn__custom-icon">
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        placeholder="Họ và Tên"
                                                        value={fullName}
                                                        onChange={(e) => setFullName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-item input-item-email ltn__custom-icon">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-item input-item-phone ltn__custom-icon">
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        placeholder="Số điện thoại"
                                                        value={phoneNumber}
                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-item input-item-website ltn__custom-icon">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        placeholder="Địa chỉ"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <h6>Phương thức thanh toán</h6>
                                                <div className="input-item">
                                                    <select
                                                        className="nice-select"
                                                        value={paymentMethod}
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                    >
                                                        <option value="offline">Thanh toán khi nhận hàng (COD)
                                                        </option>
                                                        <option value="online">VN Pay</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <h6>Tổng cộng</h6>
                                                <div className="input-item">
                                                    <input
                                                        type="text"
                                                        value={formatNumber(calculateTotal())}
                                                        disabled  // Vô hiệu hóa input
                                                        readOnly //Chỉ có thể đọc
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <h6>Ghi chú đơn hàng (tùy chọn)</h6>
                                        <div className="input-item input-item-textarea ltn__custom-icon">
                                                 <textarea
                                                     name="orderNote"
                                                     placeholder="Ghi chú về đơn hàng của bạn, ví dụ: lưu ý đặc biệt khi giao hàng."
                                                     value={orderNote}
                                                     onChange={(e) => setOrderNote(e.target.value)}
                                                 />
                                        </div>

                                        <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">
                                            Đặt Hàng
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}