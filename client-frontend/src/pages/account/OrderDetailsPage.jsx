"use client"

import {useRouter} from 'next/navigation';
import React, {useState, useEffect} from 'react';
import apiService from '@/lib/api/apiService';
import {formatNumber} from '@/utils/NumberUltils';
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";

const OrderDetailsPage = ({orderId}) => {
    const router = useRouter();
    const id = orderId;
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            if (id) {
                setLoading(true);
                setError(null);
                try {
                    const response = await apiService.get(`/orders/${id}`);
                    if (response.code == 200) {
                        setOrder(response.data);
                    } else {
                        setError('Không tìm thấy đơn hàng.');
                    }
                } catch (error) {
                    setError('Đã xảy ra lỗi khi tải chi tiết đơn hàng.');
                    console.error("Error fetching order details:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchOrderDetails().then();
    }, [id]);

    if (loading) {
        return <div>Đang tải...</div>;
    }

    if (error) {
        return <div>Lỗi: {error}</div>;
    }

    if (!order) {
        return <div>Không tìm thấy đơn hàng.</div>;
    }
    console.log(order)

    return (<>
            <BreadCrumbDefault name={`Chi tiết đơn hàng #${order.id}`}></BreadCrumbDefault>
            <div className="container">
                <h1>Chi Tiết Đơn Hàng #{order.id}</h1>
                <p>Ngày đặt hàng: {new Date(order.createdAt).toLocaleString()}</p>  {/* Format date */}
                <p>Trạng thái: {order.status}</p>
                <p>Phương thức thanh toán: {order.paymentMethod}</p>
                <p>Trạng thái thanh toán: {order.paymentStatus}</p>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                    {order.orderDetails.map((detail) => (<tr key={detail.id}>
                        <td>{detail.productTitle}</td>
                        <td>{detail.quantity}</td>
                        <td>{formatNumber(detail.price)}</td>
                        <td>{formatNumber(detail.price * detail.quantity)}</td>
                    </tr>))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end">
                            <strong>Tổng cộng:</strong>
                        </td>
                        <td>{formatNumber(order.totalPrice)}</td>
                    </tr>
                    </tfoot>
                </table>
            </div>

        </>

    );
};
export default OrderDetailsPage