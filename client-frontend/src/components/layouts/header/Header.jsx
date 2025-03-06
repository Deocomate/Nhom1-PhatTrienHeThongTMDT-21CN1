"use client";

import { useEffect, useState } from "react";
import CartMenuUtilize from "../menus/CartMenuUtilize";
import DesktopMenu from "../menus/DesktopMenu";
import MobileMenu from "../menus/MobileMenu";
import MobileMenuUtilize from "../menus/MobileMenuUtilize";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import apiService from "@/lib/api/apiService";

export default function Header() {
    let [categories, setCategories] = useState([]);
    useEffect(() => {
        // async function fetchCategories() {
        //     let res = await apiService.get("/categories");
        //     console.log(cates);
        //     setCategories(cates);
        // }
        // fetchCategories();
    }, []);

    return (<>
        {/* HEADER AREA START (header-3) */}
        <header className="ltn__header-area ltn__header-3 section-bg-6---">
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <MobileMenu></MobileMenu>
            <DesktopMenu></DesktopMenu>
        </header>
        <CartMenuUtilize></CartMenuUtilize>
        <MobileMenuUtilize></MobileMenuUtilize>
    </>

    );
}