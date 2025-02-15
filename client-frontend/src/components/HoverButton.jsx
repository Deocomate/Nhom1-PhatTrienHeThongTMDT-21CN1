"use client";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";

export default function HoverButton() {
    return (
        <HoverCard>
            <HoverCardTrigger className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md border border-gray-300 hover:bg-gray-200 transition-all duration-200">
                <ShoppingCart size={22} />
            </HoverCardTrigger>
            <HoverCardContent className="w-64 text-sm p-3 shadow-lg bg-white border border-gray-200 rounded-md">
                The React Framework – created and maintained by @vercel.
            </HoverCardContent>
        </HoverCard>
    );
}
