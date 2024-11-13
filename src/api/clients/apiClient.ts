import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { JsdtAPI } from '@/lib/sdk/jsdt/Api';

import { handleError } from '../config/errorHandler';
import { retryRequest } from '../config/retryHandler';
import { addPendingRequest, removePendingRequest } from './requestCache';

export class ExtendedJsdtAPI extends JsdtAPI<unknown> {
  constructor() {
    super({
      baseURL: import.meta.env.VITE_API_BASE_URL || 'https://34.56.32.71/',
      timeout: 10000,
    });

    // Set up interceptors on the instance after creation
    this.setupInterceptors(this.instance);
  }

  private setupInterceptors(axiosInstance: AxiosInstance): void {
    axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      addPendingRequest(config);
      // Set the Authorization token, if available
      const token = localStorage.getItem('authToken');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    axiosInstance.interceptors.response.use(
      (response) => {
        removePendingRequest(response.config);

        return response;
      },
      (error) => {
        removePendingRequest(error.config);

        if (!error.response || error.code === 'ECONNABORTED') {
          // Retry on network errors or timeouts
          return retryRequest(() => axiosInstance.request(error.config));
        }

        return handleError(error);
      },
    );
  }
}

// Export a single instance
export const apiClient = new ExtendedJsdtAPI();
