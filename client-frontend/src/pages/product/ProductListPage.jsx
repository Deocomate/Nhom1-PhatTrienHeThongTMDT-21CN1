"use client";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import apiService from "@/lib/api/apiService";
import React, {Fragment, useEffect, useState} from "react";
import ProductListGrid from "./ProductListGrid";
import BannerWidget from "./product_detail/BannerWidget";
import ProductTypeWidget from "./ProductTypeWidget";
import TopRatedProducts from "./product_detail/TopRatedProducts";
import {router} from "next/client";
import Link from "next/link";
import {ProductPagination} from "@/pages/product/ProductPagination";

export default function ProductListPage() {
    let [products, setProducts] = useState([]);
    let [pageIndex, setPageIndex] = useState(0); // Start from page 0 as API expects
    let [pageTotal, setPageTotal] = useState(0);
    let [pageSize, setPageSize] = useState(0);
    let [totalElements, setTotalElements] = useState(0);
    let [categoryParentId, setCategoryParentId] = useState(null);
    let [categories, setCategories] = useState([]);

    async function fetchProduct(pageIndex = 0) {
        try {
            let response = await apiService.get(`/products?pageIndex=${pageIndex}&pageSize=9`);
            console.log(response)
            if (response) {
                let productsResponse = response.content;
                setProducts(productsResponse);
                setPageSize(response.size);
                setPageTotal(response.totalPages);
                setPageIndex(response.number + 1); // Display page numbers starting from 1
                setTotalElements(response.totalElements);
            } else {
                console.error("Failed to fetch products");
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    const handlePageChange = (newPage) => {
        fetchProduct(newPage - 1).then();  // API expects page index starting from 0
    };

    const fetchCategories = async (parentId = null) => {
        if (parentId == null) {
            let response = await apiService.get("/categories");
            setCategories(response.content);
        }
    }

    const fetchProductByCategoryId = async (parentId = null) => {
        if (parentId == null) {
            let response = await apiService.get("categories/productWithCategory");
            console.log("Categories", response.data.categories)
            setCategories(response.data.categories);
        }
    }

    useEffect(() => {
        fetchProduct(0).then() // Load initial page (page 0 for API)
        fetchCategories(categoryParentId).then()
    }, []);

    useEffect(() => {
        // fetchProduct(1).then()
        fetchCategories(categoryParentId).then()
    }, [categoryParentId]);


    return (<>
        <BreadCrumbDefault name="Sản phẩm"></BreadCrumbDefault>
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
                                <li>
                                    <div className="showing-product-number text-right">
                      <span>
                        Hiển thị {pageSize * (pageIndex - 1) + 1}–
                          {Math.min(pageSize * pageIndex, totalElements)} of{" "}
                          {totalElements} kết quả
                      </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="short-by text-center">
                                        <select className="nice-select">
                                            <option>Sắp xếp cơ bản</option>
                                            <option>Độ phổ biến</option>
                                            <option>Sắp xếp theo giá: Cao đến thấp</option>
                                            <option>Sắp xếp theo giá: Thấp đến cao</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <ProductListGrid products={products}></ProductListGrid>
                        </div>
                        <ProductPagination
                            currentPage={pageIndex}
                            totalPages={pageTotal}
                            onPageChange={handlePageChange}
                        />
                    </div>
                    <div className="col-lg-4">
                        <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                            {/* Category Widget */}
                            <div className="widget ltn__menu-widget">
                                <h4 className="ltn__widget-title ltn__widget-title-border">
                                    Danh mục sản phẩm
                                </h4>
                                <ul>
                                    {categories.filter(cate => cate.parentId == categoryParentId).map((category, index) => (
                                        <Fragment key={index}>
                                            <li>
                                                <Link href={"/category/" + category.slug}>
                                                    {category.name}
                                                    <span><i className="fas fa-long-arrow-alt-right"/></span>
                                                </Link>
                                            </li>
                                        </Fragment>))}
                                </ul>
                            </div>
                            {/*<TopRatedProducts></TopRatedProducts>*/}
                            {/* Search Widget */}
                            <div className="widget ltn__search-widget">
                                <h4 className="ltn__widget-title ltn__widget-title-border">
                                    Tìm kiếm sản phẩm
                                </h4>
                                <form action="#">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Tìm kiếm theo từ khoá..."
                                    />
                                    <button type="submit">
                                        <i className="fas fa-search"/>
                                    </button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </>);
}