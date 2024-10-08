import { FC } from 'react';

import { Quote } from '@/components/icon/quote';
import { RatingStar } from '@/components/icon/rating-star';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel';
import { assetUrl } from '@/lib/asset-url';

export const Testimonial: FC = () => (
  <div>
    <div className='mx-auto max-w-screen-2xl py-10 2xl:px-14'>
      <div className='relative mb-10 px-4 pt-3 md:mb-24 xl:px-32 2xl:px-8'>
        <h2 className='relative z-20 mb-0 text-3xl font-semibold !leading-none text-zinc-800 md:text-4xl lg:text-5xl xl:text-6xl'>
          Hear from Our <div className='text-primary'>Happy Students</div>
        </h2>
        <div className='absolute -left-40 -top-24 z-10 lg:-top-44 2xl:-left-28'>
          <img
            className='h-[253px] w-[253px] lg:h-[453px] lg:w-[453px]'
            src={assetUrl('/assets/img/home/dot-circle-wide.svg')}
            alt='Image Description'
          />
        </div>
      </div>
      <div className='relative mx-auto w-full px-4 md:w-[800px] md:px-0 lg:w-[1000px] xl:w-[1300px] 2xl:w-[1437px]'>
        <img
          className='hidden w-full md:block'
          src={assetUrl('/assets/img/home/bg-map.png')}
          alt='Image Description'
        />
        <ul className='hidden list-none md:block'>
          <li className='2x:top-0 absolute -top-16 left-[300px] overflow-hidden rounded-full lg:-top-16 xl:-top-4 xl:left-[400px] 2xl:left-[500px]'>
            <img
              className='h-16 w-16 lg:h-24 lg:w-24'
              src={assetUrl('/assets/img/home/image1.png')}
              alt='Image Description'
            />
          </li>
          <li className='2x:right-80 2x:top-5 absolute -top-8 right-24 overflow-hidden rounded-full lg:-top-4 xl:right-60 xl:top-3'>
            <img
              className='h-16 w-16 lg:h-24 lg:w-24'
              src={assetUrl('/assets/img/home/image2.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute right-10 top-24 overflow-hidden rounded-full lg:right-0 lg:top-32 xl:right-32 xl:top-40 2xl:top-32'>
            <img
              className='h-16 w-16 lg:h-24 lg:w-24'
              src={assetUrl('/assets/img/home/image3.png')}
              alt='Image Description'
            />
          </li>
          <li className='2x:right-72 absolute bottom-28 right-24 overflow-hidden rounded-full xl:bottom-60 xl:right-60 2xl:bottom-72'>
            <img
              className='h-16 w-16 lg:h-24 lg:w-24'
              src={assetUrl('/assets/img/home/image1.png')}
              alt='Image Description'
            />
          </li>
          <li className='2x:bottom-20 2x:right-56 absolute bottom-0 right-10 overflow-hidden rounded-full lg:right-0 xl:bottom-10 xl:right-40'>
            <img
              className='h-16 w-16 lg:h-24 lg:w-24'
              src={assetUrl('/assets/img/home/image3.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute bottom-0 right-[290px] overflow-hidden rounded-full lg:right-[390px] xl:bottom-10 xl:right-[490px] 2xl:bottom-24 2xl:right-[590px]'>
            <img
              className='h-16 w-16 lg:h-24 lg:w-24'
              src={assetUrl('/assets/img/home/image4.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute bottom-0 left-60 overflow-hidden rounded-full xl:bottom-10 xl:left-80 2xl:bottom-20 2xl:left-96'>
            <img
              className='h-16 w-16 lg:h-24 lg:w-24'
              src={assetUrl('/assets/img/home/image3.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute left-16 top-60 overflow-hidden rounded-full xl:left-32 xl:top-72 2xl:left-48 2xl:top-72'>
            <img
              className='h-16 w-16 lg:h-24 lg:w-24'
              src={assetUrl('/assets/img/home/image4.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute left-20 top-16 overflow-hidden rounded-full xl:top-28 2xl:left-56'>
            <img
              className='h-16 w-16 lg:h-24 lg:w-24'
              src={assetUrl('/assets/img/home/image3.png')}
              alt='Image Description'
            />
          </li>
        </ul>
        <div className='relative top-1/2 z-20 -mt-0 w-full transform rounded-br-[55px] rounded-tl-[55px] bg-primary p-6 md:absolute md:left-1/2 md:-mt-8 md:w-[430px] md:-translate-x-1/2 md:-translate-y-1/2 lg:-mt-12 lg:w-[530px] lg:rounded-br-[95px] lg:rounded-tl-[95px] lg:p-10'>
          <Carousel className='w-full'>
            <CarouselContent>
              <CarouselItem className='carousel-item'>
                <div className='mb-5 flex items-center justify-between'>
                  <div>
                    <Quote />
                  </div>
                  <div className='flex gap-3 pb-2 pt-1 text-zinc-100'>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div>
                      <RatingStar />
                    </div>
                    <div>
                      <RatingStar />
                    </div>
                  </div>
                </div>
                <div className='text-xl font-semibold text-white 2xl:text-2xl'>
                  <p className='mb-2 line-clamp-5 leading-tight'>
                    &quot;The exam generator made test prep so much easier! Its customizable
                    question options helped me focus on my weak areas. It&apos;s perfect for any for
                    any student aiming to study smarter.&quot;
                  </p>
                  <p className='mb-2 text-center font-extrabold italic'>Alex J, JSDT Student</p>
                </div>
              </CarouselItem>
              <CarouselItem className='carousel-item'>
                <div className='mb-5 flex items-center justify-between'>
                  <div>
                    <Quote />
                  </div>
                  <div className='flex gap-3 pb-2 pt-1 text-zinc-100'>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div>
                      <RatingStar />
                    </div>
                  </div>
                </div>
                <div className='text-xl font-semibold leading-tight text-white 2xl:text-2xl'>
                  <p className='mb-2 line-clamp-5 leading-tight'>
                    &quot;The exam generator made test prep so much easier! Its customizable
                    question options helped me focus on my weak areas. It&apos;s perfect for any for
                    any student aiming to study smarter.&quot;
                  </p>
                  <p className='mb-2 text-center font-extrabold italic'>Alex J, JSDT Student</p>
                </div>
              </CarouselItem>
              <CarouselItem className='carousel-item'>
                <div className='mb-5 flex items-center justify-between'>
                  <div>
                    <Quote />
                  </div>
                  <div className='flex gap-3 pb-2 pt-1 text-zinc-100'>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                    <div className='text-orange-300'>
                      <RatingStar />
                    </div>
                  </div>
                </div>
                <div className='text-xl font-semibold leading-tight text-white 2xl:text-2xl'>
                  <p className='mb-2 line-clamp-5 leading-tight'>
                    &quot;The exam generator made test prep so much easier! Its customizable
                    question options helped me focus on my weak areas. It&apos;s perfect for any
                    student aiming to study smarter.&quot;
                  </p>
                  <p className='mb-2 text-center font-extrabold italic'>Alex J, JSDT Student</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className='relative mt-1.5'>
              <CarouselDots />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);
