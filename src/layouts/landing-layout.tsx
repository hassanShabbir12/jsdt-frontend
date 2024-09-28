import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';

const LandingLayout: FC = () => (
  <div className='wrapper w-full overflow-hidden'>
    <Header />
    <Outlet />
  </div>
);

export default LandingLayout;
