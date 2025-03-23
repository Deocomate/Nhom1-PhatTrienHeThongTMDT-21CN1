import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';
import ProductDetailScreen from '@/screens/product_detail/ProductDetailScreen';

export default function ProductDetailRoute() {
  const { id } = useLocalSearchParams();
  
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ProductDetailScreen id={id as string} />
    </>
  );
}