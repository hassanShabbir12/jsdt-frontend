import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const LandingLayout: FC = () => (
  <div className='wrapper w-full overflow-hidden'>
    <Outlet />
  </div>
);

export default LandingLayout;
