import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/context/AuthContext';
import { CreateUserDtoRoleEnum } from '@/lib/sdk/jsdt/Api';

interface PublicRouteProps {
  children: ReactElement;
  restricted?: boolean;
}

const PublicRoute = ({ children, restricted = false }: PublicRouteProps): ReactElement | null => {
  const { user } = useAuth();

  // If the route is restricted (i.e., it should only be accessible to unauthenticated users)
  if (restricted && user) {
    const userRole = user.role; // Assuming user.role is of type CreateUserDtoRoleEnum

    // Use a switch statement for better readability
    switch (userRole) {
      case CreateUserDtoRoleEnum.Learner:
      case CreateUserDtoRoleEnum.Teacher:
        return <Navigate to='/learner-teacher' replace />;
      default:
        return <Navigate to='/admin' replace />;
    }
  }

  return children;
};

export default PublicRoute;
