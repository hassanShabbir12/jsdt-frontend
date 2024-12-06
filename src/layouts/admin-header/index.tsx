import { FC } from 'react';

import { useAuth } from '@/context/AuthContext';

export const Header: FC = () => {
  const { user } = useAuth();

  return (
    <header className='fixed left-0 right-0 top-0 z-20 border-b border-zinc-300 bg-white px-10 py-5 md:left-64'>
      <div className='flex items-center justify-end'>
        <div className='inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-sky-900 text-2xl font-semibold text-white'>
          {user?.email?.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
};
