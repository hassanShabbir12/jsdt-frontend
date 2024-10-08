import { FC } from 'react';

import { Star } from '@/components/icon/star';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import { assetUrl } from '@/lib/asset-url';

export const Sidebar: FC = () => (
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
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <div className='text-sm text-white'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.”
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
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <div className='text-sm text-white'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.”
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
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <div className='text-sm text-white'>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.”
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className='relative mt-7'>
            <CarouselDots />
          </div>
        </Carousel>
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
