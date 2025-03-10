import React, {Fragment} from 'react'
import {useCart} from "@/contexts/CartContext";
import {formatNumber} from "@/utils/NumberUltils";

export default function CartMenuUtilize() {

    let {cart, calculateTotal, removeFromCart} = useCart()

    return (<>
        {/* Utilize Cart Menu Start */}
        <div
            id="ltn__utilize-cart-menu"
            className="ltn__utilize ltn__utilize-cart-menu"
        >
            <div className="ltn__utilize-menu-inner ltn__scrollbar">
                <div className="ltn__utilize-menu-head">
                    <span className="ltn__utilize-menu-title">Giỏ hàng</span>
                    <button className="ltn__utilize-close">×</button>
                </div>
                <div className="mini-cart-product-area ltn__scrollbar">
                    {cart.map((item, index) => (<Fragment key={index}>
                        <div className="mini-cart-item clearfix">
                            <div className="mini-cart-img">
                                <a href="#">
                                    <img src={item.thumbnail} alt="Image"/>
                                </a>
                                <span className="mini-cart-item-delete">
                                    <i onClick={() => {
                                        removeFromCart(item.id)
                                    }} className="icon-cancel"/>
                                </span>
                            </div>
                            <div className="mini-cart-info">
                                <h6>
                                    <a href="#">{item.title}</a>
                                </h6>
                                <span className="mini-cart-quantity">{item.quantity} x {formatNumber(item.price)}</span>
                            </div>
                        </div>
                    </Fragment>))}
                </div>
                <div className="mini-cart-footer">
                    <div className="mini-cart-sub-total">
                        <h5>
                            Tổng cộng: <span>{formatNumber(calculateTotal())}</span>
                        </h5>
                    </div>
                    <div className="btn-wrapper">
                        <a href="/cart" className="theme-btn-1 btn btn-effect-1">
                            Trang giỏ hàng
                        </a>
                        <a href="/checkout" className="theme-btn-2 btn btn-effect-2">
                            Trang thanh toán
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Utilize Cart Menu End */}
    </>)
}
