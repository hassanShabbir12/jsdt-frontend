import { ToastProps } from '@radix-ui/react-toast';
import { AxiosError } from 'axios';

import { ToastActionElement } from '@/components/ui/toast';

// Define a type for the structure of the error response
type ErrorResponse = {
  message: string;
};

type ToastOptions = {
  title: string;
  description: string;
};

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

// Adjust the type for toast so that it accepts Chakra's return type
type ToastFunction = (options: ToastOptions) => {
  id: string;
  dismiss: () => void;
  update: (props: ToasterToast) => void;
};

export const handleError = (
  error: AxiosError,
  logout?: () => void | undefined,
  toast?: ToastFunction,
  navigate?: (text: string) => void | undefined,
  success?: boolean | undefined,
): Promise<never> => {
  if (error.response) {
    const responseData = error.response.data as ErrorResponse;

    if (error.response.status === 401) {
      if (logout && navigate) {
        logout();
        if (success) {
          navigate('/admin/login');
        } else {
          navigate('/');
        }
      }
      if (toast) {
        toast({
          title: success ? 'Success' : 'Error',
          description: responseData.message,
        });
      }
    } else {
      if (toast) {
        toast({
          title: 'Error',
          description: responseData.message,
        });
      }
    }
  } else if (error.request) {
  } else {
  }

  return Promise.reject(error);
};
