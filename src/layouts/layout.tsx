import { Outlet } from 'react-router-dom';
import Header from '@/layouts/header';
import Banner from '@/layouts/banner';

const Layout = () => {
  return (
    <div className='wrapper w-full overflow-hidden'>
      <Header />
      <Outlet />
      <Banner />
    </div>
  );
};

export default Layout;
