// pages/account/AccountPage.jsx
"use client";

import {useAuth} from "@/auth/AuthProvider";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import React, {useState, useEffect} from "react";
import AccountDetail from "./AccountDetail";
import {Table} from "react-bootstrap"; // Import Table
import apiService from "@/lib/api/apiService";
import {formatNumber} from "@/utils/NumberUltils";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function AccountPage() {
    const params = useSearchParams()
    const {user, logout} = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state


    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            setError(null);
            try {
                if (user && user.id) { // Make sure user and user.id exist
                    const response = await apiService.get(`/orders/customer/${user.id}`);

                    if (response.code == 200) {
                        setOrders(response.data);

                    } else {
                        console.error("Order data is missing:", response);
                        setError("Không thể lấy dữ liệu đơn hàng."); // Set error message
                    }
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
                setError("Đã xảy ra lỗi khi tải đơn hàng."); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetch completes
            }
        };

        fetchOrders();
    }, [user]); // Depend on user, so it re-fetches if the user changes


    return (<>
        <BreadCrumbDefault name="Tài khoản của tôi"/>
        <div className="ltn__wishlist-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* PRODUCT TAB AREA START */}
                        <div className="ltn__product-tab-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="ltn__tab-menu-list mb-50">
                                            <div className="nav">
                                                <a
                                                    className="active show"
                                                    data-bs-toggle="tab"
                                                    href="#liton_tab_1_1"
                                                >
                                                    Dashboard <i className="fas fa-home"/>
                                                </a>
                                                <a data-bs-toggle="tab" href="#liton_tab_1_2">
                                                    Orders <i className="fas fa-file-alt"/>
                                                </a>
                                                <a data-bs-toggle="tab" href="#liton_tab_1_5">
                                                    Chi tiết tài khoản <i className="fas fa-user"/>
                                                </a>
                                                <a
                                                    href="#"
                                                    onClick={() => {
                                                        logout();
                                                    }}
                                                >
                                                    Đăng xuất <i className="fas fa-sign-out-alt"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade active show"
                                                id="liton_tab_1_1"
                                            >
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>
                                                        Xin chào <strong>{user?.fullName}</strong> (Nếu
                                                        không phải <strong>{user?.fullName}</strong>?{" "}
                                                        <small>
                                                            <a
                                                                href=""
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    logout();
                                                                }}
                                                            >
                                                                Đăng xuất
                                                            </a>
                                                        </small>{" "}
                                                        )
                                                    </p>
                                                    <p>
                                                        Từ trang tổng quan tài khoản của bạn, bạn có thể
                                                        xem <span>đơn hàng gần đây</span>, quản lý{" "}
                                                        <span>địa chỉ giao hàng và thanh toán</span>, và{" "}
                                                        <span>sửa mật khẩu và chi tiết tài khoản</span>.
                                                    </p>
                                                    {params.get("paymentStatus") == "success" ? (<>
                                                        <div className="alert alert-success">
                                                            Thanh toán thành công, vui lòng kiểm tra thông tin đơn hàng trong Email của bạn
                                                        </div>
                                                    </>) : (<></>)}
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="liton_tab_1_2">
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <div className="table-responsive">
                                                        <Table striped bordered hover>
                                                            <thead>
                                                            <tr>
                                                                <th>Mã đơn hàng</th>
                                                                <th>Ngày đặt</th>
                                                                <th>Trạng thái</th>
                                                                <th>Tổng tiền</th>
                                                                <th>Chi tiết</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {loading ? (<tr>
                                                                <td colSpan="5" className="text-center">
                                                                    Đang tải...
                                                                </td>
                                                            </tr>) : error ? (<tr>
                                                                <td colSpan="5"
                                                                    className="text-center text-danger">
                                                                    {error}
                                                                </td>
                                                            </tr>) : orders.length > 0 ? (orders.map((order) => (
                                                                <tr key={order.id}>
                                                                    <td>{order.id}</td>
                                                                    <td>
                                                                        {new Date(order.createdAt).toLocaleDateString("vi-VN")}
                                                                    </td>
                                                                    <td>{order.status}</td>
                                                                    <td>{formatNumber(order.totalPrice)}</td>
                                                                    <td>
                                                                        <Link
                                                                            href={`/account/orders/${order.id}`}
                                                                            className="btn btn-sm btn-outline-secondary"
                                                                        >
                                                                            Xem
                                                                        </Link>
                                                                    </td>
                                                                </tr>))) : (<tr>
                                                                <td colSpan="5" className="text-center">
                                                                    Bạn chưa có đơn hàng nào.
                                                                </td>
                                                            </tr>)}
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </div>
                                            </div>
                                            <AccountDetail user={user}></AccountDetail>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* PRODUCT TAB AREA END */}
                    </div>
                </div>
            </div>
        </div>
    </>);
}