import React from 'react'

export default function ProductCardGrid({ product, index }) {
    return (
        <div key={index} className="col-xl-4 col-sm-6 col-6">
            <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                    <a href="product-details.html">
                        <img src={product.thumbnail} alt="#" />
                    </a>
                    <div className="product-badge">
                        <ul>
                            <li className="sale-badge">New</li>
                        </ul>
                    </div>
                    <div className="product-hover-action">
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quick_view_modal"
                                >
                                    <i className="far fa-eye" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Add to Cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_to_cart_modal"
                                >
                                    <i className="fas fa-shopping-cart" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#liton_wishlist_modal"
                                >
                                    <i className="far fa-heart" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-info">
                    <div className="product-ratting">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fas fa-star" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-star" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-star" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="far fa-star" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h2 className="product-title">
                        <a href="product-details.html">{product.title}</a>
                    </h2>
                    <div className="product-price">
                        <span>$149.00</span>
                        <del>$162.00</del>
                    </div>
                </div>
            </div>
        </div>
    )
}
