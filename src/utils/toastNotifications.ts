import { toast } from 'react-hot-toast';

// Success Toast
export const showSuccessToast = (message: string): void => {
  toast.success(message, {
    icon: '✅',
    style: {
      border: '1px solid #4CAF50',
      padding: '16px',
      color: '#4CAF50',
    },
  });
};

// Error Toast
export const showErrorToast = (message: string): void => {
  toast.error(message, {
    icon: '❌',
    style: {
      border: '1px solid #f44336',
      padding: '16px',
      color: '#f44336',
    },
  });
};
