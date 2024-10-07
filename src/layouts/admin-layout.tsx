import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './admin-sidebar';

const AdminLayout: FC = () => (
  <div className='relative'>
    <Sidebar />
    <Outlet />
  </div>
);

export default AdminLayout;
