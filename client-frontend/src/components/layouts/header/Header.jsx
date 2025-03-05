"use client";

import CartMenuUtilize from "../menus/CartMenuUtilize";
import DesktopMenu from "../menus/DesktopMenu";
import MobileMenu from "../menus/MobileMenu";
import MobileMenuUtilize from "../menus/MobileMenuUtilize";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

export default function Header() {
    return (<>
        {/* HEADER AREA START (header-3) */}
        <header className="ltn__header-area ltn__header-3 section-bg-6---">
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <MobileMenu></MobileMenu>
            <DesktopMenu></DesktopMenu>
        </header>
        {/* HEADER AREA END */}


        <CartMenuUtilize></CartMenuUtilize>

        <MobileMenuUtilize></MobileMenuUtilize>
    </>

    );
}