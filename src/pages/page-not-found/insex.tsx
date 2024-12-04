// src/pages/PageNotFound.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: FC = () => (
  <div className='animate-gradient flex h-screen flex-wrap items-center justify-center bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800'>
    <div className='relative text-center text-white'>
      <h1 className='animate-bounce text-9xl font-bold'>404</h1>
      <p className='animate-fadeIn mt-4 text-xl opacity-0'>
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to='/'
        className='mt-8 inline-block transform rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:scale-110'
      >
        Go Back Home
      </Link>
    </div>
  </div>
);

export default PageNotFound;
