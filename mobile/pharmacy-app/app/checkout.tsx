import React from 'react';
import { Stack } from 'expo-router';
import CheckoutScreen from '@/screens/checkout/CheckoutScreen';

export default function CheckoutRoute() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <CheckoutScreen />
    </>
  );
}