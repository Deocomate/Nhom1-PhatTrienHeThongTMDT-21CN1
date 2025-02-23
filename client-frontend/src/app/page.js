"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductCarousel from "@/components/ProductCarousel";
import CategoryList from "@/components/CategoryList";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/data/products.json")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="w-full flex flex-col items-center bg-gradient-to-r my-2">
            {loading ? (
                <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
            ) : (
                <>
                    <ProductCarousel title="Top bán chạy toàn quốc" products={products.slice(0, 15)} />
                    <ProductCarousel title="Sản phẩm giảm giá sốc" products={products.slice(0, 5)}
                        className="bg-gradient-to-r from-green-700 to-blue-600"
                    />
                    <CategoryList/>
                    <ProductCarousel title="Sản phẩm bán chạy" products={products.slice(0, 10)} />
                </>
            )}
        </div>
    );
}
