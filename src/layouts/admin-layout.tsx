import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/layouts/admin-header';
import { Sidebar } from '@/layouts/admin-sidebar';

export const AdminLayout: FC = () => (
  <div className='relative'>
    <div className='md:pl-72 md:pt-16'>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  </div>
);
