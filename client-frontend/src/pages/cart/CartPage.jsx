/* ===== cart/CartPage.jsx ===== */
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import React from "react";
import {useCart} from "@/contexts/CartContext";
import Link from "next/link";
import {formatNumber} from "@/utils/NumberUltils";

export default function CartPage() {
    let {cart, updateQuantity, removeFromCart} = useCart();

    const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity);
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const cartSubtotal = calculateTotal();
    const shippingCost = 15000;
    const vat = 0; // You can calculate VAT if needed
    const orderTotal = cartSubtotal + shippingCost + vat;

    return (<>
        <BreadCrumbDefault name="Giỏ Hàng"></BreadCrumbDefault>
        <div className="liton__shoping-cart-area mb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping-cart-inner">
                            <div className="shoping-cart-table table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="cart-product-remove">Xóa</th>
                                        <th className="cart-product-image">Hình ảnh</th>
                                        <th className="cart-product-info">Sản phẩm</th>
                                        <th className="cart-product-price">Giá</th>
                                        <th className="cart-product-quantity">Số lượng</th>
                                        <th className="cart-product-subtotal">Tổng cộng</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cart.length === 0 ? (<tr>
                                        <td colSpan="6" className="text-center">
                                            Giỏ hàng của bạn đang trống. <Link href="/products">Tiếp tục mua
                                            sắm</Link>
                                        </td>
                                    </tr>) : (cart.map((item) => (<tr key={item.id}>
                                        <td className="cart-product-remove">
                                            <button onClick={() => handleRemoveFromCart(item.id)}>
                                                x
                                            </button>
                                        </td>
                                        <td className="cart-product-image">
                                            <Link href={`/products/${item.id}`}>
                                                <img src={item.productImages[0]?.url || "/assets/img/product/1.png"}
                                                     alt={item.title}/>
                                            </Link>
                                        </td>
                                        <td className="cart-product-info">
                                            <h4>
                                                <Link href={`/products/${item.id}`}>{item.title}</Link>
                                            </h4>
                                        </td>
                                        <td className="cart-product-price">{formatNumber(item.price)}</td>
                                        <td className="cart-product-quantity">
                                            <input
                                                type="number"
                                                name="qtybutton"
                                                value={item.quantity}
                                                className="form-control border-success"
                                                style={{
                                                    width: "130px"
                                                }}
                                                onChange={(e) => {
                                                    const newQuantity = parseInt(e.target.value, 10);
                                                    if (!isNaN(newQuantity) && newQuantity > 0) {
                                                        handleQuantityChange(item.id, newQuantity);
                                                    }
                                                }}
                                            />
                                        </td>
                                        <td className="cart-product-subtotal">{formatNumber(item.price * item.quantity)}</td>
                                    </tr>)))}
                                    <tr className="cart-coupon-row">
                                        <td>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    console.log("Update cart");
                                                }}
                                                className="btn theme-btn-2 btn-effect-2--">
                                                Cập nhật giỏ hàng
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="shoping-cart-total mt-50">
                                <h4>Tổng cộng</h4>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>Tổng tiền hàng</td>
                                        <td>{formatNumber(cartSubtotal)}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Tổng thanh toán</strong>
                                        </td>
                                        <td>
                                            <strong>{formatNumber(orderTotal)}</strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="btn-wrapper text-right">
                                    <Link href="/checkout"
                                          className="theme-btn-1 btn btn-effect-1">
                                        Thanh toán
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}