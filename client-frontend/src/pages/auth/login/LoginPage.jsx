"use client"
import { useAuth } from "@/auth/AuthProvider";
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginPage() {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let { login } = useAuth()

    let handleSubmit = async () => {
        let res = await login(email, password);
    }

    return (<>
        <BreadCrumbDefault name="Đăng nhập"></BreadCrumbDefault>
        <div className="ltn__login-area pb-65">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                            <h1 className="section-title">
                                Đăng Nhập <br />
                                Vào Tài Khoản Của Bạn
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="account-login-inner">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                handleSubmit()
                            }}
                                className="ltn__form-box contact-form-box">
                                <input type="email"
                                    required={true}
                                    value={email}
                                    onInput={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    placeholder="Email*" />
                                <input
                                    type="password"
                                    required={true}
                                    value={password}
                                    onInput={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    placeholder="Password*"
                                />
                                <div className="btn-wrapper mt-0">
                                    <button className="theme-btn-1 btn btn-block" type="submit">
                                        Đăng nhập
                                    </button>
                                </div>
                                {/*<div className="go-to-btn mt-20">*/}
                                {/*    <a href="#">*/}
                                {/*        <small>FORGOTTEN YOUR PASSWORD?</small>*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="account-create text-center pt-50">
                            <h4>BẠN CHƯA CÓ TÀI KHOẢN?</h4>
                            <p>
                                Tạo tài khoản mới ngay{" "}
                                <br />
                                Kiểm tra đơn hàng tiện lợi, nhanh gọn và dễ dàng.
                            </p>
                            <div className="btn-wrapper">
                                <Link href="/register" className="theme-btn-1 btn black-btn">
                                    Đăng ký tài khoản
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
