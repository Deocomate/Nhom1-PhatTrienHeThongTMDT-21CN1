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
import {BlogSection} from "@/pages/home/BlogSection";
import {CategoryAreaSection} from "@/pages/home/CategoryAreaSection";
import {FeaturedProductsSection} from "@/pages/home/FeaturedProductsSection";
import {BestSellingSection} from "@/pages/home/BestSellingSection";
import {AboutUsSection} from "@/pages/home/AboutUsSection";


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

        <CategoryAreaSection categories={categories}></CategoryAreaSection>

        {/*<FeaturedProductsSection></FeaturedProductsSection>*/}

        <BestSellingSection bestSellingProducts={bestSellingProducts}></BestSellingSection>

        <AboutUsSection></AboutUsSection>

        <BlogSection blogs={blogs}></BlogSection>

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



    </>);
};

export default HomePage;