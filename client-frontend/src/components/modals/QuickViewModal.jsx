"use client"
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useCart} from "@/contexts/CartContext";
import {useAuth} from "@/auth/AuthProvider";

export const QuickViewModal = ({product}) => {
    if (!product) return null;

    let [quantity, setQuantity] = useState(1);

    let {cart, addToCart, updateQuantity, removeFromCart, clearCart, calculateTotal} = useCart()

    console.log(product)

    const quantityInputRef = useRef(null); // Create a ref

    const handleAddToCart = (e) => {
        e.preventDefault();
        const quantity = parseInt(quantityInputRef.current.value, 10);

        if (!isNaN(quantity) && quantity > 0) {
            console.log(`Adding ${quantity} of ${product.title} to cart`);

            addToCart(product, quantity)

            console.log(cart)
        } else {
            // Handle invalid quantity (e.g., show an error message)
            console.error("Invalid quantity entered.");
        }
    };


    return (<>
        {/* MODAL AREA START (Quick View Modal) */}
        <div className="ltn__modal-area ltn__quick-view-modal-area">
            <div
                className="modal fade"
                id={`quick_view_modal_product_${product.id}`} // Unique ID based on product ID
                tabIndex={-1}
                aria-labelledby={`quick_view_modal_product_${product.id}_label`} // Unique label
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="ltn__quick-view-modal-inner">
                                <div className="modal-product-item">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="modal-product-img">
                                                <img src={product.thumbnail} alt={product.title}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="modal-product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li className="review-total">
                                                            <a href="#"> (95 Reviews)</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3>{product.title}</h3>
                                                <div className="product-price">
                                                    <span>{product.price}đ</span>
                                                </div>
                                                <div className="modal-product-meta ltn__product-details-menu-1">
                                                    <ul>
                                                        <li>
                                                            <strong>Nhãn hiệu:</strong>
                                                            <span>
                                                              <Link href={""}>
                                                                {product.brand.name}
                                                              </Link>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <strong>Danh mục:</strong>
                                                            <span>
                                                              <Link href={`/category/${product.categoryId}`}>
                                                                {product.categoryId}
                                                              </Link>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="ltn__product-details-menu-2">
                                                    <ul>
                                                        <li>
                                                            <input
                                                                onChange={(e) => {
                                                                    e.preventDefault()
                                                                    setQuantity(e.target.value)
                                                                }}
                                                                className="form-control-lg"
                                                                type="number"
                                                                value={quantity}
                                                                min={1}
                                                                ref={quantityInputRef}
                                                                name="qtybutton"
                                                                // className="cart-plus-minus-box"
                                                            />
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                onClick={handleAddToCart}
                                                                className="theme-btn-1 btn btn-effect-1"
                                                                title="Add to Cart"
                                                                data-bs-toggle="modal"
                                                                data-bs-target={`#add_to_cart_modal_${product.id}`}
                                                            >
                                                                <i className="fas fa-shopping-cart"/>
                                                                <span>Thêm vào giỏ hàng</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="ltn__product-details-menu-3">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className=""
                                                                title="Wishlist"
                                                                data-bs-toggle="modal"
                                                                data-bs-target={`#liton_wishlist_modal_${product.id}`}
                                                            >
                                                                <i className="far fa-heart"/>
                                                                <span>Thêm vào Wishlist</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* MODAL AREA END */}
    </>);
};