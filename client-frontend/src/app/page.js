"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
        array.slice(index * size, index * size + size)
    );
};

export default function Home() {
    const [products, setProducts] = useState([]);

    // Fetch dữ liệu từ JSON
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/data/products.json");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
            }
        };

        fetchProducts();
    }, []);

    // Chia nhóm sản phẩm (mỗi `CarouselItem` chứa 5 sản phẩm)
    const groupedProducts = chunkArray(products, 5);

    return (
        <div className="w-full flex flex-col items-center bg-gradient-to-r my-2">
            <div className="max-w-screen-xl w-full p-4 rounded-lg my-4">
                <h1 className="text-xl font-bold text-black">Top bán chạy toàn quốc</h1>
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
            </div>
        </div>
    );
}
