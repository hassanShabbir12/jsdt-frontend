import { useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { z } from 'zod';

import { apiClient } from '@/api/clients/apiClient';
import { toast } from '@/hooks/use-toast';

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

interface UseForgotPasswordReturn {
  form: UseFormReturn<ForgotPasswordFormData>;
  isLoading: boolean;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const useForgotPassword = (): UseForgotPasswordReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async (data) => {
    try {
      setIsLoading(true);

      await apiClient.auth.usersControllerForgotPassword({
        email: data.email,
      });

      toast({
        title: 'Success',
        description: 'Password reset link has been sent to your email',
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again.',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
