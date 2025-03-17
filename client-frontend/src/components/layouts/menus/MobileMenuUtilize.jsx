"use client";
import React, {useEffect, useState, Fragment} from 'react';
import Link from 'next/link';
import {useCart} from "@/contexts/CartContext";
import {formatNumber} from "@/utils/NumberUltils";
import apiService from "@/lib/api/apiService";

export default function MobileMenuUtilize() {
    const {cart, calculateTotal} = useCart();
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        let response = await apiService.get("/categories?pageSize=1000");
        if (response) {
            setCategories(response.content);
        }
    };

    useEffect(() => {
        fetchCategories().then();
    }, []);

    const getRootCategories = () => {
        return categories.filter(category => category.parentId === null)
            .sort((a, b) => a.priority - b.priority);
    };

    const getChildCategories = (parentId) => {
        return categories.filter(category => category.parentId === parentId)
            .sort((a, b) => a.priority - b.priority);
    };

    const createUrl = (slug) => {
        return `/category/${slug}`;
    };

    // Render submenu items (recursive)
    const renderSubMenuItems = (parentId) => {
        const children = getChildCategories(parentId);
        if (children.length === 0) return null;

        return (<ul className="sub-menu">
            {children.map((child) => (<li key={child.id}>
                <Link href={createUrl(child.slug)}>{child.name}</Link>
                {renderSubMenuItems(child.id)}
            </li>))}
        </ul>);
    };

    return (<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <div className="site-logo">
                    <Link href="/">
                        <img src="/assets/img/logo.png" alt="Logo"/>
                    </Link>
                </div>
                <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
                <form action="#">
                    <input type="text" placeholder="Tìm kiếm..."/>
                    <button>
                        <i className="fas fa-search"/>
                    </button>
                </form>
            </div>
            <div className="ltn__utilize-menu">
                <ul>
                    <li><Link href="/">Trang chủ</Link></li>
                    <li><Link href="/blog">Cẩm nang sức khoẻ</Link></li>
                    <li><Link href="/products">Sản phẩm</Link></li>
                    <li>
                        <a href="#">Danh Mục Sản Phẩm</a>
                        <ul className="sub-menu">
                            {getRootCategories().map((category) => (<li key={category.id}>
                                <Link href={createUrl(category.slug)}>{category.name}</Link>
                                {renderSubMenuItems(category.id)}
                            </li>))}
                        </ul>
                    </li>
                    <li><Link href="/contact">Liên hệ</Link></li>
                </ul>
            </div>
        </div>
    </div>);
}