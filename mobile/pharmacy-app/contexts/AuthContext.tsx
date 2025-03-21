// contexts/AuthContext.tsx
import React, {createContext, useState, useEffect, useContext, ReactNode} from 'react';
import {authService} from '@/services/authService'; // Import authService
import apiService, {setAuthToken, removeAuthToken} from '@/services/api';
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen

interface AuthContextProps {
    user: any;
    loading: boolean;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    register: (userData: any) => Promise<any>; // Add register function
    setUser: (user: any) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}


export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();
                const token = await apiService.getToken(); // Sửa dụng apiService để get Token
                if (token) {
                    const userData = await authService.introspect(token); // Check token
                    if (userData.valid) {
                        setUser(userData.customer);  // Set user data
                    } else {
                        await removeAuthToken(); // Remove invalid token
                    }
                }
            } catch (e) {
                console.warn(e);
            } finally {
                setLoading(false);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);


    const login = async (email, password) => {
        try {
            const response = await authService.login(email, password);
            if (response.authenticated) {
                await setAuthToken(response.token);
                const userData = await authService.introspect(response.token);
                if (userData.valid) {
                    setUser(userData.customer);
                }
            }
            return response; // Trả về response để xử lý thông báo ở component
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };


    const logout = async () => {
        try {
            const token = await apiService.getToken(); // Sửa dụng apiService để get Token
            if (token) {
                await authService.logout(token);
            }
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            await removeAuthToken(); // Xóa token
            setUser(null);
        }
    };

    //Hàm đăng ký
    const register = async (userData: any) => {
        try {
            const response = await authService.register(userData);
            return response;
        } catch (error) {
            throw error;
        }
    };

    const value = {
        user,
        loading,
        login,
        logout,
        setUser,
        register // Include register in context value
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