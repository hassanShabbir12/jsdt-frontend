import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const LandingLayout: FC = () => (
  <div className='wrapper w-full overflow-hidden'>
    <Outlet />
  </div>
);
