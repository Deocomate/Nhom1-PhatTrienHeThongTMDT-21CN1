"use client"
import React, {Fragment, useEffect, useState} from "react";
import TopRatedProducts from "../product/product_detail/TopRatedProducts";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import PopularTags from "./PopularTags";
import BannerWidget from "../product/product_detail/BannerWidget";
import LatestBlogs from "./LatestBlogs";
import TopCategories from "./TopCategories";
import SearchObjects from "./SearchObjects";
import apiService from "@/lib/api/apiService";

export default function BlogPage() {

    let [blogs, setBlogs] = useState([])

    async function fetchBlogs() {
        let response = await apiService.get("/blog")
        console.log(response)
        if (response.code == 200) {
            setBlogs(response.data)
            console.log(response.data)
        }
    }

    useEffect(() => {
        fetchBlogs().then()
    }, []);

    return (<>
        <BreadCrumbDefault name="News Feed"></BreadCrumbDefault>
        <div className="ltn__blog-area mb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ltn__blog-list-wrap">
                            {blogs.map((blog, index) => (<Fragment key={index}>
                                {/* Blog Item */}
                                <div className="ltn__blog-item ltn__blog-item-5">
                                    <div className="ltn__blog-img">
                                        <a href="blog-details.html">
                                            <img src="/assets/img/blog/31.jpg" alt="Image"/>
                                        </a>
                                    </div>
                                    <div className="ltn__blog-brief">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-category">
                                                    <a href="#">Real Estate</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="ltn__blog-title">
                                            <a href="blog-details.html">
                                                Lorem Ipsum has been the industry's standard dummy text
                                                ever since
                                            </a>
                                        </h3>
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-eye"/>
                                                        232 Views
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="far fa-comments"/>
                                                        35 Comments
                                                    </a>
                                                </li>
                                                <li className="ltn__blog-date">
                                                    <i className="far fa-calendar-alt"/>
                                                    June 22, 2020
                                                </li>
                                            </ul>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore
                                        </p>
                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-author">
                                                        <a href="#">
                                                            <img src="/assets/img/blog/author.jpg" alt="#"/>
                                                            By: Ethan
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__blog-btn">
                                                <a href="blog-details.html">
                                                    <i className="fas fa-arrow-right"/>
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>))}
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__pagination-area text-center">
                                    <div className="ltn__pagination">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-angle-double-left"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">1</a>
                                            </li>
                                            <li className="active">
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">...</a>
                                            </li>
                                            <li>
                                                <a href="#">10</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-angle-double-right"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <aside className="sidebar-area blog-sidebar ltn__right-sidebar">
                            {/* Search Widget */}
                            <SearchObjects></SearchObjects>
                            <TopRatedProducts></TopRatedProducts>
                            <TopCategories></TopCategories>
                            <LatestBlogs></LatestBlogs>
                            <PopularTags></PopularTags>
                            <BannerWidget></BannerWidget>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
