import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/layouts/admin-header';
import { Sidebar } from '@/layouts/admin-sidebar';

export const AdminLayout: FC = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggleClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <div className={`relative ${isActive ? '' : 'active'}`}>
      <Header onToggleClick={handleToggleClick} />
      <Sidebar />
      <Outlet />
    </div>
  );
};
