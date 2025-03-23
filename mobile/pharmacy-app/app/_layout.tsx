import React from 'react';
import { Stack } from 'expo-router';
import { CartProvider } from '@/contexts/CartContext';
import { FavoritesProvider } from '@/contexts/FavoriteContext';

export default function RootLayout() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </FavoritesProvider>
    </CartProvider>
  );
}