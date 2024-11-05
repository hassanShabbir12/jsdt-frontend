import { apiClient } from '@/api/clients/apiClient';
import { CreateUserDto } from '@/lib/sdk/jsdt/Api';

export const registerUser = async (userData: CreateUserDto) => {
  try {
    const response = await apiClient.stripe.stripeControllerCreate({});

    return response.data;
  } catch (error) {
    throw error;
  }
};
