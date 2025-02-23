"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, Heart, ShoppingCart, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const categories = ['Thuốc', 'Tra cứu bệnh', 'Thực phẩm chức năng', 'Mẹ và bé', 'Chăm sóc cá nhân', 'Chăm sóc sắc đẹp', 'Thiết bị y tế'];

    return (
        <header className="border-b pb-2">
            <div className="mx-auto w-full max-w-screen-xl">
                {/* Main Header Content */}
                <div className="flex items-center justify-between px-4 py-4">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-green-700">
                        AN KHANG PHARMACY
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:px-6">
                        <div className="w-full max-w-lg">
                            <Input
                                type="search"
                                placeholder="Tên thuốc, triệu chứng, vitamin và thực phẩm chức năng"
                                className="w-full h-8 rounded-full px-8"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Heart className="h-5 w-5" />
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
                                    <ShoppingCart className="h-5 w-5" />
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                    <h4 className="font-medium">Giỏ hàng</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Giỏ hàng của bạn đang trống
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <Button variant="ghost" className="hidden lg:flex rounded-full">
                            <User className="mr-2 h-5 w-5" />
                            Đăng nhập/Đăng ký
                        </Button>
                    </div>
                </div>

                {/* Desktop Category Menu */}
                <div className="hidden lg:block">
                    <div className="px-4 py-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="bg-green-700 text-white">
                                    Danh mục
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-screen p-0 border-t-0 rounded-t-none">
                                <div className="mx-auto w-full max-w-screen-xl">
                                    <div className="flex flex-col p-2 py-5 mx-2">
                                        {categories.map((category) => (
                                            <DropdownMenuItem key={category}>
                                                <Link href={`/category/${category.toLowerCase()}`} className="w-full py-2 px-2">
                                                    {category}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </div>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Mobile Search and Categories */}
                <div className="lg:hidden">
                    <div className="p-4">
                        <Input
                            type="search"
                            placeholder="Tên thuốc, triệu chứng, vitamin và thực phẩm chức năng"
                            className="w-full h-8 rounded-full px-8"
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <div className="flex gap-2 px-4 pb-4 whitespace-nowrap">
                            {categories.map((category) => (
                                <Link 
                                    key={category} 
                                    href={`/category/${category.toLowerCase()}`}
                                >
                                    <Button
                                        variant="outline"
                                        className="flex-none"
                                    >
                                        {category}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}