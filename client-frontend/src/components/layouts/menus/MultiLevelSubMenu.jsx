"use client"
import React, {useEffect, useState} from "react";
import apiService from "@/lib/api/apiService";

export const MultiLevelSubMenu = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        let response = await apiService.get("/categories");
        if (response.code === 200) {
            setCategories(response.data.categories);
        }
    }

    useEffect(() => {
        fetchCategories().then();
    }, []);

    // Hàm lấy tất cả các danh mục gốc (parentId == null)
    const getRootCategories = () => {
        return categories.filter(category => category.parentId === null)
            .sort((a, b) => a.priority - b.priority);
    }

    // Hàm lấy tất cả các danh mục con của một danh mục cha
    const getChildCategories = (parentId) => {
        return categories.filter(category => category.parentId === parentId)
            .sort((a, b) => a.priority - b.priority);
    }

    // Hàm tạo đường dẫn từ slug
    const createUrl = (slug) => {
        return `/category/${slug}`;
    }

    // Hàm tạo biểu tượng ngẫu nhiên cho danh mục
    const getCategoryIcon = (id) => {
        const icons = ["icon-shopping-bags", "icon-options", "icon-award", "icon-user", "icon-shopping-cart", "icon-tag"];
        return icons[id % icons.length];
    }

    // Hàm để tạo các danh mục con
    const renderSubmenuItems = (parentId) => {
        const children = getChildCategories(parentId);
        if (children.length === 0) return null;

        return (<ul className="ltn__category-submenu-children">
            {children.map(child => (<li key={child.id}>
                <a href={createUrl(child.slug)}>{child.name}</a>
            </li>))}
        </ul>);
    }

    // Hàm để xác định số cột cho submenu
    const getColumnClass = (childrenCount) => {
        if (childrenCount >= 5) return "ltn__category-column-5";
        if (childrenCount >= 4) return "ltn__category-column-4";
        if (childrenCount >= 3) return "ltn__category-column-3";
        if (childrenCount >= 2) return "ltn__category-column-2";
        return "";
    }

    // Render danh mục chính
    const renderMainCategories = () => {
        const rootCategories = getRootCategories();

        return rootCategories.map(category => {
            const children = getChildCategories(category.id);
            const columnClass = getColumnClass(children.length);

            return (<li key={category.id} className="ltn__category-menu-item ltn__category-menu-drop">
                <a href={createUrl(category.slug)}>
                    {/*<i className={getCategoryIcon(category.id)}/>*/}
                    {category.name}
                </a>
                {children.length > 0 && (<ul className={`ltn__category-submenu ${columnClass}`}>
                    {children.map(child => (
                        <li key={child.id} className="ltn__category-submenu-title ltn__category-menu-drop">
                            <a href={createUrl(child.slug)}>{child.name}</a>
                            {renderSubmenuItems(child.id)}
                        </li>))}
                </ul>)}
            </li>);
        });
    }

    // Xác định xem có hiển thị liên kết "More categories" không
    const shouldShowMoreLink = () => {
        return getRootCategories().length > 6;
    }

    return (<div className="ltn__category-menu-toggle ltn__one-line-active">
        <ul>
            {/* Danh mục chính */}
            {renderMainCategories()}

            {/* Show more menu */}
            {shouldShowMoreLink() && (<li className="ltn__category-menu-more-item-parent">
                <a className="rx-default">
                    More categories <span className="cat-thumb icon-plus"/>
                </a>
                <a className="rx-show">
                    close menu <span className="cat-thumb icon-remove"/>
                </a>
            </li>)}
        </ul>
    </div>);
}