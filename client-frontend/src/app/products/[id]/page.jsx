"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get("/data/products.json")
            .then((response) => {
                const foundProduct = response.data.find(p => p.id === parseInt(id));
                setProduct(foundProduct);
            })
            .catch((error) => console.error("Lỗi tải chi tiết sản phẩm:", error));
    }, [id]);

    if (!product) return <p className="p-6">Sản phẩm không tồn tại!</p>;

    return (
        <div className="p-6">

            <ProductCard
                title={product.title}
                price={product.price.toLocaleString()}
                favorite={product.favorite}
                sale={product.sale}
            />
            <Link href="/products" className="block mt-6 text-blue-600 hover:underline">
                ← Quay lại danh sách sản phẩm
            </Link>
        </div>
    );
}
