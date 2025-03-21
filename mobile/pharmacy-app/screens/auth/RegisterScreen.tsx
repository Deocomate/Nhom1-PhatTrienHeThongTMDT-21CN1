import {View, Text, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';
import {Link} from 'expo-router';
import RegisterForm from '@/screens/auth/RegisterForm';

export default function RegisterScreen() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-white"
        >
            <View className="flex-1 justify-center px-6">
                {/* Header */}
                <View className="mt-3 mb-6">
                    <Text className="text-2xl font-bold text-gray-800">Create Account</Text>
                    <Text className="text-sm text-gray-500">Sign up to access all features</Text>
                </View>

                {/* Register Form */}
                <RegisterForm/>

                {/* Login Link */}
                <View className="flex-row justify-center mt-6">
                    <Text className="text-gray-600">Already have an account? </Text>
                    <Link href="/login" asChild>
                        <TouchableOpacity>
                            <Text className="text-emerald-600 font-semibold">Sign In</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}