import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';
import { z } from 'zod';

import { apiClient } from '@/api/clients/apiClient';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { LoginResponseData, UseAdminLoginReturn } from '@/interface/auth';
import { ApiResponse } from '@/interface/generic';

// Define validation schema using zod
const adminLoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters')
    .trim()
    .refine((value) => value.trim().length > 0, 'Password cannot be empty or just spaces')
    .transform((value) => value.trim()),
});

type AdminLoginFormInputs = z.infer<typeof adminLoginSchema>;

export const useAdminLogin = (): UseAdminLoginReturn => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginFormInputs>({
    resolver: zodResolver(adminLoginSchema),
  });

  type LoginResponse = ApiResponse<LoginResponseData>;

  const onSubmit = async (userData: AdminLoginFormInputs): Promise<void> => {
    setLoading(true);
    try {
      const response = (await apiClient.auth.usersControllerAdminLogin(
        userData,
      )) as unknown as AxiosResponse<LoginResponse>;
      const { data } = response;

      toast({
        title: 'Login success',
        description: 'You are now logged in!',
      });
      if (data.success) {
        const { user, access_token } = data.data;

        localStorage.setItem('access_token', access_token);
        login(user, access_token);
        navigate('/admin');
      }
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
      setLoading(false);
    }
  };

  return { register, handleSubmit, onSubmit, errors, showPassword, setShowPassword, loading };
};
