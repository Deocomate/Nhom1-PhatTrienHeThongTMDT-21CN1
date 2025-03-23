// auth/AuthContext.tsx
import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Thay thế js-cookie
import {useNavigation} from '@react-navigation/native'; // Thay thế next/navigation
import apiService from '../services/apiService'; // Đảm bảo đường dẫn chính xác

// Định nghĩa kiểu dữ liệu cho AuthContext
interface AuthContextType {
    user: any | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    signup: (userData: any) => Promise<any>;
    setUser: React.Dispatch<React.SetStateAction<any | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: any = ({children}) => {
    const [user, setUser] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigation = useNavigation(); // Sử dụng useNavigation

    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                await apiService.setToken(token);
                await introspectToken(token);
            } else {
                setLoading(false);
            }
        };
        getToken();
    },);

    const signup = async (userData: any) => {
        try {
            const response = await apiService.post('/customers', userData);
            return response;
        } catch (error) {
            return error;
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const response = await apiService.post('/auth/login', {email, password});
            console.log(response.code);
            if (response.code <= 201) {
                let token = response.data.token;
                await apiService.setToken(token);
                await AsyncStorage.setItem('token', token); // Lưu token vào AsyncStorage
                await introspectToken(token);
            } else {
                alert(response.message);
            }
            navigation.navigate('AccountScreen' as never); // Sử dụng navigation.navigate
            return response;
        } catch (error) {
            console.error('Login error:', error);
            return error;
        }
    };

    const logout = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            try {
                await apiService.post('/auth/logout', {token});
            } catch (error) {
                console.error('Logout error:', error);
            }
        }
        await AsyncStorage.removeItem('token'); // Xóa token khỏi AsyncStorage
        await apiService.removeToken();
        setUser(null);
        navigation.navigate('LoginScreen' as never); // Sử dụng navigation.navigate
    };

    const introspectToken = async (token: string) => {
        try {
            const response = await apiService.post('/auth/introspect', {token});
            if (response.code == 200) {
                setUser(response.data.customer);
            } else {
                await AsyncStorage.removeItem('token');
                await apiService.removeToken();
                setUser(null);
            }
        } catch (error) {
            await AsyncStorage.removeItem('token');
            await apiService.removeToken();
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const value: AuthContextType = {
        user,
        loading,
        login,
        logout,
        signup,
        setUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};