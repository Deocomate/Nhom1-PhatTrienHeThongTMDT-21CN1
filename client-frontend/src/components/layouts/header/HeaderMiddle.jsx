import React from 'react'

export default function HeaderMiddle() {
    return (
        <>
            <div className="ltn__header-middle-area">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="site-logo">
                                <a href="/">
                                    <img src="/assets/img/logo.png" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col header-contact-serarch-column d-none d-xl-block">
                            <div className="header-contact-search">
                                {/* header-feature-item */}
                                <div className="header-feature-item d-none">
                                    <div className="header-feature-icon">
                                        <i className="icon-phone" />
                                    </div>
                                    <div className="header-feature-info">
                                        <h6>Phone</h6>
                                        <p>
                                            <a href="tel:0123456789">+0123-456-789</a>
                                        </p>
                                    </div>
                                </div>
                                {/* header-search-2 */}
                                <div className="header-search-2">
                                    <form id="#123" method="get" action="#">
                                        <input
                                            type="text"
                                            name="search"
                                            defaultValue=""
                                            placeholder="Search here..."
                                        />
                                        <button type="submit">
                                            <span>
                                                <i className="icon-search" />
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {/* header-options */}
                            <div className="ltn__header-options">
                                <ul>
                                    <li className="d-none">
                                        {/* ltn__currency-menu */}
                                        <div className="ltn__drop-menu ltn__currency-menu">
                                            <ul>
                                                <li>
                                                    <a href="#" className="dropdown-toggle">
                                                        <span className="active-currency">USD</span>
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="login.html">USD - US Dollar</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">CAD - Canada Dollar</a>
                                                        </li>
                                                        <li>
                                                            <a href="register.html">EUR - Euro</a>
                                                        </li>
                                                        <li>
                                                            <a href="account.html">GBP - British Pound</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">INR - Indian Rupee</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">BDT - Bangladesh Taka</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">JPY - Japan Yen</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">AUD - Australian Dollar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="d-none--- ">
                                        {/* header-search-1 */}
                                        <div className="header-search-wrap d-block d-xl-none">
                                            <div className="header-search-1">
                                                <div className="search-icon">
                                                    <i className="icon-search  for-search-show" />
                                                    <i className="icon-cancel  for-search-close" />
                                                </div>
                                            </div>
                                            <div className="header-search-1-form">
                                                <form id="#" method="get" action="#">
                                                    <input
                                                        type="text"
                                                        name="search"
                                                        defaultValue=""
                                                        placeholder="Search here..."
                                                    />
                                                    <button type="submit">
                                                        <span>
                                                            <i className="icon-search" />
                                                        </span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-none---">
                                        {/* user-menu */}
                                        <div className="ltn__drop-menu user-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="icon-user" />
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="login.html">Sign in</a>
                                                        </li>
                                                        <li>
                                                            <a href="register.html">Register</a>
                                                        </li>
                                                        <li>
                                                            <a href="account.html">My Account</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Wishlist</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        {/* mini-cart 2 */}
                                        <div className="mini-cart-icon mini-cart-icon-2">
                                            <a
                                                href="#ltn__utilize-cart-menu"
                                                className="ltn__utilize-toggle"
                                            >
                                                <span className="mini-cart-icon">
                                                    <i className="icon-shopping-cart" />
                                                    <sup>2</sup>
                                                </span>
                                                <h6>
                                                    <span>Giỏ Hàng</span>{" "}
                                                    <span className="ltn__secondary-color">$89.25</span>
                                                </h6>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
