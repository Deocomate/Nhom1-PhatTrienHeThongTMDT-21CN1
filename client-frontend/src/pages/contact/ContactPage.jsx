"use client";
import { useState } from "react";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import Image from "next/image";
import apiService from "@/lib/api/apiService";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "", // Updated to match API field
    email: "",
    content: "", // Updated to match API field (using message as content)
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await apiService.post("/contact", {
        fullName: formData.fullName,
        email: formData.email,
        content: formData.content 
      });

      if (response && response.status === 201) { 
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          content: "",
        });
      } else {
        setError("Không thể gửi tin nhắn. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setError("Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BreadCrumbDefault name="Liên hệ"></BreadCrumbDefault>
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
                  info@ankhang.com <br />
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
                  +84 123 456 789 <br />
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
                  Khu phố 6, P.Linh Trung <br />
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
                {success && (
                  <div className="alert alert-success" role="alert">
                    Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="fullName" 
                          placeholder="Nhập tên của bạn"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
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
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-subject ltn__custom-icon">
                        <input
                          type="text"
                          name="subject" 
                          placeholder="Nhập tiêu đề (tùy chọn)"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-item input-item-textarea ltn__custom-icon">
                        <textarea
                          name="content" 
                          placeholder="Nhập nội dung tin nhắn"
                          value={formData.content}
                          onChange={handleChange}
                          required
                        ></textarea>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9788990472425!2d105.84537831164401!3d21.03353028753236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abbe60e203cb%3A0xad322a16a1be4362!2zMTkgUC4gSMOgbmcgVGhp4bq_YywgSMOgbmcgR2FpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSAxMTA3MDEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1742044353080!5m2!1svi!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};