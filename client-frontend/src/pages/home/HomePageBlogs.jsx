import React, {Fragment, useRef, useEffect, useState} from "react";
import Link from "next/link";
import {clsx} from "clsx";
import apiService from "@/lib/api/apiService";
import {formatDate} from "@/utils/DateUtils"

export const HomePageBlogs = () => {
    let [blogs, setBlogs] = useState([]);
    let [loading, setLoading] = useState(true);

    async function fetchBlogs(pageIndex = 0, pageSize = 7) {
        try {
            setLoading(true);
            let response = await apiService.get(`/blog?pageIndex=${pageIndex}&pageSize=${pageSize}`);
            if (response && response.data && response.data.content) {
                setBlogs(response.data.content);
            } else {
                console.error("Failed to fetch blogs");
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBlogs().then();
    }, []);

    // Function to fix thumbnail URL if needed
    const fixThumbnailUrl = (url) => {
        if (url && url.startsWith('http://127.0.0.1:8000https://')) {
            return url.replace('http://127.0.0.1:8000', '');
        }
        return url || '/assets/default/homepage-blog-1.png';
    };

    return (<>
        <h3>Bản tin sức khoẻ</h3>
        <div className={"blogs-contain"}>
            <div className="parent">
                {loading ? (<div className="loading">Đang tải...</div>) : blogs.length > 0 ? (<>
                    <div className="div1">
                        {blogs[0] && (<div className={"blog-item"}>
                            <Link href={`/blog/${blogs[0].slug}`}>
                                <img
                                    src={fixThumbnailUrl(blogs[0].thumbnail)}
                                    alt={blogs[0].title}
                                    style={{
                                        width: "100%", height: "250px", objectFit: "cover", borderRadius: "20px"
                                    }}
                                />
                                <h4 className={"mb-0"}>{blogs[0].title}</h4>
                                <span>{formatDate(blogs[0].updated_at)}</span>
                            </Link>
                        </div>)}
                        <div className={"d-flex justify-content-center py-3"}>
                            <Link className={"text-decoration-underline fw-bold"} href={"/blog"}>
                                Xem thêm bài viết khác
                            </Link>
                        </div>
                    </div>
                    {/*Desktop Render*/}
                    {blogs.slice(1).map((blog, index) => (<Fragment key={blog.id}>
                        <div className={clsx([`div${index + 2}`, "d-none d-md-block"])} style={{
                            display: "flex", alignItems: "center",
                        }}>
                            <div className={"blog-item"}>
                                <Link href={`/blog/${blog.slug}`}>
                                    <div className={"d-flex"}>
                                        <img
                                            src={fixThumbnailUrl(blog.thumbnail)}
                                            alt={blog.title}
                                            className={"me-2"}
                                            style={{
                                                width: "100px", height: "auto", objectFit: "cover", borderRadius: "10px"
                                            }}
                                        />
                                        <div>
                                            <h5 className={"mb-0 fs-6"}>{blog.title}</h5>
                                            <span>{formatDate(blog.updated_at)}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Fragment>))}
                </>) : (<div className="no-blogs">Không có bài viết nào</div>)}
            </div>
        </div>

        <style jsx>{`
            .parent {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(3, 1fr);
                gap: 10px;
            }

            .div1 {
                grid-row: span 3 / span 3;
            }

            .div2 {
                grid-column-start: 2;
                grid-row-start: 1;
            }

            .div3 {
                grid-column-start: 2;
                grid-row-start: 2;
            }

            .div4 {
                grid-column-start: 2;
                grid-row-start: 3;
            }

            .div5 {
                grid-column-start: 3;
                grid-row-start: 1;
            }

            .div6 {
                grid-column-start: 3;
                grid-row-start: 2;
            }

            .div7 {
                grid-column-start: 3;
                grid-row-start: 3;
            }

            .loading, .no-blogs {
                grid-column: span 3;
                text-align: center;
                padding: 2rem;
            }

            @media (max-width: 768px) {
                .parent {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    grid-template-rows: repeat(1, 1fr);
                    gap: 10px;
                }

                .div1 {
                    grid-row-start: 1;
                    grid-row-end: 1;
                }

                .div2, .div3, .div4, .div5, .div6, .div7 {
                    display: none;
                    grid-row-start: 1;
                    grid-row-end: 1;
                }
            }
        `}</style>
    </>);
};