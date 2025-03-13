// pages/wishlist/WishlistPage.jsx
"use client"

import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import React from "react";
import {useWishList} from "@/contexts/WishListContext";
import Link from "next/link";
import {formatNumber} from "@/utils/NumberUltils";
import {useCart} from "@/contexts/CartContext"; // Import useCart

export function WishlistPage() {
    const {wishlist, removeFromWishList} = useWishList();
    const {addToCart} = useCart(); // Get addToCart from CartContext


    const handleRemove = (productId) => {
        removeFromWishList(productId);
    };

    const handleAddToCart = (product) => {
        addToCart(product, 1); // Add product with quantity 1
        removeFromWishList(product.id);  // Optionally remove from wishlist after adding to cart
    };


    return (<>
        <BreadCrumbDefault name="Danh mục yêu thích"/>
        <div className="liton__wishlist-area mb-105">
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
                                        <th className="cart-product-add-cart">Thêm vào giỏ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {wishlist.length === 0 ? (<tr>
                                        <td colSpan="5" className="text-center">
                                            Danh sách yêu thích của bạn đang trống. <Link href="/products">Khám
                                            phá sản phẩm</Link>
                                        </td>
                                    </tr>) : (wishlist.map((item) => (<tr key={item.id}>
                                        <td className="cart-product-remove">
                                            <button onClick={() => handleRemove(item.id)}>x</button>
                                        </td>
                                        <td className="cart-product-image">
                                            <Link href={`/products/${item.id}`}>
                                                <img
                                                    src={item.thumbnail || "/assets/img/product/1.png"}
                                                    alt={item.title}
                                                />
                                            </Link>
                                        </td>
                                        <td className="cart-product-info">
                                            <h4>
                                                <Link href={`/products/${item.id}`}>{item.title}</Link>
                                            </h4>
                                        </td>
                                        <td className="cart-product-price">{formatNumber(item.price)}</td>

                                        <td className="cart-product-add-cart">
                                            <button
                                                className="submit-button-1"
                                                onClick={() => handleAddToCart(item)}
                                            >
                                                Thêm vào giỏ
                                            </button>
                                        </td>
                                    </tr>)))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}