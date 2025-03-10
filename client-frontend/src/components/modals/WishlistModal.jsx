"use client"
import React from "react";
import Link from "next/link";
import {redirect} from "next/navigation";

export const WishlistModal = ({product}) => {
    if (!product) return null;  //Handle case where product is not yet loaded

    return (<>
        {/* MODAL AREA START (Wishlist Modal) */}
        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
            <div
                className="modal fade"
                id={`liton_wishlist_modal${product.id}`} // Unique ID based on product ID
                tabIndex={-1}
                aria-labelledby={`liton_wishlist_modal_${product.id}_label`} // Unique label
                aria-hidden="true"
            >
                <div className="modal-dialog modal-md" role="document">
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
                                        <div className="col-12">
                                            <div className="modal-product-img">
                                                <img src={product.thumbnail} alt={product.title}/>
                                            </div>
                                            <div className="modal-product-info">
                                                <h5>
                                                    <Link href={`/products/${product.slug}`}>
                                                        {product.title}
                                                    </Link>
                                                </h5>
                                                <p className="added-cart">
                                                    <i className="fa fa-check-circle"/> Đã thêm vào danh sách yêu thích của bạn
                                                </p>
                                                <div className="btn-wrapper">
                                                    <Link href="/cart"
                                                          className="theme-btn-1 btn btn-effect-1 close"
                                                          data-bs-dismiss="modal"
                                                          aria-label="Close"
                                                          onClick={() => {
                                                              redirect("/wishlist")
                                                          }}>
                                                        Xem danh sách yêu thích
                                                    </Link>
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
        </div>
        {/* MODAL AREA END */}
    </>);
};