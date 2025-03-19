"use client"
import Link from 'next/link'
import React from 'react'
import {useCart} from "@/contexts/CartContext";
import {formatNumber} from "@/utils/NumberUltils";
import {HeaderSearch} from "@/components/layouts/header/HeaderSearch";

export default function HeaderMiddle() {

    let {cart, calculateTotal} = useCart()

    return (<>
        <div className="ltn__header-middle-area">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="site-logo">
                            <a href="/">
                                <img src="/assets/img/logo.png" alt="Logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="col header-contact-serarch-column d-none d-xl-block">
                        <div className="header-contact-search">
                            {/* header-feature-item */}
                            <div className="header-feature-item d-none">
                                <div className="header-feature-icon">
                                    <i className="icon-phone"/>
                                </div>
                                <div className="header-feature-info">
                                    <h6>Số điện thoại</h6>
                                    <p>
                                        <a href="tel:0865095066">0865-095-066</a>
                                    </p>
                                </div>
                            </div>
                            <HeaderSearch></HeaderSearch>
                        </div>
                    </div>
                    <div className="col">
                        {/* header-options */}
                        <div className="ltn__header-options">
                            <ul>
                                <li className="d-none--- ">
                                    {/* header-search-1 */}
                                    <div className="header-search-wrap d-block d-xl-none">
                                        <div className="header-search-1">
                                            <div className="search-icon">
                                                <i className="icon-search  for-search-show"/>
                                                <i className="icon-cancel  for-search-close"/>
                                            </div>
                                        </div>
                                        <div className="header-search-1-form">
                                            <form id="#" method="get" action="#">
                                                <input
                                                    type="text"
                                                    name="search"
                                                    defaultValue=""
                                                    placeholder="Search here..."
                                                />
                                                <button type="submit">
                                                        <span>
                                                            <i className="icon-search"/>
                                                        </span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-none---">
                                    {/* user-menu */}
                                    <div className="ltn__drop-menu user-menu">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="icon-user"/>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <Link href="/login">Đăng nhập</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/register">Đăng ký</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/account">Tài khoản</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/wishlist">Sản phẩm yêu thích</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    {/* mini-cart 2 */}
                                    <div className="mini-cart-icon mini-cart-icon-2">
                                        <a
                                            href="#ltn__utilize-cart-menu"
                                            className="ltn__utilize-toggle"
                                        >
                                                <span className="mini-cart-icon">
                                                    <i className="icon-shopping-cart"/>
                                                </span>
                                            <h6>
                                                <span>Giỏ Hàng</span>
                                                <span
                                                    className="ltn__secondary-color">{formatNumber(calculateTotal())}</span>
                                            </h6>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
