import { AxiosError } from 'axios';

export const handleError = (error: AxiosError): Promise<never> => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        break;
      case 403:
        break;
      case 500:
        break;
      default:
    }
  } else if (error.request) {
  } else {
  }

  return Promise.reject(error);
};
