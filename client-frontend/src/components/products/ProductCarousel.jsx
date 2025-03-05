"use client";

import {useState, useEffect} from "react";
import axios from "axios";
import ProductCard from "./ProductCard"; // Giữ nguyên tên component
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious
} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

export default function ProductCarousel({
                                            title = "Sản phẩm nổi bật",
                                            endpoint = "/data/products.json",
                                            limit = 10,
                                            className = ""
                                        }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get(endpoint);
                setProducts(Array.isArray(response.data) ? response.data.slice(0, limit) : []);
                setError(null);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Không thể tải sản phẩm. Vui lòng thử lại sau.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts().then();
    }, [endpoint, limit]);

    // Skeleton loader cho trạng thái loading
    const renderSkeleton = () => {
        return Array(4).fill(0).map((_, index) => (<CarouselItem key={`skeleton-${index}`}
                                                                 className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 p-2">
            <Card className="w-full h-[380px] bg-gray-100 animate-pulse">
                <CardContent className="p-0 h-full"></CardContent>
            </Card>
        </CarouselItem>));
    };

    if (error) {
        return (<div className="w-full p-8 text-center text-red-500">
            <p>{error}</p>
        </div>);
    }

    return (<div className={`w-full max-w-screen-2xl mx-auto px-4 py-6 ${className}`}>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <a href="/products" className="text-blue-600 hover:underline text-sm">Xem tất cả</a>
        </div>

        {/* Desktop & Tablet: Carousel */}
        <div className="hidden md:block">
            <Carousel className="w-full">
                <CarouselContent className="-ml-2 -mr-2">
                    {loading ? (renderSkeleton()) : (products.map((product) => (<CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 p-2">
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            thumbnail={product.thumbnail}
                            brand={product.brand?.name || product.brand}
                            activeIngredient={product.active_ingredient}
                            manufacturer={product.manufacturer}
                            dosageForm={product.dosage_form}
                            quantity={product.quantity}
                            registrationNumber={product.registration_number}
                            category={product.category?.name || product.category}
                        />
                    </CarouselItem>)))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-4">
                    <CarouselPrevious className="relative static translate-y-0 right-0 mr-2"/>
                    <CarouselNext className="relative static translate-y-0 right-0"/>
                </div>
            </Carousel>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden">
            <div className="overflow-x-auto flex gap-3 pb-4 scrollbar-hide snap-x snap-mandatory">
                {loading ? (Array(3).fill(0).map((_, index) => (
                    <div key={`mobile-skeleton-${index}`} className="flex-shrink-0 snap-start w-[280px]">
                        <Card className="w-full h-[380px] bg-gray-100 animate-pulse">
                            <CardContent className="p-0 h-full"></CardContent>
                        </Card>
                    </div>))) : (products.map((product) => (
                    <div key={product.id} className="flex-shrink-0 snap-start w-[280px]">
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            thumbnail={product.thumbnail}
                            brand={product.brand?.name || product.brand}
                            activeIngredient={product.active_ingredient}
                            manufacturer={product.manufacturer}
                            dosageForm={product.dosage_form}
                            quantity={product.quantity}
                            registrationNumber={product.registration_number}
                            category={product.category?.name || product.category}
                        />
                    </div>)))}
            </div>
            {/* Hiển thị dots indicator cho mobile */}
            <div className="flex justify-center space-x-2 mt-4">
                {!loading && products.slice(0, 5).map((_, index) => (<div
                    key={`dot-${index}`}
                    className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
                />))}
            </div>
        </div>
    </div>);
}