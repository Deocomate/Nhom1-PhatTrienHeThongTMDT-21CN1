import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView} from 'react-native';
import {useAuth} from '@/contexts/AuthContext';

export default function RegisterForm() {

    const {signup, loading} = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const updateFormData = (field: string, value: string) => {
        setFormData({...formData, [field]: value});

        // Clear error when user starts typing
        // @ts-ignore
        if (formErrors[field]) {
            setFormErrors({...formErrors, [field]: ''});
        }
    };

    const validateForm = () => {
        let isValid = true;
        const errors = {...formErrors};

        // Name validation
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Phone validation (optional)
        if (formData.phone && !/^\+?[0-9\s-()]{7,15}$/.test(formData.phone)) {
            errors.phone = 'Please enter a valid phone number';
            isValid = false;
        }

        // Password validation
        if (!formData.password) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        // Confirm password
        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Please confirm your password';
            isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                // await sign(formData.name, formData.email, formData.password);
            } catch (err) {
                Alert.alert('Registration Error', 'Failed to create account. Please try again.');
            }
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} className="w-full">
            <View className="mb-4">
                <Text className="text-gray-600 mb-2 font-medium">Full Name</Text>
                <TextInput
                    value={formData.name}
                    onChangeText={(text) => updateFormData('name', text)}
                    placeholder="Enter your full name"
                    className={`bg-gray-50 py-3 px-4 rounded-lg border ${
                        formErrors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    autoCapitalize="words"
                />
                {formErrors.name ? (
                    <Text className="text-red-500 mt-1 text-xs">{formErrors.name}</Text>
                ) : null}
            </View>

            <View className="mb-4">
                <Text className="text-gray-600 mb-2 font-medium">Email Address</Text>
                <TextInput
                    value={formData.email}
                    onChangeText={(text) => updateFormData('email', text)}
                    placeholder="Enter your email"
                    className={`bg-gray-50 py-3 px-4 rounded-lg border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {formErrors.email ? (
                    <Text className="text-red-500 mt-1 text-xs">{formErrors.email}</Text>
                ) : null}
            </View>

            <View className="mb-4">
                <Text className="text-gray-600 mb-2 font-medium">Phone Number (Optional)</Text>
                <TextInput
                    value={formData.phone}
                    onChangeText={(text) => updateFormData('phone', text)}
                    placeholder="Enter your phone number"
                    className={`bg-gray-50 py-3 px-4 rounded-lg border ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-200'
                    }`}
                    keyboardType="phone-pad"
                />
                {formErrors.phone ? (
                    <Text className="text-red-500 mt-1 text-xs">{formErrors.phone}</Text>
                ) : null}
            </View>

            <View className="mb-4">
                <Text className="text-gray-600 mb-2 font-medium">Password</Text>
                <TextInput
                    value={formData.password}
                    onChangeText={(text) => updateFormData('password', text)}
                    placeholder="Create a password"
                    secureTextEntry
                    className={`bg-gray-50 py-3 px-4 rounded-lg border ${
                        formErrors.password ? 'border-red-500' : 'border-gray-200'
                    }`}
                />
                {formErrors.password ? (
                    <Text className="text-red-500 mt-1 text-xs">{formErrors.password}</Text>
                ) : null}
                <Text className="text-gray-500 mt-1 text-xs">
                    Password must be at least 6 characters long
                </Text>
            </View>

            <View className="mb-6">
                <Text className="text-gray-600 mb-2 font-medium">Confirm Password</Text>
                <TextInput
                    value={formData.confirmPassword}
                    onChangeText={(text) => updateFormData('confirmPassword', text)}
                    placeholder="Confirm your password"
                    secureTextEntry
                    className={`bg-gray-50 py-3 px-4 rounded-lg border ${
                        formErrors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                    }`}
                />
                {formErrors.confirmPassword ? (
                    <Text className="text-red-500 mt-1 text-xs">{formErrors.confirmPassword}</Text>
                ) : null}
            </View>

            <TouchableOpacity
                onPress={handleSubmit}
                disabled={loading}
                className={`py-3 px-4 rounded-lg items-center ${
                    loading ? 'bg-emerald-300' : 'bg-emerald-500'
                }`}
            >
                {loading ? (
                    <ActivityIndicator color="#ffffff" size="small"/>
                ) : (
                    <Text className="text-white font-bold text-lg">Create Account</Text>
                )}
            </TouchableOpacity>

            <View className="mt-4">
                <Text className="text-xs text-gray-500 text-center">
                    By creating an account, you agree to our Terms of Service and Privacy Policy
                </Text>
            </View>
        </ScrollView>
    );
}