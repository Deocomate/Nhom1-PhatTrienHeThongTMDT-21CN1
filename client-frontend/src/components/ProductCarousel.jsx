"use client";

import ProductCard from "@/components/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProductCarousel({ title, products }) {
    // Hàm chia nhóm sản phẩm (5 sản phẩm mỗi nhóm)

    return (
        <div className="max-w-screen-xl w-full p-4 rounded-lg my-4">
            <h1 className="text-xl font-bold text-black mb-4">{title}</h1>

            <Carousel className="w-full">
                <CarouselContent className="flex">
                    {products.map((product, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                                <ProductCard
                                    key={index}
                                    title={product.title}
                                    price={product.price}
                                    favor={product.favor}
                                    sale={product.sale}
                                />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
