"use client"
import { useAuth } from '@/auth/AuthProvider';
import apiService from '@/lib/api/apiService';
import React, { useState } from 'react'

export default function AccountDetail({ user }) {

    let { setUser } = useAuth()

    let customer_id = user.id;
    let [fullName, setFullName] = useState(user.fullName);
    let [email, setEmail] = useState(user.email);
    let [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    let [address, setAddress] = useState(user.address);
    let [gender, setGender] = useState(user.gender)

    const handleSubmit = async () => {
        let data = {
            fullName,
            email,
            phoneNumber,
            address,
            gender
        }


        let res = await apiService.put(`/customers/${customer_id}`, data)

        if (res.code === 200) {
            alert("Cập nhật thông tin thành công")
            setUser(res.data)
        } else {
            alert("Cập nhật thông tin thất bại")
        }
    }

    return (
        <>
            <div className="tab-pane fade" id="liton_tab_1_5">
                <div className="ltn__myaccount-tab-content-inner">
                    <p>
                        Thông tin cá nhân của tài khoản sẽ hiển thị ở đây.
                    </p>
                    <div className="ltn__form-box">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}>
                            <div className="row mb-50">
                                <div className="col-md-6">
                                    <label>Họ và tên:</label>
                                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                                </div>
                                <div className="col-md-6">
                                    <label>Số điện thoại:</label>
                                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                                </div>
                                <div className="col-md-6">
                                    <label>Email:</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="col-md-6">
                                    <label>Địa chỉ:</label>
                                    <input
                                        type="text"
                                        value={address} onChange={(e) => setAddress(e.target.value)} required
                                    />
                                </div>
                            </div>
                            {/* <fieldset>
                                <legend>Password change</legend>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>
                                            Current password (leave blank to leave
                                            unchanged):
                                        </label>
                                        <input type="password" name="ltn__name" />
                                        <label>
                                            New password (leave blank to leave
                                            unchanged):
                                        </label>
                                        <input
                                            type="password"
                                            name="ltn__lastname"
                                        />
                                        <label>Confirm new password:</label>
                                        <input
                                            type="password"
                                            name="ltn__lastname"
                                        />
                                    </div>
                                </div>
                            </fieldset> */}
                            <div className="btn-wrapper">
                                <button type="submit"
                                    className="btn theme-btn-1 btn-effect-1 text-uppercase">
                                    Cập nhật thông tin
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}
