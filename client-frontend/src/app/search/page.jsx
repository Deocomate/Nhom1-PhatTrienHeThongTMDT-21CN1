"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import axios from 'axios';
import ProductFilterSidebar from '@/components/ProductFilterSidebar';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12);
    // Add state for brands
    const [brands, setBrands] = useState([]);
    const [visibleBrands, setVisibleBrands] = useState(5);
    const [isExpandedBrands, setIsExpandedBrands] = useState(false);

    const toggleBrands = () => {
        if (isExpandedBrands) {
            setVisibleBrands(5);
            setIsExpandedBrands(false);
        } else {
            setVisibleBrands(brands.length);
            setIsExpandedBrands(true);
        }
    };

    useEffect(() => {
        const searchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/data/products.json');
                let filteredProducts = response.data;
                
                // Extract unique brands from products
                const uniqueBrands = [...new Set(filteredProducts.map(product => product.brand))].filter(Boolean).sort();
                setBrands(uniqueBrands);
                
                // Rest of your filtering logic
                if (query) {
                    filteredProducts = filteredProducts.filter(product => 
                        product.title.toLowerCase().includes(query.toLowerCase())
                    );
                }

                // Filter by price range
                if (priceRange.min || priceRange.max) {
                    filteredProducts = filteredProducts.filter(product => {
                        const price = parseFloat(product.price);
                        const min = priceRange.min ? parseFloat(priceRange.min) : 0;
                        const max = priceRange.max ? parseFloat(priceRange.max) : Infinity;
                        return price >= min && price <= max;
                    });
                }

                // Filter by brands
                if (selectedBrands.length > 0) {
                    filteredProducts = filteredProducts.filter(product =>
                        selectedBrands.includes(product.brand)
                    );
                }
                
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error searching products:', error);
                setProducts([]);
                setBrands([]);
            } finally {
                setLoading(false);
            }
        };

        searchProducts();
    }, [query, priceRange, selectedBrands]);

    const handleBrandChange = (brand) => {
        setSelectedBrands(prev => 
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

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
                <div className="flex gap-6">
                    {/* Replace filter sidebar with new component */}
                    <ProductFilterSidebar 
                        brands={brands}
                        selectedBrands={selectedBrands}
                        onBrandChange={handleBrandChange}
                        priceRange={priceRange}
                        onPriceRangeChange={setPriceRange}
                        onResetPrice={() => setPriceRange({ min: '', max: '' })}
                    />

                    {/* Product Grid remains the same */}
                    <div className="flex-1">
                        {products.length === 0 ? (
                            <div className="text-center text-gray-500">
                                Không tìm thấy sản phẩm nào phù hợp với từ khóa tìm kiếm
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {products.slice(0, visibleProducts).map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            {...product}
                                        />
                                    ))}
                                </div>
                                
                                {visibleProducts < products.length && (
                                    <div className="flex justify-center pt-4">
                                        <Button
                                            onClick={loadMore}
                                            variant="outline"
                                            className="px-8"
                                        >
                                            Xem thêm sản phẩm
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}