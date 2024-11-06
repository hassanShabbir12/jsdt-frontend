import { AxiosError } from 'axios';

import { showErrorToast } from '@/utils/toastNotifications';

export const handleError = (error: AxiosError): Promise<never> => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        showErrorToast('Unauthorized: Redirecting to login.');
        break;
      case 403:
        showErrorToast('Forbidden: Access denied.');
        break;
      case 500:
        showErrorToast('Server error. Please try again later.');
        break;
      default:
        showErrorToast(`Unexpected error: ${error.message}`);
    }
  } else if (error.request) {
    showErrorToast('Network error. Check your connection.');
  } else {
    showErrorToast(`Error: ${error.message}`);
  }

  return Promise.reject(error);
};
