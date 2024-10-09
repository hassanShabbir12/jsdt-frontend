import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './admin-sidebar';

export const AdminLayout: FC = () => (
  <div className='relative'>
    <Sidebar />
    <Outlet />
  </div>
);
