import { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { toast } from '@/hooks/use-toast';
import { ChangePasswordFormValues, ChangePasswordSchema } from '@/interface/password';

interface UseChangePasswordReturn {
  loading: boolean;
  form: UseFormReturn<ChangePasswordFormValues>;
  onSubmit: (e: React.BaseSyntheticEvent) => Promise<void>;
}

export function useChangePassword(): UseChangePasswordReturn {
  const [loading, setLoading] = useState(false);

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
      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to change password',
        });
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
