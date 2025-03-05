
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProductFilterSidebar({ 
    brands = [], 
    selectedBrands = [], 
    onBrandChange, 
    priceRange = { min: '', max: '' }, 
    onPriceRangeChange,
    onResetPrice 
}) {
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

    return (
        <div className="w-64 flex-shrink-0 py-2">
            <div className="space-y-6 mr-4">
                {/* Price Range Filter */}
                <div>
                    <h3 className="font-semibold mb-3">Khoảng giá</h3>
                    <div className="space-y-2">
                        <Input
                            type="number"
                            placeholder="Từ"
                            value={priceRange.min}
                            onChange={(e) => onPriceRangeChange({ ...priceRange, min: e.target.value })}
                        />
                        <Input
                            type="number"
                            placeholder="Đến"
                            value={priceRange.max}
                            onChange={(e) => onPriceRangeChange({ ...priceRange, max: e.target.value })}
                        />
                        <Button 
                            className="w-full"
                            onClick={onResetPrice}
                        >
                            Đặt lại
                        </Button>
                    </div>
                </div>

                {/* Brand Filter */}
                <div>
                    <h3 className="font-semibold mb-3">Thương hiệu</h3>
                    <div className="space-y-2">
                        {brands.slice(0, visibleBrands).map((brand) => (
                            <div key={brand} className="flex items-center space-x-2">
                                <Checkbox
                                    id={brand}
                                    checked={selectedBrands.includes(brand)}
                                    onCheckedChange={() => onBrandChange(brand)}
                                />
                                <label htmlFor={brand} className="text-sm">
                                    {brand}
                                </label>
                            </div>
                        ))}
                        
                        {brands.length > 5 && (
                            <Button
                                variant="ghost"
                                onClick={toggleBrands}
                                className="w-full text-sm text-gray-500 mt-2"
                            >
                                {isExpandedBrands ? 'Thu gọn' : 'Xem thêm'}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}