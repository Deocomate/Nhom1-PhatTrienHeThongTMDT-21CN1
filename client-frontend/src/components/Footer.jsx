"use client";
import { useState } from "react";

export default function Footer() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-sm text-gray-600 p-2">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 gap-0 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div className="w-full md:w-full mb-6 md:mb-0">
                        {/* Mobile */}
                        <div className="md:hidden w-full">
                            {/* Button */}
                            <button
                                className="w-full text-left font-semibold pb-3 flex items-center"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Hệ thống nhà thuốc
                                <svg
                                    className="ml-auto w-5 h-5 opacity-25"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>

                            {/* Dropdown Content */}
                            {isDropdownOpen && (
                                <div className="w-full">
                                    <nav className="list-none space-y-1">
                                        <li className="pb-1">
                                            <a href="#">Hệ thống 326 nhà thuốc</a>
                                        </li>
                                        <li className="pb-1">
                                            <a href="#">Nội quy nhà thuốc</a>
                                        </li>
                                        <li className="pb-1">
                                            <a href="#">Chất lượng phục vụ</a>
                                        </li>
                                        <li className="pb-1">
                                            <a href="#">Chínhh sách đổi trả, bảo hành</a>
                                        </li>
                                        <li className="pb-1">
                                            <a href="#">Tích điểm tặng quà VIP</a>
                                        </li>
                                    </nav>
                                </div>
                            )}
                        </div>

                        {/* Desktop */}
                        <nav className="list-none hidden md:block">
                            <h3 className="pb-3 font-semibold">Hệ thống nhà thuốc</h3>
                            <li className="pb-1">
                                <a href="#">Hệ thống 326 nhà thuốc</a>
                            </li>
                            <li className="pb-1">
                                <a href="#">Nội quy nhà thuốc</a>
                            </li>
                            <li className="pb-1">
                                <a href="#">Chất lượng phục vụ</a>
                            </li>
                            <li className="pb-1">
                                <a href="#">Chính sách đổi trả, bảo hành</a>
                            </li>
                            <li className="pb-1">
                                <a href="#">Tích điểm Quà tặng VIP</a>
                            </li>
                        </nav>
                    </div>
                </div>
                <hr className="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>

            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 gap-0 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div className="w-full md:w-full mb-6 md:mb-0 col-span-3">
                        <nav className="list-none md:block">
                            <h3 className="font-semibold pb-3">Công Ty Cổ Phần Dược Phẩm Pharmacity</h3>
                            <li className="pb-1">
                                Trụ sở: 248A Nơ Trang Long, P.12, Q.Bình Thạnh, TP.Hồ Chí Minh
                            </li>
                            <li className="pb-1">
                                Điện thoại: 1800 6821
                            </li>
                            <li className="pb-1">
                                Email: cskh@pharmacity.vn
                            </li>
                            <li className="pb-1 underline pl-2">
                                <a href="#">Click here for business information</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full md:w-full mb-6 md:mb-0">
                        <nav className="list-none md:block">
                            <nav className="pb-5 flex space-x-5 pt-2">
                                <a href="#">
                                    <img
                                        src="/facebook.svg"
                                        alt="facebook"
                                        className="size-7"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/instagram.svg"
                                        alt="instagram"
                                        className="size-7"
                                    />
                                </a>
                            </nav>
                            <nav className="list-none">
                                <li className="pb-1">
                                    <a href="#">Hỗ trợ thanh toán</a>
                                </li>
                                <li className="pb-1">
                                    <a href="#">Hỗ trợ đặt hàng</a>
                                </li>
                            </nav>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
