import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { assetUrl } from '@/lib/asset-url';

const Header: FC = () => (
  <header className='relative bg-white p-4'>
    <div className='container lg:py-0.5'>
      <div className='relative flex flex-wrap items-center justify-between text-black'>
        <div className='h-10 w-24 md:w-24'>
          <Link to='/'>
            <img
              className='block h-auto w-full'
              src={assetUrl('/assets/img/home/logo.png')}
              alt='JSDT Examiner'
            />
          </Link>
        </div>
        <Button className='!h-16 !px-9' variant='secondary' size='lg'>
          Sign Up Now
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
