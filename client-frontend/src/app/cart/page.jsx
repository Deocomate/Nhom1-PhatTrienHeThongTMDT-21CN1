"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(items);
    }, []);

    const updateQuantity = (id, newQuantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    const removeItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">Giỏ hàng</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500">Giỏ hàng của bạn đang trống</p>
                    <Button
                        className="mt-4 bg-green-700 hover:bg-green-800"
                        onClick={() => router.push('/')}
                    >
                        Tiếp tục mua sắm
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4 p-4 border-b">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-24 h-24 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <h3 className="font-medium">{item.title}</h3>
                                    <p className="text-green-600 font-bold">{item.price}đ</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="w-12 text-center">{item.quantity}</span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="ml-auto text-red-500"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-4">Tổng giỏ hàng</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Tạm tính</span>
                                    <span>{total}đ</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg border-t pt-2">
                                    <span>Tổng cộng</span>
                                    <span className="text-green-600">{total}đ</span>
                                </div>
                                <Button
                                    className="w-full mt-4 bg-green-700 hover:bg-green-800"
                                    onClick={() => router.push('/checkout')}
                                >
                                    Tiến hành đặt hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}