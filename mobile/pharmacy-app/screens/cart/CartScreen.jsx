import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {useCart} from '@/contexts/CartContext';
import {useRouter} from 'expo-router';
import {Icon} from "@rneui/themed";
import {SafeAreaView} from 'react-native-safe-area-context';

export default function CartScreen() {
    const {items, removeFromCart, updateQuantity, clearCart, loading} = useCart();

    const router = useRouter();

    const [isProcessing, setIsProcessing] = useState(false);

    const calculateTotal = () => {
        return items.reduce((total, item) => {
            const price = item.price
            return total + (price * item.quantity);
        }, 0);
    };

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    };

    const handleCheckout = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            router.push('/checkout');
        }, 800);
    };

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    };

    const handleUpdateQuantity = (id, quantity) => {
        updateQuantity(id, quantity);
    };

    const navigateToHome = () => {
        router.push("/");
    };

    const handleClearCart = () => {
        clearCart();
    };

    useEffect(() => {
        console.log(items)
        console.log(calculateTotal())
    }, [items]);

    if (loading) {
        return (<View className="flex-1 justify-center items-center bg-gray-50">
            <ActivityIndicator size="large" color="#3b82f6"/>
        </View>);
    }

    return (<SafeAreaView className="flex-1 bg-gray-50">
        {/* Header */}
        <View className="bg-white px-4 py-4 shadow-sm">
            <View className="flex-row items-center justify-between">
                <TouchableOpacity
                    className="p-2"
                    onPress={() => router.back()}
                >
                    <Icon name="arrow-left" type="feather" size={24} color="#374151"/>
                </TouchableOpacity>
                <Text className="text-xl font-bold text-gray-800">Giỏ hàng</Text>
                <TouchableOpacity className="p-2 opacity-0">
                    <Icon name="arrow-left" type="feather" size={24}/>
                </TouchableOpacity>
            </View>
        </View>

        {/* Empty Cart */}
        {items.length === 0 ? (<View className="flex-1 justify-center items-center px-6">
            <Icon name="shopping-cart" type="feather" size={80} color="#d1d5db"/>
            <Text className="text-lg font-medium text-gray-600 mt-6 mb-2">Giỏ hàng trống</Text>
            <Text className="text-gray-500 text-center mb-8">
                Bạn chưa có sản phẩm nào trong giỏ hàng.
            </Text>
            <TouchableOpacity
                className="bg-blue-500 px-6 py-3 rounded-lg"
                onPress={navigateToHome}
            >
                <Text className="text-white font-bold">Tiếp tục mua sắm</Text>
            </TouchableOpacity>
        </View>) : (<>
            <ScrollView className="flex-1">
                <View className="p-4">
                    <View className="mb-2 flex-row justify-between items-center">
                        <Text className="text-base font-medium text-gray-700">
                            {items.length} sản phẩm trong giỏ hàng
                        </Text>
                        <TouchableOpacity
                            className="flex-row items-center"
                            onPress={handleClearCart}
                        >
                            <Icon name="trash-2" type="feather" size={16} color="#ef4444"/>
                            <Text className="ml-1 text-red-500">Xóa tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Cart Items */}
                    {items.map((item) => (<View
                        key={item.id}
                        className="bg-white rounded-xl shadow-sm p-4 mb-3"
                    >
                        <View className="flex-row">
                            {/* Product Image */}
                            <View className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden mr-3">
                                {item.image ? (<Image
                                    source={{uri: item.image}}
                                    className="w-full h-full"
                                    resizeMode="contain"
                                />) : (<View className="w-full h-full items-center justify-center">
                                    <Icon name="image" type="feather" size={30} color="#9ca3af"/>
                                </View>)}
                            </View>

                            {/* Product Info */}
                            <View className="flex-1">
                                <Text className="text-base font-medium text-gray-800" numberOfLines={2}>
                                    {item.name}
                                </Text>
                                <Text className="text-sm text-gray-500 mb-1" numberOfLines={1}>
                                    {item.description}
                                </Text>
                                <Text className="text-base font-bold text-blue-600">
                                    {item.price}
                                </Text>

                                {/* Actions Row */}
                                <View className="flex-row justify-between items-center mt-2">
                                    {/* Quantity Controls */}
                                    <View
                                        className="flex-row items-center border border-gray-300 rounded-md overflow-hidden">
                                        <TouchableOpacity
                                            className="px-2.5 py-1 bg-gray-100"
                                            onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            <Icon
                                                name="minus"
                                                type="feather"
                                                size={16}
                                                color={item.quantity <= 1 ? "#d1d5db" : "#374151"}
                                            />
                                        </TouchableOpacity>
                                        <Text className="px-3 py-1 min-w-[32px] text-center">
                                            {item.quantity}
                                        </Text>
                                        <TouchableOpacity
                                            className="px-2.5 py-1 bg-gray-100"
                                            onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Icon name="plus" type="feather" size={16} color="#374151"/>
                                        </TouchableOpacity>
                                    </View>

                                    {/* Remove Button */}
                                    <TouchableOpacity
                                        className="flex-row items-center ml-3"
                                        onPress={() => handleRemoveItem(item.id)}
                                    >
                                        <Icon name="trash" type="feather" size={16} color="#6b7280"/>
                                        <Text className="ml-1 text-gray-500">Xóa</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>))}
                </View>
            </ScrollView>

            {/* Cart Summary and Checkout */}
            <View className="bg-white px-5 py-4 border-t border-gray-200">
                <View className="flex-row justify-between items-center mb-3">
                    <Text className="text-base text-gray-700">Tạm tính:</Text>
                    <Text className="text-lg font-bold text-gray-900">{formatPrice(calculateTotal())}</Text>
                </View>
                <View className="flex-row justify-between items-center mb-3">
                    <Text className="text-base text-gray-700">Phí vận chuyển:</Text>
                    <Text className="text-base text-gray-900">
                        {items.length ? "Miễn phí" : "0 đ"}
                    </Text>
                </View>
                <View className="border-t border-gray-200 my-2"/>
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-base font-bold text-gray-800">Tổng cộng:</Text>
                    <Text className="text-xl font-bold text-blue-600">{formatPrice(calculateTotal())}</Text>
                </View>
                <TouchableOpacity
                    className={`bg-blue-500 py-3.5 rounded-xl items-center ${isProcessing ? 'opacity-75' : ''}`}
                    onPress={handleCheckout}
                    disabled={isProcessing}
                >
                    {isProcessing ? (<View className="flex-row items-center">
                        <ActivityIndicator size="small" color="#fff"/>
                        <Text className="text-white font-bold ml-2">Đang xử lý...</Text>
                    </View>) : (<Text className="text-white font-bold text-base">Tiến hành thanh toán</Text>)}
                </TouchableOpacity>
            </View>
        </>)}
    </SafeAreaView>);
}