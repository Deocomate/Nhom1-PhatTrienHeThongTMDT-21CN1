"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import ProductCarousel from "@/components/ProductCarousel";
import { Minus, Plus, Heart } from "lucide-react";

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
            {/* Product Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="relative aspect-square">
                        <Image
                            src="/images/product-placeholder.jpg"
                            alt="Product"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative aspect-square">
                                <Image
                                    src="/images/product-placeholder.jpg"
                                    alt={`Thumbnail ${i}`}
                                    fill
                                    className="object-cover rounded-lg cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">
                        Khẩu trang y tế 3 lớp màu xanh Pharmacity
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">59.000đ</span>
                        <span className="text-sm text-gray-500">/Hộp</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                className="w-20 text-center mx-2"
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                        <Button variant="outline" size="icon">
                            <Heart className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex gap-4">
                        <Button className="flex-1" variant="default">
                            Mua ngay
                        </Button>
                        <Button className="flex-1" variant="outline">
                            Thêm vào giỏ
                        </Button>
                    </div>

                    {/* Product Information */}
                    <Card className="p-4">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Danh mục:</span>
                                <span>Khẩu trang y tế</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Nhà sản xuất:</span>
                                <span>CÔNG TY CỔ PHẦN VIETKBONDS</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Xuất xứ:</span>
                                <span>Việt Nam</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Product Tabs */}
            <Tabs defaultValue="description" className="mb-8">
                <TabsList>
                    <TabsTrigger value="description">Mô tả</TabsTrigger>
                    <TabsTrigger value="details">Thông tin sản phẩm</TabsTrigger>
                    <TabsTrigger value="usage">Cách sử dụng</TabsTrigger>
                    <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                    <Card className="p-4">
                        <p>
                            Khẩu trang y tế 3 lớp màu xanh Pharmacity là loại khẩu trang y tế đạt tiêu chuẩn, 
                            được sản xuất từ chất liệu an toàn, giá thành hợp lý và khách hàng luôn hài lòng 
                            với sản phẩm của thương hiệu Pharmacity cung cấp.
                        </p>
                    </Card>
                </TabsContent>
                <TabsContent value="details" className="mt-4">
                    <Card className="p-4">
                        <p>Thông tin chi tiết sản phẩm...</p>
                    </Card>
                </TabsContent>
                <TabsContent value="usage" className="mt-4">
                    <Card className="p-4">
                        <p>Hướng dẫn sử dụng...</p>
                    </Card>
                </TabsContent>
                <TabsContent value="reviews" className="mt-4">
                    <Card className="p-4">
                        <p>Đánh giá từ khách hàng...</p>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Related Products */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Sản phẩm liên quan</h2>
                <ProductCarousel />
            </div>
        </div>
    );
}