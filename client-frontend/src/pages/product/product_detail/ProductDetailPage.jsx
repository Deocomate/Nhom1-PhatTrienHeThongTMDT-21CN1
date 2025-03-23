"use client"

import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import React, {useEffect, useState} from "react";
import TopRatedProducts from "./TopRatedProducts";
import BannerWidget from "./BannerWidget";
import apiService from "@/lib/api/apiService";
import {formatNumber} from "@/utils/NumberUltils";
import {useCart} from "@/contexts/CartContext";
import {useWishList} from "@/contexts/WishListContext";
import Link from "next/link";
import {ProductComments} from "@/pages/product/product_detail/ProductComments";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function ProductDetailPage({id}) {
    const [quantityInput, setQuantityInput] = useState(1)
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {addToCart} = useCart();
    const {addToWishList} = useWishList();

    useEffect(() => {
        const fetchProductDetail = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await apiService.get(`/products/slug/${id}`);  //Using slug
                if (response.code === 200) {
                    setProduct(response.data);
                } else {
                    setError("Không thể lấy thông tin chi tiết sản phẩm."); // Vietnamese error
                }
            } catch (err) {
                setError("Đã xảy ra lỗi khi lấy thông tin sản phẩm."); // Vietnamese error
                console.error("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);


    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantityInput);
        }
    };

    const handleAddToWishList = () => {
        if (product) {
            addToWishList(product);
        }
    };

    if (loading) {
        return (<div className="container">
            <p>Đang tải thông tin sản phẩm...</p> {/* Vietnamese loading message */}
        </div>);
    }

    if (error) {
        return (<div className="container">
            <p>Lỗi: {error}</p> {/* Vietnamese error message */}
        </div>);
    }

    if (!product) {
        return (<div className="container">
            <p>Không tìm thấy sản phẩm.</p> {/* Vietnamese not found message */}
        </div>);
    }

    const {
        title,
        brandName,
        type,
        activeIngredient,
        indications,
        manufacturer,
        categoryName,
        dosageForm,
        noted,
        description,
        quantity,
        price,
        registrationNumber,
        productImagesResponses,
        commentsResponses,
    } = product;


    return (<>
        <BreadCrumbDefault name={title}/>
        <div className="ltn__shop-details-area pb-85">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="ltn__shop-details-inner mb-60">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="ltn__shop-details-img-gallery">
                                        {productImagesResponses && productImagesResponses.length > 0 ? (<Swiper
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            loop={true}
                                        >
                                            {productImagesResponses.map((image, index) => (<SwiperSlide key={index}>
                                                <div className="ltn__shop-details-img">
                                                    <img src={image.url} alt={title} className="w-100" style={{
                                                        width: "100%", height: "500px", objectFit: "cover"
                                                    }}/>
                                                </div>
                                            </SwiperSlide>))}
                                        </Swiper>) : (<div className="ltn__shop-details-img">
                                            <img src="/assets/img/product-3/1.jpg" alt="Placeholder"/>
                                        </div>)}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="modal-product-info shop-details-info pl-0">
                                        {/* Rating, remove hardcoded rating. If you have rating data, add it here. */}
                                        <h3>{title}</h3>
                                        <div className="product-price">
                                            <span>{formatNumber(price)}</span>
                                            {/* Add a discounted price if available  */}
                                        </div>
                                        <div className="modal-product-meta ltn__product-details-menu-1">
                                            <ul>
                                                <li>
                                                    <strong>Thương hiệu:</strong>
                                                    <span>{brandName}</span>
                                                </li>
                                                <li>
                                                    <strong>Danh mục:</strong>
                                                    <span>{categoryName}</span>
                                                </li>
                                                <li>
                                                    <strong>Loại:</strong>
                                                    <span>{type}</span>
                                                </li>
                                                {activeIngredient && (<li>
                                                    <strong>Hoạt chất:</strong>
                                                    <span>{activeIngredient}</span>
                                                </li>)}
                                                {manufacturer && (<li>
                                                    <strong>Nhà sản xuất:</strong>
                                                    <span>{manufacturer}</span>
                                                </li>)}

                                                {dosageForm && (<li>
                                                    <strong>Dạng bào chế:</strong>
                                                    <span>{dosageForm}</span>
                                                </li>)}
                                                {quantity !== undefined && (<li>
                                                    <strong>Số lượng trong kho:</strong>
                                                    <span>{quantity}</span>
                                                </li>)}

                                            </ul>
                                        </div>
                                        <div className="ltn__product-details-menu-2">
                                            <ul>
                                                <li>
                                                    <input
                                                        type="number"
                                                        value={quantityInput}
                                                        onChange={(e) => {
                                                            setQuantityInput(e.target.value)
                                                        }}
                                                        min={1}
                                                        className="form-control-lg border-success"
                                                    />
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={handleAddToCart}
                                                        className="theme-btn-1 btn btn-effect-1"
                                                        title="Thêm vào giỏ hàng"
                                                    >
                                                        <i className="fas fa-shopping-cart"/>
                                                        <span>THÊM VÀO GIỎ HÀNG</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ltn__product-details-menu-3">
                                            <ul>
                                                <li>
                                                    <button
                                                        onClick={handleAddToWishList}
                                                        className=""
                                                        title="Thêm vào yêu thích"

                                                    >
                                                        <i className="far fa-heart"/>
                                                        <span>Thêm vào yêu thích</span>
                                                    </button>
                                                </li>

                                            </ul>
                                        </div>
                                        <hr/>
                                        {registrationNumber && (<>
                                            <div className="ltn__safe-checkout">
                                                <h5>Mã số đăng ký:</h5>
                                                <p>{registrationNumber}</p>
                                            </div>
                                        </>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Shop Tab Start */}
                        <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                            <div className="ltn__shop-details-tab-menu">
                                <div className="nav">
                                    <a
                                        className="active show"
                                        data-bs-toggle="tab"
                                        href="#liton_tab_details_1_1">
                                        Mô tả
                                    </a>
                                    <a
                                        data-bs-toggle="tab"
                                        href="#liton_tab_details_1_2"
                                        className="">
                                        Đánh giá
                                    </a>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade active show"
                                    id="liton_tab_details_1_1"
                                >
                                    <div className="ltn__shop-details-tab-content-inner">
                                        <h4 className="title-2">Mô tả</h4>
                                        {/* Use dangerouslySetInnerHTML with caution.  Sanitize if necessary! */}
                                        <p dangerouslySetInnerHTML={{__html: description}}/>
                                        {indications && (<>
                                            <h4 className="title-2">Chỉ định</h4>
                                            <p dangerouslySetInnerHTML={{__html: indications}}/>
                                        </>)}

                                        {noted && (<>
                                            <h4 className="title-2">Lưu ý</h4>
                                            <p dangerouslySetInnerHTML={{__html: noted}}/>
                                        </>)}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="liton_tab_details_1_2">
                                    <ProductComments product={product} comments={commentsResponses}></ProductComments>
                                </div>
                            </div>
                        </div>
                        {/* Shop Tab End */}
                    </div>
                </div>
            </div>
        </div>
    </>);
}