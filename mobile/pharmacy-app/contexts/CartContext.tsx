import React, {createContext, useState, useContext, useEffect} from 'react';
import * as SecureStore from 'expo-secure-store'; // Note: You'll need to install this package

// Define types
export type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

type CartState = {
    items: CartItem[];
    subtotal: number;
    deliveryFee: number;
    total: number;
};

type CartContextType = CartState & {
    addToCart: (product: Omit<CartItem, 'quantity'>, quantity: number) => void;
    updateQuantity: (id: string, quantity: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    isInCart: (id: string) => boolean;
    checkout: () => Promise<boolean>;
};

// Create contexts with default values
const defaultCartState: CartState = {
    items: [],
    subtotal: 0,
    deliveryFee: 4.99,
    total: 0,
};

const CartContext = createContext<CartContextType>({
    ...defaultCartState,
    addToCart: () => {
    },
    updateQuantity: () => {
    },
    removeFromCart: () => {
    },
    clearCart: () => {
    },
    isInCart: () => false,
    checkout: async () => false,
});

// Hook to use cart contexts
export const useCart = () => useContext(CartContext);

// Calculate cart totals
const calculateTotals = (items: CartItem[], deliveryFee: number) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal + deliveryFee;

    return {
        subtotal,
        total,
    };
};

// Cart provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [state, setState] = useState<CartState>(defaultCartState);

    // Load cart from storage on mount
    useEffect(() => {
        const loadCart = async () => {
            try {
                const cartData = await SecureStore.getItemAsync('cartData');

                if (cartData) {
                    const items: CartItem[] = JSON.parse(cartData);
                    const {subtotal, total} = calculateTotals(items, state.deliveryFee);

                    setState({
                        items,
                        subtotal,
                        deliveryFee: state.deliveryFee,
                        total,
                    });
                }
            } catch (error) {
                console.error('Failed to load cart', error);
            }
        };

        loadCart();
    }, []);

    // Save cart to storage whenever it changes
    useEffect(() => {
        const saveCart = async () => {
            try {
                await SecureStore.setItemAsync('cartData', JSON.stringify(state.items));
            } catch (error) {
                console.error('Failed to save cart', error);
            }
        };

        saveCart();
    }, [state.items]);

    // Add item to cart
    const addToCart = (product: Omit<CartItem, 'quantity'>, quantity: number) => {
        setState(prevState => {
            // Check if item is already in cart
            const existingItemIndex = prevState.items.findIndex(item => item.id === product.id);

            let newItems: CartItem[];

            if (existingItemIndex >= 0) {
                // Update quantity if item exists
                newItems = prevState.items.map((item, index) =>
                    index === existingItemIndex
                        ? {...item, quantity: item.quantity + quantity}
                        : item
                );
            } else {
                // Add new item
                newItems = [...prevState.items, {...product, quantity}];
            }

            const {subtotal, total} = calculateTotals(newItems, prevState.deliveryFee);

            return {
                items: newItems,
                subtotal,
                deliveryFee: prevState.deliveryFee,
                total,
            };
        });
    };

    // Update item quantity
    const updateQuantity = (id: string, quantity: number) => {
        setState(prevState => {
            // Create new array with updated quantity
            const newItems = prevState.items.map(item =>
                item.id === id ? {...item, quantity} : item
            ).filter(item => item.quantity > 0);

            const {subtotal, total} = calculateTotals(newItems, prevState.deliveryFee);

            return {
                items: newItems,
                subtotal,
                deliveryFee: prevState.deliveryFee,
                total,
            };
        });
    };

    // Remove item from cart
    const removeFromCart = (id: string) => {
        setState(prevState => {
            const newItems = prevState.items.filter(item => item.id !== id);
            const {subtotal, total} = calculateTotals(newItems, prevState.deliveryFee);

            return {
                items: newItems,
                subtotal,
                deliveryFee: prevState.deliveryFee,
                total,
            };
        });
    };

    // Clear cart
    const clearCart = () => {
        setState({
            items: [],
            subtotal: 0,
            deliveryFee: state.deliveryFee,
            total: 0,
        });
    };

    // Check if item is in cart
    const isInCart = (id: string) => {
        return state.items.some(item => item.id === id);
    };

    // Process checkout
    const checkout = async (): Promise<boolean> => {
        try {
            // In a real app, this would call your API to process the order
            // This is just a mock implementation
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Clear cart after successful checkout
            clearCart();
            return true;
        } catch (error) {
            console.error('Checkout failed', error);
            return false;
        }
    };

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart,
                isInCart,
                checkout,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};