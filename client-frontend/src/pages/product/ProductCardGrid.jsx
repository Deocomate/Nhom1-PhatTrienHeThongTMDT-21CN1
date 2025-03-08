/* ===== product/ProductCardGrid.jsx ===== */
import React from "react";
import Link from "next/link";
import {QuickViewModal} from "@/components/modals/QuickViewModal";
import {AddToCartModal} from "@/components/modals/AddToCartModal";
import {WishlistModal} from "@/components/modals/WishlistModal";

export default function ProductCardGrid({product, index}) {
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    };

    return (<>
        <div key={index} className="col-xl-4 col-sm-6 col-6">
            <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                    <Link href={"/products/" + product.slug}>
                        <img src={product.thumbnail} alt="#"/>
                    </Link>
                    <div className="product-badge">
                        <ul>
                            <li className="sale-badge">New</li>
                        </ul>
                    </div>
                    <div className="product-hover-action">
                        <ul>
                            <li>
                                <a href="#" title="Quick View" data-bs-toggle="modal"
                                   data-bs-target={`#quick_view_modal_product_${product.id}`}>
                                    <i className="far fa-eye"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Add to Cart" data-bs-toggle="modal"
                                   data-bs-target={`#add_to_cart_modal_${product.id}`}>
                                    <i className="fas fa-shopping-cart"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Wishlist" data-bs-toggle="modal"
                                   data-bs-target={`#liton_wishlist_modal${product.id}`}>
                                    <i className="far fa-heart"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-info">
                    <h2 className="product-title">
                        <Link href={"/products/" + product.slug}>{product.title}</Link>
                    </h2>
                    <div className="product-price">
                        <span>{formatPrice(product.price)} đ</span>
                    </div>
                </div>
            </div>
            <QuickViewModal product={product}/>
            <AddToCartModal product={product}/>
            <WishlistModal product={product}/>
        </div>
    </>);
}