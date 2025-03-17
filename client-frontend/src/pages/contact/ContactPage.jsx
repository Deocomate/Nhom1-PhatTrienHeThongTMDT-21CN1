"use client";
import {useState, useEffect} from "react";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import Image from "next/image";
import apiService from "@/lib/api/apiService";
import {toast} from "react-toastify";

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: "", email: "", phoneNumber: "", address: "", content: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({}); // Lưu trữ các lỗi validation

    // Hàm kiểm tra dữ liệu đầu vào
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Vui lòng nhập tên của bạn.";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Vui lòng nhập email.";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ.";
            isValid = false;
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Vui lòng nhập số điện thoại.";
            isValid = false;
        } else if (!/^\d{10,11}$/.test(formData.phoneNumber)) { // Ví dụ: Kiểm tra sđt 10 hoặc 11 số
            newErrors.phoneNumber = "Số điện thoại không hợp lệ."
            isValid = false;
        }

        if (!formData.address.trim()) {
            newErrors.address = "Vui lòng nhập địa chỉ.";
            isValid = false;
        }

        if (!formData.content.trim()) {
            newErrors.content = "Vui lòng nhập nội dung tin nhắn.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value,
        }));

        // Xóa lỗi validation khi người dùng bắt đầu nhập lại
        if (errors[name]) {
            setErrors((prevErrors) => ({...prevErrors, [name]: ""}));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Dừng lại nếu form không hợp lệ
        }

        setLoading(true);
        setErrors({}); // Reset lỗi trước khi gửi

        try {
            const response = await apiService.post("/customerCares", formData);

            if (response.code === 200) {
                setFormData({
                    fullName: "", email: "", phoneNumber: "", address: "", content: "",
                });
                toast.success("Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi trong thời gian sớm nhất."); // Dùng toast.success
            } else {
                console.log(response)
                toast.error("Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau.");
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
                toast.error("Vui lòng kiểm tra lại thông tin.");
            } else {
                toast.error("Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (<>
        <BreadCrumbDefault name="Liên hệ"/>
        <div className="ltn__contact-address-area mb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                            <div className="ltn__contact-address-icon">
                                <Image
                                    src="/assets/img/icons/10.png"
                                    alt="Icon"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <h3>Địa chỉ Email</h3>
                            <p>
                                info@ankhang.com <br/>
                                support@ankhang.com
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                            <div className="ltn__contact-address-icon">
                                <Image
                                    src="/assets/img/icons/11.png"
                                    alt="Icon"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <h3>Số điện thoại</h3>
                            <p>
                                +84 123 456 789 <br/>
                                +84 987 654 321
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                            <div className="ltn__contact-address-icon">
                                <Image
                                    src="/assets/img/icons/12.png"
                                    alt="Icon"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <h3>Địa chỉ văn phòng</h3>
                            <p>
                                Khu phố 6, P.Linh Trung <br/>
                                Tp.Thủ Đức, TP.HCM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ltn__contact-message-area mb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__form-box contact-form-box box-shadow white-bg">
                            <h4 className="title-2">Gửi tin nhắn cho chúng tôi</h4>

                            <form onSubmit={handleSubmit} noValidate>
                                {/* noValidate để tắt validation mặc định của HTML5 */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder="Nhập tên của bạn"
                                                value={formData.fullName}
                                                onChange={handleChange}

                                            />
                                            {errors.fullName && (
                                                <div className="invalid-feedback">{errors.fullName}</div>)}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-email ltn__custom-icon">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Nhập email của bạn"
                                                value={formData.email}
                                                onChange={handleChange}

                                            />
                                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-phone ltn__custom-icon">
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                placeholder="Nhập số điện thoại của bạn"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                            />
                                            {errors.phoneNumber && (
                                                <div className="invalid-feedback">{errors.phoneNumber}</div>)}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-address ltn__custom-icon">
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="Nhập địa chỉ của bạn"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                            {errors.address && (
                                                <div className="invalid-feedback">{errors.address}</div>)}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-item input-item-textarea ltn__custom-icon">
                        <textarea
                            name="content"
                            placeholder="Nhập nội dung tin nhắn"
                            value={formData.content}
                            onChange={handleChange}

                        />
                                            {errors.content && (
                                                <div className="invalid-feedback">{errors.content}</div>)}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="btn-wrapper mt-0">
                                            <button
                                                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                type="submit"
                                                disabled={loading}
                                            >
                                                {loading ? "Đang gửi..." : "Gửi tin nhắn"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="google-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.44359132815!2d106.80086547501756!3d10.853826357756822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1715848225382!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </>);
};