import { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => (
  <footer className='relative bg-blue-500 py-4 text-white lg:py-5'>
    <div className='container mx-auto px-4 lg:px-10 xl:px-20'>
      <div className='relative text-center text-base'>
        &copy; 2024{' '}
        <Link to='/' className='text-zinc-800 transition hover:text-white'>
          JSDT Examiner
        </Link>{' '}
        All Rights Reserved by site
      </div>
    </div>
  </footer>
);

export default Footer;
