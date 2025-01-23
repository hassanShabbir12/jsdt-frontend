import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { Label } from '@radix-ui/react-label';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Loader, LogOut, MoveRight, Trash2, TriangleAlert } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollBar } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '@/context/AuthContext';
import { useGradeList } from '@/hooks/admin/grade/useGradeList';
import { useSubjectList } from '@/hooks/admin/subject/useSubjectList';
import { useTopicList } from '@/hooks/admin/topic/useTopicList';
import { useDownloadQuestions } from '@/hooks/client/useDownloadPDF';
import useEditor from '@/hooks/client/useGrid';
import { useInvestigation } from '@/hooks/client/useInvestigation';
import { toast } from '@/hooks/use-toast';
import { assetUrl } from '@/lib/asset-url';
import { calculatePercentage, calculateTotalMarks } from '@/utils/helper';

import { Cover } from './components/cover';
import { InstructionsList } from './components/instructions';

export const LearnerTeacher: FC = () => {
  const { grades } = useGradeList();
  const { subjects } = useSubjectList();
  const { topics } = useTopicList();
  const navigate = useNavigate();
  const { editorValue } = useEditor('');
  const {
    form,
    isLoading,
    isLearner,
    questions,
    handleAddQuestion,
    handleDeleteQuestion,
    handleCheckData,
    onSubmit,
    isOpen,
    setIsOpen,
    pdfLoading,
    currentQuestionId,
    setCurrentQuestionId,
  } = useInvestigation(editorValue);
  const { downloadQuestions, containerRef, loading } = useDownloadQuestions();
  const { logout, user } = useAuth();

  if (isLearner === null) {
    return;
  }

  return (
    <section ref={containerRef} className='pb-10 pt-5'>
      <div className='mx-auto max-w-[1340px] px-3'>
        {user?.isSubscribed === 'inactive' && (
          <div className='mb-5 flex items-center rounded-xl bg-red-100 px-2.5 py-1 text-sm md:text-base'>
            <span className='mr-2 inline-block text-red-700'>
              <TriangleAlert />
            </span>
            <p
              className='text-red-700'
              onClick={() =>
                toast({
                  title: 'Error',
                  description:
                    'This account is currently deactivated due to failed payment. Please contact support to activate your account.',
                })
              }
            >
              This account is currently deactivated due to failed payment.{' '}
              <Link
                className='group inline-flex items-center gap-x-1 font-bold text-red-700 underline transition-all duration-300 hover:text-red-500'
                to='#'
              >
                Update Subscription Plan
                <span className='duration-400 inline-block h-6 w-6 transition-all group-hover:translate-x-2'>
                  <MoveRight />
                </span>
              </Link>
            </p>
          </div>
        )}
        <div className='mb-8 flex items-center justify-between sm:mb-10 md:mb-12'>
          <h2 className='text-base font-semibold leading-7 text-zinc-800 sm:text-2xl md:text-xl'>
            Investigation/Exam ({isLearner ? 'Learner' : 'Educator'}&rsquo;s account)
          </h2>
          <div className='relative inline-block'>
            <Popover>
              <PopoverTrigger className='inline-flex relative w-7 h-7 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full bg-sky-900 text-base sm:text-2xl font-semibold text-white outline-none'>
                <p className='-mt-[1.5px] sm:-mt-1'>{user?.email.charAt(0).toUpperCase()}</p>
              </PopoverTrigger>
              <PopoverContent>
                <div
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                  className='duration-400 group flex p-2 items-center absolute -left-20 sm:-left-16 bg-white shadow-xl rounded-md justify-center gap-3 transition-all hover:cursor-pointer'
                >
                  <span>
                    <LogOut className='duration-400 h-5 w-5 transition-all group-hover:text-primary' />
                  </span>
                  <span className='duration-400 text-lg transition-all group-hover:text-primary'>
                    Logout
                  </span>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className='-mx-4 mb-8 flex flex-wrap'>
            <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
              <Label htmlFor='nsc' className='mb-0.5 block'>
                IEB/NSC
              </Label>
              <div className='w-full'>
                <Controller
                  name='nsc'
                  control={form.control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue className='text-stone-300' placeholder='Select' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Type</SelectLabel>
                          <SelectItem value='IEB'>IEB</SelectItem>
                          <SelectItem value='NSC'>NSC</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.nsc && (
                  <span className='text-sm text-red-500'>{form.formState.errors.nsc.message}</span>
                )}
              </div>
            </div>
            <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
              <Label htmlFor='grade' className='mb-0.5 block'>
                Choose Grade
              </Label>
              <div className='w-full'>
                <Controller
                  name='grade'
                  control={form.control}
                  rules={{ required: 'Grade is required' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Grades</SelectLabel>
                          {grades.map((grade) => (
                            <SelectItem key={grade.id} value={grade.title}>
                              {grade.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.grade && (
                  <span className='text-sm text-red-500'>
                    {form.formState.errors.grade.message}
                  </span>
                )}
              </div>
            </div>
            <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
              <Label htmlFor='subject' className='mb-0.5 block'>
                Choose Subject
              </Label>
              <div className='w-full'>
                <Controller
                  name='subject'
                  control={form.control}
                  rules={{ required: 'Subject is required' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Subjects</SelectLabel>
                          {subjects.map((subject) => (
                            <SelectItem key={subject.id} value={subject.title}>
                              {subject.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.subject && (
                  <span className='text-sm text-red-500'>
                    {form.formState.errors.subject.message}
                  </span>
                )}
              </div>
            </div>
            <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
              <Label htmlFor='assessmentType' className='mb-0.5 block'>
                Choose Assessment Type
              </Label>
              <div className='w-full'>
                <Controller
                  name='assessmentType'
                  control={form.control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Types</SelectLabel>
                          <SelectItem value='Formative'>Formative</SelectItem>
                          <SelectItem value='Summative'>Summative</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.assessmentType && (
                  <span className='text-sm text-red-500'>
                    {form.formState.errors.assessmentType.message}
                  </span>
                )}
              </div>
            </div>
            <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
              <Label htmlFor='topic' className='mb-0.5 block'>
                Choose Topic
              </Label>
              <div className='w-full'>
                <Controller
                  name='topic'
                  control={form.control}
                  rules={{ required: 'Topic is required' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Topics</SelectLabel>
                          {topics.map((topic) => (
                            <SelectItem key={topic.id} value={topic.title}>
                              {topic.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.topic && (
                  <span className='text-sm text-red-500'>
                    {form.formState.errors.topic.message}
                  </span>
                )}
              </div>
            </div>
            {isLearner && (
              <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                <Label htmlFor='difficultyLevel' className='mb-0.5 block'>
                  Difficulty Level
                </Label>
                <div className='w-full'>
                  <Controller
                    name='difficultyLevel'
                    control={form.control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className='w-full'>
                          <SelectValue placeholder='Select Difficulty' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Difficulty</SelectLabel>
                            <SelectItem value='Easy'>Easy</SelectItem>
                            <SelectItem value='Intermediate'>Intermediate</SelectItem>
                            <SelectItem value='Difficult'>Difficult</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {form.formState.errors.difficultyLevel && (
                    <span className='text-sm text-red-500'>
                      {form.formState.errors.difficultyLevel.message}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className='mb-8 inline-flex w-full justify-end md:w-full'>
            <Button
              type='submit'
              disabled={isLoading || user?.isSubscribed === 'inactive'}
              loading={isLoading}
              className='w-full md:w-28'
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </Button>
          </div>
        </form>
        <div className='relative mb-10 min-h-[300px] overflow-hidden rounded-xl border border-solid border-neutral-200 p-3'>
          <div className='block items-center justify-between lg:flex'>
            <div className='mb-5 block flex-wrap sm:-mx-2 sm:flex sm:justify-start xl:mb-0'>
              <div className='mb-2 px-2 lg:mb-0'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      disabled={user?.isSubscribed === 'inactive'}
                      variant='destructive'
                      className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                    >
                      Test
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                    <DialogHeader>
                      <div className='flex pt-8'>
                        <div className='mb-6 text-left'>
                          <DialogTitle>Following are the questions</DialogTitle>
                        </div>
                        <div className='ml-2 h-4 w-4 cursor-pointer sm:ml-3 sm:pt-1 md:h-6 md:w-6'>
                          {loading ? (
                            <Loader className='mt-1 h-4 w-4 animate-spin text-black' />
                          ) : (
                            <img
                              onClick={() => downloadQuestions(questions, 'question')}
                              src={assetUrl('assets/img/home/attach-download.svg')}
                              alt='Generate-2'
                              className='block h-auto sm:-mb-11'
                            />
                          )}
                        </div>
                      </div>
                    </DialogHeader>
                    <div className='w-full text-sm sm:text-lg'>
                      {questions.map((item, index) => (
                        <div className='font-regular mb-5 md:mb-10 p-3 border-neutral-200 md:p-7 rounded-xl border'>
                          <div className={`relative ${item.image ? 'sm:pl-24' : ''}`}>
                            <div>
                              <div className='overflow-hidden w-full'>
                                <div className='gap-x-2 sm:flex overflow-hidden w-full'>
                                  {item.image && (
                                    <div className='mb-3 w-20 sm:absolute sm:left-0 sm:top-0 sm:pt-2'>
                                      <img src={item.image} alt='Question Image' />
                                    </div>
                                  )}
                                  <div className='relative min-w-0 grow basis-0'>
                                    <div className='overflow-auto'>
                                      <h2 className='mb-2 text-lg font-semibold md:mb-1 md:text-2xl leading-3'>
                                        Question {index + 1}
                                      </h2>
                                      <p className='m-0'>{item.question}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className='mb-2 px-2 lg:mb-0'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      disabled={user?.isSubscribed === 'inactive'}
                      variant='destructive'
                      className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                    >
                      Solutions
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                    <DialogHeader>
                      <div className='mb-8 flex pt-8 sm:items-center'>
                        <DialogTitle>Answer of the following questions</DialogTitle>
                        <div className='ml-2 h-4 w-4 cursor-pointer sm:ml-3 md:h-6 md:w-6'>
                          {loading ? (
                            <Loader className='mt-1 h-4 w-4 animate-spin text-black' />
                          ) : (
                            <img
                              onClick={() => downloadQuestions(questions, 'answer')}
                              src={assetUrl('assets/img/home/attach-download.svg')}
                              alt='Generate-2'
                              className='block h-auto md:-mb-11'
                            />
                          )}
                        </div>
                      </div>
                    </DialogHeader>
                    <div className='relative'>
                      {questions.map((item, index) => (
                        <div className='mb-7 w-full rounded-xl border border-solid border-neutral-200 p-3 text-sm sm:text-lg md:p-7'>
                          <div className='mb-4 md:mb-7'>
                            <div className={`relative ${item.image ? 'sm:pl-24' : ''}`}>
                              {item.image && (
                                <div className='mb-3 w-20 sm:mb-0 sm:absolute sm:left-0 sm:top-0 sm:pt-2.5'>
                                  <img src={item.image} alt='Question Image' />
                                </div>
                              )}
                              <div className='relative sm:min-w-0 sm:grow sm:basis-0'>
                                <div className='overflow-auto w-full'>
                                  <h2 className='mb-1.5 text-lg font-semibold md:mb-2 md:text-2xl'>
                                    Question {index + 1}
                                  </h2>
                                  <p className='m-0'>{item.question}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='mb-4 md:mb-7'>
                            <h2 className='mb-1.5 text-lg font-semibold md:mb-3 md:text-2xl'>
                              Answer :
                            </h2>
                            <div className='w-full overflow-auto'>
                              <p className='m-0'>{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {!isLearner && (
                <div className='mb-2 px-2 lg:mb-0'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        disabled={user?.isSubscribed === 'inactive'}
                        variant='destructive'
                        className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                      >
                        Tax. Grid
                      </Button>
                    </DialogTrigger>
                    <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                      <div className='md:px-2'>
                        <div className='mx-auto max-w-[1340px] md:py-8 lg:pb-24 lg:pt-16'>
                          <h1 className='mb-8 text-center text-2xl font-semibold text-zinc-800 sm:mb-12'>
                            Taxonomy Grid
                          </h1>
                          <div className='overflow-auto'>
                            <table className='mx-auto mb-3 w-[625px] border-collapse border border-black lg:w-[825px]'>
                              <thead>
                                <tr>
                                  <th className='w-1/5 border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-3 sm:py-5 sm:text-base'></th>
                                  <th className='w-1/5 border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-3 sm:py-5 sm:text-base'>
                                    Easy
                                  </th>
                                  <th className='w-1/5 border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-3 sm:py-5 sm:text-base'>
                                    Intermediate
                                  </th>
                                  <th className='w-1/5 border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-3 sm:py-5 sm:text-base'>
                                    Difficult
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {questions.map((item, index) => (
                                  <tr key={item.id}>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      {index + 1}
                                    </td>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      {item.difficultyLevel === 'Easy'
                                        ? `Marks (${item.totalMarks})`
                                        : ''}
                                    </td>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      {item.difficultyLevel === 'Intermediate'
                                        ? `Marks (${item.totalMarks})`
                                        : ''}
                                    </td>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      {item.difficultyLevel === 'Difficult'
                                        ? `Marks (${item.totalMarks})`
                                        : ''}
                                    </td>
                                  </tr>
                                ))}
                                <tr>
                                  <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                    Total Marks
                                  </td>
                                  <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                    {calculateTotalMarks(questions, 'Easy')}
                                  </td>
                                  <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                    {calculateTotalMarks(questions, 'Intermediate')}
                                  </td>
                                  <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                    {calculateTotalMarks(questions, 'Difficult')}
                                  </td>
                                </tr>
                                <tr>
                                  <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                    Percentage
                                  </td>
                                  <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                    {calculatePercentage(questions, 'Easy')}%
                                  </td>
                                  <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                    {calculatePercentage(questions, 'Intermediate')}%
                                  </td>
                                  <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                    {calculatePercentage(questions, 'Difficult')}%
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
              <div className='mb-2 px-2 lg:mb-0'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      disabled={user?.isSubscribed === 'inactive'}
                      variant='destructive'
                      className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                    >
                      Instructions
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                    <InstructionsList />
                  </DialogContent>
                </Dialog>
              </div>
              {!isLearner && (
                <div className='mb-2 px-2 lg:mb-0'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        disabled={user?.isSubscribed === 'inactive'}
                        variant='destructive'
                        className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                      >
                        Cover Page
                      </Button>
                    </DialogTrigger>
                    <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                      <Cover topics={topics} grades={grades} subjects={subjects} />
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
            <div className='mb-12 flex gap-x-2 sm:m-0 sm:gap-x-4'>
              <div className='h-6 w-6 cursor-pointer' onClick={handleCheckData}>
                {pdfLoading ? (
                  <Loader className='mt-1 h-4 w-4 animate-spin text-black' />
                ) : (
                  <img
                    src={assetUrl('assets/img/home/attach-download.svg')}
                    alt='Generate-2'
                    className='-mb-11 block h-auto'
                  />
                )}
              </div>
            </div>
          </div>
          {questions.length !== 0 ? (
            <Carousel mouseTracking={false} className='relative w-full'>
              <CarouselPrevious className='z-50 h-12 w-12 bg-blue-500 text-white !opacity-100 hover:bg-blue-400 hover:text-white disabled:bg-zinc-100 disabled:text-stone-300 lg:h-16 lg:w-16'></CarouselPrevious>
              <div className='relative'>
                <span className='absolute left-0 top-0 z-10 hidden min-h-screen w-14 bg-white sm:block lg:w-20'></span>
              </div>
              <CarouselContent>
                {questions.map((item, index) => (
                  <CarouselItem className='carousel-item' key={index}>
                    <div className='mb-10 text-sm text-black sm:pl-16 sm:pr-20 md:text-base lg:pl-24 lg:pr-36 lg:text-2xl'>
                      <div className='block-scroll block h-28 gap-x-5 overflow-y-auto sm:flex md:h-32 lg:h-40'>
                        <div className='w-full pt-5'>
                          <div className='relative gap-x-4 sm:flex'>
                            {item.image && (
                              <div className='mb-3 w-20 sm:mb-0'>
                                <img
                                  className='block h-auto w-full'
                                  src={item.image}
                                  alt='Question Image'
                                />
                              </div>
                            )}
                            <div className='min-w-0 flex-grow basis-0'>
                              <ScrollArea>
                                <h3 className='mb-3 text-2xl font-semibold leading-4'>
                                  Question {index + 1}
                                </h3>
                                <p className='line-clamp-3 w-full'>{item.question}</p>
                                <ScrollBar orientation='horizontal' />
                              </ScrollArea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className='relative'>
                <span className='absolute -top-52 right-0 z-10 hidden min-h-screen w-20 bg-white sm:block'></span>
              </div>
              <CarouselNext className='!absolute z-50 h-12 w-12 bg-blue-500 text-white !opacity-100 hover:bg-blue-400 hover:text-white disabled:bg-zinc-100 disabled:text-stone-300 lg:h-16 lg:w-16'></CarouselNext>
            </Carousel>
          ) : null}
        </div>
        <div className='pt-10'>
          <Button onClick={handleAddQuestion} className='mx-auto flex w-80 px-20 py-6 text-base'>
            Add
          </Button>
        </div>
        <div className='pt-12'>
          {questions.map((item, index) => (
            <div
              key={item.id}
              className='mb-6 relative rounded-xl border border-solid border-neutral-200 p-4 text-sm md:text-base lg:text-2xl'
            >
              <div className='block gap-x-5 sm:flex'>
                <div className='min-w-0 flex-grow basis-0'>
                  <div className='flex w-full justify-end absolute top-4 right-4'>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                      <DialogTrigger asChild>
                        <i
                          onClick={() => {
                            setCurrentQuestionId(item.id);
                            setIsOpen(true);
                          }}
                          className='inline-block cursor-pointer transition-all duration-300 hover:text-primary'
                        >
                          <Trash2 />
                        </i>
                      </DialogTrigger>
                      <DialogContent className='max-w-[620px]'>
                        <DialogHeader>
                          <DialogTitle className='mb-6 pt-6 text-center text-lg sm:pt-0 md:text-xl lg:text-2xl'>
                            Do you want to delete that question?
                          </DialogTitle>
                        </DialogHeader>
                        <DialogFooter>
                          <div className='w-1/2'>
                            <Button
                              variant='outline'
                              onClick={() => setIsOpen(false)}
                              className='h-12 w-full text-base font-semibold'
                            >
                              Cancel
                            </Button>
                          </div>
                          <div
                            onClick={() => {
                              if (currentQuestionId) {
                                handleDeleteQuestion(currentQuestionId);
                              }
                              setIsOpen(false);
                            }}
                            className='w-1/2'
                          >
                            <Button className='h-12 w-full text-base font-semibold'>Yes</Button>
                          </div>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className='overflow-hidden w-full'>
                    <div className='gap-x-3 sm:flex'>
                      {item.image && (
                        <div className='mb-5 w-20 sm:mb-0'>
                          <img
                            className='block h-auto w-full'
                            src={item.image}
                            alt='Question Image'
                          />
                        </div>
                      )}
                      <div className='flex-grow basis-0 min-w-0'>
                        <span className='block text-2xl font-semibold leading-4 mb-3'>
                          Question {index + 1}
                        </span>
                        <p className='block w-full text-black overflow-auto'>{item.question}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
