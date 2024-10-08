import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const LandingLayout: FC = () => (
  <div className='wrapper min-h-screen w-full overflow-hidden'>
    <Outlet />
  </div>
);

export default LandingLayout;
