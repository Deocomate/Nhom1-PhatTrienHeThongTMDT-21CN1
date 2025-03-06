"use client"
import React from 'react'
import ProductCardGrid from './ProductCardGrid'

export default function ProductListGrid({ products = [] }) {

    console.log(products)

    return (
        <div className="tab-pane fade active show" id="liton_product_grid">
            <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                <div className="row">
                    {products.map((product, index) => (
                        <ProductCardGrid key={index} product={product}></ProductCardGrid>
                    ))}
                    {/* ltn__product-item */}
                </div>
            </div>
        </div>
    )
}
