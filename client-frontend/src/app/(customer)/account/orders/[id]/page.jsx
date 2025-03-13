"use client"
import {useParams} from "next/navigation";
import React from "react";
import OrderDetailsPage from "@/pages/account/OrderDetailsPage";

const Page = () => {

    const params = useParams()

    const {id} = params; // Lấy categorySlug từ URL

    if (!id) {
        return <div>Loading...</div>; // Hiển thị khi categorySlug chưa có giá trị
    }

    return (<>
        <OrderDetailsPage orderId={id}></OrderDetailsPage>
    </>)
}

export default Page
