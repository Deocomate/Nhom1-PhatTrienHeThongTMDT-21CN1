"use client";

import ProductCard from "@/components/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProductCarousel({ title, products }) {
    // Hàm chia nhóm sản phẩm (5 sản phẩm mỗi nhóm)
    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
            array.slice(index * size, index * size + size)
        );
    };

    const groupedProducts = chunkArray(products, 5);

    return (
        <div className="max-w-screen-xl w-full p-4 rounded-lg my-4">
            <h1 className="text-xl font-bold text-black">{title}</h1>

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
    );
}
