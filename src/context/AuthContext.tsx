import React, { createContext, ReactNode, useContext, useState } from 'react';

import { CreateUserDto } from '@/lib/sdk/jsdt/Api';

type AuthContextType = {
  isAuthenticated: boolean;
  user: CreateUserDto | null;
  token: string | null;
  login: (user: CreateUserDto, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<CreateUserDto | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (user: CreateUserDto, token: string): void => {
    setUser(user);
    setToken(token);
    setIsAuthenticated(true);
    // Optional: Save to localStorage/sessionStorage
    localStorage.setItem('authToken', token);
  };

  const logout = (): void => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
