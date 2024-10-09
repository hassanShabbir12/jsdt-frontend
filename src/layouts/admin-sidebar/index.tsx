import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Grades } from '@/components/icon/grades';
import { Logout } from '@/components/icon/logout';
import { Question } from '@/components/icon/question';
import { Settings } from '@/components/icon/settings';
import { Subject } from '@/components/icon/subject';
import { Topics } from '@/components/icon/topics';

export const Sidebar: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleToggle = (): void => {
    setIsToggled(!isToggled);
  };
  const handleClickOutside = (event: MouseEvent): void => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsToggled(false);
    }
  };

  useEffect(() => {
    if (isToggled) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isToggled]);

  return (
    <>
      <div className='relative' onClick={handleToggle}>
        <div className='absolute left-8 top-8'>
          <div
            className={`relative z-50 block h-5 w-4 cursor-pointer border-t-2 border-zinc-800 before:absolute before:top-3.5 before:h-0.5 before:w-4 before:bg-zinc-800 after:absolute after:right-0 after:top-1.5 after:m-0 after:h-0.5 after:w-4 after:bg-zinc-800 after:transition-all md:hidden ${isToggled ? 'active' : ''}`}
          ></div>
        </div>
      </div>
      <div
        ref={sidebarRef}
        className={`fixed bottom-auto left-0 top-0 z-50 h-full w-64 border-r-2 border-zinc-300 bg-white transition-all md:translate-x-0 ${isToggled ? 'translate-x-0' : '-translate-x-80'}`}
      >
        <div className='relative h-full overflow-y-auto'>
          <div className='pb-10 pl-0 pr-2.5 pt-8'>
            <h1 className='text-center text-2xl font-semibold text-zinc-800'>Admin Panel</h1>
          </div>
          <ul className='m-0 list-none px-2 pb-16'>
            <li
              className={`group mb-4 cursor-pointer rounded pb-3.5 pl-5 pr-2 pt-3 transition-all hover:bg-blue-500 ${activeIndex === 0 ? 'bg-blue-500' : ''}`}
              onClick={() => setActiveIndex(0)}
            >
              <Link to='' className='ml-1 flex items-center gap-x-3'>
                <div
                  className={`${activeIndex === 0 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  <Grades />
                </div>
                <h2
                  className={`text-base font-semibold ${activeIndex === 0 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  Grades
                </h2>
              </Link>
            </li>
            <li
              className={`group mb-4 cursor-pointer rounded pb-3.5 pl-5 pr-2 pt-3 transition-all hover:bg-blue-500 ${activeIndex === 1 ? 'bg-blue-500' : ''}`}
              onClick={() => setActiveIndex(1)}
            >
              <Link to='' className='flex items-center gap-x-3'>
                <div
                  className={`${activeIndex === 1 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  <Subject />
                </div>
                <h2
                  className={`text-base font-semibold ${activeIndex === 1 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  Subjects
                </h2>
              </Link>
            </li>
            <li
              className={`group mb-4 cursor-pointer rounded pb-3.5 pl-5 pr-2 pt-3 transition-all hover:bg-blue-500 ${activeIndex === 2 ? 'bg-blue-500' : ''}`}
              onClick={() => setActiveIndex(2)}
            >
              <Link to='' className='flex items-center gap-x-3'>
                <div
                  className={`${activeIndex === 2 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  <Topics />
                </div>
                <h2
                  className={`text-base font-semibold ${activeIndex === 2 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  Topics
                </h2>
              </Link>
            </li>
            <li
              className={`group mb-4 cursor-pointer rounded pb-3.5 pl-5 pr-2 pt-3 transition-all hover:bg-blue-500  ${activeIndex === 3 ? 'bg-blue-500' : ''}`}
              onClick={() => setActiveIndex(3)}
            >
              <Link to='' className='flex items-center gap-x-3'>
                <div
                  className={`${activeIndex === 3 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  <Question />
                </div>
                <h2
                  className={`text-base font-semibold ${activeIndex === 3 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  Questions
                </h2>
              </Link>
            </li>
            <li
              className={`group mb-4 cursor-pointer rounded pb-3.5 pl-5 pr-2 pt-3 transition-all hover:bg-blue-500 ${activeIndex === 4 ? 'bg-blue-500' : ''}`}
              onClick={() => setActiveIndex(4)}
            >
              <Link to='' className='flex items-center gap-x-3'>
                <div
                  className={`${activeIndex === 4 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  <Settings />
                </div>
                <h2
                  className={`text-base font-semibold ${activeIndex === 4 ? 'text-white' : 'text-zinc-800 group-hover:text-white'}`}
                >
                  Settings
                </h2>
              </Link>
            </li>
          </ul>
        </div>
        <div className='absolute bottom-0 left-0 right-0 z-30 bg-white'>
          <div className='flex cursor-pointer items-center gap-3 p-5'>
            <div className='h-6 w-6 text-slate-600'>
              <Logout />
            </div>
            <h2 className='text-base text-slate-600'>Logout</h2>
          </div>
        </div>
      </div>
      {isToggled && (
        <div className='fixed inset-0 z-40 bg-black opacity-50' onClick={handleToggle}></div>
      )}
    </>
  );
};
