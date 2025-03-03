"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProductCarousel() {
    const [products, setProducts] = useState([]);
    const [itemsPerView, setItemsPerView] = useState(5); // Số lượng sản phẩm hiển thị

    useEffect(() => {
        // Lấy dữ liệu từ file JSON
        axios.get("/data/products.json")
            .then((response) => setProducts(response.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    useEffect(() => {
        // Lắng nghe sự thay đổi kích thước màn hình
        const updateItemsPerView = () => {
            const width = window.innerWidth;
            if (width >= 1280) setItemsPerView(5); // Desktop lớn
            else if (width >= 1024) setItemsPerView(4); // Laptop
            else if (width >= 768) setItemsPerView(3); // Tablet
            else setItemsPerView(1); // Mobile (hiển thị từng sản phẩm)
        };

        updateItemsPerView(); // Gọi ngay khi component render
        window.addEventListener("resize", updateItemsPerView);

        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    return (
        <div className="w-full max-w-screen-xl mx-auto">
            {/* Desktop & Tablet: Carousel thay đổi số lượng sản phẩm hiển thị */}
            <div className="hidden md:block">
                <Carousel>
                    <CarouselContent className="flex">
                        {products.slice(0, 10).map((product) => (
                            <CarouselItem key={product.id} className={`basis-1/${itemsPerView}`}>
                                <ProductCard {...product} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* Mobile: Horizontal scroll (giữ nguyên) */}
            <div className="md:hidden overflow-x-auto flex gap-4 scrollbar-hide py-2">
                {products.map((product) => (
                    <div key={product.id} className="flex-shrink-0">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
