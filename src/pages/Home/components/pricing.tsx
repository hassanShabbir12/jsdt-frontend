import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import ImageIllustration from '@/assets/images/illustration.svg';
import ImageIearning from '@/assets/images/img-learning.svg';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  return (
    <section className='relative bg-white py-10 text-zinc-800 sm:pb-20 sm:pt-16'>
      <div className='container'>
        <div className='mb-4 overflow-hidden px-4 pt-2 text-center md:mb-6 xl:mb-8'>
          <h2 className='mb-4 text-3xl font-semibold uppercase leading-tight text-zinc-800 md:mb-7 md:text-4xl lg:mb-12 lg:text-5xl xl:mb-8 xl:text-6xl'>
            <span className='relative px-2 before:absolute before:bottom-5 before:left-0 before:right-0 before:top-12 before:bg-yellow xl:py-2'>
              <span className='relative'>PRICING</span>
            </span>{' '}
            FOR EDUCATORS
          </h2>
          <div className='mb-4 text-xl font-medium md:mb-6 md:text-2xl xl:mb-8'>
            Choose the Perfect Plan for Your Learning Journey
          </div>
          <p className='mb-4 text-xl leading-tight md:px-16 lg:px-40 xl:px-60'>
            Choose from flexible pricing options tailored for every learner. Access educational
            resources and tools that match your goals and advance your education with confidence.
          </p>
        </div>
      </div>
      <div className='relative'>
        <Tabs defaultValue='learners' className='w-full'>
          <div className='px-4 text-center'>
            <TabsList className='mb-5 h-12 rounded-4xl border-0 bg-zinc-100 p-0 md:mb-7 md:h-14 lg:mb-10 xl:mb-14'>
              <TabsTrigger
                value='learners'
                className='sm:text-md h-12 rounded-4xl px-5 py-2 text-base font-semibold text-zinc-800 shadow-none data-[state=active]:bg-primary data-[state=active]:text-white md:h-14 md:min-w-52 md:text-xl'
              >
                Learners
              </TabsTrigger>
              <TabsTrigger
                value='educators'
                className='sm:text-md h-12 rounded-4xl px-5 py-2 text-base font-semibold text-zinc-800 shadow-none data-[state=active]:bg-primary data-[state=active]:text-white md:h-14 md:min-w-52 md:text-xl'
              >
                Educators
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='learners'>
            <div className='overflow-hidden bg-stone-50 px-4 py-9'>
              <div className='container'>
                <div className='relative flex flex-wrap items-end'>
                  <div className='w-full rounded-lg bg-primary px-4 py-5 text-center text-white lg:w-3/12 lg:min-w-72 lg:text-left xl:min-w-[333px] xl:rounded-2xl'>
                    <div className='absolute hidden md:block lg:static lg:mb-16'>
                      <img className='w-20' src={ImageIllustration} alt='Image Description' />
                    </div>
                    <h3 className='mb-6 text-2xl lg:mb-16 lg:text-xl xl:text-2xl'>
                      Unlock Your
                      <strong className='ml-1 font-bold lg:ml-0 lg:block'>
                        Full Learning Potential
                      </strong>
                    </h3>
                    <div className='mb-6 flex justify-center lg:mb-14'>
                      <img
                        className='w-24 md:w-28 lg:w-56'
                        src={ImageIearning}
                        alt='Image Description'
                      />
                    </div>
                    <p className='mb-2 text-center text-sm font-medium leading-tight text-zinc-100 lg:mb-6 lg:text-base'>
                      Enhance your learning with unlimited access to advanced resources and
                      personalized study guides.
                    </p>
                  </div>
                  <div className='pt-5 lg:mt-0 lg:min-w-0 lg:flex-grow lg:basis-0 lg:pl-5'>
                    <div className='-mx-2.5 flex flex-wrap'>
                      <div className='relative mb-5 w-full px-2.5 sm:mb-0 sm:w-1/2'>
                        <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                          <h3 className='mb-3 text-2xl font-semibold uppercase md:mb-5'>PLAN A</h3>
                          <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                            R39,99/MONTHLY
                          </h4>
                          <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                            Affordable learning with access to essential education al resources and
                            tools
                          </p>
                          <hr className='mb-3 border-black/10 md:mb-5' />
                          <ul className='mb-5'>
                            <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                              <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                <Check />
                              </span>
                              <p className='grow text-sm font-medium leading-tight'>
                                Create IEB/NSC exams with solutions (max. of 6 downloadable/month)
                              </p>
                            </li>
                            <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                              <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-300 text-zinc-800'>
                                <X />
                              </span>
                              <p className='grow text-sm font-medium leading-tight'>
                                Access to educator-specific resources and tools
                              </p>
                            </li>
                            <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                              <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                <Check />
                              </span>
                              <p className='grow text-sm font-medium leading-tight'>
                                Priority support and dedicated educator training sessions
                              </p>
                            </li>
                            <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                              <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                <Check />
                              </span>
                              <p className='grow text-sm font-medium leading-tight'>
                                Create IEB/NSC investigation with solutions (max. of 2
                                downloadable/month)
                              </p>
                            </li>
                          </ul>
                          <div className='mb-2 flex justify-center md:mb-0 md:pt-4'>
                            <Button className='min-w-52 rounded-4xl xl:text-xl' size='lg'>
                              Buy Plan A
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className='relative w-full px-2.5 sm:w-1/2'>
                        <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                          <h3 className='mb-3 text-2xl font-semibold uppercase md:mb-5'>PLAN B</h3>
                          <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                            R349,99/YEARLY
                          </h4>
                          <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                            Affordable learning with access to essential educational resources and
                            tools
                          </p>
                          <hr className='mb-3 border-black/10 md:mb-5' />
                          <ul className='mb-5'>
                            <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                              <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                <Check />
                              </span>
                              <p className='grow text-sm font-medium leading-tight'>
                                Create IEB/NSC exams with solutions (max. of 10 downloadable/month)
                              </p>
                            </li>
                            <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                              <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                <Check />
                              </span>
                              <p className='grow text-sm font-medium leading-tight'>
                                Access to educator-specific resources and tools
                              </p>
                            </li>
                            <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                              <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                <Check />
                              </span>
                              <p className='grow text-sm font-medium leading-tight'>
                                Priority support and dedicated educator training sessions
                              </p>
                            </li>
                            <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                              <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                <Check />
                              </span>
                              <p className='grow text-sm font-medium leading-tight'>
                                Create IEB/NSC investigation with solutions (max. of 4
                                downloadable/month)
                              </p>
                            </li>
                          </ul>
                          <div className='mb-2 flex justify-center md:mb-0 md:pt-4'>
                            <Button className='min-w-52 rounded-4xl xl:text-xl' size='lg'>
                              Buy Plan B
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='educators'>educators content here</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Pricing;
