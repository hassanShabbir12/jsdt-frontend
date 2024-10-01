import { FC, useState } from 'react';

import RatingStar from '@/components/icon/rating-star';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { assetUrl } from '@/lib/asset-url';

const Sidebar: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBulletClick = (index: number): void => {
    setActiveIndex(index);
    document.querySelectorAll('.carousel-item')[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className='relative flex min-h-full flex-col justify-center overflow-hidden bg-primary px-4 py-6 sm:w-1/2 lg:p-6 xl:p-10'>
      <div className='absolute left-4 top-4 hidden md:block'>
        <img
          className='w-20'
          src={assetUrl('/assets/img/signup/illustration.svg')}
          alt='Image Description'
        />
      </div>
      <div className='mb-8 w-full sm:mb-12 lg:pt-14 xl:pt-28'>
        <img
          className='mx-auto w-full max-w-[430px]'
          src={assetUrl('/assets/img/signup/img-sidebar.png')}
          alt='Image Description'
        />
      </div>
      <div className='w-full pt-2'>
        <div className='mx-auto flex max-w-[442px] flex-col gap-10'>
          <Carousel className='w-full'>
            <CarouselContent>
              <CarouselItem className='carousel-item'>
                <div className='flex items-start gap-2'>
                  <div className='relative mt-2 h-12 w-12 shrink-0 overflow-hidden rounded-full'>
                    <img
                      className='absolute left-0 top-0 h-12 w-12 rounded-full'
                      src={assetUrl('/assets/img/signup/avatar-bg.png')}
                      alt='Image Description'
                    />
                    <img
                      className='absolute left-0 top-0 h-12 w-12 rounded-full'
                      src={assetUrl('/assets/img/signup/avatar.png')}
                      alt='Image Description'
                    />
                  </div>
                  <div className='grow'>
                    <div className='text-sm text-white'>John Doe</div>
                    <div className='text-sm text-white'>Grade 11th Student</div>
                    <div className='flex gap-0.5 pb-2 pt-1 text-yellow'>
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                    </div>
                    <div className='text-sm text-white'>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.”
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='carousel-item'>
                <div className='flex items-start gap-2'>
                  <div className='relative mt-2 h-12 w-12 shrink-0 overflow-hidden rounded-full'>
                    <img
                      className='absolute left-0 top-0 h-12 w-12 rounded-full'
                      src={assetUrl('/assets/img/signup/avatar-bg.png')}
                      alt='Image Description'
                    />
                    <img
                      className='absolute left-0 top-0 h-12 w-12 rounded-full'
                      src={assetUrl('/assets/img/signup/avatar.png')}
                      alt='Image Description'
                    />
                  </div>
                  <div className='grow'>
                    <div className='text-sm text-white'>John Doe</div>
                    <div className='text-sm text-white'>Grade 11th Student</div>
                    <div className='flex gap-0.5 pb-2 pt-1 text-yellow'>
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                    </div>
                    <div className='text-sm text-white'>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.”
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='carousel-item'>
                <div className='flex items-start gap-2'>
                  <div className='relative mt-2 h-12 w-12 shrink-0 overflow-hidden rounded-full'>
                    <img
                      className='absolute left-0 top-0 h-12 w-12 rounded-full'
                      src={assetUrl('/assets/img/signup/avatar-bg.png')}
                      alt='Image Description'
                    />
                    <img
                      className='absolute left-0 top-0 h-12 w-12 rounded-full'
                      src={assetUrl('/assets/img/signup/avatar.png')}
                      alt='Image Description'
                    />
                  </div>
                  <div className='grow'>
                    <div className='text-sm text-white'>John Doe</div>
                    <div className='text-sm text-white'>Grade 11th Student</div>
                    <div className='flex gap-0.5 pb-2 pt-1 text-yellow'>
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                    </div>
                    <div className='text-sm text-white'>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.”
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className='flex justify-center space-x-2'>
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-white' : 'bg-stone-300'
                }`}
                onClick={() => handleBulletClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute bottom-4 right-4 hidden md:block'>
        <img
          className='w-20 scale-[-1]'
          src={assetUrl('/assets/img/signup/illustration.svg')}
          alt='Image Description'
        />
      </div>
    </aside>
  );
};

export default Sidebar;
