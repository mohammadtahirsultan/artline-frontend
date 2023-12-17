// utils/auth.js

export const isAuthenticated = () => {
    // Check if the user exists in localStorage or your authentication state
    const user = localStorage.getItem('user');
    return !!user;
  };
  