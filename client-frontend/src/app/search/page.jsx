"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import axios from 'axios';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const searchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/data/products.json');
                const allProducts = response.data;
                
                const filteredProducts = allProducts.filter(product => 
                    product.title.toLowerCase().includes(query.toLowerCase())
                );
                
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error searching products:', error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            searchProducts();
        } else {
            setProducts([]);
            setLoading(false);
        }
    }, [query]);

    if (loading) {
        return (
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="px-4 py-6">
                    <div className="text-center">Đang tìm kiếm...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-screen-xl">
            <div className="px-4 py-6">
                <h1 className="text-xl font-bold my-4">
                    Kết quả tìm kiếm cho "{query}"
                </h1>

                {products.length === 0 ? (
                    <div className="text-center text-gray-500">
                        Không tìm thấy sản phẩm nào phù hợp với từ khóa tìm kiếm
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}