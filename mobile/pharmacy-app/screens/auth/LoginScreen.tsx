import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform} from 'react-native';
import {Link, router} from 'expo-router';
import LoginForm from './LoginForm';

export default function LoginScreen() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-white"
        >
            <View className="flex-1 justify-center px-6">
                {/* Logo */}
                <View className="items-center mb-8">
                    <View className="bg-emerald-100 w-20 h-20 rounded-full items-center justify-center mb-2">
                        <Text className="text-emerald-500 text-4xl">💊</Text>
                    </View>
                    <Text className="text-2xl font-bold text-gray-800">An Khang Pharmacy</Text>
                    <Text className="text-sm text-gray-500">Đăng nhập để mua hàng</Text>
                </View>

                {/* Login Form */}
                <LoginForm/>

                {/* Register Link */}
                <View className="flex-row justify-center mt-6">
                    <Text className="text-gray-600">Chưa có tài khoản? </Text>
                    <Link href="/register" asChild>
                        <TouchableOpacity>
                            <Text className="text-emerald-600 font-semibold">Đăng ký ngay</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}