"use client";

import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {List} from "@phosphor-icons/react";

export default function HorizontalDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="bg-white text-black shadow-nonep-2 px-9 border-2 h-10 font-bold">
                Mẹ và bé
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                side="right" // Hiển thị menu ở dưới
                className="flex flex-col w- gap-2 p-2 bg-white shadow-lg border rounded-none"
            >
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Chăm sóc em bé
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Sản phẩm cho mẹ
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
