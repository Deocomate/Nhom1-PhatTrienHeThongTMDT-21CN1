import React, {Fragment, useRef, useEffect} from "react";
import Link from "next/link";
import {clsx} from "clsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import {register} from 'swiper/element/bundle';
// Import Swiper styles
import 'swiper/css';


export const HomePageBlogs = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        register(); // Register Swiper custom elements
    }, []);

    const blogItems = [  //  Tạo mảng dữ liệu cho các blog items.  Thay thế bằng dữ liệu thật của bạn.
        {
            image: "/assets/default/homepage-blog-2.png",
            title: "Medpro đặt lịch khám nhanh - giải pháp tiếp cận y tế thông minh (Mobile 1)",
            date: "1 tháng trước"
        }, {
            image: "/assets/default/homepage-blog-2.png",
            title: "Medpro đặt lịch khám nhanh - giải pháp tiếp cận y tế thông minh (Mobile 2)",
            date: "1 tháng trước"
        }, {
            image: "/assets/default/homepage-blog-2.png",
            title: "Medpro đặt lịch khám nhanh - giải pháp tiếp cận y tế thông minh (Mobile 3)",
            date: "1 tháng trước"
        }, {
            image: "/assets/default/homepage-blog-2.png",
            title: "Medpro đặt lịch khám nhanh - giải pháp tiếp cận y tế thông minh (Mobile 4)",
            date: "1 tháng trước",
        }, {
            image: "/assets/default/homepage-blog-2.png",
            title: "Medpro đặt lịch khám nhanh - giải pháp tiếp cận y tế thông minh (Mobile 5)",
            date: "1 tháng trước"
        }, {
            image: "/assets/default/homepage-blog-2.png",
            title: "Medpro đặt lịch khám nhanh - giải pháp tiếp cận y tế thông minh (Mobile 6)",
            date: "1 tháng trước"
        }];


    return (<>
        <h3>Bản tin sức khoẻ</h3>
        <div className={"blogs-contain"}>
            <div className="parent">
                <div className="div1">
                    <div className={"blog-item"}>
                        <Link href={"/"}>
                            <img src="/assets/default/homepage-blog-1.png" alt="" style={{
                                width: "100%", height: "250px", objectFit: "cover", borderRadius: "20px"
                            }}/>
                            <h4 className={"mb-0"}>Medpro đặt lịch khám nhanh - giải
                                pháp tiếp
                                cận y tế thông
                                minh</h4>
                            <span>1 tháng trước</span>
                        </Link>
                    </div>
                    <div className={"d-flex justify-content-center py-3"}>
                        <Link className={"text-decoration-underline fw-bold"} href={"/blogs"}>
                            Xem thêm bài viết khác
                        </Link>
                    </div>
                </div>
                {/*Desktop Render*/}
                {[2, 3, 4, 5, 6, 7].map((item, index) => (<Fragment key={index}>
                    <div className={clsx(["div" + item, "d-none d-md-block"])} style={{
                        display: "flex", alignItems: "center",
                    }}>
                        <div className={"blog-item"}>
                            <Link href={"/"}>
                                <div className={"d-flex"}>
                                    <img src="/assets/default/homepage-blog-2.png" alt=""
                                         className={"me-2"}
                                         style={{
                                             width: "100px", height: "auto", objectFit: "cover", borderRadius: "10px"
                                         }}/>
                                    <div>
                                        <h5 className={"mb-0 fs-6"}>Medpro đặt lịch khám nhanh - giải pháp tiếp
                                            cận y tế
                                            thông minh</h5>
                                        <span>1 tháng trước</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Fragment>))}
            </div>
        </div>

        <style jsx>{`
            .parent {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(3, 1fr);
                gap: 10px;
            }

            .div1 {
                grid-row: span 3 / span 3;
            }


            .div3 {
                grid-column-start: 2;
                grid-row-start: 2;
            }

            .div4 {
                grid-column-start: 2;
                grid-row-start: 3;
            }

            .div5 {
                grid-column-start: 3;
                grid-row-start: 1;
            }

            .div6 {
                grid-column-start: 3;
                grid-row-start: 2;
            }

            .div7 {
                grid-column-start: 3;
                grid-row-start: 3;
            }


            @media (max-width: 768px) {
                .parent {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    grid-template-rows: repeat(1, 1fr);
                    gap: 10px;
                }

                .div1 {
                    grid-row-start: 1;
                    grid-row-end: 1;
                }


                .div2, .div3, .div4, .div5, .div6, .div7 {
                    display: none;
                    grid-row-start: 1;
                    grid-row-end: 1;
                }
            }
        `}</style>
    </>);
};