import ProductCardGrid from "@/pages/product/ProductCardGrid";
import React from "react";

export const FeaturedProductsSection = () => {
    return (<>
        {/* FEATURED PRODUCTS */}
        <div className="ltn__product-area ltn__product-gutter no-product-ratting pt-20 pt-65">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ltn__section-title-2 text-center">
                            <h1 className="section-title">Sản phẩm nổi bật</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                            {featuredProducts.map((product, index) => (
                                <ProductCardGrid key={product.id} product={product} index={index}/>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
