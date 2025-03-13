// wishlist/WishListContext.jsx
"use client";

import React, {createContext, useState, useEffect, useContext} from 'react';

const WishListContext = createContext();

export const WishListProvider = ({children}) => {
    let wishlistDefault = [];
    if (localStorage.getItem('wishlist') != null) {
        wishlistDefault = JSON.parse(localStorage.getItem('wishlist'));
    }
    const [wishlist, setWishList] = useState(wishlistDefault);
    useEffect(() => {
        const storedWishList = localStorage.getItem('wishlist');
        if (storedWishList) {
            setWishList(JSON.parse(storedWishList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishList = (product) => {
        const existingItem = wishlist.find(item => item.id === product.id);

        if (existingItem) {
            // Do nothing
        } else {
            setWishList([...wishlist, {...product}]);
        }
    };

    const removeFromWishList = (productId) => {
        setWishList(wishlist.filter(item => item.id !== productId));
    };

    const clearWishList = () => {
        setWishList([]);
    };


    const value = {
        wishlist, addToWishList, removeFromWishList, clearWishList
    };

    return (<WishListContext.Provider value={value}>
        {children}
    </WishListContext.Provider>);
};

export const useWishList = () => {
    return useContext(WishListContext);
};