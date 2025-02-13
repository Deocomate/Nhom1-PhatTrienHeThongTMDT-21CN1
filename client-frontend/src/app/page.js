"use client";
import ProductCard from "@/components/ProductCard";
import ProductCardButton from "@/components/ProductCardButton";

export default function Home() {
    return (
        <>
            <div className="bg-green-700">
                <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
                    <ProductCard
                        title={"Cao dán Salonpas Pain Relief Patch 7cmx10cm giảm đau vai, đau cổ, đau lưng, đau khớp (hộp 3 miếng)"}
                        price={"30.000 ₫/Hộp"}
                        favor={"Yêu thích 51.8k"}
                        sale={"Đã bán 8.4k"}
                    />
                    <ProductCard
                        title={"Siro ho thảo dược Pharmacity Herbal Syrup + Vitamin C hỗ trợ bổ phế và giảm ho (Chai 100ml)"}
                        price={"35.000 ₫/Hộp"}
                        favor={"Yêu thích 10.1k"}
                        sale={"Đã bán 9.3k"}
                    />
                </div>
            </div>
        </>
    )
}
