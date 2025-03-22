"use client";
import React, {Fragment, useEffect, useState} from "react";
import TopRatedProducts from "../product/product_detail/TopRatedProducts";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import PopularTags from "./PopularTags";
import BannerWidget from "../product/product_detail/BannerWidget";
import LatestBlogs from "./LatestBlogs";
import TopCategories from "./TopCategories";
import SearchObjects from "./SearchObjects";
import apiService from "@/lib/api/apiService";
import Link from "next/link";
import {BlogPagination} from "./BlogPagination";
import {useSearchParams} from "next/navigation";

export default function BlogPage() {
    let [blogs, setBlogs] = useState([]);
    let [pageIndex, setPageIndex] = useState(0);
    let [pageTotal, setPageTotal] = useState(0);
    let [pageSize, setPageSize] = useState(9);
    let [totalElements, setTotalElements] = useState(0);

    const searchParams = useSearchParams()
    const title = searchParams.get('title')

    async function fetchBlogs(pageIndex = 0, pageSize = 9) {
        try {
            let response;
            if (title != null) {
                response = await apiService.get(`/blog?title=${title}&pageIndex=${pageIndex}&pageSize=9`);
            } else {
                response = await apiService.get(`/blog?pageIndex=${pageIndex}&pageSize=9`);
            }
            if (response) {
                console.log(response)
                setBlogs(response.data.content);
                setPageSize(response.data.size);
                setPageTotal(response.data.totalPages);
                setPageIndex(response.data.number + 1);
                setTotalElements(response.data.totalElements);
            } else {
                console.error("Failed to fetch blogs");
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }

    const handlePageChange = (newPage) => {
        fetchBlogs(newPage - 1, 9).then();  // API expects page index starting from 0
    };

    useEffect(() => {
        fetchBlogs(0, pageSize).then();
    }, [title]);

    return (<>
        <BreadCrumbDefault name="Cẩm năng sức khỏe"></BreadCrumbDefault>
        <div className="ltn__blog-area mb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ltn__blog-list-wrap">
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
                            {blogs.map((blog, index) => (<Fragment key={index}>
                                {/* Blog Item */}
                                <div className="ltn__blog-item ltn__blog-item-5">
                                    <div className="ltn__blog-img">
                                        <Link href={`/blog/${blog.slug}`}>
                                            <img src={`${blog.thumbnail}`} alt={blog.title}/>
                                        </Link>
                                    </div>
                                    <div className="ltn__blog-brief">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                {blog.blogCategory && (<li className="ltn__blog-category">
                                                    <a href="#">{blog.blogCategory.name}</a>
                                                </li>)}
                                            </ul>
                                        </div>
                                        <h3 className="ltn__blog-title">
                                            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                        </h3>
                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-author">
                                                        <Link href={`/blog/${blog.slug}`}>
                                                            <img
                                                                src="/assets/default/user.jpg"
                                                                alt="Author"
                                                            />
                                                            Tác giả: Nhà thuốc An Khang
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__blog-btn">
                                                <Link href={`/blog/${blog.slug}`}>
                                                    <i className="fas fa-arrow-right"/>
                                                    Đọc thêm
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>))}
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__pagination-area text-center">
                                    {/* thanh điều hướng trang */}
                                    <BlogPagination
                                        currentPage={pageIndex}
                                        totalPages={pageTotal}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* side menu  */}
                    <div className="col-lg-4">
                        <aside className="sidebar-area blog-sidebar ltn__right-sidebar">
                            <SearchObjects></SearchObjects>
                            <TopCategories></TopCategories>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
