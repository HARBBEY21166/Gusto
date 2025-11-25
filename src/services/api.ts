
// This is a mock API service to simulate authentication.
// In a real application, this would make network requests to a backend.

export const authAPI = {
  login: (email: string, password?: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password) {
          resolve({
            success: true,
            data: {
              firstName: 'Jane',
              lastName: 'Doe',
              email: email,
              token: 'fake-jwt-token-for-testing',
            },
          });
        } else {
          resolve({ success: false, message: 'Invalid credentials' });
        }
      }, 1000);
    });
  },
};

export const saveAuthData = (userData: any, token: string) => {
  // In a real app, you'd save this to localStorage, cookies, or state management.
  try {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
  } catch (error) {
    console.error("Could not save auth data", error);
  }
};
