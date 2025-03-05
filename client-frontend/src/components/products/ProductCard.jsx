import {useState} from 'react';
import {
    Card, CardContent, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription
} from "@/components/ui/dialog";
import {
    Minus, Plus, Heart, Info, ShoppingCart, Pill, Factory, AlertCircle
} from "lucide-react";
import {
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import {Badge} from "@/components/ui/badge";

export default function ProductCard({
                                        id,
                                        title = "",
                                        price = 0,
                                        thumbnail = "",
                                        brand = "",
                                        activeIngredient = "",
                                        manufacturer = "",
                                        dosageForm = "",
                                        quantity = 0,
                                        registrationNumber = "",
                                        category = "",
                                        className = ""
                                    }) {
    const [cartQuantity, setCartQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    const formattedPrice = new Intl.NumberFormat('vi-VN').format(price);
    const inStock = quantity > 0;

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

        const existingItemIndex = cartItems.findIndex(item => item.id === id);

        if (existingItemIndex >= 0) {
            cartItems[existingItemIndex].quantity += cartQuantity;
        } else {
            cartItems.push({
                id, title, price, quantity: cartQuantity, thumbnail, dosageForm, brand
            });
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    const toggleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite(!isFavorite);
        // Implement wishlist logic here
    };

    return (<Card className={`w-full max-w-xs h-full rounded-lg border shadow-md flex flex-col ${className}`}>
        <div className="relative">
            <Link href={`/products/${id}`}>
                <CardContent
                    className="p-0 flex items-center justify-center h-48 w-full bg-white overflow-hidden rounded-t-lg">
                    <img
                        src={thumbnail || "/api/placeholder/300/300"}
                        alt={title}
                        className="w-full h-full object-contain p-2"
                    />
                </CardContent>
            </Link>

            <button
                onClick={toggleFavorite}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm"
            >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}/>
            </button>

            {!inStock && (<div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
                <Badge variant="destructive" className="text-sm py-1 px-2">Hết hàng</Badge>
            </div>)}

            <Badge className="absolute top-3 left-3 bg-blue-100 text-blue-800 border-blue-200">
                {dosageForm}
            </Badge>
        </div>

        <div className="flex flex-col flex-1 min-h-0">
            <CardHeader className="p-3 pb-1">
                <div className="flex justify-between items-start">
                    <Link href={`/brands/${brand}`}>
                        <Badge variant="outline" className="mb-1 text-xs">
                            {brand}
                        </Badge>
                    </Link>
                    <Badge variant="secondary" className="text-xs">
                        {category}
                    </Badge>
                </div>
                <Link href={`/products/${id}`}>
                    <CardTitle
                        className="text-sm font-bold leading-5 line-clamp-2 hover:text-blue-600 transition-colors">
                        {title}
                    </CardTitle>
                </Link>
            </CardHeader>

            <CardContent className="px-3 py-1 space-y-2">
                <div className="flex items-center text-xs text-gray-600 space-x-1">
                    <Pill className="h-3 w-3"/>
                    <span className="truncate" title={activeIngredient}>
                            {activeIngredient}
                        </span>
                </div>

                <div className="flex items-center text-xs text-gray-600 space-x-1">
                    <Factory className="h-3 w-3"/>
                    <span className="truncate" title={manufacturer}>
                            {manufacturer}
                        </span>
                </div>

                <div className="flex items-center mt-1">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center text-xs text-gray-500">
                                    <Info className="h-3 w-3 mr-1"/>
                                    <span className="truncate">
                                            {registrationNumber}
                                        </span>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Số đăng ký: {registrationNumber}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <p className="font-bold text-lg text-blue-700">
                    {formattedPrice} đ
                </p>
            </CardContent>

            <CardFooter className="p-3 pt-1 mt-auto">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            disabled={!inStock}
                        >
                            <ShoppingCart className="mr-2 h-4 w-4"/>
                            Thêm vào giỏ
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Thêm thuốc vào giỏ hàng</DialogTitle>
                            <DialogDescription>
                                Vui lòng chọn số lượng và xác nhận
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={thumbnail || "/api/placeholder/100/100"}
                                    alt={title}
                                    className="w-16 h-16 object-contain rounded border p-1"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm">{title}</h3>
                                    <p className="text-xs text-gray-500">{activeIngredient}</p>
                                    <p className="text-blue-700 font-bold mt-1">{formattedPrice} đ</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between px-1">
                                <div className="flex items-center space-x-1 text-sm text-gray-600">
                                    <AlertCircle className="h-4 w-4 text-amber-500"/>
                                    <span>Còn lại: {quantity}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setCartQuantity(Math.max(1, cartQuantity - 1))}
                                        className="h-8 w-8"
                                    >
                                        <Minus className="h-3 w-3"/>
                                    </Button>
                                    <span className="w-8 text-center">{cartQuantity}</span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setCartQuantity(Math.min(quantity, cartQuantity + 1))}
                                        className="h-8 w-8"
                                        disabled={cartQuantity >= quantity}
                                    >
                                        <Plus className="h-3 w-3"/>
                                    </Button>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Đơn giá:</span>
                                    <span>{formattedPrice} đ</span>
                                </div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Số lượng:</span>
                                    <span>x {cartQuantity}</span>
                                </div>
                                <div className="flex justify-between font-bold text-blue-700 pt-1 border-t">
                                    <span>Tổng tiền:</span>
                                    <span>{new Intl.NumberFormat('vi-VN').format(price * cartQuantity)} đ</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    className="flex-1"
                                    variant="outline"
                                    onClick={handleAddToCart}
                                >
                                    <ShoppingCart className="mr-2 h-4 w-4"/>
                                    Thêm vào giỏ
                                </Button>
                                <Button
                                    className="flex-1 bg-blue-600 hover:bg-blue-700"
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
    </Card>);
}