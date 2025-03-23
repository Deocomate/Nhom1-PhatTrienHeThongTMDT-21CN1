"use client";
import React from "react";
import ProductCardGrid from "./ProductCardGrid";
import {QuickViewModal} from "@/components/modals/QuickViewModal";
import {AddToCartModal} from "@/components/modals/AddToCartModal";
import {WishlistModal} from "@/components/modals/WishlistModal";

export default function ProductListGrid({products = []}) {
    return (<div className="tab-pane fade active show" id="liton_product_grid">
        <div className="ltn__product-tab-content-inner ltn__product-grid-view">
            <div className="row g-3">
                {products.map((product, index) => (<ProductCardGrid key={index} product={product}></ProductCardGrid>))}
            </div>
        </div>
    </div>);
}
