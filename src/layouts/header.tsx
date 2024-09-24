import { Button } from '@/components/ui/button';
import ImageLogo from '@/assets/images/logo.png';

const Header = () => {
  return (
    <header className='relative bg-white py-4 text-black lg:py-5'>
      <div className='max- container mx-auto px-4 lg:px-10 xl:px-20'>
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
