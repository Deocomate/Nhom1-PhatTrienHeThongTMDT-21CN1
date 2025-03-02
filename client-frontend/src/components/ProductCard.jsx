import { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";

export default function ProductCard({ id, title = "", price = "", favorite = "", sale = "", className = "" }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        
        const existingItemIndex = cartItems.findIndex(item => item.id === id);
        
        if (existingItemIndex >= 0) {
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            cartItems.push({
                id,
                title,
                price,
                quantity,
                image: "/500x500.svg" 
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    return (
        <Card className={`w-full max-w-[224px] h-[380px] rounded-lg border-none shadow-lg flex flex-col my-2 ${className}`}>
            <Link href={`/products/${id}`}>
                <CardContent className="p-0 flex items-center justify-center h-[224px] w-full bg-white shrink-0 overflow-hidden rounded-t-lg cursor-pointer">
                    <img
                        src="/500x500.svg"
                        alt="Product"
                        className="w-full h-full object-cover"
                    />
                </CardContent>
            </Link>

            <div className="flex flex-col flex-1 min-h-0">
                <CardHeader className="p-2">
                    <Link href={`/products/${id}`}>
                        <CardTitle className="text-sm font-bold h-[40px] leading-5 line-clamp-2 cursor-pointer hover:text-green-700">
                            {title}
                        </CardTitle>
                    </Link>
                </CardHeader>

                <CardContent className="text-sm p-2 pt-0">
                    <p className="font-extrabold text-green-600">
                        {price} đ
                    </p>
                    <p className="text-xs font-bold text-gray-500 truncate">
                        Yêu thích {favorite} | Đã bán {sale}
                    </p>
                </CardContent>

                <CardFooter className="p-2 mt-auto">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-green-700 text-white rounded-md hover:bg-green-900 w-full">
                                Chọn sản phẩm
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Thêm vào giỏ hàng</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="/500x500.svg"
                                        alt={title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{title}</h3>
                                        <p className="text-green-600 font-bold">{price} đ</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm">Số lượng:</span>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        >
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="w-12 text-center">{quantity}</span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Button
                                        className="flex-1"
                                        variant="outline"
                                        onClick={handleAddToCart}
                                    >
                                        Thêm vào giỏ hàng
                                    </Button>
                                    <Button
                                        className="flex-1 bg-green-700 hover:bg-green-800"
                                        onClick={() => {
                                            handleAddToCart();
                                            window.location.href = '/checkout';
                                        }}
                                    >
                                        Mua ngay
                                    </Button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </div>
        </Card>
    );
}