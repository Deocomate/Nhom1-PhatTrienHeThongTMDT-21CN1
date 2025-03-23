/* ===== product/ProductCardGrid.jsx ===== */
import React from "react";
import Link from "next/link";
import {QuickViewModal} from "@/components/modals/QuickViewModal";
import {AddToCartModal} from "@/components/modals/AddToCartModal";
import {WishlistModal} from "@/components/modals/WishlistModal";
import {formatNumber} from "@/utils/NumberUltils";
import {useCart} from "@/contexts/CartContext";
import {useWishList} from "@/contexts/WishListContext";

export default function ProductCardGrid({product, index}) {

    let {cart, addToCart} = useCart()
    let {wishlist, addToWishList} = useWishList()

    return (<>
        <div key={index} className="col-xl-4 col-sm-6 col-6">
            <div className="ltn__product-item ltn__product-item-3 text-center h-100 mb-0">
                <div className="product-img">
                    <Link href={"/products/" + product.slug}>
                        <img src={product.thumbnail} className={"p-3"} style={{
                            width: "100%", height: "200px", objectFit: "cover"
                        }} alt="#"/>
                    </Link>
                    <div className="product-hover-action">
                        <ul>
                            <li>
                                <a href="#" title="Quick View" data-bs-toggle="modal"
                                   data-bs-target={`#quick_view_modal_product_${product.id}`}>
                                    <i className="far fa-eye"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Add to Cart" onClick={() => {
                                    addToCart(product, 1)
                                }} data-bs-toggle="modal"
                                   data-bs-target={`#add_to_cart_modal_${product.id}`}>
                                    <i className="fas fa-shopping-cart"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Wishlist" data-bs-toggle="modal"
                                   onClick={() => {
                                       addToWishList(product)
                                   }}
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
                        <span>{formatNumber(product.price)}</span>
                    </div>
                </div>
            </div>
            <QuickViewModal product={product}/>
            <AddToCartModal product={product}/>
            <WishlistModal product={product}/>
        </div>
    </>);
}