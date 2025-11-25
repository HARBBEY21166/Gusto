// Frontend: src/services/api.ts

// Define TypeScript interfaces
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
  };
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const API_BASE_URL = 'https://gusto-restaurant-backend-production.up.railway.app/api';

// Helper function to get auth header
const getAuthHeader = (): HeadersInit => {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

export const authAPI = {
  // Signup user
  signup: async (userData: SignupData): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  // Login user
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },

  // Get current user profile
  getProfile: async (): Promise<{ success: boolean; data: User }> => {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader()
      }
    });
    return response.json();
  }
};

// Save auth data to localStorage
export const saveAuthData = (user: User, token: string): void => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

// Remove auth data (logout)
export const removeAuthData = (): void => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

// Check if user is logged in
export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem('token');
};

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};