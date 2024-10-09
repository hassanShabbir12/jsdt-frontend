import { FC } from 'react';

export const ExamGenerator: FC = () => {
  const boxData = [
    {
      title: 'Easy-to-use interface',
      description:
        'An intuitive design that makes creating and customizing exams quick and effortless.',
      icon: 'assets/img/home/handaraise.svg',
    },
    {
      title: 'Question bank creation:',
      description: 'Easily create, organize, and manage a comprehensive question bank.',
      icon: 'assets/img/home/question-mark.svg',
    },
    {
      title: 'Auto-grading',
      description: 'Automatically grade exams with accurate and efficient functionality.',
      icon: 'assets/img/home/notepad.svg',
    },
    {
      title: 'Customizable template:',
      description: 'Easily tailor exam templates to suit your specific needs and preferences.',
      icon: 'assets/img/home/pen.svg',
    },
    {
      title: 'Real-time reporting:',
      description:
        'Receive instant, comprehensive insights with real-time reporting for accurate & timely analysis.',
      icon: 'assets/img/home/handaraise.svg',
    },
    {
      title: 'Easy-to-use interface:',
      description:
        'An intuitive design that makes creating and customizing exams quick and effortless.',
      icon: 'assets/img/home/handaraise.svg',
    },
  ];

  return (
    <section className='relative w-full overflow-hidden py-6 text-neutral-900 sm:pb-20 sm:pt-28'>
      <div className='container relative mx-auto px-4'>
        <h2 className='mb-10 max-w-72 text-[28px] font-semibold leading-tight md:mb-20 md:max-w-xl md:text-6xl'>
          <span className='relative z-10 before:absolute before:left-1.5 before:top-4 before:-z-10 before:h-3 before:w-full before:bg-amber-300 md:before:top-9 md:before:h-5'>
            Unique Benefits of
          </span>{' '}
          Our Exam Generator:
        </h2>
        <div className='-ml-2 -mr-2 flex flex-wrap lg:-ml-4 lg:-mr-4'>
          {boxData.map((box, index) => (
            <div
              key={index}
              className='mb-5 w-full pl-2 pr-2 md:w-1/2 lg:mb-10 lg:w-2/6 lg:pl-4 lg:pr-4'
            >
              <div className='h-full rounded-3xl bg-accent'>
                <div className='px-3 py-3 text-xl leading-6 text-zinc-800 md:pb-9 md:pl-4 md:pr-5 md:pt-5'>
                  <div className='mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow md:mb-6'>
                    <img src={box.icon} alt={box.title} />
                  </div>
                  <h3 className='mb-3 block text-base font-semibold tracking-wider text-zinc-900 lg:mb-7 lg:text-2xl'>
                    {box.title}
                  </h3>
                  <p className='m-0'>{box.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
