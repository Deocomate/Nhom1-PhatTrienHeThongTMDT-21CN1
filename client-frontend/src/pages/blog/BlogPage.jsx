"use client";
import React, { Fragment, useEffect, useState } from "react";
import TopRatedProducts from "../product/product_detail/TopRatedProducts";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import PopularTags from "./PopularTags";
import BannerWidget from "../product/product_detail/BannerWidget";
import LatestBlogs from "./LatestBlogs";
import TopCategories from "./TopCategories";
import SearchObjects from "./SearchObjects";
import apiService from "@/lib/api/apiService";
import Link from "next/link";
import { BlogPagination } from "./BlogPagination";

export default function BlogPage() {
  let [blogs, setBlogs] = useState([]);
  let [pageIndex, setPageIndex] = useState(1);
  let [pageTotal, setPageTotal] = useState(0);
  let [pageSize, setPageSize] = useState(3);
  let [totalElements, setTotalElements] = useState(0);

  async function fetchBlogs(pageIndex = 1, pageSize = 3) {
    try {
      let response = await apiService.get(
        `/blog?pageIndex=${pageIndex - 1}&pageSize=${pageSize}`
      );
      if (response) {
        setBlogs(response.content);
        setPageSize(response.size);
        setPageTotal(response.totalPages);
        setPageIndex(response.number + 1);
        setTotalElements(response.totalElements);
      } else {
        console.error("Failed to fetch blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  const handlePageChange = (newPage) => {
    fetchBlogs(newPage, pageSize).then();
  };

  useEffect(() => {
    fetchBlogs(pageIndex, pageSize).then();
  }, []);

  return (
    <>
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
                            <i className="fas fa-th-large" />
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
                {blogs.map((blog, index) => (
                  <Fragment key={index}>
                    {/* Blog Item */}
                    <div className="ltn__blog-item ltn__blog-item-5">
                      <div className="ltn__blog-img">
                        <Link href={`/blog/${blog.id}`}>
                          <img src={`${blog.thumbnail}`} alt={blog.title} />
                        </Link>
                      </div>
                      <div className="ltn__blog-brief">
                        <div className="ltn__blog-meta">
                          <ul>
                            {blog.blogCategory && (
                              <li className="ltn__blog-category">
                                <a href="#">{blog.blogCategory.name}</a>
                              </li>
                            )}
                          </ul>
                        </div>
                        <h3 className="ltn__blog-title">
                          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                        </h3>
                        <div className="ltn__blog-meta">
                          <ul>
                            {/* <li>
                              <a href="#">
                                <i className="far fa-eye" />
                                {blog.viewCount || 0} Views 
                              </a>
                            </li> */}
                            {/* Comment count might not be directly available in this response, adjust if your API provides it */}
                            {/* <li>
                              <a href="#">
                                <i className="far fa-comments" />
                                35 Comments
                              </a>
                            </li> */}
                            {/* <li className="ltn__blog-date">
                              <i className="far fa-calendar-alt" />
                              {new Date(blog.createdAt).toLocaleDateString()}
                            </li> */}
                          </ul>
                        </div>
                        <p>{blog.content.substring(0, 200)}...</p>
                        <div className="ltn__blog-meta-btn">
                          <div className="ltn__blog-meta">
                            <ul>
                              <li className="ltn__blog-author">
                                <a href="#">
                                  <img
                                    src="/assets/img/blog/author.jpg"
                                    alt="Author"
                                  />
                                  Tác giả: Nhà thuốc An Khang
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="ltn__blog-btn">
                            <Link href={`/blog/${blog.id}`}>
                              <i className="fas fa-arrow-right" />
                              Đọc thêm
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                ))}
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
                {/* <TopRatedProducts></TopRatedProducts> */}
                <TopCategories></TopCategories>
                {/* <LatestBlogs></LatestBlogs> */}
                {/* <PopularTags></PopularTags> */}
                {/* <BannerWidget></BannerWidget> */}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
