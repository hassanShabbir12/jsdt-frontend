import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import axios from 'axios';

import { apiClient } from '@/api/clients/apiClient';

import { toast } from '../use-toast';

interface UseResetPasswordTokenReturn {
  isVerifying: boolean;
  token: string | null;
}

export const useResetPasswordToken = (): UseResetPasswordTokenReturn => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);
  const token = searchParams.get('token');

  const verifyToken = async (code: string): Promise<void> => {
    if (!code) {
      toast({
        title: 'Error',
        description: 'Reset token is missing',
      });
      navigate('/forgot-password');

      return;
    }
    try {
      toast({
        title: 'Loading',
        description: 'Verifying reset token...',
      });
      const isValid = (await apiClient.auth.usersControllerVerifyPin({
        code,
      })) as unknown as boolean;

      if (!isValid) {
        toast({
          title: 'Error',
          description: 'Invalid or expired reset token',
        });
        navigate('/forgot-password');

        return;
      }

      setIsVerifying(false);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to verify reset token',
        });
      }

      navigate('/forgot-password');
    }
  };

  useEffect(() => {
    if (token) {
      verifyToken(token);
    }
  }, [token]);

  return { isVerifying, token };
};
