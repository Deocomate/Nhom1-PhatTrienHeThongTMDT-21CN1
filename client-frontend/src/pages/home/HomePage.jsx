// pages/home/HomePage.jsx
"use client";

import SliderArea from "./SliderArea";
import ProductCardGrid from "@/pages/product/ProductCardGrid"; // Import ProductCardGrid
import apiService from "@/lib/api/apiService";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Button} from "react-bootstrap";
import Script from "next/script";


const HomePage = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]); //for category
    const router = useRouter();

    // Fetch Featured Products
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await apiService.get("/products?pageIndex=0&pageSize=6"); // Get first 6 products
                if (response.content) {
                    setFeaturedProducts(response.content);
                } else {
                    console.error("Featured products data is missing.", response);
                }
            } catch (error) {
                console.error("Error fetching featured products:", error);
            }
        };

        fetchFeaturedProducts();
    }, []);


    // Fetch Best Selling Products (Placeholder - adjust API endpoint as needed)
    useEffect(() => {
        const fetchBestSellingProducts = async () => {
            try {
                // Placeholder:  Using the same endpoint as featured for now.  *CHANGE THIS*
                const response = await apiService.get('/products?pageIndex=0&pageSize=8');
                if (response.content) {
                    setBestSellingProducts(response.content);
                }

            } catch (error) {
                console.error("Error fetching best-selling products", error);
            }
        }
        fetchBestSellingProducts();
    }, []);

    //Fetch Blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await apiService.get("/blog?pageIndex=0&pageSize=3"); // Get first 3 blog
                if (response.data) {
                    setBlogs(response.data);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiService.get('/categories?pageSize=100'); // Adjust pageSize as needed
                if (response.content) {
                    setCategories(response.content);
                } else {
                    console.error("Categories data is missing or not an array", response);
                }

            } catch (error) {
                console.error("Error fetching categories", error);
            }
        }
        fetchCategories()
    }, []);


    return (<>
        <SliderArea/>
        {/* CATEGORY AREA START */}
        <div className="ltn__category-area section-bg-1-- pt-30 pb-50">
            <div className="container">
                <div className="row ltn__category-slider-active-six slick-arrow-1 border-bottom">
                    {categories.length > 0 ? (categories.map((category) => (<div className="col-12" key={category.id}>
                        <div className="ltn__category-item ltn__category-item-6 text-center">
                            <div className="ltn__category-item-img">
                                <Link href={`/category/${category.slug}`}>
                                    <img src={category.thumbnail} alt={category.name}
                                         style={{width: '50px', height: '50px'}}/>
                                </Link>
                            </div>
                            <div className="ltn__category-item-name">
                                <h6>
                                    <Link href={`/category/${category.slug}`}>{category.name}</Link>
                                </h6>
                            </div>
                        </div>
                    </div>))) : (<div>Loading categories...</div> // Or a "No categories found" message
                    )}
                </div>
            </div>
        </div>
        {/* CATEGORY AREA END */}

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

        {/* BEST SELLING ITEMS */}
        <div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ltn__section-title-2 text-center">
                            <h1 className="section-title">Sản phẩm bán chạy</h1>
                        </div>
                    </div>
                </div>
                <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                    {bestSellingProducts.map((product, index) => (
                        <ProductCardGrid key={product.id} product={product} index={index}/>))}
                </div>
            </div>
        </div>

        {/* ABOUT US AREA START (Placeholder content) */}
        <div className="ltn__about-us-area bg-image pt-115 pb-110" data-bs-bg="/assets/img/bg/26.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="about-us-img-wrap about-img-left">
                            {/* Placeholder Image - Replace with actual image */}
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="about-us-info-wrap">
                            <div className="section-title-area ltn__section-title-2--- mb-20">
                                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Khẩu
                                    trang N95</h6>
                                <h1 className="section-title">
                                    Mặt nạ an toàn cấp A đang được bán. Nhanh lên!
                                </h1>
                                <p>
                                    Hơn 39.000 người làm việc cho chúng tôi tại hơn 70 quốc gia trên toàn thế giới.
                                    Phạm vi phủ sóng toàn cầu rộng lớn này, kết hợp với
                                    dịch vụ chuyên gia.
                                </p>
                            </div>
                            <ul className="ltn__list-item-half clearfix">
                                <li>
                                    <i className="flaticon-home-2"/>
                                    Than hoạt tính
                                </li>
                                <li>
                                    <i className="flaticon-mountain"/>
                                    Van thở
                                </li>
                                <li>
                                    <i className="flaticon-heart"/>
                                    6 lớp lọc
                                </li>
                                <li>
                                    <i className="flaticon-secure"/>
                                    Giặt lại & Tái sử dụng
                                </li>
                            </ul>
                            <div className="btn-wrapper animated">
                                <Link href="/products"
                                      className="ltn__secondary-color text-uppercase text-decoration-underline">Xem
                                    sản phẩm</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ABOUT US AREA END */}

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
                                            <Link href="#"><i className="far fa-user"/>by: Admin</Link>
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
                                        <Link href={`/blog/getBlogBySlug/${blog.slug}`}>Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
        {/* BLOG AREA END */}

        {/* FEATURE AREA START ( Feature - 3) */}
        <div className="ltn__feature-area section-bg-1 mt-90 pt-30 pb-30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border section-bg-1">
                            <div className="ltn__feature-item ltn__feature-item-8">
                                <div className="ltn__feature-icon">
                                    <img src="/assets/img/icons/svg/8-trolley.svg" alt="#"/> {/* Corrected path */}
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>Giao hàng miễn phí</h4>
                                    <p>Cho tất cả đơn hàng trên $49.00</p>
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-8">
                                <div className="ltn__feature-icon">
                                    <img src="/assets/img/icons/svg/9-money.svg" alt="#"/> {/* Corrected path */}
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>Hoàn trả trong 15 ngày</h4>
                                    <p>Đảm bảo hoàn tiền</p>
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-8">
                                <div className="ltn__feature-icon">
                                    <img src="/assets/img/icons/svg/10-credit-card.svg"
                                         alt="#"/> {/* Corrected path */}
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>Thanh toán an toàn</h4>
                                    <p>Được bảo vệ bởi Paypal</p>
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-8">
                                <div className="ltn__feature-icon">
                                    <img src="/assets/img/icons/svg/11-gift-card.svg"
                                         alt="#"/> {/* Corrected path */}
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>Ưu đãi & quà tặng</h4>
                                    <p>Cho tất cả đơn hàng trên</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* FEATURE AREA END */}

        {/*<Script src="/assets/js/template.bundle.js"></Script>*/}
    </>);
};

export default HomePage;