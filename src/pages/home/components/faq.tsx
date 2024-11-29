import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Check, X } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { assetUrl } from '@/lib/asset-url';

export const Faq: FC = () => {
  const navigate = useNavigate();
  const { setUserRole, userRole } = useAuth();
  const onHandleClick = (): void => {
    navigate('/payment');
  };

  return (
    <section className='relative'>
      <div className='container'>
        <div className='mx-auto px-4 md:w-1/2 md:px-8 lg:px-16 xl:px-0'>
          <h2 className='relative mb-4 text-center text-3xl font-semibold !leading-tight text-zinc-800 md:px-5 md:text-4xl lg:mb-0 lg:px-6 lg:text-5xl xl:text-6xl'>
            <span className='relative mr-1 inline-block before:absolute before:left-0 before:right-0 before:top-1/2 before:-z-10 before:h-4 before:bg-yellow md:mr-0 md:before:h-5 lg:before:h-6'>
              Any Questions?
            </span>
            Look here.
          </h2>
        </div>
        <div className='px-5 pb-10'>
          <Accordion type='single' defaultValue='item-1' collapsible>
            <AccordionItem value='item-1' className='data-[state=open]:shadow-lg'>
              <AccordionTrigger className='px-3 py-5 text-left text-base font-semibold text-zinc-800 hover:text-zinc-600 hover:no-underline sm:text-2xl md:px-5 md:py-5 md:text-3xl lg:px-10 lg:py-12 lg:text-4xl'>
                How JSDT works?
              </AccordionTrigger>
              <AccordionContent>
                <div className='lg:text-3.5xl px-3 pb-1 leading-tight text-zinc-800 md:px-5 md:pb-2 md:text-xl lg:pb-8 lg:pl-10 lg:pr-28'>
                  <p className='mb-4'>
                    <span className='font-semibold'>JSDT Learn:</span> Revolutionizing Education for
                    Learners and Educators
                  </p>
                  <p className='mb-4'>
                    JSDT is a cutting-edge educational platform designed to empower both learners
                    and teachers. It provides a seamless, user-friendly experience that makes
                    learning and assessment creation more effective and personalized.
                  </p>
                  <p className='mb-4'>
                    <span className='font-semibold'>For Learners:</span> JSDT allows students to
                    practice and improve their skills at their own pace and level of understanding.
                    With interactive exercises and tailored feedback, it ensures that learning
                    becomes an enjoyable and progressive journey.
                  </p>
                  <p className='mb-4'>
                    <span className='font-semibold'>For Teachers:</span> Simplify your workload and
                    enhance your teaching with JSDT’s powerful tools. Easily create custom
                    assessment tasks, generate printable copies with detailed memoranda, and utilize
                    ready-made assessment grids for quick and efficient grading.
                  </p>
                  <p className='mb-4'>
                    With JSDT, education becomes more accessible, personalized, and efficient,
                    fostering growth and excellence for all users. Join 1.2 million daily users and
                    experience the future of learning and teaching today!
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='data-[state=open]:shadow-lg'>
              <AccordionTrigger className='px-3 py-5 text-left text-base font-semibold text-zinc-800 hover:text-zinc-600 hover:no-underline sm:text-2xl md:px-5 md:py-5 md:text-3xl lg:px-10 lg:py-12 lg:text-4xl'>
                How to signup?
              </AccordionTrigger>
              <AccordionContent>
                <div className='lg:text-3.5xl px-3 pb-1 leading-tight text-zinc-800 md:px-5 md:pb-2 md:text-xl lg:pb-8 lg:px-10'>
                  <section className='relative bg-white py-10 text-zinc-800'>
                    <div className='container'>
                      <div className='mb-4 overflow-hidden px-4 pt-2 text-center md:mb-6 xl:mb-8'>
                        <h2 className='mb-4 text-3xl font-semibold uppercase leading-tight text-zinc-800 md:mb-7 md:text-4xl lg:mb-12 lg:text-5xl xl:mb-8 xl:text-6xl'>
                          <span className='relative px-0 before:absolute before:bottom-2 before:left-0 before:right-0 before:top-6 before:bg-yellow lg:before:bottom-3 lg:before:top-8 xl:py-2 xl:before:bottom-5 xl:before:top-12'>
                            <span className='relative'>PRICING</span>
                          </span>{' '}
                          FOR{' '}
                          <span className='block sm:inline'>
                            {userRole === 'teacher' ? 'EDUCATORS' : 'LEARNERS'}
                          </span>
                        </h2>
                        <div className='mb-4 text-xl font-medium md:mb-6 md:text-2xl xl:mb-8'>
                          Choose the Perfect Plan for Your Learning Journey
                        </div>
                        <p className='mb-4 text-sm sm:text-xl leading-tight md:px-16 lg:px-40'>
                          Choose from flexible pricing options tailored for every learner. Access
                          educational resources and tools that match your goals and advance your
                          education with confidence.
                        </p>
                      </div>
                    </div>
                    <div className='relative'>
                      <Tabs
                        value={userRole === 'learner' ? 'learners' : 'educators'}
                        className='w-full'
                      >
                        <div className='px-4 text-center'>
                          <TabsList className='mb-5 h-12 rounded-4xl border-0 bg-zinc-100 p-0 md:mb-7 md:h-14 lg:mb-10 xl:mb-14'>
                            <TabsTrigger
                              onClick={() => setUserRole('learner')}
                              value='learners'
                              className='sm:text-md h-12 rounded-4xl px-5 py-2 text-base font-semibold text-zinc-800 shadow-none data-[state=active]:bg-primary data-[state=active]:text-white md:h-14 md:min-w-52 md:text-xl'
                            >
                              Learners
                            </TabsTrigger>
                            <TabsTrigger
                              onClick={() => setUserRole('teacher')}
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
                                  <div className='absolute hidden md:block lg:static lg:mb-12'>
                                    <img
                                      className='w-20'
                                      src={assetUrl('/assets/img/home/illustration.svg')}
                                      alt='Image Description'
                                    />
                                  </div>
                                  <h3 className='mb-6 text-2xl lg:mb-20 lg:text-xl xl:text-2xl'>
                                    Unlock Your
                                    <strong className='ml-1 font-bold lg:ml-0 lg:block'>
                                      Full Learning Potential
                                    </strong>
                                  </h3>
                                  <div className='mb-6 flex justify-center lg:mb-16'>
                                    <img
                                      className='w-24 md:w-28 lg:w-56'
                                      src={assetUrl('/assets/img/home/img-learning.svg')}
                                      alt='Image Description'
                                    />
                                  </div>
                                  <p className='mb-2 text-center text-sm font-medium leading-tight text-zinc-100 lg:mb-11 lg:text-base'>
                                    Enhance your learning with unlimited access to advanced
                                    resources and personalized study guides.
                                  </p>
                                </div>
                                <div className='pt-6 lg:mt-0 lg:min-w-0 lg:flex-grow lg:basis-0 lg:pl-5'>
                                  <div className='-mx-2.5 flex flex-wrap'>
                                    <div className='relative mb-5 w-full px-2.5 sm:mb-0 sm:w-1/2'>
                                      <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                                        <h3 className='mb-3 text-2xl font-semibold uppercase leading-6 md:mb-5'>
                                          PLAN A
                                        </h3>
                                        <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                                          R39,99/MONTHLY
                                        </h4>
                                        <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                                          Affordable learning with access to essential education al
                                          resources and tools
                                        </p>
                                        <hr className='mb-3 border-black/10 md:mb-5' />
                                        <ul className='mb-5'>
                                          <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                                            <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                              <Check />
                                            </span>
                                            <p className='grow text-sm font-medium leading-tight'>
                                              Create IEB/NSC exams with solutions (max. of 6
                                              downloadable/month)
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
                                              Priority support and dedicated educator training
                                              sessions
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
                                        <div className='mb-2 flex justify-center md:mb-0 md:pt-6'>
                                          <Button
                                            onClick={onHandleClick}
                                            className='h-14 min-w-52 rounded-4xl xl:text-xl'
                                            size='lg'
                                          >
                                            Buy Plan A
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='relative w-full px-2.5 sm:w-1/2'>
                                      <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                                        <h3 className='mb-3 text-2xl font-semibold uppercase md:mb-5'>
                                          PLAN B
                                        </h3>
                                        <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                                          R349,99/YEARLY
                                        </h4>
                                        <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                                          Affordable learning with access to essential educational
                                          resources and tools
                                        </p>
                                        <hr className='mb-3 border-black/10 md:mb-5' />
                                        <ul className='mb-5'>
                                          <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                                            <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                              <Check />
                                            </span>
                                            <p className='grow text-sm font-medium leading-tight'>
                                              Create IEB/NSC exams with solutions (max. of 10
                                              downloadable/month)
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
                                              Priority support and dedicated educator training
                                              sessions
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
                                          <Button
                                            onClick={onHandleClick}
                                            className='h-14 min-w-52 rounded-4xl xl:text-xl'
                                            size='lg'
                                          >
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
                        <TabsContent value='educators'>
                          <div className='overflow-hidden bg-stone-50 px-4 py-9'>
                            <div className='container'>
                              <div className='relative flex flex-wrap items-end'>
                                <div className='w-full rounded-lg bg-primary px-4 py-5 text-center text-white lg:w-3/12 lg:min-w-72 lg:text-left xl:min-w-[333px] xl:rounded-2xl'>
                                  <div className='absolute hidden md:block lg:static lg:mb-12'>
                                    <img
                                      className='w-20'
                                      src={assetUrl('/assets/img/home/illustration.svg')}
                                      alt='Image Description'
                                    />
                                  </div>
                                  <h3 className='mb-6 text-2xl lg:mb-20 lg:text-xl xl:text-2xl'>
                                    Unlock Your
                                    <strong className='ml-1 font-bold lg:ml-0 lg:block'>
                                      Educators Potential
                                    </strong>
                                  </h3>
                                  <div className='mb-6 flex justify-center lg:mb-16'>
                                    <img
                                      className='w-24 md:w-28 lg:w-56'
                                      src={assetUrl('/assets/img/home/img-learning.svg')}
                                      alt='Image Description'
                                    />
                                  </div>
                                  <p className='mb-2 text-center text-sm font-medium leading-tight text-zinc-100 lg:mb-11 lg:text-base'>
                                    Enhance your Educators with unlimited access to advanced
                                    resources and personalized study guides.
                                  </p>
                                </div>
                                <div className='pt-6 lg:mt-0 lg:min-w-0 lg:flex-grow lg:basis-0 lg:pl-5'>
                                  <div className='-mx-2.5 flex flex-wrap'>
                                    <div className='relative mb-5 w-full px-2.5 sm:mb-0 sm:w-1/2'>
                                      <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                                        <h3 className='mb-3 text-2xl font-semibold uppercase leading-6 md:mb-5'>
                                          PLAN A
                                        </h3>
                                        <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                                          R39,99/MONTHLY
                                        </h4>
                                        <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                                          Affordable learning with access to essential education al
                                          resources and tools
                                        </p>
                                        <hr className='mb-3 border-black/10 md:mb-5' />
                                        <ul className='mb-5'>
                                          <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                                            <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                              <Check />
                                            </span>
                                            <p className='grow text-sm font-medium leading-tight'>
                                              Create IEB/NSC exams with solutions (max. of 6
                                              downloadable/month)
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
                                              Priority support and dedicated educator training
                                              sessions
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
                                        <div className='mb-2 flex justify-center md:mb-0 md:pt-6'>
                                          <Button
                                            onClick={onHandleClick}
                                            className='h-14 min-w-52 rounded-4xl xl:text-xl'
                                            size='lg'
                                          >
                                            Buy Plan A
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='relative w-full px-2.5 sm:w-1/2'>
                                      <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                                        <h3 className='mb-3 text-2xl font-semibold uppercase md:mb-5'>
                                          PLAN B
                                        </h3>
                                        <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                                          R349,99/YEARLY
                                        </h4>
                                        <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                                          Affordable learning with access to essential educational
                                          resources and tools
                                        </p>
                                        <hr className='mb-3 border-black/10 md:mb-5' />
                                        <ul className='mb-5'>
                                          <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                                            <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                              <Check />
                                            </span>
                                            <p className='grow text-sm font-medium leading-tight'>
                                              Create IEB/NSC exams with solutions (max. of 10
                                              downloadable/month)
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
                                              Priority support and dedicated educator training
                                              sessions
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
                                          <Button
                                            onClick={onHandleClick}
                                            className='h-14 min-w-52 rounded-4xl xl:text-xl'
                                            size='lg'
                                          >
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
                      </Tabs>
                    </div>
                  </section>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='data-[state=open]:shadow-lg'>
              <AccordionTrigger className='px-3 py-5 text-left text-base font-semibold text-zinc-800 hover:text-zinc-600 hover:no-underline sm:text-2xl md:px-5 md:py-5 md:text-3xl lg:px-10 lg:py-12 lg:text-4xl'>
                What are the pricing plans?
              </AccordionTrigger>
              <AccordionContent>
                <div className='lg:text-3.5xl px-3 pb-1 leading-tight text-zinc-800 md:px-5 md:pb-2 md:text-xl lg:pb-8 lg:px-10'>
                  <section className='relative bg-white py-10 text-zinc-800'>
                    <div className='container'>
                      <div className='mb-4 overflow-hidden px-4 pt-2 text-center md:mb-6 xl:mb-8'>
                        <h2 className='mb-4 text-3xl font-semibold uppercase leading-tight text-zinc-800 md:mb-7 md:text-4xl lg:mb-12 lg:text-5xl xl:mb-8 xl:text-6xl'>
                          <span className='relative px-0 before:absolute before:bottom-2 before:left-0 before:right-0 before:top-6 before:bg-yellow lg:before:bottom-3 lg:before:top-8 xl:py-2 xl:before:bottom-5 xl:before:top-12'>
                            <span className='relative'>PRICING</span>
                          </span>{' '}
                          FOR{' '}
                          <span className='block sm:inline'>
                            {userRole === 'teacher' ? 'EDUCATORS' : 'LEARNERS'}
                          </span>
                        </h2>
                        <div className='mb-4 text-xl font-medium md:mb-6 md:text-2xl xl:mb-8'>
                          Choose the Perfect Plan for Your Learning Journey
                        </div>
                        <p className='mb-4 text-sm sm:text-xl leading-tight md:px-16 lg:px-40'>
                          Choose from flexible pricing options tailored for every learner. Access
                          educational resources and tools that match your goals and advance your
                          education with confidence.
                        </p>
                      </div>
                    </div>
                    <div className='relative'>
                      <Tabs
                        value={userRole === 'learner' ? 'learners' : 'educators'}
                        className='w-full'
                      >
                        <div className='px-4 text-center'>
                          <TabsList className='mb-5 h-12 rounded-4xl border-0 bg-zinc-100 p-0 md:mb-7 md:h-14 lg:mb-10 xl:mb-14'>
                            <TabsTrigger
                              onClick={() => setUserRole('learner')}
                              value='learners'
                              className='sm:text-md h-12 rounded-4xl px-5 py-2 text-base font-semibold text-zinc-800 shadow-none data-[state=active]:bg-primary data-[state=active]:text-white md:h-14 md:min-w-52 md:text-xl'
                            >
                              Learners
                            </TabsTrigger>
                            <TabsTrigger
                              onClick={() => setUserRole('teacher')}
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
                                  <div className='absolute hidden md:block lg:static lg:mb-12'>
                                    <img
                                      className='w-20'
                                      src={assetUrl('/assets/img/home/illustration.svg')}
                                      alt='Image Description'
                                    />
                                  </div>
                                  <h3 className='mb-6 text-2xl lg:mb-20 lg:text-xl xl:text-2xl'>
                                    Unlock Your
                                    <strong className='ml-1 font-bold lg:ml-0 lg:block'>
                                      Full Learning Potential
                                    </strong>
                                  </h3>
                                  <div className='mb-6 flex justify-center lg:mb-16'>
                                    <img
                                      className='w-24 md:w-28 lg:w-56'
                                      src={assetUrl('/assets/img/home/img-learning.svg')}
                                      alt='Image Description'
                                    />
                                  </div>
                                  <p className='mb-2 text-center text-sm font-medium leading-tight text-zinc-100 lg:mb-11 lg:text-base'>
                                    Enhance your learning with unlimited access to advanced
                                    resources and personalized study guides.
                                  </p>
                                </div>
                                <div className='pt-6 lg:mt-0 lg:min-w-0 lg:flex-grow lg:basis-0 lg:pl-5'>
                                  <div className='-mx-2.5 flex flex-wrap'>
                                    <div className='relative mb-5 w-full px-2.5 sm:mb-0 sm:w-1/2'>
                                      <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                                        <h3 className='mb-3 text-2xl font-semibold uppercase leading-6 md:mb-5'>
                                          PLAN A
                                        </h3>
                                        <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                                          R39,99/MONTHLY
                                        </h4>
                                        <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                                          Affordable learning with access to essential education al
                                          resources and tools
                                        </p>
                                        <hr className='mb-3 border-black/10 md:mb-5' />
                                        <ul className='mb-5'>
                                          <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                                            <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                              <Check />
                                            </span>
                                            <p className='grow text-sm font-medium leading-tight'>
                                              Create IEB/NSC exams with solutions (max. of 6
                                              downloadable/month)
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
                                              Priority support and dedicated educator training
                                              sessions
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
                                        <div className='mb-2 flex justify-center md:mb-0 md:pt-6'>
                                          <Button
                                            onClick={onHandleClick}
                                            className='h-14 min-w-52 rounded-4xl xl:text-xl'
                                            size='lg'
                                          >
                                            Buy Plan A
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='relative w-full px-2.5 sm:w-1/2'>
                                      <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                                        <h3 className='mb-3 text-2xl font-semibold uppercase md:mb-5'>
                                          PLAN B
                                        </h3>
                                        <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                                          R349,99/YEARLY
                                        </h4>
                                        <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                                          Affordable learning with access to essential educational
                                          resources and tools
                                        </p>
                                        <hr className='mb-3 border-black/10 md:mb-5' />
                                        <ul className='mb-5'>
                                          <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                                            <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                              <Check />
                                            </span>
                                            <p className='grow text-sm font-medium leading-tight'>
                                              Create IEB/NSC exams with solutions (max. of 10
                                              downloadable/month)
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
                                              Priority support and dedicated educator training
                                              sessions
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
                                          <Button
                                            onClick={onHandleClick}
                                            className='h-14 min-w-52 rounded-4xl xl:text-xl'
                                            size='lg'
                                          >
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
                        <TabsContent value='educators'>
                          <div className='overflow-hidden bg-stone-50 px-4 py-9'>
                            <div className='container'>
                              <div className='relative flex flex-wrap items-end'>
                                <div className='w-full rounded-lg bg-primary px-4 py-5 text-center text-white lg:w-3/12 lg:min-w-72 lg:text-left xl:min-w-[333px] xl:rounded-2xl'>
                                  <div className='absolute hidden md:block lg:static lg:mb-12'>
                                    <img
                                      className='w-20'
                                      src={assetUrl('/assets/img/home/illustration.svg')}
                                      alt='Image Description'
                                    />
                                  </div>
                                  <h3 className='mb-6 text-2xl lg:mb-20 lg:text-xl xl:text-2xl'>
                                    Unlock Your
                                    <strong className='ml-1 font-bold lg:ml-0 lg:block'>
                                      Educators Potential
                                    </strong>
                                  </h3>
                                  <div className='mb-6 flex justify-center lg:mb-16'>
                                    <img
                                      className='w-24 md:w-28 lg:w-56'
                                      src={assetUrl('/assets/img/home/img-learning.svg')}
                                      alt='Image Description'
                                    />
                                  </div>
                                  <p className='mb-2 text-center text-sm font-medium leading-tight text-zinc-100 lg:mb-11 lg:text-base'>
                                    Enhance your Educators with unlimited access to advanced
                                    resources and personalized study guides.
                                  </p>
                                </div>
                                <div className='pt-6 lg:mt-0 lg:min-w-0 lg:flex-grow lg:basis-0 lg:pl-5'>
                                  <div className='-mx-2.5 flex flex-wrap'>
                                    <div className='relative mb-5 w-full px-2.5 sm:mb-0 sm:w-1/2'>
                                      <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                                        <h3 className='mb-3 text-2xl font-semibold uppercase leading-6 md:mb-5'>
                                          PLAN A
                                        </h3>
                                        <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                                          R39,99/MONTHLY
                                        </h4>
                                        <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                                          Affordable learning with access to essential education al
                                          resources and tools
                                        </p>
                                        <hr className='mb-3 border-black/10 md:mb-5' />
                                        <ul className='mb-5'>
                                          <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                                            <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                              <Check />
                                            </span>
                                            <p className='grow text-sm font-medium leading-tight'>
                                              Create IEB/NSC exams with solutions (max. of 6
                                              downloadable/month)
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
                                              Priority support and dedicated educator training
                                              sessions
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
                                        <div className='mb-2 flex justify-center md:mb-0 md:pt-6'>
                                          <Button
                                            onClick={onHandleClick}
                                            className='h-14 min-w-52 rounded-4xl xl:text-xl'
                                            size='lg'
                                          >
                                            Buy Plan A
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='relative w-full px-2.5 sm:w-1/2'>
                                      <div className='relative rounded-lg bg-gray p-3 shadow-dark md:p-5 xl:rounded-2xl xl:p-7'>
                                        <h3 className='mb-3 text-2xl font-semibold uppercase md:mb-5'>
                                          PLAN B
                                        </h3>
                                        <h4 className='mb-3 text-base font-semibold uppercase text-primary md:mb-5'>
                                          R349,99/YEARLY
                                        </h4>
                                        <p className='mb-4 text-sm font-medium leading-tight md:mb-7'>
                                          Affordable learning with access to essential educational
                                          resources and tools
                                        </p>
                                        <hr className='mb-3 border-black/10 md:mb-5' />
                                        <ul className='mb-5'>
                                          <li className='flex items-center gap-3 py-2 md:gap-5 md:py-4'>
                                            <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-500'>
                                              <Check />
                                            </span>
                                            <p className='grow text-sm font-medium leading-tight'>
                                              Create IEB/NSC exams with solutions (max. of 10
                                              downloadable/month)
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
                                              Priority support and dedicated educator training
                                              sessions
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
                                          <Button
                                            onClick={onHandleClick}
                                            className='h-14 min-w-52 rounded-4xl xl:text-xl'
                                            size='lg'
                                          >
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
                      </Tabs>
                    </div>
                  </section>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='data-[state=open]:shadow-lg'>
              <AccordionTrigger className='px-3 py-5 text-left text-base font-semibold text-zinc-800 hover:text-zinc-600 hover:no-underline sm:text-2xl md:px-5 md:py-5 md:text-3xl lg:px-10 lg:py-12 lg:text-4xl'>
                What are the privacy policy of JSDT?
              </AccordionTrigger>
              <AccordionContent>
                <div className='lg:text-3.5xl px-3 pb-1 leading-tight text-zinc-800 md:px-5 md:pb-2 md:text-xl lg:pb-8 lg:pl-10 lg:pr-10'>
                  <div className='mb-8'>
                    <span className='block text-blue-500 mb-3 font-bold'>
                      Privacy Policy for JSDT SOLUTIONS
                    </span>
                    <p className='mb-10'>
                      At JSDT SOLUTIONS, accessible from www.jsdtsolutions.com, one of our main
                      priorities is the privacy of our visitors to the website and users of our
                      educational applications. This Privacy Policy document contains types of
                      information that is collected and recorded by JSDT SOLUTIONS and how we use
                      it.
                    </p>
                    <p>
                      If you have additional questions or require more information about our Privacy
                      Policy, do not hesitate to{' '}
                      <a
                        href='https://www.jsdtsolutions.com/contact'
                        className='duration-400 underline underline-offset-2 transition-all hover:no-underline'
                      >
                        contact us
                      </a>
                      . This Privacy Policy applies only to our online activities and is valid for
                      visitors to our website with regards to the information that they shared
                      and/or collect in JSDT SOLUTIONS. This policy is not applicable to any
                      information collected offline or via channels other than this website.
                    </p>
                  </div>
                  <div className='mb-8'>
                    <span className='block text-blue-500 mb-3 font-bold'>Consent</span>
                    <p>
                      By using our website, you hereby consent to our Privacy Policy and agree to
                      its terms.
                    </p>
                  </div>
                  <div className='mb-8'>
                    <span className='block text-blue-500 mb-3 font-bold'>
                      Information we collect
                    </span>
                    <p className='mb-10'>
                      The personal information that you are asked to provide, and the reasons why
                      you are asked to provide it, will be made clear to you at the point we ask you
                      to provide your personal information.
                    </p>
                    <p>
                      If you contact us directly, we may receive additional information about you
                      such as your name, email address, phone number, the contents of the message
                      and/or attachments you may send us, and any other information you may choose
                      to provide.
                    </p>
                    <p>
                      When you register for an Account, we may ask for your contact information,
                      including items such as name, company name, address, email address, and
                      telephone number.
                    </p>
                  </div>
                  <div className='mb-8'>
                    <span className='mb-3 block text-blue-500 font-bold'>
                      How we use your information
                    </span>
                    <p className='mb-2'>
                      We use the information we collect in various ways, including to:
                    </p>
                    <ul className='m-0 list-none p-0 pl-5'>
                      <li className='relative mb-1.5'>
                        <span className='absolute -left-2.5 top-1.5 h-1 w-1 rounded-full bg-black sm:-left-3.5 md:top-3 lg:h-1.5 lg:w-1.5'></span>
                        <p>Provide, operate, and maintain our website and applications</p>
                      </li>
                      <li className='relative mb-1.5'>
                        <span className='absolute -left-2.5 top-1.5 h-1 w-1 rounded-full bg-black sm:-left-3.5 md:top-3 lg:h-1.5 lg:w-1.5'></span>
                        Improve, personalize, and expand our website and applications
                      </li>
                      <li className='relative mb-1.5'>
                        <span className='absolute -left-2.5 top-1.5 h-1 w-1 rounded-full bg-black sm:-left-3.5 md:top-3 lg:h-1.5 lg:w-1.5'></span>
                        Understand and analyze how you use our website and applications
                      </li>
                      <li className='relative mb-1.5'>
                        <span className='absolute -left-2.5 top-1.5 h-1 w-1 rounded-full bg-black sm:-left-3.5 md:top-3 lg:h-1.5 lg:w-1.5'></span>
                        Develop new products, services, features, and functionality
                      </li>
                      <li className='relative mb-1.5'>
                        <span className='absolute -left-2.5 top-1.5 h-1 w-1 rounded-full bg-black sm:-left-3.5 md:top-3 lg:h-1.5 lg:w-1.5'></span>
                        Communicate with you, either directly or through one of our partners,
                        including for customer service, to provide you with updates and other
                        information relating to the website, applications and for marketing and
                        promotional purposes
                      </li>
                      <li className='relative mb-1.5'>
                        <span className='absolute -left-2.5 top-1.5 h-1 w-1 rounded-full bg-black sm:-left-3.5 md:top-3 lg:h-1.5 lg:w-1.5'></span>
                        Send you emails
                      </li>
                      <li className='relative'>
                        <span className='absolute -left-2.5 top-1.5 h-1 w-1 rounded-full bg-black sm:-left-3.5 md:top-3 lg:h-1.5 lg:w-1.5'></span>
                        Find and prevent fraud
                      </li>
                    </ul>
                  </div>
                  <div className='mb-8'>
                    <span className='mb-3 block font-bold text-blue-500'>Log Files</span>
                    <p className='mb-10'>
                      JSDT SOLUTIONS follows a standard procedure of using log files. These files
                      log visitors when they visit websites. All hosting companies do this and a
                      part of hosting services&#39; analytics. The information collected by log
                      files include internet protocol (IP) addresses, browser type, Internet Service
                      Provider (ISP), date and time stamp, referring/exit pages, and possibly the
                      number of clicks. These are not linked to any information that is personally
                      identifiable. The purpose of the information is for analyzing trends,
                      administering the site, tracking users&#39; movement on the website, and
                      gathering demographic information. Our Privacy Policy was created with the
                      help of the{' '}
                      <a
                        href='https://www.privacypolicygenerator.info/'
                        className='duration-400 underline underline-offset-2 transition-all hover:no-underline'
                      >
                        Privacy Policy Generator
                      </a>{' '}
                      and the{' '}
                      <a
                        href='https://www.privacypolicyonline.com/privacy-policy-generator/'
                        className='duration-400 underline underline-offset-2 transition-all hover:no-underline'
                      >
                        Online Privacy Policy Generator
                      </a>
                      .
                    </p>
                  </div>
                  <div className='mb-8'>
                    <span className='block text-blue-500 mb-3 font-bold'>
                      Advertising Partners Privacy Policies
                    </span>
                    <p>
                      You may consult this list to find the Privacy Policy for each of the
                      advertising partners of JSDT SOLUTIONS.
                    </p>
                    <p>
                      {' '}
                      Third-party ad servers or ad networks uses technologies like cookies,
                      JavaScript, or Web Beacons that are used in their respective advertisements
                      and links that appear on JSDT SOLUTIONS, which are sent directly to users&#39;
                      browser. They automatically receive your IP address when this occurs. These
                      technologies are used to measure the effectiveness of their advertising
                      campaigns and/or to personalize the advertising content that you see on
                      websites that you visit.
                    </p>
                    <p>
                      {' '}
                      Note that JSDT SOLUTIONS has no access to or control over these cookies that
                      are used by third-party advertisers.
                    </p>
                  </div>
                  <div className='mb-8'>
                    <span className='block text-blue-500 mb-3 font-bold'>
                      Third Party Privacy Policies
                    </span>
                    <p className='mb-10'>
                      JSDT SOLUTIONS&#39;s Privacy Policy does not apply to other advertisers or
                      websites. Thus, we are advising you to consult the respective Privacy Policies
                      of these third-party ad servers for more detailed information. It may include
                      their practices and instructions about how to opt-out of certain options.
                    </p>
                    <p>
                      You can choose to disable cookies through your individual browser options. To
                      know more detailed information about cookie management with specific web
                      browsers, it can be found at the browsers&#39; respective websites.
                    </p>
                  </div>
                  <div className='mb-8'>
                    <span className='block text-blue-500 mb-3 font-bold'>
                      CCPA Privacy Rights (Do Not Sell My Personal Information)
                    </span>
                    <p className='m-0'>
                      Under the CCPA, among other rights, California consumers have the right to:
                    </p>
                    <ul>
                      <li>
                        Request that a business that collects a consumer&#39;s personal data
                        disclose the categories and specific pieces of personal data that a business
                        has collected about consumers.
                      </li>
                      <li>
                        Request that a business delete any personal data about the consumer that a
                        business has collected.
                      </li>
                      <li>
                        Request that a business that sells a consumer&#39;s personal data, not sell
                        the consumer&#39;s personal data.
                      </li>
                      <li>
                        If you make a request, we have one month to respond to you. If you would
                        like to exercise any of these rights, please contact us.
                      </li>
                    </ul>
                  </div>
                  <div className='mb-8'>
                    <span className='block text-blue-500 mb-3 font-bold'>
                      GDPR Data Protection Rights
                    </span>
                    <p className='m-0'>
                      We would like to make sure you are fully aware of all of your data protection
                      rights. Every user is entitled to the following:
                    </p>
                    <ul>
                      <li className='mb-0.5'>
                        The right to access – You have the right to request copies of your personal
                        data. We may charge you a small fee for this service.
                      </li>
                      <li className='mb-0.5'>
                        The right to rectification – You have the right to request that we correct
                        any information you believe is inaccurate. You also have the right to
                        request that we complete the information you believe is incomplete.
                      </li>
                      <li className='mb-0.5'>
                        The right to erasure – You have the right to request that we erase your
                        personal data, under certain conditions.
                      </li>
                      <li className='mb-0.5'>
                        The right to restrict processing – You have the right to request that we
                        restrict the processing of your personal data, under certain conditions.
                      </li>
                      <li className='mb-0.5'>
                        The right to object to processing – You have the right to object to our
                        processing of your personal data, under certain conditions.
                      </li>
                      <li className='mb-0.5'>
                        The right to data portability – You have the right to request that we
                        transfer the data that we have collected to another organization, or
                        directly to you, under certain conditions.
                      </li>
                      <li>
                        If you make a request, we have one month to respond to you. If you would
                        like to exercise any of these rights, please contact us.
                      </li>
                    </ul>
                  </div>
                  <div className='mb-8'>
                    <span className='block text-blue-500 mb-3 font-bold'>
                      Children&#39;s Information
                    </span>
                    <p className='mb-2'>
                      Another part of our priority is adding protection for children while using the
                      internet. We encourage parents and guardians to observe, participate in,
                      and/or monitor and guide their online activity.
                    </p>
                    <p>
                      JSDT SOLUTIONS does not knowingly collect any Personal Identifiable
                      Information from children under the age of 13. If you think that your child
                      provided this kind of information on our website, we strongly encourage you to
                      contact us immediately and we will do our best efforts to promptly remove such
                      information from our records.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
