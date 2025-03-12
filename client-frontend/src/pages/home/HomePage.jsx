"use client";
import apiService from "@/lib/api/apiService";
import React, {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {ProductsByCategoryCarousel} from "@/pages/home/ProductsByCategoryCarousel";
import {FaFacebookMessenger, FaRegCheckSquare} from "react-icons/fa";
import {FaArrowRotateLeft, FaSquareCheck} from "react-icons/fa6";
import {RiEBike2Line} from "react-icons/ri";
import {MdAccessTimeFilled} from "react-icons/md";
import {HomePageBanner} from "@/pages/home/HomePageBanner";


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

        fetchFeaturedProducts().then();
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
        <div className={"container"}>
            <section className={"homepage-banner"}>
                <HomePageBanner></HomePageBanner>
            </section>
            <section className={"py-3"}>
                <ProductsByCategoryCarousel></ProductsByCategoryCarousel>
            </section>
            <section className={"py-3"}>
                <h3>Tìm kiếm nhiều</h3>
                <div>
                    {[1, 2, 3, 4].map((item, index) => (<Fragment key={index}>
                        <button className="btn btn-outline-secondary p-2 rounded-3 mb-3 me-3">Thuốc cảm cúm</button>
                        <button className="btn btn-outline-secondary p-2 rounded-3 mb-3 me-3">Thuốc trầm cảm
                        </button>
                        <button className="btn btn-outline-secondary p-2 rounded-3 mb-3 me-3">Bao cao su</button>
                        <button className="btn btn-outline-secondary p-2 rounded-3 mb-3 me-3">Thuốc ngủ</button>
                    </Fragment>))}
                </div>
            </section>
            <section className={"py-3"}>
                <div className="row g-1">
                    <div className={"col-12 col-md-8"}>
                        <div className="row g-5 h-100 m-auto">
                            <div className="col-6 col-md-6 py-2 m-auto">
                                <div className="d-flex align-items-center justify-content-start">
                                    <FaSquareCheck style={{
                                        fontSize: "50px",
                                        backgroundColor: "green",
                                        color: "white",
                                        padding: "10px",
                                        borderRadius: "50%",
                                        marginRight: "10px"
                                    }}/>
                                    <div>
                                        <p className={"fw-bold mb-0 text-success"}>CAM KẾT 100%</p>
                                        <span>thuốc chính hãng</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 py-2 m-auto">
                                <div className="d-flex align-items-center justify-content-start">
                                    <FaFacebookMessenger style={{
                                        fontSize: "50px",
                                        backgroundColor: "green",
                                        color: "white",
                                        padding: "10px",
                                        borderRadius: "50%",
                                        marginRight: "10px"
                                    }}/>
                                    <div>
                                        <p className={"fw-bold mb-0 text-success"}>HỖ TRỢ NHIỆT TÌNH</p>
                                        <span>24h / 7 ngày</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 py-2 m-auto">
                                <div className="d-flex align-items-center justify-content-start">
                                    <MdAccessTimeFilled style={{
                                        fontSize: "50px",
                                        backgroundColor: "green",
                                        color: "white",
                                        padding: "10px",
                                        borderRadius: "50%",
                                        marginRight: "10px"
                                    }}/>
                                    <div>
                                        <p className={"fw-bold mb-0 text-success"}>GIAO HÀNG NHANH CHÓNG</p>
                                        <span>miễn phí nội thành</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 py-2 m-auto">
                                <div className="d-flex align-items-center justify-content-start">
                                    <FaArrowRotateLeft style={{
                                        fontSize: "50px",
                                        backgroundColor: "green",
                                        color: "white",
                                        padding: "10px",
                                        borderRadius: "50%",
                                        marginRight: "10px"
                                    }}/>
                                    <div>
                                        <p className={"fw-bold mb-0 text-success"}>ĐỔI TRẢ DỄ DÀNG</p>
                                        <span>trong 1 - 3 ngày</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-md-4"}>
                        <img src="/assets/default/banner-properties.png" alt=""/>
                    </div>
                </div>
            </section>
        </div>
    </>);
};

export default HomePage;