import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { assetUrl } from '@/lib/asset-url';

export const Header: FC = () => {
  const navigate = useNavigate();

  const onHandleClick = (): void => {
    navigate('/pricing-plan');
  };

  const onLogoClick = (): void => {
    window.location.reload();
  };

  return (
    <header className='relative bg-white p-4'>
      <div className='container lg:py-0.5'>
        <div className='relative flex flex-wrap items-center justify-between text-black'>
          <div className='h-10 w-24 md:w-24'>
            <button onClick={onLogoClick} className='block'>
              <img
                className='block h-auto w-full'
                src={assetUrl('/assets/img/home/logo.svg')}
                alt='JSDT Examiner'
              />
            </button>
          </div>
          <div className='flex items-center gap-x-2 sm:gap-x-5'>
            <Button
              className='h-10 text-sm text-blue-500 sm:h-12 sm:w-40 sm:px-6 md:!h-16 md:!px-9 md:text-base'
              variant='secondary'
              onClick={() => navigate('/login')}
            >
              Log in
            </Button>
            <Button
              className='h-10 text-sm text-blue-500 sm:h-12 sm:w-40 sm:px-6 md:!h-16 md:!px-9 md:text-base'
              variant='secondary'
              onClick={onHandleClick}
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
