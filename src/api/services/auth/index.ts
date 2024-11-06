import axios from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { LoginResponse } from '@/interface/auth';
import { SigninUserDto } from '@/lib/sdk/jsdt/Api';
import { showErrorToast, showSuccessToast } from '@/utils/toastNotifications';

export const loginAdmin = async (userData: SigninUserDto): Promise<LoginResponse> => {
  try {
    const response = await apiClient.auth.usersControllerLogin(userData);

    showSuccessToast('Login successful');

    return response.data as unknown as LoginResponse;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      showErrorToast(error.response.data.message);
    } else {
      showErrorToast('An unexpected error occurred');
    }
    throw error;
  }
};
