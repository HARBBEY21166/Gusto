
// This is an API service to connect to a backend.

const API_BASE_URL = 'https://stunning-space-palm-tree-6q75jjg645p25g6w-5000.app.github.dev/api';

export const authAPI = {
  login: async (email: string, password?: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        return { success: false, message: data.message || 'Login failed' };
      }
      return { success: true, data };
    } catch (error) {
      console.error('Login API error:', error);
      return { success: false, message: 'Could not connect to the server.' };
    }
  },

  signup: async (userData: any) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        return { success: false, message: data.message || 'Signup failed' };
      }
      return { success: true, data };
    } catch (error) {
      console.error('Signup API error:', error);
      return { success: false, message: 'Could not connect to the server.' };
    }
  }
};

export const saveAuthData = (userData: any, token: string) => {
  // In a real app, you'd save this to localStorage, cookies, or state management.
  try {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
  } catch (error)
    {
    console.error("Could not save auth data", error);
  }
};
