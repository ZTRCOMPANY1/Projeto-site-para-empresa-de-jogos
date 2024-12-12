import React, { createContext, useContext, useState } from 'react';
import type { User, LoginFormData, RegisterFormData } from '../types/auth';

interface AuthContextType {
  user: User | null;
  login: (data: LoginFormData) => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // In a real application, these functions would make API calls
  const login = async (data: LoginFormData) => {
    // Simulate API call
    if (data.email === 'demo@example.com' && data.password === 'password') {
      setUser({
        id: '1',
        email: data.email,
        username: 'Demo User',
      });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const register = async (data: RegisterFormData) => {
    // Simulate API call
    setUser({
      id: '1',
      email: data.email,
      username: data.username,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}