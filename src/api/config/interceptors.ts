import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { addPendingRequest, removePendingRequest } from '../clients/requestCache';
import { handleError } from './errorHandler';
import { retryRequest } from './retryHandler';

export const setupInterceptors = (axiosInstance: AxiosInstance): void => {
  axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (config.url?.includes('/pdf/question') || config.url?.includes('/pdf/download')) {
      config.responseType = 'blob';
    }
    addPendingRequest(config);
    const token = localStorage.getItem('access_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
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
};
