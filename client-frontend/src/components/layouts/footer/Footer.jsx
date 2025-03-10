// ===== layouts/footer/Footer.jsx =====
"use client";
import Link from "next/link";

export default function Footer() {
    return (<footer className="bg-light py-5"> {/* Sử dụng class của Bootstrap */}
        <div className="container">
            <div className="row">

                {/* Cột 1: Thông tin công ty */}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <div className="footer-logo mb-3">
                        <Link href="/">
                            <img src="/assets/img/logo.png" alt="Logo" className="img-fluid"
                                 style={{maxHeight: '50px'}}/> {/* Chỉnh chiều cao logo */}
                        </Link>
                    </div>
                    <p className="text-muted small">
                        An Khang - Chuyên cung cấp các sản phẩm chăm sóc sức khỏe chất lượng cao, uy tín.
                    </p>
                    <div className="text-muted small">
                        <p className="mb-1">
                            <i className="icon-placeholder me-2"></i>
                            19 Hàng Thiếc, Hoàn Kiếm, Hà Nội
                        </p>
                        <p className="mb-1">
                            <i className="icon-call me-2"></i>
                            <a href="tel:+84865095066" className="text-decoration-none text-reset">0865.095.066</a>
                        </p>
                        <p>
                            <i className="icon-mail me-2"></i>
                            <a href="mailto:ankhang@gmail.com"
                               className="text-decoration-none text-reset">ankhang@gmail.com</a>
                        </p>
                    </div>
                </div>

                {/* Cột 2: Liên kết nhanh */}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="mb-3">Liên Kết Nhanh</h5>
                    <ul className="list-unstyled small">
                        <li><Link href="/" className="text-decoration-none text-muted">Trang Chủ</Link></li>
                        <li><Link href="/products" className="text-decoration-none text-muted">Sản Phẩm</Link></li>
                        <li><Link href="/blog" className="text-decoration-none text-muted">Cẩm Nang Sức Khỏe</Link>
                        </li>
                        <li><Link href="/contact" className="text-decoration-none text-muted">Liên Hệ</Link></li>
                    </ul>
                </div>

                {/* Cột 3: Hỗ trợ khách hàng */}
                <div className="col-lg-4 col-md-12">
                    <h5 className="mb-3">Hỗ Trợ Khách Hàng</h5>
                    <ul className="list-unstyled small">
                        <li><Link href="/login" className="text-decoration-none text-muted">Đăng Nhập</Link></li>
                        <li><Link href="/account" className="text-decoration-none text-muted">Tài Khoản</Link></li>
                        <li><Link href="/cart" className="text-decoration-none text-muted">Giỏ Hàng</Link></li>
                        <li><Link href="/faq" className="text-decoration-none text-muted">Câu Hỏi Thường Gặp</Link>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bản quyền */}
            <div className="text-center mt-4 border-top pt-3">
                <p className="text-muted small">
                    © {new Date().getFullYear()} An Khang. Đã đăng ký bản quyền. | Thiết kế bởi Nhóm 1 - 21CN1 - Hệ thống TMĐT
                </p>
            </div>
        </div>
    </footer>);
}