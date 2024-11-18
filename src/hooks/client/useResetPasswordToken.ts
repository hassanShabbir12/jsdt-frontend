import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import axios from 'axios';

import { apiClient } from '@/api/clients/apiClient';

import { toast } from '../use-toast';

interface UseResetPasswordTokenReturn {
  token: string | null;
  resetPassword: (password: string) => Promise<void>;
  loading: boolean;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: Dispatch<SetStateAction<boolean>>;
}

export const useResetPasswordToken = (): UseResetPasswordTokenReturn => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const resetPassword = async (password: string): Promise<void> => {
    try {
      setLoading(true);
      await apiClient.auth.usersControllerHandlePasswordReset({
        code: token,
        password,
      });

      toast({
        title: 'Success',
        description: 'Password has been reset successfully.',
      });
      setLoading(false);
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred while resetting your password.',
        });
      }
      setLoading(false);
    }
  };

  return {
    token,
    resetPassword,
    loading,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  };
};
