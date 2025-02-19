"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
    // State lưu danh sách sản phẩm
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Hàm fetch dữ liệu từ JSON
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

    // Hàm chia nhóm sản phẩm (mỗi nhóm có 5 sản phẩm)
    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
            array.slice(index * size, index * size + size)
        );
    };

    // Chia nhóm sản phẩm (mỗi `CarouselItem` chứa 5 sản phẩm)
    const groupedProducts = chunkArray(products, 5);

    return (
        <div className="w-full flex flex-col items-center bg-gradient-to-r my-2">
            <div className="max-w-screen-xl w-full p-4 rounded-lg my-4">
                <h1 className="text-xl font-bold text-black">Top bán chạy toàn quốc</h1>

                {loading ? (
                    <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
                ) : (
                    <Carousel className="w-full">
                        <CarouselContent className="flex">
                            {groupedProducts.map((group, index) => (
                                <CarouselItem key={index} className="flex gap-8">
                                    {group.map((product, idx) => (
                                        <ProductCard
                                            key={idx}
                                            title={product.title}
                                            price={product.price}
                                            favor={product.favor}
                                            sale={product.sale}
                                        />
                                    ))}
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                )}
            </div>
        </div>
    );
}
