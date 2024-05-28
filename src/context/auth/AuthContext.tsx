import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { AuthContextType } from './types';
import api from '../../services/api';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem('token');

  console.log(isAuthenticated)

  const verifyToken = useCallback(async () => {
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    try {
      const res = await api.get(`/auth/verify`);
      if (res.status === 200) {
        setIsAuthenticated(true);
      } 
      else {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      }
    } catch (error) {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]); // eslint-disable-line

  const login = useCallback(async ({ email, password }: { email: string; password: string; }) => {
    try {
      const response = await api.post(`/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      setError(null);
    } catch (error: any) { // eslint-disable-line
      setIsAuthenticated(false);
      setError(error.response?.data?.error || 'Login failed');
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, error, setError, verifyToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
