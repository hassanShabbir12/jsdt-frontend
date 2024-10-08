import { FC } from 'react';

import { Check } from '@/components/icon/check';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/lib/asset-url';

export const Banner: FC = () => (
  <section className='relative w-full overflow-hidden bg-accent px-4 pb-6 pt-14 text-zinc-800 sm:pb-20 sm:pt-16'>
    <div className='container xl:-mt-1'>
      <div className='relative flex-wrap items-start justify-between text-zinc-800 md:flex'>
        <div className='mb-3 overflow-hidden py-5 sm:mb-0 md:mb-7 md:min-w-0 md:flex-grow md:basis-0 md:py-8 lg:py-11'>
          <div className='mb-4 text-base font-semibold uppercase text-primary'>
            ONLINE EXAM SYSTEM
          </div>
          <h1 className='relative mb-4 text-3xl font-bold text-zinc-800 md:text-4xl lg:mb-12 lg:text-5xl xl:text-6xl'>
            Create Customized Exams in Minutes
          </h1>
          <p className='mb-4 text-base leading-normal lg:mb-10 lg:text-xl'>
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
        <div className='relative w-full pl-10 md:w-1/2 md:pr-1'>
          <div className='absolute -top-9 right-0'>
            <img
              className='w-full'
              src={assetUrl('/assets/img/home/dots-pattern.svg')}
              alt='Image Description'
            />
          </div>
          <div className='relative z-10 mx-auto mb-6 max-w-lg overflow-hidden pb-6 pr-4 sm:ml-auto'>
            <div className='absolute bottom-1 left-7 right-0 top-7 origin-bottom-right skew-y-6 transform bg-amber-400'></div>
            <div className='h-full w-full origin-bottom-right skew-y-6 transform overflow-hidden object-cover'>
              <img
                className='h-full w-full origin-bottom-right -skew-y-6 transform object-cover'
                src={assetUrl('/assets/img/home/img-banner.png')}
                alt='Create Customized Exams in Minutes.'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='absolute -right-12 bottom-6'>
      <img
        className='w-full'
        src={assetUrl('/assets/img/home/dots-circle.svg')}
        alt='Image Description'
      />
    </div>
    <div className='absolute bottom-0 left-0 border-b-0 border-l-[100vw] border-r-0 border-t-[40px] border-solid border-transparent border-l-white sm:border-t-[50px] md:border-t-[100px] lg:border-t-[140px]'></div>
  </section>
);
