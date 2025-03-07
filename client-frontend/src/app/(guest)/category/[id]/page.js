"use client"
import ProductDetailPage from '@/pages/product/product_detail/ProductDetailPage';
import React from 'react';
import {useParams, useRouter} from "next/navigation";
import {CategoryPage} from "@/pages/category/CategoryPage";

const Page = () => {
    const params = useParams()

    const {id} = params; // Lấy categorySlug từ URL

    if (!id) {
        return <div>Loading...</div>; // Hiển thị khi categorySlug chưa có giá trị
    }

    return (<CategoryPage slug={id}></CategoryPage>);
};

export default Page;