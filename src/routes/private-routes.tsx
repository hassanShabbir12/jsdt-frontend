import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/context/AuthContext';

interface PrivateRouteProps {
  children: ReactElement;
  allowedRoles?: string[]; // Array of allowed roles (e.g., ["admin", "client"])
}

const PrivateRoute = ({ children, allowedRoles = [] }: PrivateRouteProps): ReactElement | null => {
  const { user } = useAuth();

  // If not authenticated, redirect based on the role
  if (!user) {
    if (allowedRoles.includes('admin')) {
      return <Navigate to='/admin/login' replace />;
    }

    return <Navigate to='/login' replace />;
  }

  if (allowedRoles.length && user && !allowedRoles.includes(user.role)) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default PrivateRoute;
