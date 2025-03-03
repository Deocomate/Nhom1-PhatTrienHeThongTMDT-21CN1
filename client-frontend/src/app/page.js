import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-screen-xl">
            <div className="px-4 py-6">
                <h1 className="text-xl font-bold my-4">Sản phẩm mới</h1>
                <ProductCarousel/>

                <h1 className="text-xl font-bold my-4 mt-10">Sản phẩm bán chạy</h1>
                <ProductCarousel/>

            </div>
        </div>
    );
}