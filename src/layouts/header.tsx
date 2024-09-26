import { Button } from '@/components/ui/button';
import ImageLogo from '@/assets/images/logo.png';

const Header = () => {
  return (
    <header className='relative bg-white px-4 py-4 text-black lg:py-5'>
      <div className='container mx-auto'>
        <div className='relative flex flex-wrap items-center justify-between'>
          <div className='w-20 md:w-28'>
            <img className='w-full' src={ImageLogo} alt='JSDT Examiner' />
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
