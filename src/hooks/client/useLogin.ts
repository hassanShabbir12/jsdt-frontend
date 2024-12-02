import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { LoginFormData, LoginResponseData, loginSchema, UseLoginReturn } from '@/interface/auth';
import { ApiResponse } from '@/interface/generic';
import { SigninUserDto } from '@/lib/sdk/jsdt/Api';

type LoginResponse = ApiResponse<LoginResponseData>;
export const useLogin = (): UseLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (loginData: SigninUserDto) => {
    try {
      setIsLoading(true);
      const response = (await apiClient.auth.usersControllerLogin(
        loginData,
      )) as unknown as ApiResponse<LoginResponse>;
      const { data } = response;

      localStorage.setItem('access_token', data.data.access_token);

      toast({
        title: 'Login success',
        description: 'You are now logged in!',
      });
      const { user, access_token } = data.data;

      login(user, access_token);
      navigate('/learner-teacher');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const togglePassword = (): void => setShowPassword(!showPassword);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.onload = (): void => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 150);
    };
  }, []);

  return {
    form,
    isLoading,
    onSubmit: form.handleSubmit(onSubmit),
    showPassword,
    togglePassword,
  };
};
