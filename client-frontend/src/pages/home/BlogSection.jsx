import Link from "next/link";
import React from "react";

export const BlogSection = ({blogs = []}) => {
    return (<>
        {/* BLOG AREA START */}
        <div className="ltn__blog-area pt-115 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ltn__section-title-2--- text-center">
                            <h1 className="section-title">Bài viết mới nhất</h1>
                        </div>
                    </div>
                </div>
                <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
                    {blogs.map((blog) => (<div key={blog.id} className="col-lg-12">
                        <div className="ltn__blog-item ltn__blog-item-3">
                            <div className="ltn__blog-img">
                                <Link href={`/blog/getBlogBySlug/${blog.slug}`}>
                                    <img src={blog.thumbnail} alt={blog.title}/>
                                </Link>
                            </div>
                            <div className="ltn__blog-brief">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-author">
                                            <Link href="#"><i className="far fa-user"/>Đăng bởi: Admin</Link>
                                        </li>
                                        {blog.blogCategory && <li className="ltn__blog-tags">
                                            <Link
                                                href={`/blog_category/getBlogCategoryBySlug/${blog.blogCategory.slug}`}><i
                                                className="fas fa-tags"/>{blog.blogCategory.name}</Link>
                                        </li>}
                                    </ul>
                                </div>
                                <h3 className="ltn__blog-title">
                                    <Link href={`/blog/getBlogBySlug/${blog.slug}`}>{blog.title}</Link>
                                </h3>
                                <div className="ltn__blog-meta-btn">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-date"><i
                                                className="far fa-calendar-alt"/>{blog.created_at}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ltn__blog-btn">
                                        <Link href={`/blog/getBlogBySlug/${blog.slug}`}>Đọc Thêm</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
        {/* BLOG AREA END */}
    </>)
}
