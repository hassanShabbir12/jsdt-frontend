import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className='relative bg-primary p-4 text-white'>
      <div className='container mx-auto'>
        <div className='relative flex flex-wrap items-center justify-between'>
          <strong className='block max-w-20'>logo here</strong>
          <div className='relative flex flex-wrap items-center space-x-4'>
            <ul className='flex flex-wrap items-center space-x-4'>
              <li>
                <a href='#' className='hover:underline'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Services
                </a>
              </li>
            </ul>
            <span className='block'>
              <Button variant='secondary'>button</Button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
