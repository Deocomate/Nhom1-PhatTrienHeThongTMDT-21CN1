import React from 'react';
import ProductCarousel from "@/components/products/ProductCarousel";

const HomePage = () => {
    return (<div className="">
        <div className="mx-auto w-full max-w-screen-xl">
            <div className="px-4 py-6">
                <h1 className="text-xl font-bold my-4">Sản phẩm mới</h1>
                <ProductCarousel/>
                <h1 className="text-xl font-bold my-4 mt-10">Sản phẩm bán chạy</h1>
                <ProductCarousel/>
            </div>
        </div>
    </div>);
};

export default HomePage;