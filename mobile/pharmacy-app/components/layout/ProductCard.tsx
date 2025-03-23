import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Link} from 'expo-router';
import {useCart} from '@/contexts/CartContext';

type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category?: string;
    inStock?: boolean;
    requiresPrescription?: boolean;
    discountPercentage?: number;
};

type ProductCardProps = {
    product: Product;
    horizontal?: boolean;
};

export default function ProductCard({product, horizontal = false}: ProductCardProps) {
    const {addToCart, isInCart} = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        }, 1);
    };

    // Check if product is in cart
    const productInCart = isInCart(product.id);

    // Calculate discount price if applicable
    const discountedPrice = product.discountPercentage
        ? product.price * (1 - product.discountPercentage / 100)
        : null;

    if (horizontal) {
        // Horizontal card layout (for search results, etc.)
        return (
            <View className="bg-white rounded-lg shadow-sm mb-3 flex-row overflow-hidden">
                <Image
                    source={{uri: product.image}}
                    className="w-24 h-24"
                    resizeMode="cover"
                />

                <View className="flex-1 p-3">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-800 font-bold" numberOfLines={1}>
                            {product.name}
                        </Text>

                        {product.requiresPrescription && (
                            <View className="bg-blue-100 px-2 rounded">
                                <Text className="text-blue-700 text-xs">Rx</Text>
                            </View>
                        )}
                    </View>

                    <Text className="text-gray-500 text-xs mb-1" numberOfLines={2}>
                        {product.description}
                    </Text>

                    <View className="flex-row justify-between items-center mt-auto">
                        <View>
                            {discountedPrice ? (
                                <View className="flex-row items-center">
                                    <Text className="text-emerald-600 font-bold mr-1">
                                        ${discountedPrice.toFixed(2)}
                                    </Text>
                                    <Text className="text-gray-400 text-xs line-through">
                                        ${product.price.toFixed(2)}
                                    </Text>
                                </View>
                            ) : (
                                <Text className="text-emerald-600 font-bold">
                                    ${product.price.toFixed(2)}
                                </Text>
                            )}
                        </View>

                        <Link href={`/product/${product.id}`} asChild>
                            <TouchableOpacity className="bg-emerald-500 px-3 py-1 rounded">
                                <Text className="text-white">View</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </View>
        );
    }

    // Default vertical card layout (for grid display)
    return (
        <View className="bg-white rounded-lg shadow-sm m-1 overflow-hidden" style={{width: '48%'}}>
            <Link href={`/product/${product.id}`} asChild>
                <TouchableOpacity className="flex-1">
                    <Image
                        source={{uri: product.image}}
                        className="w-full h-32"
                        resizeMode="cover"
                    />

                    {/* Badges */}
                    <View className="absolute top-2 left-2 flex-row">
                        {!product.inStock && (
                            <View className="bg-red-100 px-2 py-1 rounded-full mr-1">
                                <Text className="text-red-700 text-xs">Out of Stock</Text>
                            </View>
                        )}

                        {product.discountPercentage && (
                            <View className="bg-yellow-100 px-2 py-1 rounded-full">
                                <Text className="text-yellow-700 text-xs">-{product.discountPercentage}%</Text>
                            </View>
                        )}
                    </View>

                    {product.requiresPrescription && (
                        <View className="absolute top-2 right-2 bg-blue-100 px-2 py-1 rounded">
                            <Text className="text-blue-700 text-xs">Rx</Text>
                        </View>
                    )}

                    <View className="p-3">
                        {product.category && (
                            <Text className="text-xs text-gray-500 mb-1">{product.category}</Text>
                        )}

                        <Text className="text-gray-800 font-bold mb-1" numberOfLines={1}>
                            {product.name}
                        </Text>

                        <Text className="text-gray-500 text-xs mb-2" numberOfLines={2}>
                            {product.description}
                        </Text>

                        <View className="flex-row justify-between items-center mt-auto">
                            {discountedPrice ? (
                                <View>
                                    <Text className="text-emerald-600 font-bold">
                                        ${discountedPrice.toFixed(2)}
                                    </Text>
                                    <Text className="text-gray-400 text-xs line-through">
                                        ${product.price.toFixed(2)}
                                    </Text>
                                </View>
                            ) : (
                                <Text className="text-emerald-600 font-bold">
                                    ${product.price.toFixed(2)}
                                </Text>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>

            {/* Add to Cart Button */}
            <TouchableOpacity
                onPress={handleAddToCart}
                disabled={!product.inStock}
                className={`p-2 ${
                    productInCart
                        ? 'bg-emerald-100 border border-emerald-500'
                        : product.inStock
                            ? 'bg-emerald-500'
                            : 'bg-gray-300'
                }`}
            >
                <Text
                    className={`text-center text-sm font-medium ${
                        productInCart
                            ? 'text-emerald-700'
                            : product.inStock
                                ? 'text-white'
                                : 'text-gray-500'
                    }`}
                >
                    {productInCart
                        ? 'In Cart'
                        : product.inStock
                            ? 'Add to Cart'
                            : 'Out of Stock'
                    }
                </Text>
            </TouchableOpacity>
        </View>
    );
}