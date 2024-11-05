import { AxiosError } from 'axios';

export const handleError = (error: AxiosError) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        console.error('Unauthorized: Redirecting to login.');
        // Add logic to refresh tokens if applicable
        break;
      case 403:
        console.error('Forbidden: Access denied.');
        break;
      case 500:
        console.error('Server error. Please try again later.');
        break;
      default:
        console.error(`Unexpected error: ${error.message}`);
    }
  } else if (error.request) {
    console.error('Network error. Check your connection.');
  } else {
    console.error(`Error: ${error.message}`);
  }

  return Promise.reject(error);
};
