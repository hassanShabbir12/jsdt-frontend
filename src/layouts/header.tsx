import Check from '@/assets/svg/check';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className='relative bg-white py-4 text-black'>
      <div className='container mx-auto px-4'>
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
              <Button>button</Button>
              <Button variant='secondary'>button</Button>
            </span>
          </div>
        </div>
      </div>
      <div className='text-orange-500'>
        <Check />
      </div>
    </header>
  );
};

export default Header;
