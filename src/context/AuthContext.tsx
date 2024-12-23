import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useLocalStorage } from '@/hooks/client/useLocalStorage';
import { CreateUserDto } from '@/lib/sdk/jsdt/Api';

type AuthContextType = {
  isAuthenticated: boolean;
  user: CreateUserDto | null;
  token: string | null;
  login: (user: CreateUserDto, token: string) => void;
  logout: () => void;
  userRole: string | null;
  setUserRole: (role: string) => void;
  setIsPayment: (payment: string) => void;
  isPayment: string;
  setSignupData: (data: CreateUserDto) => void;
  signupData: CreateUserDto | null | undefined;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<CreateUserDto | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isPayment, setIsPayment] = useState<string>('');
  const [signupData, setSignupData] = useLocalStorage<CreateUserDto | null>('signupData', null);

  const login = (user: CreateUserDto, token: string): void => {
    setUser(user);
    setToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  useEffect(() => {
    const userType = localStorage.getItem('userType') || 'learner';

    localStorage.setItem('userType', userType);
    setUserRole(userType);
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = (): void => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        login,
        logout,
        setIsPayment,
        isPayment,
        userRole,
        setUserRole,
        setSignupData,
        signupData,
      }}
    >
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
