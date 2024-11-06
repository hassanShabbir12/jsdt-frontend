import axios from 'axios';

import { JsdtAPI } from '@/lib/sdk/jsdt/Api';

import { setupInterceptors } from '../config/interceptors';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

// Attach interceptors for request deduplication, error handling, and retry logic
setupInterceptors(axiosInstance);

// Initialize the JsdtAPI client with the configured axios instance
axios.defaults = axiosInstance.defaults;

// Create JsdtAPI client without directly passing axios instance
export const apiClient = new JsdtAPI();
