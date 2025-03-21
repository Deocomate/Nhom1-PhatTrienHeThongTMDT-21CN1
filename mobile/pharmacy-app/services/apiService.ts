// lib/api/apiService.ts
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

class ApiService {
    private api: AxiosInstance;
    private tokenKey: string = "jwt_token";

    constructor(baseURL: string = "http://localhost:8080/api") {
        this.api = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });

        this.api.interceptors.request.use(
            async (config: any) => {
                try {
                    const token = await AsyncStorage.getItem(this.tokenKey);
                    if (token && config.headers) {
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                } catch (error) {
                    console.error("Error retrieving token:", error);
                }
                return config;
            },
            (error: AxiosError) => Promise.reject(error)
        );

        // Response interceptor for error handling
        this.api.interceptors.response.use(
            (response: AxiosResponse) => response,
            async (error: AxiosError) => {
                // Handle specific errors (like 401 unauthorized)
                if (error.response && error.response.status === 401) {
                    // Handle token expiration, e.g., redirect to login
                    try {
                        await AsyncStorage.removeItem(this.tokenKey);
                        // You might want to redirect to login page here
                    } catch (storageError) {
                        console.error("Error removing token:", storageError);
                    }
                }
                return Promise.reject(error);
            }
        );
    }

    // GET method
    async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.api.get(url, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    // POST method
    async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.api.post(url, data, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    // PUT method
    async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.api.put(url, data, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    // DELETE method
    async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.api.delete(url, config);
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    // Helper method to store JWT token
    async setToken(token: string): Promise<void> {
        try {
            await AsyncStorage.setItem(this.tokenKey, token);
        } catch (error) {
            console.error("Error setting token:", error);
        }
    }

    // Helper method to get JWT token
    async getToken(): Promise<string | null> {
        try {
            return await AsyncStorage.getItem(this.tokenKey);
        } catch (error) {
            console.error("Error getting token:", error);
            return null;
        }
    }

    // Helper method to remove JWT token
    async removeToken(): Promise<void> {
        try {
            await AsyncStorage.removeItem(this.tokenKey);
        } catch (error) {
            console.error("Error removing token:", error);
        }
    }

    // Error handler
    private handleError(error: any): never {
        // You can implement custom error handling here
        // console.error('API Error:', error);
        throw error.response;
    }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;