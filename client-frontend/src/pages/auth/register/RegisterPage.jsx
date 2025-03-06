"use client"
import BreadCrumbDefault from "@/components/breadcrumbs/BreadCrumbDefault";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/auth/AuthProvider';
import axios from "axios"; // Import useAuth
import Link from "next/link";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("male");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState([]); // State to hold error message
    const router = useRouter();
    const { signup } = useAuth(); // Get signup function

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        try {
            let data = {
                email, password, fullName, gender, phoneNumber, address,
            }
            let res = await signup(data);
            if (res.status > 201) {
                setErrors(res.data.error);
            } else {
                router.push("/login");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (<>
        <BreadCrumbDefault name="Đăng ký"></BreadCrumbDefault>
        <div className="ltn__login-area pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                            <h1 className="section-title">
                                Đăng Ký <br />
                                Tài Khoản Mới
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="account-login-inner">
                            <form onSubmit={handleSubmit}>
                                {errors.map((err, index) => (
                                    <div key={index} className="alert alert-danger">{err.message}</div>
                                    // <div key={index}>Hello</div>
                                ))}
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Họ và tên*"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu*"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <select
                                    id={"select-gender"}
                                    name={"select-gender"}
                                    className="w-100 form-control form-select-lg mb-4 rounded-0"
                                    placeholder="Giới tính"
                                    value={gender}
                                    onChange={(e) => {
                                        console.log("Change!")
                                        setGender(e.target.value)
                                    }}>
                                    <option value="male">Nam</option>
                                    <option value="female">Nữ</option>
                                </select>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Số điện thoại"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Địa chỉ nhận hàng*"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <div className="btn-wrapper">
                                    <button
                                        className="theme-btn-1 btn reverse-color btn-block"
                                        type="submit"
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                            </form>
                            <div className="by-agree text-center">
                                <div className="go-to-btn mt-50">
                                    <Link href="/login">Tôi đã có tài khoản ?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}