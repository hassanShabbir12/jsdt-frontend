import { Button } from '@/components/ui/button';
import ImageLogo from '@/assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='relative bg-white p-4'>
      <div className='container lg:py-0.5'>
        <div className='relative flex flex-wrap items-center justify-between text-black'>
          <div className='w-20 md:w-24'>
            <Link to='/'>
              <img className='w-full' src={ImageLogo} alt='JSDT Examiner' />
            </Link>
          </div>
          <Button variant='secondary' size='lg'>
            Sign Up Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
