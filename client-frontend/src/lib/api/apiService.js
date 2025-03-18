// lib/api/apiService.js
import axios from "axios";

class ApiService {
    constructor(baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api") {

        console.log(process.env.NEXT_PUBLIC_API_URL)
        this.tokenKey = "jwt_token";

        this.api = axios.create({
            baseURL, headers: {
                "Content-Type": "application/json",
            },
        });

        // Request interceptor to add JWT token if available
        this.api.interceptors.request.use((config) => {
            if (typeof window !== "undefined") {
                const token = localStorage.getItem(this.tokenKey);
                if (token && config.headers) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
            return config;
        }, (error) => Promise.reject(error));

        // Response interceptor for error handling
        this.api.interceptors.response.use((response) => response, (error) => {
            // Handle specific errors (like 401 unauthorized)
            if (error.response && error.response.status === 401) {
                // Handle token expiration, e.g., redirect to login
                if (typeof window !== "undefined") {
                    localStorage.removeItem(this.tokenKey);
                    // You might want to redirect to login page here
                }
            }
            return Promise.reject(error);
        });
    }

    // GET method
    async get(url, config) {
        try {
            const response = await this.api.get(url, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    // POST method
    async post(url, data, config) {
        try {
            const response = await this.api.post(url, data, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    // PUT method
    async put(url, data, config) {
        try {
            const response = await this.api.put(url, data, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    // DELETE method
    async delete(url, config) {
        try {
            const response = await this.api.delete(url, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    // Helper method to store JWT token
    setToken(token) {
        if (typeof window !== "undefined") {
            localStorage.setItem(this.tokenKey, token);
        }
    }

    // Helper method to get JWT token
    getToken() {
        if (typeof window !== "undefined") {
            return localStorage.getItem(this.tokenKey);
        }
        return null;
    }

    // Helper method to remove JWT token
    removeToken() {
        if (typeof window !== "undefined") {
            localStorage.removeItem(this.tokenKey);
        }
    }

    // Error handler
    handleError(error) {
        // You can implement custom error handling here
        // console.error('API Error:', error);
        throw error.response;
    }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;
