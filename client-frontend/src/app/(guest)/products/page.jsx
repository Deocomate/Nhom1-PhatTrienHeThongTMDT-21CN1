"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/data/products.json")
            .then((response) => {
                console.log("Dữ liệu từ JSON:", response.data);
                setProducts(Array.isArray(response.data) ? response.data : []);
            })
            .catch((error) => {
                console.error("Lỗi tải sản phẩm:", error);
                setProducts([]);
            });
    }, []);

    return (
        <div className="mx-auto w-full max-w-screen-xl">
            <div className="px-4 py-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {products.map((product) => (
                        <div key={product.id}>
                            <ProductCard
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                favorite={product.favorite}
                                sale={product.sale}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
