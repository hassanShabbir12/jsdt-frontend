import { FC } from 'react';

interface HeaderProps {
  onToggleClick: () => void;
}

export const Header: FC<HeaderProps> = ({ onToggleClick }) => (
  <header className='fixed left-0 right-0 top-0 border-b border-zinc-300 bg-white px-10 py-5 md:left-64'>
    <div className='flex items-center justify-between md:justify-end'>
      <div
        onClick={onToggleClick}
        className='relative z-50 block h-5 w-4 cursor-pointer border-t-2 border-zinc-800 before:absolute before:top-3.5 before:h-0.5 before:w-4 before:bg-zinc-800 after:absolute after:right-0 after:top-1.5 after:m-0 after:h-0.5 after:w-4 after:bg-zinc-800 after:transition-all md:hidden'
      ></div>
      <div className='inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-sky-900 text-2xl font-semibold text-white'>
        M
      </div>
    </div>
  </header>
);
