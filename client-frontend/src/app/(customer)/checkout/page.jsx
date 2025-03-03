"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState([]);
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        paymentMethod: 'cod'
    });

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(items);
    }, []);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.removeItem('cart');
        router.push('/order-success');
    };

    return (
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">Thanh toán</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold mb-4">Thông tin giao hàng</h2>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="fullName">Họ và tên</Label>
                                    <Input
                                        id="fullName"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Số điện thoại</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="address">Địa chỉ</Label>
                                    <Input
                                        id="address"
                                        value={formData.address}
                                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold mb-4">Phương thức thanh toán</h2>
                            <RadioGroup
                                value={formData.paymentMethod}
                                onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="cod" id="cod" />
                                    <Label htmlFor="cod">Thanh toán khi nhận hàng (COD)</Label>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <RadioGroupItem value="banking" id="banking" />
                                    <Label htmlFor="banking">Chuyển khoản ngân hàng</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </form>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Đơn hàng của bạn</h2>
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium line-clamp-2">{item.title}</h3>
                                        <p className="text-sm text-gray-500">
                                            {item.quantity} x {item.price}đ
                                        </p>
                                    </div>
                                </div>
                            ))}

                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between mb-2">
                                    <span>Tạm tính</span>
                                    <span>{total}đ</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Phí vận chuyển</span>
                                    <span>0đ</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg border-t pt-2">
                                    <span>Tổng cộng</span>
                                    <span className="text-green-600">{total}đ</span>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-green-700 hover:bg-green-800"
                                onClick={handleSubmit}
                            >
                                Đặt hàng
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}