import Check from '@/assets/svg/check';
import { Button } from '@/components/ui/button';
import ImageBanner from '@/assets/images/img-banner.png';
import ImagePattern01 from '@/assets/images/dots-pattern.svg';
import ImagePattern02 from '@/assets/images/dots-circle.svg';

const Banner = () => {
  return (
    <section className='relative w-full overflow-hidden bg-accent py-6 text-neutral-900 sm:pb-20 sm:pt-16'>
      <div className='container mx-auto'>
        <div className='relative grid grid-cols-1 px-4 sm:grid-cols-2'>
          <div className='mb-7 overflow-hidden py-5 sm:mb-0 md:py-8'>
            <strong className='mb-2 block text-base font-semibold uppercase text-primary'>
              ONLINE EXAM SYSTEM
            </strong>
            <h1 className='relative mb-4 text-3xl font-semibold leading-tight text-zinc-800 md:text-4xl lg:mb-8 lg:text-5xl xl:text-6xl'>
              Create Customized Exams in Minutes
            </h1>
            <p className='mb-4 text-base leading-normal lg:mb-8 lg:text-xl'>
              Effortlessly design and generate exams tailored to your curriculum.
            </p>
            <ul className='mb-6 flex flex-wrap items-start gap-3 sm:gap-2 md:mb-8 md:gap-4 lg:mb-14 lg:gap-6'>
              <li className='flex items-center gap-2.5'>
                <span className='text-green-500'>
                  <Check />
                </span>
                <strong className='text-base font-semibold lg:text-lg'>Get Certificate</strong>
              </li>
              <li className='flex items-center gap-2.5'>
                <span className='text-yellow-500'>
                  <Check />
                </span>
                <strong className='text-base font-semibold lg:text-lg'>Get Membership</strong>
              </li>
              <li className='flex items-center gap-2.5'>
                <span className='text-rose-500'>
                  <Check />
                </span>
                <strong className='text-base font-semibold lg:text-lg'>Practice Exams</strong>
              </li>
            </ul>
            <Button size='lg'>Sign Up Now</Button>
          </div>
          <div className='relative sm:pl-4 md:pl-5 lg:pl-8'>
            <div className='absolute -right-20 -top-9'>
              <img className='w-full' src={ImagePattern01} alt='Image Description' />
            </div>
            <div className='relative z-10 mx-auto mb-6 max-w-lg overflow-hidden pb-6 pr-4 sm:ml-auto 2xl:-mr-12'>
              <div className='absolute -right-4 bottom-0 h-full w-full origin-bottom-right skew-y-6 transform bg-amber-400 before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:-skew-y-6 before:bg-accent after:absolute after:-bottom-2 after:left-0 after:h-8 after:w-6 after:bg-accent'></div>
              <div className='h-full w-full origin-bottom-right skew-y-6 transform overflow-hidden object-cover'>
                <img
                  className='h-full w-full origin-bottom-right -skew-y-6 transform object-cover'
                  src={ImageBanner}
                  alt='Create Customized Exams in Minutes.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute -right-12 bottom-6'>
        <img className='w-full' src={ImagePattern02} alt='Image Description' />
      </div>
      <div className='absolute bottom-0 left-0 border-b-0 border-l-[100vw] border-r-0 border-t-[40px] border-solid border-transparent border-l-white sm:border-t-[50px] md:border-t-[100px] lg:border-t-[140px]'></div>
    </section>
  );
};

export default Banner;
