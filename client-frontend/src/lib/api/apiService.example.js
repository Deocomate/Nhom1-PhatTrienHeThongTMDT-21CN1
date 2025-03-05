import apiService from '@/lib/api/apiService';

// GET request
const fetchUsers = async () => {
    try {
        const users = await apiService.get('/users');
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

// POST request với dữ liệu
const createUser = async (userData) => {
    try {
        const newUser = await apiService.post('/users', userData);
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

// Lưu token sau khi đăng nhập
const login = async (credentials) => {
    try {
        const response = await apiService.post('/auth/login', credentials);
        if (response.token) {
            apiService.setToken(response.token);
        }
        return response;
    } catch (error) {
        console.error('Login failed:', error);
    }
};

// Đăng xuất
const logout = () => {
    apiService.removeToken();
    // Xử lý đăng xuất khác...
};