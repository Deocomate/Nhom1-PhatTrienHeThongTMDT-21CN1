"use client";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import apiService from "@/lib/api/apiService";
import React, { Fragment, useEffect, useState } from "react";
import ProductListNoGrid from "./ProductListNoGrid";
import ProductListGrid from "./ProductListGrid";
import BannerWidget from "./product_detail/BannerWidget";
import ProductTypeWidget from "./ProductTypeWidget";
import TopRatedProducts from "./product_detail/TopRatedProducts";

export default function ProductListPage() {
  let [products, setProducts] = useState([]);
  let [pageIndex, setPageIndex] = useState(1);
  let [pageTotal, setPageTotal] = useState(0);
  let [pageSize, setPageSize] = useState(0);

  async function fetchProduct(pageIndex = 1) {
    let response = await apiService.get(
      "/pagination/products?page=" + pageIndex
    );
    let productsResponse = response.content;
    setProducts(productsResponse);
    setPageSize(response.pageable.pageSize);
    setPageTotal(response.totalPages);
  }

  useEffect(() => {
    fetchProduct(1);
  }, []);

  useEffect(() => {
    fetchProduct(pageIndex);
  }, [pageIndex]);

  return (
    <>
      <BreadCrumbDefault name="Shop Medicine"></BreadCrumbDefault>
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
                        <a
                          className="active show"
                          data-bs-toggle="tab"
                          href="#liton_product_grid"
                        >
                          <i className="fas fa-th-large" />
                        </a>
                        <a data-bs-toggle="tab" href="#liton_product_list">
                          <i className="fas fa-list" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="showing-product-number text-right">
                      <span>Showing 1–10 of 100 results</span>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Default Sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by new arrivals</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <ProductListGrid products={products}></ProductListGrid>
                <ProductListNoGrid products={products}></ProductListNoGrid>
              </div>
              <div className="ltn__pagination-area text-center">
                <div className="ltn__pagination">
                  <ul>
                    {pageIndex > 1 ? (
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setPageIndex(pageIndex - 1);
                          }}
                        >
                          <i className="fas fa-angle-double-left" />
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    {pageIndex > 1 ? (
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setPageIndex(pageIndex - 1);
                          }}
                        >
                          {pageIndex - 1}
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    <li className="active">
                      <a href="#">{pageIndex}</a>
                    </li>
                    {pageIndex < pageTotal ? (
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setPageIndex(pageIndex + 1);
                          }}
                        >
                          {pageIndex + 1}
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    {pageIndex < pageTotal ? (
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setPageIndex(pageIndex + 1);
                          }}
                        >
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                {/* Category Widget */}
                <div className="widget ltn__menu-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Product categories
                  </h4>
                  <ul>
                    <li>
                      <a href="portfolio-details.html">
                        Hand Sanitizer{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">
                        Lab N95 Face Mask{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">
                        Hand Gloves{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">
                        Medical Equipment{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">
                        New Arrival Product{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">
                        Uncategorized{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">
                        Special Offers{" "}
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Price Filter Widget */}
                <div className="widget ltn__price-filter-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Filter by price
                  </h4>
                  <div className="price_filter">
                    <div className="price_slider_amount">
                      <input type="submit" defaultValue="Your range:" />
                      <input
                        type="text"
                        className="amount"
                        name="price"
                        placeholder="Add Your Price"
                      />
                    </div>
                    <div className="slider-range" />
                  </div>
                </div>
                {/* Top Rated Product Widget */}
                <TopRatedProducts></TopRatedProducts>
                {/* Search Widget */}
                <div className="widget ltn__search-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Search Objects
                  </h4>
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search your keyword..."
                    />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                {/* Tagcloud Widget */}
                <div className="widget ltn__tagcloud-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Popular Tags
                  </h4>
                  <ul>
                    <li>
                      <a href="#">Body</a>
                    </li>
                    <li>
                      <a href="#">Doctor</a>
                    </li>
                    <li>
                      <a href="#">Drugs</a>
                    </li>
                    <li>
                      <a href="#">Eye</a>
                    </li>
                    <li>
                      <a href="#">Face</a>
                    </li>
                    <li>
                      <a href="#">Hand</a>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                    </li>
                    <li>
                      <a href="#">Medicine</a>
                    </li>
                    <li>
                      <a href="#">Price</a>
                    </li>
                    <li>
                      <a href="#">Sanitizer</a>
                    </li>
                    <li>
                      <a href="#">Virus</a>
                    </li>
                  </ul>
                </div>
                {/* Type Widget */}
                <ProductTypeWidget></ProductTypeWidget>
                {/* Banner Widget */}
                <BannerWidget></BannerWidget>
              </aside>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT DETAILS AREA END */}
      {/* CALL TO ACTION START (call-to-action-6) */}
      <div
        className="ltn__call-to-action-area call-to-action-6 before-bg-bottom"
        data-bs-bg="/assets/img/1.jpg--"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                <div className="coll-to-info text-color-white">
                  <h1>
                    Buy medical disposable face mask <br /> to protect your
                    loved ones
                  </h1>
                </div>
                <div className="btn-wrapper">
                  <a className="btn btn-effect-3 btn-white" href="shop.html">
                    Explore Products <i className="icon-next" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CALL TO ACTION END */}
    </>
  );
}
