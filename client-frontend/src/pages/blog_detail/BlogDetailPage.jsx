"use client";
import { useEffect, useState } from "react";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import Link from "next/link";
import Image from "next/image";

import apiService from "@/lib/api/apiService";
import TopCategories from "../blog/TopCategories";
import SearchObjects from "../blog/SearchObjects";

export const BlogDetailPage = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = slug;

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);
      try {
        console.log("Fetching blog with ID:", id);
        const blogResponse = await apiService.get(`/blog/getBlogById/${id}`);
        console.log("Blog response:", blogResponse);
        if (blogResponse && blogResponse.code === 200) {
          setBlog(blogResponse.data);
          const relatedResponse = await apiService.get(`/blog/related/${id}`);
          if (relatedResponse && relatedResponse.code === 200) {
            setRelatedBlogs(relatedResponse.data);
          }
        } else {
          setError("Không thể tải thông tin bài viết");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Đã xảy ra lỗi khi tải dữ liệu bài viết");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="container py-5 text-center">Đang tải...</div>;
  }

  if (error || !blog) {
    return (
      <div className="container py-5 text-center text-danger">
        {error || "Không tìm thấy bài viết"}
      </div>
    );
  }

  return (
    <>
      <BreadCrumbDefault name={blog.title}></BreadCrumbDefault>
      <div className="ltn__page-details-area ltn__blog-details-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="ltn__blog-details-wrap">
                <div className="ltn__page-details-inner ltn__blog-details-inner">
                  <div className="ltn__blog-meta">
                    <ul>
                      {blog.blogCategory && (
                        <li className="ltn__blog-category">
                          <Link href={`/blog?category=${blog.blogCategory.id}`}>
                            {blog.blogCategory.name}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                  <h2 className="ltn__blog-title">{blog.title}</h2>
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <Image
                          src="/img/blog/author.jpg"
                          alt="Author"
                          width={35}
                          height={35}
                        />
                        <span>By: Nhà thuốc An Khang</span>
                      </li>
                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"></i>
                        {new Date(blog.createdAt).toLocaleDateString("vi-VN")}
                      </li>
                    </ul>
                  </div>

                  <p>{blog.content}</p>
                  <div className="ltn__blog-img">
                    <Image
                      src={blog.thumbnail || "/img/blog/35.jpg"}
                      alt="Blog Image"
                      width={770}
                      height={450}
                    />
                  </div>
                </div>

                <hr />
                {/* prev-next-btn */}
                <div className="ltn__prev-next-btn row mb-50">
                  <div className="blog-prev col-lg-6">
                    <h6>Bài viết trước</h6>
                    <h3 className="ltn__blog-title">
                      <a href="#">Bài viết trước</a>
                    </h3>
                  </div>
                  <div className="ltn__blog-prev blog-next text-end col-lg-6">
                    <h6>Bài viết sau</h6>
                    <h3 className="ltn__blog-title">
                      <a href="#">Bài viết sau</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="sidebar-area blog-sidebar ltn__right-sidebar">
                <SearchObjects />
                <TopCategories />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
