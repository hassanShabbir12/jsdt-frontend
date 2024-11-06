import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { loginAdmin } from '@/api/services/auth';
import { useAuth } from '@/context/AuthContext';
import { LoginResponse, UseAdminLoginReturn } from '@/interface/auth';

// Define validation schema using zod
const adminLoginSchema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type AdminLoginFormInputs = z.infer<typeof adminLoginSchema>;

export const useAdminLogin = (): UseAdminLoginReturn => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginFormInputs>({
    resolver: zodResolver(adminLoginSchema),
  });

  const onSubmit = async (data: AdminLoginFormInputs): Promise<void> => {
    setLoading(true);
    try {
      const response: LoginResponse = await loginAdmin(data);

      if (response.success) {
        const { user, access_token } = response.data;

        login(user, access_token);
        navigate('/admin');
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return { register, handleSubmit, onSubmit, errors, showPassword, setShowPassword, loading };
};
