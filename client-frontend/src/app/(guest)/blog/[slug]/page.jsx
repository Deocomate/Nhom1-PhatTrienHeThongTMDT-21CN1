"use client"
import ProductDetailPage from '@/pages/product/product_detail/ProductDetailPage';
import {useParams, useRouter} from "next/navigation";
import {BlogDetailPage} from "@/pages/blog_detail/BlogDetailPage";

const Page = () => {
    const params = useParams()

    const {slug} = params; // Lấy categorySlug từ URL

    if (!slug) {
        return <div>Loading...</div>; // Hiển thị khi categorySlug chưa có giá trị
    }

    return (<BlogDetailPage slug={slug}></BlogDetailPage>);
};

export default Page;