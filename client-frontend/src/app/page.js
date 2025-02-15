"use client";
import ProductCard from "@/components/ProductCard";
import ProductCardButton from "@/components/ProductCardButton";
import HoverButton from "@/components/HoverButton";

export default function Home() {
    return (
        <>
            <div className="">
                <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
                    <ProductCard
                        title={"Cao dán Salonpas Pain Relief Patch 7cmx10cm giảm đau vai, đau cổ, đau lưng, đau khớp (hộp 3 miếng)"}
                        price={"30.000 ₫/Hộp"}
                        favor={"Yêu thích 51.8k"}
                        sale={"Đã bán 8.4k"}
                    />

                </div>
            </div>
        </>
    )
}
