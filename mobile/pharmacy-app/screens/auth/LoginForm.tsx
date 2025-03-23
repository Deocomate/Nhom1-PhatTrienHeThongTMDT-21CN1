import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import {useAuth} from '@/contexts/AuthContext';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [validationErrors, setValidationErrors] = useState<{
        email?: string;
        password?: string;
    }>({});

    const {login, loading} = useAuth();

    const validateForm = (): boolean => {
        const errors: {
            email?: string;
            password?: string;
        } = {};

        // Email validation
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLogin = async () => {
        if (validateForm()) {
            try {
                await login(email, password);
            } catch (err) {
                Alert.alert('Login Failed', 'Please check your credentials and try again.');
            }
        }
    };

    // Demo credentials for easy testing
    const useTestCredentials = () => {
        setEmail('user@example.com');
        setPassword('password');
    };

    return (
        <View>
            <Text className="text-lg font-semibold text-gray-800 mb-1">Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Nhập email của bạn"
                keyboardType="email-address"
                autoCapitalize="none"
                className={`bg-gray-100 p-3 rounded-lg mb-1 ${
                    validationErrors.email ? 'border border-red-500' : ''
                }`}
            />
            {validationErrors.email && (
                <Text className="text-red-500 text-sm mb-2">{validationErrors.email}</Text>
            )}

            <Text className="text-lg font-semibold text-gray-800 mb-1 mt-3">Mật khẩu</Text>
            <View
                className={`flex-row bg-gray-100 p-3 rounded-lg mb-1 ${
                    validationErrors.password ? 'border border-red-500' : ''
                }`}
            >
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={!showPassword}
                    className="flex-1"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text className="text-emerald-600 ml-2">{showPassword ? 'Ẩn' : 'Hiện'}</Text>
                </TouchableOpacity>
            </View>

            {validationErrors.password && (
                <Text className="text-red-500 text-sm mb-2">{validationErrors.password}</Text>
            )}

            <TouchableOpacity
                onPress={handleLogin}
                disabled={loading}
                className={`py-3 rounded-lg items-center mb-4 mt-3 ${
                    loading ? 'bg-emerald-300' : 'bg-emerald-500'
                }`}>

                {loading ? (
                    <ActivityIndicator color="#fff"/>
                ) : (
                    <Text className="text-white font-bold text-lg">Đăng nhập</Text>
                )}
            </TouchableOpacity>

        </View>
    );
}