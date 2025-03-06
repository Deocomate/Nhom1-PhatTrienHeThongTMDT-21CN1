// auth/AuthProvider.jsx
"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie'; // Hoặc import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import apiService from '@/lib/api/apiService'; // Import apiService

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token'); // Hoặc parseCookies().token
        if (token) {
            apiService.setToken(token);
            introspectToken(token);
        } else {
            setLoading(false); // Không có token, không cần introspect
        }
    }, []);

    const signup = async (userData) => {
        try {
            const response = await apiService.post('/customers', userData);
            return response
        } catch (error) {
            return error
        }
    };

    const login = async (email, password) => {
        try {
            const response = await apiService.post('/auth/login', { email, password });

            if (response.token) {
                apiService.setToken(response.token); // Store the token using apiService
                Cookies.set('token', response.token, { expires: 7 }); // Lưu token vào cookie
                introspectToken(response.token);
                router.push('/');
            } else {
                console.error('Login failed:', response.message);
                throw new Error(response.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = async () => {
        const token = Cookies.get('token');
        if (token) {
            try {
                await apiService.post('/auth/logout', { token });
            } catch (error) {
                console.error('Logout error:', error);
            }
        }

        Cookies.remove('token'); // Xóa token
        apiService.removeToken();  // Also remove from localStorage
        setUser(null);
        router.push('/login');
    };

    const introspectToken = async (token) => {
        try {
            const response = await apiService.post('/api/auth/introspect', { token });

            if (response.active) {
                setUser(response); // Save user information (from introspect)
            } else {
                Cookies.remove('token'); // Token invalid, delete it
                apiService.removeToken();  // Remove from localStorage
                setUser(null);
            }
        } catch (error) {
            console.error('Introspect error:', error);
            Cookies.remove('token');  // Delete token if there is an error
            apiService.removeToken(); // Remove token from localStorage
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        user, loading, login, logout, signup, // Add signup
    };

    return (<AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>);
};

export const useAuth = () => {
    return useContext(AuthContext);
};