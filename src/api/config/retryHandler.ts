import { AxiosResponse } from 'axios';

export const retryRequest = async (
  request: () => Promise<AxiosResponse>,
  retries = 3,
  delay = 1000,
): Promise<AxiosResponse> => {
  for (let i = 0; i < retries; i++) {
    try {
      return await request();
    } catch (error) {
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
      } else {
        throw error;
      }
    }
  }

  // This throw is added to satisfy TypeScript but should never be reached.
  throw new Error('Retry failed, no attempts left');
};
