import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Link} from 'expo-router';
import {CartItem as CartItemType} from '@/contexts/CartContext';

type CartItemProps = {
    item: CartItemType;
    onIncrease: () => void;
    onDecrease: () => void;
    onRemove?: () => void;
};

export default function CartItem({
                                     item,
                                     onIncrease,
                                     onDecrease,
                                     onRemove
                                 }: CartItemProps) {
    const itemTotal = item.price * item.quantity;

    return (
        <View className="flex-row bg-white p-4 mb-2 border-b border-gray-100">
            {/* Product Image */}
            <Link href={`/product/${item.id}`} asChild>
                <TouchableOpacity>
                    <Image
                        source={{uri: item.image}}
                        className="w-20 h-20 rounded-md"
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </Link>

            {/* Product Info */}
            <View className="flex-1 ml-4">
                <View className="flex-row justify-between">
                    <Link href={`/product/${item.id}`} asChild>
                        <TouchableOpacity>
                            <Text className="text-gray-800 font-semibold" numberOfLines={1}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    </Link>

                    {/* Remove item button (optional) */}
                    {onRemove && (
                        <TouchableOpacity onPress={onRemove} className="p-1">
                            <Text className="text-gray-400">✕</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <Text className="text-emerald-600 font-semibold mt-1">
                    ${item.price.toFixed(2)}
                </Text>

                {/* Quantity Controls and Total */}
                <View className="flex-row justify-between items-center mt-2">
                    <View className="flex-row items-center bg-gray-100 rounded-lg">
                        <TouchableOpacity
                            onPress={onDecrease}
                            className="w-8 h-8 items-center justify-center"
                            disabled={item.quantity <= 1}
                        >
                            <Text
                                className={`text-lg font-bold ${item.quantity <= 1 ? 'text-gray-300' : 'text-gray-700'}`}>−</Text>
                        </TouchableOpacity>

                        <Text className="min-w-[30px] text-center font-medium">
                            {item.quantity}
                        </Text>

                        <TouchableOpacity
                            onPress={onIncrease}
                            className="w-8 h-8 items-center justify-center"
                        >
                            <Text className="text-lg font-bold text-gray-700">+</Text>
                        </TouchableOpacity>
                    </View>

                    <Text className="font-bold text-gray-800">
                        ${itemTotal.toFixed(2)}
                    </Text>
                </View>
            </View>
        </View>
    );
}