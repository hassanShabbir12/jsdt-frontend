import { FC, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { handleError } from '@/api/config/errorHandler';
import { Grades } from '@/components/icon/grades';
import { Logout } from '@/components/icon/logout';
import { Question } from '@/components/icon/question';
import { Settings } from '@/components/icon/settings';
import { Subject } from '@/components/icon/subject';
import { Topics } from '@/components/icon/topics';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';

export const Sidebar: FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();

  const onHandleClick = (): void => {
    const error = {
      response: {
        status: 401,
        data: {
          message: 'You have been logged out',
        },
      },
    };

    handleError(error as AxiosError, logout, toast, navigate, true);
  };

  const [activeIndex, setActiveIndex] = useState(() =>
    Number.parseInt(localStorage.getItem('activeIndex') || '0', 10),
  );
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
    const newIndex = Number.parseInt(localStorage.getItem('activeIndex') || '0', 10);

    switch (newIndex) {
      case 0:
        navigate('/admin');
        break;
      case 1:
        navigate('/admin/subjects');
        break;
      case 2:
        navigate('/admin/topics');
        break;
      case 3:
        navigate('/admin/questions');
        break;
      case 4:
        navigate('/admin/settings');
        break;
      default:
        navigate('/admin'); // Fallback navigation
        break;
    }
  }, []);

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

  const handleSidebar = (type: number, path: string): void => {
    setActiveIndex(type);
    localStorage.setItem('activeIndex', type.toString());
    navigate(path);

    if (window.innerWidth <= 768) {
      handleToggle();
    }
  };

  const handleLocationChange = (): void => {
    const path = location.pathname;

    switch (path) {
      case '/admin':
        setActiveIndex(0);
        break;
      case '/admin/subjects':
        setActiveIndex(1);
        break;
      case '/admin/topics':
        setActiveIndex(2);
        break;
      case '/admin/questions':
        setActiveIndex(3);
        break;
      case '/admin/settings':
        setActiveIndex(4);
        break;
      default:
        setActiveIndex(0); // Fallback to default
        break;
    }
  };

  useEffect(() => {
    handleLocationChange(); // Call the function to set the initial active index
  }, [location]);

  return (
    <>
      <div className='relative' onClick={handleToggle}>
        <div className='fixed left-8 top-8 z-40 sm:absolute'>
          <div className='relative z-40 block h-5 w-4 cursor-pointer border-t-2 border-zinc-800 before:absolute before:top-3.5 before:h-0.5 before:w-4 before:bg-zinc-800 after:absolute after:right-0 after:top-1.5 after:m-0 after:h-0.5 after:w-4 after:bg-zinc-800 after:transition-all md:hidden'></div>
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
              className={`group mb-4 cursor-pointer rounded transition-all hover:bg-blue-500 ${activeIndex === 0 ? 'bg-blue-500' : ''}`}
              onClick={() => handleSidebar(0, '/admin')}
            >
              <div className='ml-1 flex items-center gap-x-3 pb-3.5 pl-5 pr-2 pt-3'>
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
              </div>
            </li>
            <li
              className={`group mb-4 cursor-pointer rounded transition-all hover:bg-blue-500 ${activeIndex === 1 ? 'bg-blue-500' : ''}`}
              onClick={() => handleSidebar(1, '/admin/subjects')}
            >
              <div className='flex items-center gap-x-3 pb-3.5 pl-5 pr-2 pt-3'>
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
              </div>
            </li>
            <li
              className={`group mb-4 cursor-pointer rounded transition-all hover:bg-blue-500 ${activeIndex === 2 ? 'bg-blue-500' : ''}`}
              onClick={() => handleSidebar(2, '/admin/topics')}
            >
              <div className='flex items-center gap-x-3 pb-3.5 pl-5 pr-2 pt-3'>
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
              </div>
            </li>
            <li
              className={`group mb-4 cursor-pointer rounded transition-all hover:bg-blue-500 ${activeIndex === 3 ? 'bg-blue-500' : ''}`}
              onClick={() => handleSidebar(3, '/admin/questions')}
            >
              <div className='flex items-center gap-x-3 pb-3.5 pl-5 pr-2 pt-3'>
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
              </div>
            </li>
            <li
              className={`group mb-4 cursor-pointer rounded transition-all hover:bg-blue-500 ${activeIndex === 4 ? 'bg-blue-500' : ''}`}
              onClick={() => handleSidebar(4, '/admin/settings')}
            >
              <div className='flex items-center gap-x-3 pb-3.5 pl-5 pr-2 pt-3'>
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
              </div>
            </li>
          </ul>
        </div>
        <div className='absolute bottom-0 left-0 right-0 z-30 bg-white'>
          <div className='p-5'>
            <div
              onClick={onHandleClick}
              className='group inline-flex cursor-pointer items-center gap-x-3'
            >
              <div className='h-6 w-6 text-blue-500 transition-all duration-300 group-hover:text-blue-700'>
                <Logout />
              </div>
              <h2 className='text-base font-semibold text-blue-500 transition-all duration-300 group-hover:text-blue-700'>
                Logout
              </h2>
            </div>
          </div>
        </div>
      </div>
      {isToggled && (
        <div className='fixed inset-0 z-40 bg-black opacity-50' onClick={handleToggle}></div>
      )}
    </>
  );
};
