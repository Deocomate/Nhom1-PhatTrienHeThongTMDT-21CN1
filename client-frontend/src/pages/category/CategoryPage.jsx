"use client"
import React, {Fragment, useEffect, useState} from "react";
import apiService from "@/lib/api/apiService";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import ProductListGrid from "@/pages/product/ProductListGrid";
import ProductListNoGrid from "@/pages/product/ProductListNoGrid";
import Link from "next/link";
import TopRatedProducts from "@/pages/product/product_detail/TopRatedProducts";
import ProductTypeWidget from "@/pages/product/ProductTypeWidget";
import BannerWidget from "@/pages/product/product_detail/BannerWidget";
import {SearchProductWidget} from "@/pages/product/SearchProductWidget";
import {useSearchParams} from "next/navigation";

export const CategoryPage = ({slug}) => {
    let [products, setProducts] = useState();
    let [categories, setCategories] = useState();
    let [category, setCategory] = useState()

    const fetchCategoryDetail = async (slug) => {
        let response = await apiService.get(`/categories/${slug}`)
        if (response.code == 200) {
            console.log(response.data)
            setCategory(response.data)
        } else {
            alert("Không tồn tại sản phẩm này !!!")
        }
    }

    const fetchProductByCategorySlug = async (slug) => {
        try {
            let response = await apiService.get(`/categories/productWithCategory/${slug}?pageIndex=0&pageSize=9`);
            console.log(response)
            if (response && response.data) {
                setProducts(response.data.products);
                setCategories(response.data.categories);
            } else {
                console.error("Failed to fetch products or categories by slug");
            }
        } catch (error) {
            console.error("Error fetching products by category slug:", error);
        }
    }

    useEffect(() => {
        if (slug) {
            fetchCategoryDetail(slug).then()
            fetchProductByCategorySlug(slug).then();
        }
    }, []);

    return (<>
        <BreadCrumbDefault name={"Danh mục sản phẩm > " + category?.name}></BreadCrumbDefault>
        {/* PRODUCT DETAILS AREA START */}
        <div className="ltn__product-area ltn__product-gutter mb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ltn__shop-options">
                            <ul>
                                <li>
                                    <div className="ltn__grid-list-tab-menu ">
                                        <div className="nav">
                                            <a className="active show"
                                               data-bs-toggle="tab"
                                               href="#liton_product_grid">
                                                <i className="fas fa-th-large"/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="liton_product_grid">
                                <ProductListGrid products={products}></ProductListGrid>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                            {/* Category Widget */}
                            <div className="widget ltn__menu-widget">
                                <h4 className="ltn__widget-title ltn__widget-title-border">
                                    Danh mục sản phẩm
                                </h4>
                                <ul>
                                    {categories && categories.map((category, index) => (<Fragment key={index}>
                                        <li>
                                            <Link href={"/category/" + category.slug}>
                                                {category.name}
                                                <span><i className="fas fa-long-arrow-alt-right"/></span>
                                            </Link>
                                        </li>
                                    </Fragment>))}
                                </ul>
                            </div>
                            {/* Search Widget */}
                            <SearchProductWidget></SearchProductWidget>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        {/* PRODUCT DETAILS AREA END */}
    </>);
}