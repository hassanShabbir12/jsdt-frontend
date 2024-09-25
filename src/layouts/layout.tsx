import { Outlet } from 'react-router-dom';
import Header from '@/layouts/header';

const Layout = () => {
  return (
    <div className='wrapper w-full overflow-hidden'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
