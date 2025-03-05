"use client";

import {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu, Search, Heart, ShoppingCart, User, ChevronDown} from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    HoverCard, HoverCardContent, HoverCardTrigger,
} from "@/components/ui/hover-card";
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function Header() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Update cart items when component mounts and when localStorage changes
        const updateCartItems = () => {
            const items = JSON.parse(localStorage.getItem('cart') || '[]');
            setCartItems(items);
        };

        updateCartItems();
        window.addEventListener('storage', updateCartItems);
        return () => window.removeEventListener('storage', updateCartItems);
    }, []);
    const categories = ['Thuốc', 'Tra cứu bệnh', 'Thực phẩm chức năng', 'Mẹ và bé', 'Chăm sóc cá nhân', 'Chăm sóc sắc đẹp', 'Thiết bị y tế'];

    // Add search handler
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (<header className="border-b pb-2 bg-green-700 text-white">
        <div className="mx-auto w-full max-w-screen-xl">
            {/* Main Header Content */}
            <div className="flex items-center justify-between px-4 py-4">
                {/* Logo */}
                <Link href="/public" className="text-2xl font-bold">
                    AN KHANG PHARMACY
                </Link>

                {/* Search Bar */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:px-6">
                    <form onSubmit={handleSearch} className="w-full max-w-lg">
                        <div className="relative">
                            <Input
                                type="search"
                                placeholder="Tên thuốc, triệu chứng, vitamin và thực phẩm chức năng"
                                className="w-full h-8 rounded-full px-8 bg-white text-gray-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button
                                type="submit"
                                size="icon"
                                variant="ghost"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                <Search className="h-4 w-4"/>
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Heart className="h-5 w-5"/>
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="space-y-2">
                                <h4 className="font-medium">Sản phẩm yêu thích</h4>
                                <p className="text-sm text-muted-foreground">
                                    Chưa có sản phẩm nào trong danh sách yêu thích
                                </p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <ShoppingCart className="h-5 w-5"/>
                                {cartItems.length > 0 && (<span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                                            {cartItems.length}
                                        </span>)}
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="space-y-2">
                                <h4 className="font-medium">Giỏ hàng</h4>
                                {cartItems.length === 0 ? (<p className="text-sm text-muted-foreground">
                                    Giỏ hàng của bạn đang trống
                                </p>) : (<>
                                    <div className="max-h-60 overflow-auto space-y-2">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex items-center gap-2">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {item.quantity} x {item.price}đ
                                                    </p>
                                                </div>
                                            </div>))}
                                    </div>
                                    <div className="pt-2 border-t">
                                        <Button
                                            className="w-full bg-green-700 hover:bg-green-800"
                                            onClick={() => router.push('/cart')}
                                        >
                                            Xem giỏ hàng
                                        </Button>
                                    </div>
                                </>)}
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="rounded-full flex items-center">
                                <User className="h-5 w-5"/>
                                <span className="ml-2 hidden lg:inline">Tài khoản</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-auto">
                            <Link href="/auth/login">
                                <DropdownMenuItem>
                                    Đăng nhập
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/auth/register">
                                <DropdownMenuItem>
                                    Đăng ký
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            {/* Desktop Category Menu */}
            <div className="hidden lg:block">
                <div className="px-4 pb-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-black bg-white">
                                Danh mục
                                <ChevronDown className="ml-2 h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-screen rounded-t-none mt-2">
                            <div className="mx-auto w-full max-w-screen-xl">
                                <div className="flex flex-col p-2 py-5 mx-2">
                                    {categories.map((category) => (<DropdownMenuItem key={category}>
                                        <Link href={`/category/${category.toLowerCase()}`}
                                              className="w-full py-2 px-2">
                                            {category}
                                        </Link>
                                    </DropdownMenuItem>))}
                                </div>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Mobile Search and Categories */}
            <div className="lg:hidden">
                <form onSubmit={handleSearch} className="p-4">
                    <div className="relative">
                        <Input
                            type="search"
                            placeholder="Tên thuốc, triệu chứng, vitamin và thực phẩm chức năng"
                            className="w-full h-8 rounded-full px-8 text-white bg-white"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="ghost"
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                        >
                            <Search className="h-4 w-4 "/>
                        </Button>
                    </div>
                </form>
                <div className="overflow-x-auto">
                    <div className="flex gap-2 px-4 pb-4 whitespace-nowrap">
                        {categories.map((category) => (<Link
                            key={category}
                            href={`/category/${category.toLowerCase()}`}
                        >
                            <Button
                                variant="outline"
                                className="flex-none text-black"
                            >
                                {category}
                            </Button>
                        </Link>))}
                    </div>
                </div>
            </div>
        </div>
    </header>);
}