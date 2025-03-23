import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {Link, usePathname, router} from 'expo-router';
import {useCart} from '@/contexts/CartContext';
import {useAuth} from '@/contexts/AuthContext';

type HeaderProps = {
    showBack?: boolean;
    title?: string;
    showCart?: boolean;
};

export default function Header({showBack = false, title, showCart = true}: HeaderProps) {
    const pathname = usePathname();
    const {items} = useCart();
    const {isAuthenticated} = useAuth();

    // Calculate total items in cart
    const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    // Determine title based on current route if not provided
    const getTitle = () => {
        if (title) return title;

        if (pathname === '/') return 'PharmEasy';
        if (pathname.includes('/product')) return 'Product Details';
        if (pathname.includes('/cart')) return 'Your Cart';
        if (pathname.includes('/checkout')) return 'Checkout';
        if (pathname.includes('/profile')) return 'My Profile';

        return 'PharmEasy';
    };

    return (
        <View className="bg-emerald-500 pt-10 pb-3 px-4 shadow-md">
            <StatusBar barStyle="light-content" backgroundColor="#10B981"/>

            <View className="flex-row justify-between items-center">
                {/* Left side - Back button or logo */}
                <View className="flex-row items-center">
                    {showBack ? (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="mr-2 p-2"
                        >
                            <Text className="text-white text-xl">←</Text>
                        </TouchableOpacity>
                    ) : (
                        <View className="flex-row items-center">
                            <Text className="text-white text-xl mr-1">💊</Text>
                            <Text className="text-white font-bold text-xl">{getTitle()}</Text>
                        </View>
                    )}
                </View>

                {/* Right side - Cart and profile icons */}
                <View className="flex-row items-center">
                    {/* Only show cart if specified and user is authenticated */}
                    {showCart && isAuthenticated && (
                        <Link href="/cart" asChild>
                            <TouchableOpacity className="mr-3 relative p-2">
                                <Text className="text-white text-xl">🛒</Text>
                                {cartItemCount > 0 && (
                                    <View
                                        className="absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                                        <Text className="text-white text-xs font-bold">
                                            {cartItemCount > 9 ? '9+' : cartItemCount}
                                        </Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        </Link>
                    )}

                    {/* Profile icon that navigates to profile or login */}
                    <Link href={isAuthenticated ? "/profile" : "/login"} asChild>
                        <TouchableOpacity className="p-2">
                            <Text className="text-white text-xl">
                                {isAuthenticated ? '👤' : '🔑'}
                            </Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    );
}