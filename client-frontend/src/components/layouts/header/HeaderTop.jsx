import React from 'react'

export default function HeaderTop() {
    return (<>
        <div className="ltn__header-top-area border-bottom top-area-color-white---">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="ltn__top-bar-menu">
                            <ul>
                                <li>
                                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                        <i className="icon-mail"/> ankhang@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon-placeholder"/> 19 Hàng Thiếc - Hoàn Kiếm - Hà Nội
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="top-bar-right text-end">
                            <div className="ltn__top-bar-menu">
                                <ul>
                                    <li>
                                        {/* ltn__social-media */}
                                        <div className="ltn__social-media">
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
                                                    <a href="#" title="Instagram">
                                                        <i className="fab fa-instagram"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
