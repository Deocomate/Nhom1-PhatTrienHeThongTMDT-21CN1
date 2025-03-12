import Link from "next/link";
import React from "react";

export const AboutUsSection = () => {
    return (<>
            {/* ABOUT US AREA START (Placeholder content) */}
            <div className="ltn__about-us-area bg-image pt-115 pb-110" data-bs-bg="/assets/img/bg/26.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="about-us-img-wrap about-img-left">
                                {/* Placeholder Image - Replace with actual image */}
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="about-us-info-wrap">
                                <div className="section-title-area ltn__section-title-2--- mb-20">
                                    <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Khẩu
                                        trang N95</h6>
                                    <h1 className="section-title">
                                        Mặt nạ an toàn cấp A đang được bán. Nhanh lên!
                                    </h1>
                                    <p>
                                        Hơn 39.000 người làm việc cho chúng tôi tại hơn 70 quốc gia trên toàn thế giới.
                                        Phạm vi phủ sóng toàn cầu rộng lớn này, kết hợp với
                                        dịch vụ chuyên gia.
                                    </p>
                                </div>
                                <ul className="ltn__list-item-half clearfix">
                                    <li>
                                        <i className="flaticon-home-2"/>
                                        Than hoạt tính
                                    </li>
                                    <li>
                                        <i className="flaticon-mountain"/>
                                        Van thở
                                    </li>
                                    <li>
                                        <i className="flaticon-heart"/>
                                        6 lớp lọc
                                    </li>
                                    <li>
                                        <i className="flaticon-secure"/>
                                        Giặt lại & Tái sử dụng
                                    </li>
                                </ul>
                                <div className="btn-wrapper animated">
                                    <Link href="/products"
                                          className="ltn__secondary-color text-uppercase text-decoration-underline">Xem
                                        sản phẩm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ABOUT US AREA END */}</>)
}
