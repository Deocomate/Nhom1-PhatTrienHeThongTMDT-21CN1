"use client";
import {useState} from "react";

export default function Footer() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <footer className="bg-gray-100 text-gray-600 text-sm">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 gap-0 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div className="w-full md:w-full mb-6 md:mb-0">
                        {/* Dropdown in mobile */}
                        <div className="md:hidden w-full">
                            {/* Dropdown Button */}
                            <button className="w-full text-left font-semibold pb-3 flex items-center"
                                    onClick={() => toggleDropdown(1)}>
                                Về An Khang Pharmacy
                                <svg className="ml-auto w-5 h-5 opacity-25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {/* Dropdown Content (Hidden by default) */}
                            {openDropdown === 1 && (
                                <div
                                    className={`${openDropdown === 1 ? "block" : "hidden"} w-full`}
                                >
                                    <nav className="list-none space-y-1">
                                        <li className="pb-1"><a href="#">Giới thiệu</a></li>
                                        <li className="pb-1"><a href="#">Hệ thống cửa hàng</a></li>
                                        <li className="pb-1"><a href="#">Quy chế hoạt động</a></li>
                                        <li className="pb-1"><a href="#">Thể lệ chương trình thẻ thànhh viên</a></li>
                                        <li className="pb-1"><a href="#">Câu hỏi thường gặp</a></li>
                                        <li className="pb-1 text-blue-500"><a href="#">Bệnh viện</a></li>
                                    </nav>
                                </div>
                            )}
                        </div>

                        {/* Show full in desktop */}
                        <nav className="list-none hidden md:block">
                            <h3 className="pb-3 font-semibold">Về An Khang Pharmacy</h3>
                            <li className="pb-1"><a href="#">Giới thiệu</a></li>
                            <li className="pb-1"><a href="#">Hệ thống cửa hàng</a></li>
                            <li className="pb-1"><a href="#">Quy chế hoạt động</a></li>
                            <li className="pb-1"><a href="#">Thể lệ chương trình thẻ thànhh viên</a></li>
                            <li className="pb-1"><a href="#">Câu hỏi thường gặp</a></li>
                            <li className="pb-1 text-blue-500"><a href="#">Bệnh viện</a></li>
                        </nav>
                    </div>
                    <div className="w-full md:w-full mb-6 md:mb-0">
                        {/* Dropdown in mobile */}
                        <div className="md:hidden w-full">
                            {/* Dropdown Button */}
                            <button className="w-full text-left font-semibold pb-3 flex items-center"
                                    onClick={() => toggleDropdown(2)}>
                                Danh mục
                                <svg className="ml-auto w-5 h-5 opacity-25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {/* Dropdown Content (Hidden by default) */}
                            {openDropdown === 2 && (
                                <div
                                    className={`${openDropdown === 2 ? "block" : "hidden"} w-full`}
                                >
                                    <nav className="list-none space-y-1">
                                        <li className="pb-1"><a href='#'>Thuốc</a></li>
                                        <li className="pb-1"><a href='#'>Tra cứu bệnh</a></li>
                                        <li className="pb-1"><a href='#'>Thực phẩm chức năng</a></li>
                                        <li className="pb-1"><a href='#'>Chăm sóc cá nhân</a></li>
                                        <li className="pb-1"><a href='#'>Mẹ và Bé</a></li>
                                        <li className="pb-1"><a href='#'>Chăm sóc sắc đẹp</a></li>
                                        <li className="pb-1"><a href='#'>Thiết bị y tế</a></li>
                                        <li className="pb-1"><a href='#'>Sản phẩm tiện lợi</a></li>
                                        <li className="pb-1"><a href='#'>Doanh nghiệp</a></li>
                                        <li className="pb-1"><a href='#'>Nhãn hàng An Khang</a></li>
                                        <li className="pb-1"><a href='#'>Khuyến mãi HOT</a></li>
                                        <li className="pb-1"><a href='#'>Góc sức khỏe</a></li>
                                        <li className="pb-1"><a href='#'>Chăm sóc sức khỏe</a></li>
                                    </nav>
                                </div>
                            )}
                        </div>

                        {/* Show full in desktop */}
                        <nav className="list-none hidden md:block">
                            <h3 className="pb-3 font-semibold">Danh mục</h3>
                            <li className="pb-1"><a href='#'>Thuốc</a></li>
                            <li className="pb-1"><a href='#'>Tra cứu bệnh</a></li>
                            <li className="pb-1"><a href='#'>Thực phẩm chức năng</a></li>
                            <li className="pb-1"><a href='#'>Chăm sóc cá nhân</a></li>
                            <li className="pb-1"><a href='#'>Mẹ và Bé</a></li>
                            <li className="pb-1"><a href='#'>Chăm sóc sắc đẹp</a></li>
                            <li className="pb-1"><a href='#'>Thiết bị y tế</a></li>
                            <li className="pb-1"><a href='#'>Sản phẩm tiện lợi</a></li>
                            <li className="pb-1"><a href='#'>Doanh nghiệp</a></li>
                            <li className="pb-1"><a href='#'>Nhãn hàng An Khang</a></li>
                            <li className="pb-1"><a href='#'>Khuyến mãi HOT</a></li>
                            <li className="pb-1"><a href='#'>Góc sức khỏe</a></li>
                            <li className="pb-1"><a href='#'>Chăm sóc sức khỏe</a></li>
                        </nav>
                    </div>
                    <div className="w-full md:w-full mb-6 md:mb-0">
                        {/* Dropdown in mobile */}
                        <div className="md:hidden w-full">
                            {/* Dropdown Button */}
                            <button className="w-full text-left font-semibold pb-3 flex items-center"
                                    onClick={() => toggleDropdown(3)}>
                                Tổng đài miễn cước
                                <svg className="ml-auto w-5 h-5 opacity-25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {/* Dropdown Content (Hidden by default) */}
                            {openDropdown === 3 && (
                                <div
                                    className={`${openDropdown === 3 ? "block" : "hidden"} w-full`}
                                >
                                    <nav className="list-none space-y-1">
                                        <li className="pb-1">Hỗ trợ đặt hàng</li>
                                        <li className="pb-1"><a href='#' className="text-blue-500">1800 6821</a> (Nhánh 1)</li>
                                        <li className="pb-1">Thông tin nhà thuốc, khuyến mãi</li>
                                        <li className="pb-1"><a href='#' className="text-blue-500">1800 6821</a> (Nhánh 2)</li>
                                        <li className="pb-1">Khiếu nại, góp ý</li>
                                        <li className="pb-1"><a href='#' className="text-blue-500">1800 6821</a> (Nhánh 2)</li>
                                    </nav>
                                </div>
                            )}
                        </div>

                        {/* Show full in desktop */}
                        <nav className="list-none hidden md:block">
                            <h3 className="pb-3 font-semibold">Tổng đài miễn cước</h3>
                            <li className="pb-1">Hỗ trợ đặt hàng</li>
                            <li className="pb-1"><a href='#' className="text-blue-500">1800 6821</a> (Nhánh 1)</li>
                            <li className="pb-1">Thông tin nhà thuốc, khuyến mãi</li>
                            <li className="pb-1"><a href='#' className="text-blue-500">1800 6821</a> (Nhánh 2)</li>
                            <li className="pb-1">Khiếu nại, góp ý</li>
                            <li className="pb-1"><a href='#' className="text-blue-500">1800 6821</a> (Nhánh 2)</li>
                        </nav>
                    </div>
                    <div className="w-full md:w-full mb-6 md:mb-0">
                        {/* Dropdown in mobile */}
                        <div className="md:hidden w-full">
                            {/* Dropdown Button */}
                            <button className="w-full text-left font-semibold pb-3 flex items-center"
                                    onClick={() => toggleDropdown(4)}>
                                Điều khoản và chính sách
                                <svg className="ml-auto w-5 h-5 opacity-25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                    </path>
                                </svg>
                            </button>

                            {/* Dropdown Content (Hidden by default) */}
                            {openDropdown === 4 && (
                                <div
                                    className={`${openDropdown === 4 ? "block" : "hidden"} w-full`}
                                >
                                    <nav className="list-none space-y-1">
                                        <li className="pb-1"><a href='#'>Terms & Conditions</a></li>
                                        <li className="pb-1"><a href='#'>Legal Information</a></li>
                                        <li className="pb-1 text-blue-500"><a href='#'>Privacy Policy</a></li>
                                        <li className="pb-1"><a href='#'>Email Collection Policy</a></li>
                                        <li className="pb-1 text-blue-500"><a href='#'>Influencer Terms & Conditions</a></li>
                                    </nav>
                                </div>
                            )}
                        </div>

                        {/* Show full in desktop */}
                        <nav className="list-none hidden md:block">
                            <h3 className="pb-3 font-semibold">Điều khoản và chính sách</h3>
                            <li className="pb-1"><a href='#'>Chính sách đổi trả và bảo hành</a></li>
                            <li className="pb-1"><a href='#'>Chính sách giao hàng</a></li>
                            <li className="pb-1"><a href='#'>Chính sách bảo mật</a></li>
                            <li className="pb-1 text-blue-500"><a href='#'>Chính sách bảo vệ dữ liệu cá nhân</a></li>
                            <li className="pb-1"><a href='#'>Chính sách thanh toán</a></li>
                        </nav>

                    </div>
                </div>
                <hr className="h-px my-0 bg-gray-200 border-0"></hr>
            </div>

            {/* 2 */}
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 gap-0 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div className="w-full md:w-full mb-6 md:mb-0">
                        <nav className="list-none md:block">
                            <h3 className="font-semibold">An Khang Pharmacy</h3>
                        </nav>
                    </div>
                    <div className="w-full md:w-full mb-6 md:mb-0 col-span-2">
                        <nav className="list-none md:block">
                            <li className="pb-1"><a>Công ty cổ phần dược phẩm An Khang</a></li>
                            <li className="pb-1"><a>Địa chỉ: Hà Nội, Việt Nam</a></li>
                            <li className="pb-1"><a>Điện thoại: 1800 6821</a></li>
                            <li className="pb-1 underline"><a href="">Email: cskh@ankhangpharmacy.vn</a></li>
                        </nav>
                    </div>
                    <div className="w-full md:w-full mb-6 md:mb-0">
                        <nav className="list-none md:block">
                            <nav className="pb-5 flex space-x-5 pt-2">
                                <a href=""><img src="/favicon.ico" alt=""
                                                className="size-7"></img></a>
                                <a href=""><img src="/favicon.ico" alt=""
                                                className="size-7"></img></a>
                            </nav>
                            <nav className="list-none">
                                <li className="pb-1"><a href='#'>Phương thức thanh toán</a></li>
                                <li className="pb-1"><a href='#'>Phương thức giao hàng</a></li>
                            </nav>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}