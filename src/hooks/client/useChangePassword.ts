import { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { handleError } from '@/api/config/errorHandler';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { ChangePasswordFormValues, ChangePasswordSchema } from '@/interface/password';

interface UseChangePasswordReturn {
  loading: boolean;
  form: UseFormReturn<ChangePasswordFormValues>;
  onSubmit: (e: React.BaseSyntheticEvent) => Promise<void>;
}

export function useChangePassword(): UseChangePasswordReturn {
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ChangePasswordFormValues): Promise<void> => {
    setLoading(true);
    try {
      const payload = {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      };

      await apiClient.auth.usersControllerChangePassword(payload);
      toast({
        title: 'Success',
        description: 'Password changed successfully',
      });
      logout();
      navigate('/admin/login');
      form.reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
