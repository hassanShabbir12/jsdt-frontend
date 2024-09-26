import { Outlet } from 'react-router-dom';
import Header from './header';

const LandingLayout = () => {
  return (
    <div className='wrapper w-full overflow-hidden'>
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingLayout;
