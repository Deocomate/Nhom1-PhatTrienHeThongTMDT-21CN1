import {Stack} from 'expo-router';
import {AuthProvider, useAuth} from '@/contexts/AuthContext';
import "../assets/css/global.css";
import {useEffect} from "react";

export default function RootLayout() {

    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="product/[id]"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="checkout"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(auth)"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </AuthProvider>
    );
}