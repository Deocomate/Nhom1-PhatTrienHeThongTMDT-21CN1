import {FaArrowRotateLeft, FaSquareCheck} from "react-icons/fa6";
import {FaFacebookMessenger} from "react-icons/fa";
import {MdAccessTimeFilled} from "react-icons/md";
import React from "react";

export const HomePageSubBanner = () => {
    return (<>
        <div className="row g-1">
            <div className={"col-12 col-md-8"}>
                <div className="row g-5 h-100 m-auto">
                    <div className="col-6 col-md-6 py-2 m-auto">
                        <div className="d-flex align-items-center justify-content-start">
                            <FaSquareCheck style={{
                                fontSize: "50px",
                                backgroundColor: "green",
                                color: "white",
                                padding: "10px",
                                borderRadius: "50%",
                                marginRight: "10px"
                            }}/>
                            <div>
                                <p className={"fw-bold mb-0 text-success"}>CAM KẾT 100%</p>
                                <span>thuốc chính hãng</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 py-2 m-auto">
                        <div className="d-flex align-items-center justify-content-start">
                            <FaFacebookMessenger style={{
                                fontSize: "50px",
                                backgroundColor: "green",
                                color: "white",
                                padding: "10px",
                                borderRadius: "50%",
                                marginRight: "10px"
                            }}/>
                            <div>
                                <p className={"fw-bold mb-0 text-success"}>HỖ TRỢ NHIỆT TÌNH</p>
                                <span>24h / 7 ngày</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 py-2 m-auto">
                        <div className="d-flex align-items-center justify-content-start">
                            <MdAccessTimeFilled style={{
                                fontSize: "50px",
                                backgroundColor: "green",
                                color: "white",
                                padding: "10px",
                                borderRadius: "50%",
                                marginRight: "10px"
                            }}/>
                            <div>
                                <p className={"fw-bold mb-0 text-success"}>GIAO HÀNG NHANH CHÓNG</p>
                                <span>miễn phí nội thành</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 py-2 m-auto">
                        <div className="d-flex align-items-center justify-content-start">
                            <FaArrowRotateLeft style={{
                                fontSize: "50px",
                                backgroundColor: "green",
                                color: "white",
                                padding: "10px",
                                borderRadius: "50%",
                                marginRight: "10px"
                            }}/>
                            <div>
                                <p className={"fw-bold mb-0 text-success"}>ĐỔI TRẢ DỄ DÀNG</p>
                                <span>trong 1 - 3 ngày</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"col-12 col-md-4"}>
                <img src="/assets/default/banner-properties.png" alt=""/>
            </div>
        </div>
    </>)
}
