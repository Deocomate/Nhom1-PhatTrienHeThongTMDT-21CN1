// cart/CartContext.jsx
"use client";

import React, {createContext, useState, useEffect, useContext} from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    let cartDefault = [];
    if (localStorage.getItem('cart') != null) {
        cartDefault = JSON.parse(localStorage.getItem('cart'));
    }
    const [cart, setCart] = useState(cartDefault);
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity) => {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
            setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item));
        } else {
            // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
            setCart([...cart, {...product, quantity}]);
        }
    };

    const updateQuantity = (productId, quantity) => {
        setCart(cart.map(item => item.id === productId ? {...item, quantity} : item));
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const value = {
        cart, addToCart, updateQuantity, removeFromCart, clearCart, calculateTotal
    };

    return (<CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>);
};

export const useCart = () => {
    return useContext(CartContext);
};