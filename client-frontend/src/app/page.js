"use client";

import ProductCard from "@/components/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center">
            {/*<div className="max-w-screen-xl w-full px-4 pt-4">*/}

            {/*</div>*/}

            {/* Carousel Container */}
            <div className="max-w-screen-xl w-full p-4">
                <h1 className="text-xl font-bold">Top bán chạy toàn quốc</h1>
                <Carousel className="w-full">
                    <CarouselContent className="flex">
                        <CarouselItem className="flex gap-8">
                            <ProductCard
                                title={"Cao dán Salonpas Pain Relief Patch 7cmx10cm giảm đau vai, đau cổ, đau lưng, đau khớp (hộp 3 miếng)"}
                                price={"30.000 đ/Hộp"}
                                favor={"Yêu thích 51.8k"}
                                sale={"Đã bán 8.4k"}
                            />
                            <ProductCard
                                title={"Cao dán Salonpas Pain Relief Patch 7cmx10cm giảm đau vai, đau cổ, đau lưng, đau khớp (hộp 3 miếng)"}
                                price={"30.000 đ/Hộp"}
                                favor={"Yêu thích 51.8k"}
                                sale={"Đã bán 8.4k"}
                            />
                            <ProductCard
                                title={"Cao dán Salonpas Pain Relief Patch 7cmx10cm giảm đau vai, đau cổ, đau lưng, đau khớp (hộp 3 miếng)"}
                                price={"30.000 đ/Hộp"}
                                favor={"Yêu thích 51.8k"}
                                sale={"Đã bán 8.4k"}
                            />
                            <ProductCard
                                title={"Cao dán Salonpas Pain Relief Patch 7cmx10cm giảm đau vai, đau cổ, đau lưng, đau khớp (hộp 3 miếng)"}
                                price={"30.000 đ/Hộp"}
                                favor={"Yêu thích 51.8k"}
                                sale={"Đã bán 8.4k"}
                            />
                            <ProductCard
                                title={"Cao dán Salonpas Pain Relief Patch 7cmx10cm giảm đau vai, đau cổ, đau lưng, đau khớp (hộp 3 miếng)"}
                                price={"30.000 đ/Hộp"}
                                favor={"Yêu thích 51.8k"}
                                sale={"Đã bán 8.4k"}
                            />

                        </CarouselItem>
                        <CarouselItem>
                            <ProductCard
                                title={"Cao dán Salonpas Pain Relief Patch 7cmx10cm giảm đau vai, đau cổ, đau lưng, đau khớp (hộp 3 miếng)"}
                                price={"30.000 đ/Hộp"}
                                favor={"Yêu thích 51.8k"}
                                sale={"Đã bán 8.4k"}
                            />
                        </CarouselItem>
                        <CarouselItem>...</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
