import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './signup-sidebar';

const SignupLayout: FC = () => (
  <div className='relative flex min-h-screen w-full flex-col-reverse gap-4 overflow-hidden sm:flex-row sm:gap-0'>
    <Sidebar />
    <Outlet />
  </div>
);

export default SignupLayout;
