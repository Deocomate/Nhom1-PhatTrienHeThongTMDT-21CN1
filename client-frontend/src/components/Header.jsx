"use client";

import SearchBar from "@/components/SearchBar";
import NotificationButton from "@/components/NotificationButton";
import CartButton from "@/components/CartButton";
import AccountButton from "@/components/AccountButton";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { List } from "@phosphor-icons/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


export default function Header() {

    return (
        <header>
            {/* Phần trên của header */}
            <div className="w-full bg-green-700 py-3 pt-6">
                <div className="max-w-screen-xl mx-auto px-4 flex items-start justify-between">
                    {/* Logo */}
                    <img
                        src="/pharmacity-logo.svg"
                        alt="Pharmacity Logo"
                        className="w-40 h-auto"
                    />

                    {/* Container chứa SearchBar và nhóm button */}
                    <div className="flex items-start w-full justify-between ml-4">
                        {/* Search Bar */}
                        <div className="flex-1 hidden md:block">
                            <SearchBar />
                        </div>

                        {/* Nhóm button bên phải */}
                        <div className="flex gap-2 self-start mr-12">
                            <NotificationButton />
                            <CartButton />
                            {/*<AccountButton />*/}
                        </div>
                        <div className="flex self-start">
                            <AccountButton />
                        </div>
                    </div>
                </div>
            </div>

            {/* Phần dưới của header */}
            <div className="w-full bg-gray-100 py-3">
                <div className="max-w-screen-xl mx-auto px-4 flex items-start justify-start">
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className="flex items-center bg-white rounded-sm p-2 px-6 h-10 font-bold">
                            <List className="mr-2" weight="bold"/>
                            Danh mục
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="mt-2 rounded-none w-screen h-full"
                        >
                            <div className="max-w-screen-xl mx-auto p-4 flex items-start justify-start">
                                hello
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>
            </div>
        </header>
    );
}
