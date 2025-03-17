import Link from "next/link";
import React from "react";
import { MultiLevelSubMenu } from "@/components/layouts/menus/MultiLevelSubMenu";

export default function DesktopMenu() {
  return (
    <>
      <div className="header-bottom-area ltn__border-top--- ltn__header-sticky  ltn__sticky-bg-white ltn__primary-bg---- menu-color-white---- d-none--- d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 align-self-center">
              {/* CATEGORY-MENU-LIST START */}
              <div className="ltn__category-menu-wrap ltn__category-dropdown-hide ltn__category-menu-with-header-menu">
                <div className="ltn__category-menu-title">
                  <h2 className="section-bg-1--- ltn__secondary-bg text-color-white">
                    Sản phẩm
                  </h2>
                </div>
                <MultiLevelSubMenu></MultiLevelSubMenu>
              </div>
              {/* END CATEGORY-MENU-LIST */}
            </div>
            <div className="col-lg-7">
              <div className="col--- header-menu-column justify-content-center---">
                <div className="header-menu header-menu-2 text-start">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li>
                          <Link href="/">Trang chủ</Link>
                        </li>
                        <li>
                          <Link href="/blog">Cẩm nang sức khoẻ</Link>
                        </li>
                        <li>
                          <Link href="/products">Sản phẩm</Link>
                        </li>
                        <li>
                          <Link href="/contact">Liên hệ</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-2 align-self-center d-none d-xl-block">
              <div className="header-contact-info text-end">
                <a
                  className="font-weight-6 ltn__primary-color"
                  href="tel:+123456789"
                >
                  <span className="ltn__secondary-color">
                    <i className="icon-call font-weight-7" />
                  </span>
                  +84 865 095 066
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
