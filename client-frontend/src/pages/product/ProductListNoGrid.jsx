"use client";
import React from "react";
import ProductCardNoGrid from "./ProductCardNoGrid";

export default function ProductListNoGrid({ products = [] }) {
  return (
    <div className="tab-pane fade" id="liton_product_list">
      <div className="ltn__product-tab-content-inner ltn__product-list-view">
        <div className="row">
          {/* ltn__product-item */}
          {products.map((product, index) => (
            <ProductCardNoGrid
              key={index}
              product={product}
            ></ProductCardNoGrid>
          ))}
        </div>
      </div>
    </div>
  );
}
