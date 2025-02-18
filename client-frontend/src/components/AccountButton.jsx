"use client";

import { Button } from "@/components/ui/button";
import {ShoppingCart, UserCircle, User} from "@phosphor-icons/react"

import React from "react";

export default function NotificationButton() {
    return (
            <Button
                className="w-fit h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md border border-gray-300 hover:bg-gray-200 transition-all duration-200">
                <User weight="bold" size={32} />
                <h1 className="text-sm mx-1">Đăng nhập/ Đăng ký</h1>
            </Button>
    );
}
