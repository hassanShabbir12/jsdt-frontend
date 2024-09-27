import Exam01 from '@/assets/images/exam-1.png';
import Exam02 from '@/assets/images/exam-2.png';
import Exam03 from '@/assets/images/exam-3.png';
import Exam04 from '@/assets/images/exam-4.png';
import Exam05 from '@/assets/images/exam-5.png';
import Generate01 from '@/assets/images/generate-1.png';
import Generate02 from '@/assets/images/generate-2.png';
import Generate03 from '@/assets/images/generate-3.png';
import Generate04 from '@/assets/images/generate-4.png';

const GeneratorDetail = () => {
  return (
    <section className='relative w-full bg-accent py-24 text-neutral-900 sm:pb-60 sm:pt-10 lg:pb-96'>
      <div className='container px-4'>
        <div className='absolute right-0 top-28 z-10'>
          <img src={Generate02} alt='Generate-1' />
        </div>
        <div className='absolute left-0 top-96 z-50'>
          <img src={Generate03} alt='Generate-1' />
        </div>
        <div className='absolute right-0 top-[1000px] z-10'>
          <img src={Generate04} alt='Generate-1' />
        </div>
        <div className='relative'>
          <div className='absolute -left-16 -top-32 z-50'>
            <img src={Generate01} alt='Generate-1' />
          </div>
          <h2 className='relative mx-auto mb-12 max-w-xs text-center text-3xl font-semibold leading-[1.2] text-zinc-800 sm:max-w-md sm:text-4xl md:mb-24 md:max-w-2xl md:text-6xl'>
            <span className='relative z-10 before:absolute before:left-1.5 before:top-4 before:-z-10 before:h-3 before:w-full before:bg-blue-400 md:before:top-8 md:before:h-6'>
              See Our Exam{' '}
            </span>
            Generator in Action
          </h2>
        </div>
        <div className='flex-wrap justify-between md:flex'>
          <div className='relative z-50 mb-5 h-full bg-white px-4 pb-8 pt-10 md:mb-0 md:w-2/6 lg:w-[483px] xl:-ml-4'>
            <img className='block h-auto w-full' src={Exam01} alt='Exam01' />
          </div>
          <div className='relative z-50 mb-5 mr-0 mt-0 bg-white p-4 md:mb-0 md:w-2/6 lg:m-0 lg:w-[483px] xl:-m-2 xl:-mr-4'>
            <img className='block h-auto w-full' src={Exam02} alt='Exam02' />
          </div>
        </div>
        <div className='relative z-[9999] mx-auto mb-5 mt-0 bg-white px-4 pb-16 pt-16 md:-mt-32 md:mb-0 md:w-2/5 md:shadow-2xl lg:w-[483px] xl:ml-72'>
          <img className='block h-auto w-full' src={Exam03} alt='Exam03' />
        </div>
        <div className='flex-wrap justify-between md:flex'>
          <div className='relative z-50 mb-5 ml-0 h-full bg-white px-4 pt-4 md:-mt-40 md:mb-0 md:w-2/6 lg:mb-0 lg:w-[483px] xl:-ml-5 xl:pb-20'>
            <img className='block h-auto w-full' src={Exam04} alt='Exam04' />
          </div>
          <div className='relative z-50 mb-5 mr-0 mt-0 bg-white px-4 pb-4 pt-10 md:-mt-40 md:mb-0 md:w-2/6 lg:w-[483px] xl:-mr-4 xl:-mt-10 xl:pt-24'>
            <img className='block h-auto w-full' src={Exam05} alt='Exam05' />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 border-b-0 border-l-[100vw] border-r-0 border-t-[40px] border-solid border-transparent border-l-white sm:border-t-[50px] md:border-t-[100px] lg:border-t-[400px] xl:border-t-[444px]'></div>
    </section>
  );
};

export default GeneratorDetail;
