// services/apiService.ts
import apiService from "./apiService";

export const authService = {
    async login(email: any, password: any) {
        try {
            const response = await apiService.post('/auth/login', {email, password});
            return response.data; // Trả về data (chứa token)
        } catch (error) {
            throw error;  // Re-throw để component gọi xử lý tiếp
        }
    },

    async introspect(token: any) {
        try {
            const response = await apiService.post('/auth/introspect', {token});
            return response.data; // Trả về data (thông tin user)
        } catch (error) {
            throw error;
        }
    },

    async logout(token: any) {
        try {
            const response = await apiService.post('/auth/logout', {token});
            return response.data;  //có thể trả về bất cứ thứ gì, không nhất thiết phải là data
        } catch (error) {
            throw error;
        }
    },

    async register(userData: any) {
        try {
            const response = await apiService.post('/customers', userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};