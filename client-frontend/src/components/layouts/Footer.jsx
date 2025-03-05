"use client";
import {useState} from "react";

export default function Footer() {

    return (<>
        {/* FOOTER AREA START */}
        <footer className="ltn__footer-area  ">
            <div className="footer-top-area  section-bg-2 plr--5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-about-widget">
                                <div className="footer-logo">
                                    <div className="site-logo">
                                        <img src="/assets/img/logo-2.png" alt="Logo"/>
                                    </div>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the and typesetting
                                    industry. Lorem Ipsum is dummy text of the printing.
                                </p>
                                <div className="footer-address">
                                    <ul>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-placeholder"/>
                                            </div>
                                            <div className="footer-address-info">
                                                <p>Brooklyn, New York, United States</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-call"/>
                                            </div>
                                            <div className="footer-address-info">
                                                <p>
                                                    <a href="tel:+0123-456789">+0123-456789</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-address-icon">
                                                <i className="icon-mail"/>
                                            </div>
                                            <div className="footer-address-info">
                                                <p>
                                                    <a href="mailto:example@example.com">
                                                        example@example.com
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ltn__social-media mt-20">
                                    <ul>
                                        <li>
                                            <a href="#" title="Facebook">
                                                <i className="fab fa-facebook-f"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="Twitter">
                                                <i className="fab fa-twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="Linkedin">
                                                <i className="fab fa-linkedin"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="Youtube">
                                                <i className="fab fa-youtube"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Company</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">All Products</a>
                                        </li>
                                        <li>
                                            <a href="locations.html">Locations Map</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Services</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <a href="order-tracking.html">Order tracking</a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html">Wish List</a>
                                        </li>
                                        <li>
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li>
                                            <a href="account.html">My account</a>
                                        </li>
                                        <li>
                                            <a href="about.html">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a href="about.html">Promotional Offers</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Customer Care</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li>
                                            <a href="account.html">My account</a>
                                        </li>
                                        <li>
                                            <a href="wishlist.html">Wish List</a>
                                        </li>
                                        <li>
                                            <a href="order-tracking.html">Order tracking</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-widget footer-newsletter-widget">
                                <h4 className="footer-title">Newsletter</h4>
                                <p>
                                    Subscribe to our weekly Newsletter and receive updates via
                                    email.
                                </p>
                                <div className="footer-newsletter">
                                    <form action="#">
                                        <input type="email" name="email" placeholder="Email*"/>
                                        <div className="btn-wrapper">
                                            <button className="theme-btn-1 btn" type="submit">
                                                <i className="fas fa-location-arrow"/>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <h5 className="mt-30">We Accept</h5>
                                <img src="/assets/img/icons/payment-4.png" alt="Payment Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
                <div className="container-fluid ltn__border-top-2">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="ltn__copyright-design clearfix">
                                <p>
                                    All Rights Reserved @ Company <span className="current-year"/>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 align-self-center">
                            <div className="ltn__copyright-menu text-end">
                                <ul>
                                    <li>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Claim</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy &amp; Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* FOOTER AREA END */}
        {/* MODAL AREA START (Quick View Modal) */}
        <div className="ltn__modal-area ltn__quick-view-modal-area">
            <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                                {/* <i class="fas fa-times"></i> */}
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="ltn__quick-view-modal-inner">
                                <div className="modal-product-item">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="modal-product-img">
                                                <img src="/assets/img/product/4.png" alt="#"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="modal-product-info">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fas fa-star"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fas fa-star"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fas fa-star"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fas fa-star-half-alt"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-star"/>
                                                            </a>
                                                        </li>
                                                        <li className="review-total">
                                                            {" "}
                                                            <a href="#"> ( 95 Reviews )</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3>Digital Stethoscope</h3>
                                                <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$165.00</del>
                                                </div>
                                                <div className="modal-product-meta ltn__product-details-menu-1">
                                                    <ul>
                                                        <li>
                                                            <strong>Categories:</strong>
                                                            <span>
                              <a href="#">Parts</a>
                              <a href="#">Car</a>
                              <a href="#">Seat</a>
                              <a href="#">Cover</a>
                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="ltn__product-details-menu-2">
                                                    <ul>
                                                        <li>
                                                            <div className="cart-plus-minus">
                                                                <input
                                                                    type="text"
                                                                    defaultValue={2}
                                                                    name="qtybutton"
                                                                    className="cart-plus-minus-box"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="theme-btn-1 btn btn-effect-1"
                                                                title="Add to Cart"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#add_to_cart_modal"
                                                            >
                                                                <i className="fas fa-shopping-cart"/>
                                                                <span>ADD TO CART</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="ltn__product-details-menu-3">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className=""
                                                                title="Wishlist"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#liton_wishlist_modal"
                                                            >
                                                                <i className="far fa-heart"/>
                                                                <span>Add to Wishlist</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className=""
                                                                title="Compare"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick_view_modal"
                                                            >
                                                                <i className="fas fa-exchange-alt"/>
                                                                <span>Compare</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <hr/>
                                                <div className="ltn__social-media">
                                                    <ul>
                                                        <li>Share:</li>
                                                        <li>
                                                            <a href="#" title="Facebook">
                                                                <i className="fab fa-facebook-f"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Twitter">
                                                                <i className="fab fa-twitter"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Linkedin">
                                                                <i className="fab fa-linkedin"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Instagram">
                                                                <i className="fab fa-instagram"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* MODAL AREA END */}
        {/* MODAL AREA START (Add To Cart Modal) */}
        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
            <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
                <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="ltn__quick-view-modal-inner">
                                <div className="modal-product-item">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="modal-product-img">
                                                <img src="/assets/img/product/1.png" alt="#"/>
                                            </div>
                                            <div className="modal-product-info">
                                                <h5>
                                                    <a href="product-details.html">Digital Stethoscope</a>
                                                </h5>
                                                <p className="added-cart">
                                                    <i className="fa fa-check-circle"/> Successfully added
                                                    to your Cart
                                                </p>
                                                <div className="btn-wrapper">
                                                    <a
                                                        href="cart.html"
                                                        className="theme-btn-1 btn btn-effect-1"
                                                    >
                                                        View Cart
                                                    </a>
                                                    <a
                                                        href="checkout.html"
                                                        className="theme-btn-2 btn btn-effect-2"
                                                    >
                                                        Checkout
                                                    </a>
                                                </div>
                                            </div>
                                            {/* additional-info */}
                                            <div className="additional-info d-none">
                                                <p>
                                                    We want to give you <b>10% discount</b> for your first
                                                    order, <br/>
                                                    Use discount code at checkout
                                                </p>
                                                <div className="payment-method">
                                                    <img src="/assets/img/icons/payment.png" alt="#"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* MODAL AREA END */}
        {/* MODAL AREA START (Wishlist Modal) */}
        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
            <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
                <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="ltn__quick-view-modal-inner">
                                <div className="modal-product-item">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="modal-product-img">
                                                <img src="/assets/img/product/7.png" alt="#"/>
                                            </div>
                                            <div className="modal-product-info">
                                                <h5>
                                                    <a href="product-details.html">Digital Stethoscope</a>
                                                </h5>
                                                <p className="added-cart">
                                                    <i className="fa fa-check-circle"/> Successfully added
                                                    to your Wishlist
                                                </p>
                                                <div className="btn-wrapper">
                                                    <a
                                                        href="wishlist.html"
                                                        className="theme-btn-1 btn btn-effect-1"
                                                    >
                                                        View Wishlist
                                                    </a>
                                                </div>
                                            </div>
                                            {/* additional-info */}
                                            <div className="additional-info d-none">
                                                <p>
                                                    We want to give you <b>10% discount</b> for your first
                                                    order, <br/>
                                                    Use discount code at checkout
                                                </p>
                                                <div className="payment-method">
                                                    <img src="/assets/img/icons/payment.png" alt="#"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* MODAL AREA END */}
    </>)
}