import { FC } from 'react';

import { assetUrl } from '@/lib/asset-url';

const Works: FC = () => {
  const steps = [
    {
      title: 'Sign Up or Log In:',
      description: 'Access your account to start creating or managing exams.',
      icon: '/assets/img/home/arrow-right.svg',
    },
    {
      title: 'Select or upload questions:',
      description:
        'Choose from a pre-existing bank or upload new questions to include in your exam.',
      icon: '/assets/img/home/arrow-top.svg',
    },
    {
      title: 'Customize the exam format:',
      description:
        'Adjust the layout, format, and settings to fit your specific exam requirements.',
      icon: '/assets/img/home/fire.svg',
    },
    {
      title: 'Download or share the exam with students:',
      description:
        'Access your account to start creating or Save the exam file or share it directly with students through various platforms.managing exams.',
      icon: '/assets/img/home/arroe-bottom.svg',
    },
  ];

  return (
    <section className='relative w-full overflow-hidden pb-6 pt-6 text-neutral-900 sm:pb-20 sm:pt-16'>
      <div className='container relative mx-auto px-4'>
        <div className='text-center text-xl text-zinc-800 sm:text-2xl md:text-4xl'>
          <h2 className='mb-10 text-center text-4xl font-bold tracking-wide text-zinc-800 md:text-6xl'>
            How It Works
          </h2>
          <div className='absolute -top-20 left-32'>
            <img
              src={assetUrl('assets/img/home/avater-dot.png')}
              alt='Generate-2'
              className='-mb-11 block h-auto'
            />
          </div>
          <p className='mb-10 tracking-wide md:mb-20'>
            Generate exams in just 3-4 simple steps for quick and easy creation.
          </p>
        </div>
        <div className='block items-center gap-4 lg:flex'>
          <ul className='lg:b-0 m-0 mb-10 w-full p-0 lg:w-11/12'>
            {steps.map((step, index) => (
              <li key={index} className='mb-6 ml-0 flex list-none items-center xl:-ml-6 xl:-mr-6'>
                <div
                  className={`${index % 2 === 0 ? 'bg-blue-500' : 'bg-rose-500'}
                                         flex h-16 w-16 items-center justify-center rounded-xl text-white shadow-md md:h-20 md:w-20`}
                >
                  <img src={step.icon} alt={step.title} />
                </div>
                <div className='w-full pl-3 text-sm sm:pl-8 sm:text-lg lg:max-w-lg lg:text-xl xl:pl-12'>
                  <h3 className='mb-3 block font-bold text-zinc-800 md:-mr-7 md:text-xl lg:text-2xl'>
                    {step.title}
                  </h3>
                  <p className='pr-0 md:pr-7'>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className='mx-auto flex justify-center md:w-2/4 lg:m-0 lg:justify-end'>
            <div className='flex h-[350px] w-[350px] items-center justify-center rounded-full border-4 border-dashed border-amber-400 sm:h-[450px] sm:w-[450px] xl:h-[525px] xl:w-[525px]'>
              <div className='flex h-[330px] w-[330px] items-center justify-center overflow-hidden rounded-full bg-blue-500 sm:h-[430px] sm:w-[430px] xl:h-[497px] xl:w-[497px]'>
                <img
                  src={assetUrl('assets/img/home/avater.png')}
                  alt='Generate-2'
                  className='-mb-11 block h-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 right-0'>
        <img
          src={assetUrl('assets/img/home/avater-dot.png')}
          alt='dot'
          className='m-0 block h-auto'
        />
      </div>
    </section>
  );
};

export default Works;
