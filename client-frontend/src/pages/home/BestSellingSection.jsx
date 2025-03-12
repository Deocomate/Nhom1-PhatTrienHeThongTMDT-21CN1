import ProductCardGrid from "@/pages/product/ProductCardGrid";
import React from "react";

export const BestSellingSection = ({bestSellingProducts}) => {
    return (<>
        {/* BEST SELLING ITEMS */}
        <div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ltn__section-title-2 text-center">
                            <h1 className="section-title">Sản phẩm bán chạy</h1>
                        </div>
                    </div>
                </div>
                <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                    {bestSellingProducts.map((product, index) => (
                        <ProductCardGrid key={product.id} product={product} index={index}/>))}
                </div>
            </div>
        </div>
    </>)
}
