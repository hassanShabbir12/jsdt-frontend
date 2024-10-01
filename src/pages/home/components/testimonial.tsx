import { FC } from 'react';

import RatingStar from '@/components/icon/rating-star';
import { assetUrl } from '@/lib/asset-url';

const Testimonial: FC = () => (
  <section>
    <div className='mx-auto max-w-screen-2xl 2xl:px-14'>
      <div className='relative mb-20 px-4 xl:px-32 2xl:px-8'>
        <h2 className='relative z-20 mb-0 text-3xl font-semibold !leading-tight text-zinc-800 md:text-4xl lg:text-5xl xl:text-6xl'>
          Hear from Our <div className='text-primary'>Happy Students</div>
        </h2>
        <div className='absolute -top-44 left-4 z-10'>
          <img
            className='h-[453px] w-[453px]'
            src={assetUrl('/assets/img/home/dots-circle.svg')}
            alt='Image Description'
          />
        </div>
      </div>
      <div className='relative mx-auto w-[1437px]'>
        <img
          className='w-full'
          src={assetUrl('/assets/img/home/bg-map.png')}
          alt='Image Description'
        />
        <ul className='list-none'>
          <li className='absolute left-[500px] top-0'>
            <img
              className='h-24 w-24'
              src={assetUrl('/assets/img/home/image1.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute right-80 top-5'>
            <img
              className='h-24 w-24'
              src={assetUrl('/assets/img/home/image2.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute right-32 top-32'>
            <img
              className='h-24 w-24'
              src={assetUrl('/assets/img/home/image3.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute bottom-72 right-72'>
            <img
              className='h-24 w-24'
              src={assetUrl('/assets/img/home/image1.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute bottom-20 right-56'>
            <img
              className='h-24 w-24'
              src={assetUrl('/assets/img/home/image3.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute bottom-24 right-[590px]'>
            <img
              className='h-24 w-24'
              src={assetUrl('/assets/img/home/image4.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute bottom-20 left-96'>
            <img
              className='h-24 w-24'
              src={assetUrl('/assets/img/home/image3.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute left-48 top-72'>
            <img
              className='h-24 w-24'
              src={assetUrl('/assets/img/home/image4.png')}
              alt='Image Description'
            />
          </li>
          <li className='absolute left-56 top-28'>
            <img
              className='h-24 w-24'
              src={assetUrl('/assets/img/home/image3.png')}
              alt='Image Description'
            />
          </li>
        </ul>
        <div className='absolute left-1/2 top-1/2 w-[530px] -translate-x-1/2 -translate-y-1/2 transform rounded-br-[95px] rounded-tl-[95px] bg-primary p-10'>
          <div className='flex items-center'>
            <ul className='m-0 flex list-none p-0 text-zinc-100'>
              <li className='text-orange-300'>
                <RatingStar />
              </li>
              <li className='text-orange-300'>
                <RatingStar />
              </li>
              <li className='text-orange-300'>
                <RatingStar />
              </li>
              <li>
                <RatingStar />
              </li>
              <li>
                <RatingStar />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
