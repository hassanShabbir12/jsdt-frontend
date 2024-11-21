import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Label } from '@radix-ui/react-label';
import { CalendarIcon, MoveRight, Trash2, TriangleAlert } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGradeList } from '@/hooks/admin/grade/useGradeList';
import { useSubjectList } from '@/hooks/admin/subject/useSubjectList';
import { useTopicList } from '@/hooks/admin/topic/useTopicList';
import { useInvestigation } from '@/hooks/client/useInvestigation';
import { assetUrl } from '@/lib/asset-url';
import { cn } from '@/lib/utils';

export const LearnerTeacher: FC = () => {
  const { grades } = useGradeList();
  const { subjects } = useSubjectList();
  const { topics } = useTopicList();
  const {
    form,
    isLoading,
    onSubmit,
    isLearner,
    questions,
    handleAddQuestion,
    handleDeleteQuestion,
    isOpen,
    setIsOpen,
  } = useInvestigation();

  const formatDate = (date: Date | undefined): string => {
    if (!date) {
      return '';
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const [date, setDate] = useState<Date | undefined>();
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);

  const handleDateSelect = (selectedDate: Date | undefined): void => {
    if (selectedDate) {
      setDate(selectedDate);
      setIsCalenderOpen(false);

      if (selectedDate?.getTime() === date?.getTime()) {
        setIsCalenderOpen(false);
      } else {
        setDate(selectedDate);
      }
    } else {
      setIsCalenderOpen(false);
    }
  };

  return (
    <section className='pb-10 pt-5'>
      <div className='mx-auto max-w-[1340px] px-3'>
        <div className='mb-5 flex items-center rounded-xl bg-red-100 px-2.5 py-1 text-sm md:text-base'>
          <span className='mr-2 inline-block text-red-700'>
            <TriangleAlert />
          </span>
          <p className='text-red-700'>
            This account is currently deactivated due to failed payment.{' '}
            <Link
              className='group inline-flex items-center gap-x-1 font-bold text-red-700 underline transition-all duration-300 hover:text-red-500'
              to='/payment'
            >
              Update payment method
              <span className='duration-400 inline-block h-6 w-6 transition-all group-hover:translate-x-2'>
                <MoveRight />
              </span>
            </Link>
          </p>
        </div>
        <h2 className='mb-8 text-base font-semibold leading-7 text-zinc-800 sm:mb-10 sm:text-2xl md:mb-12 md:text-xl'>
          Investigation/Exam ({isLearner ? 'Learner' : 'Educator'}&rsquo;s account)
        </h2>
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
            <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
              <Label htmlFor='totalMarks' className='mb-0.5 block'>
                Total Marks
              </Label>
              <Controller
                name='totalMarks'
                control={form.control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    type='number'
                    value={value || ''}
                    onChange={(e) => onChange(Number(e.target.value))}
                    placeholder='Enter total marks (e.g., 500, 1000)'
                    className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 placeholder:text-stone-300'
                  />
                )}
              />
              {form.formState.errors.totalMarks && (
                <span className='text-sm text-red-500'>
                  {form.formState.errors.totalMarks.message}
                </span>
              )}
            </div>
          </div>
          <div className='mb-8 inline-flex w-full justify-end md:w-full'>
            <Button
              type='submit'
              disabled={isLoading}
              loading={isLoading}
              className='w-full md:w-28'
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </Button>
          </div>
        </form>
        <div className='relative mb-10 min-h-72 rounded-xl border border-solid border-neutral-200 p-3'>
          <div className='block items-center justify-between lg:flex'>
            <div className='mb-5 block flex-wrap sm:-mx-2 sm:flex sm:justify-start md:mb-0'>
              <div className='mb-1 px-2 sm:mb-0'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
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
                        <div className='ml-2 h-6 w-6 cursor-pointer sm:ml-3'>
                          <img
                            src={assetUrl('assets/img/home/attach-download.svg')}
                            alt='Generate-2'
                            className='-mb-11 block h-auto'
                          />
                        </div>
                      </div>
                    </DialogHeader>
                    <div className='w-full text-sm sm:text-lg'>
                      {questions.map((item, index) => (
                        <div className='font-regular mb-5 md:mb-10'>
                          <h2 className='mb-2 text-lg font-semibold md:mb-3 md:text-2xl'>
                            Question No. {index + 1}
                          </h2>
                          <p className='m-0'>{item.question}</p>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className='mb-1 px-2 sm:mb-0'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
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
                        <div className='ml-2 h-6 w-6 cursor-pointer sm:ml-3'>
                          <img
                            src={assetUrl('assets/img/home/attach-download.svg')}
                            alt='Generate-2'
                            className='-mb-11 block h-auto'
                          />
                        </div>
                      </div>
                    </DialogHeader>
                    <div className='relative'>
                      {questions.map((item, index) => (
                        <div className='mb-7 w-full rounded-xl border border-solid border-neutral-200 p-3 text-sm sm:text-lg md:p-7'>
                          <div className='mb-4 md:mb-7'>
                            <h2 className='mb-1.5 text-lg font-semibold md:mb-3 md:text-2xl'>
                              Question No. {index + 1}
                            </h2>
                            <p className='m-0'>{item.question}</p>
                          </div>
                          <div className='mb-4 md:mb-7'>
                            <h2 className='mb-1.5 text-lg font-semibold md:mb-3 md:text-2xl'>
                              Answer :
                            </h2>
                            <p className='m-0'>{item.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {!isLearner && (
                <>
                  <div className='mb-1 px-2 sm:mb-0'>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
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
                                      3
                                    </td>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      3
                                    </td>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      6
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      Percentage
                                    </td>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      21%
                                    </td>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      21%
                                    </td>
                                    <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                      43%
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
                  <div className='mb-1 px-2 sm:mb-0'>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant='destructive'
                          className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                        >
                          Instructions
                        </Button>
                      </DialogTrigger>
                      <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                        <div className='mx-auto max-w-[1340px] px-5'>
                          <div className='pl-0 sm:pl-10'>
                            <h2 className='mb-2 text-xl font-semibold leading-7 text-zinc-800 sm:text-2xl'>
                              Instructions and information
                            </h2>
                            <div className='max-w-[956px] font-montserrat text-base text-black'>
                              <p className='mb-3'>
                                Read the following instructions carefully before answering the
                                questions.
                              </p>
                              <ol className='list-decimal pl-4'>
                                <li className='mb-2'>
                                  <p className='mb-2'>
                                    This question paper consists of THREE sections and covers TWO
                                    main topics.
                                  </p>
                                  <p className='m-0'>SECTION A: COMPULSORY</p>
                                  <p className='m-0'>SECTION B: Consists a1 THREE questions.</p>
                                  <p className='m-0'>
                                    Answer any TWO of the three questions in this section
                                  </p>
                                  <p className='m-0'>SECTION C: Consists of TWO questions.</p>
                                  <p className='m-0'>
                                    Answer any ONE of the two questions in this section.
                                  </p>
                                </li>
                                <li className='mb-2'>
                                  <p className='mb-1'>
                                    Read the instructions for each question carefully and take note
                                    of whet is required.
                                  </p>
                                  <p className='m-0'>
                                    Note that ONLY (he answers to Ihe first TWO questions selected
                                    in SECTION B and me answers to ttio FIRST question selected in
                                    SECTION C will be marked).
                                  </p>
                                </li>
                                <li className='mb-2'>
                                  <p className='mb-0'>
                                    Number the answers correctly according to the numbering system
                                    used in this question paper. NO marks will be awarded for
                                    answers that are numbered incorrectly.
                                  </p>
                                </li>
                                <li className='mb-2'>
                                  <p className='mb-0'>
                                    Except where other instructions are given, answers must be
                                    written in full sentences.
                                  </p>
                                </li>
                                <li className='mb-2'>
                                  <p className='mb-0'>
                                    Use the mark allocation and nature dl each question to determine
                                    the length and depth of an answer.
                                  </p>
                                </li>
                                <li className='mb-2'>
                                  <p className='mb-3'>
                                    Use the table below as a guide for mark and lime allocation when
                                    answering each question.
                                  </p>
                                </li>
                                <li className='mb-2'>
                                  <p className='mb-0'>
                                    Begin the answer to EACH question on a NEW page, e.g, QUESTION 1
                                    - new page. QUESTION 2 - new page.
                                  </p>
                                </li>
                                <li className='mb-2'>
                                  <p className='mb-0'>You may use a non-programmable calculator.</p>
                                </li>
                                <li className='mb-2'>
                                  <p className='mb-0'>Write neatly and legibly.</p>
                                </li>
                              </ol>
                            </div>
                            <div className='py-14'>
                              <Dialog>
                                <DialogTrigger className='mx-auto flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-20 py-6 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 '>
                                  Add more instructions
                                </DialogTrigger>
                                <DialogContent className='max-w-[680px] !rounded-3xl'>
                                  <DialogHeader>
                                    <DialogTitle className='mb-2 text-center text-xl font-semibold leading-7 text-zinc-800 sm:text-2xl'>
                                      Add New Instruction
                                    </DialogTitle>
                                    <DialogDescription>
                                      <form>
                                        <label className='mb-4 block font-montserrat text-base text-black'>
                                          New Instruction
                                        </label>
                                        <textarea
                                          placeholder='Type here'
                                          className='mb-4 block h-48 w-full resize-none rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6'
                                        ></textarea>
                                      </form>
                                      <div className='flex gap-4'>
                                        <Button className='flex w-1/2 border border-primary bg-white px-10 py-6 text-base font-semibold text-primary hover:text-white'>
                                          Cancel
                                        </Button>
                                        <Button className='flex w-1/2 border border-primary px-10 py-6 text-base font-semibold'>
                                          Save
                                        </Button>
                                      </div>
                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </>
              )}
              <div className='mb-1 px-2 sm:mb-0'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant='destructive'
                      className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                    >
                      Cover Page
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                    <div className='pt-14 md:pl-0 md:pt-16'>
                      <h1 className='mb-6 text-2xl font-semibold'>Add cover page details.</h1>
                      <div className='mb-16 rounded-md bg-white pb-7 shadow-lg'>
                        <div className='border-b border-neutral-200 px-6 py-3'>
                          <strong className='text-lg font-semibold text-zinc-800'>
                            Upload Logo
                          </strong>
                        </div>
                        <div className='p-4 sm:px-6 sm:pb-3 sm:pt-8'>
                          <Label
                            htmlFor='name'
                            className='mb-3 block text-sm font-normal leading-none text-zinc-800'
                          >
                            Choose logo from your local directory
                          </Label>
                          <div className='flex h-32 w-full items-center justify-center border border-dashed border-neutral-200'>
                            <img
                              src={assetUrl('assets/img/home/upload-logo.png')}
                              alt='round-arrow'
                              className='h-autsso ml-2 block'
                            />
                          </div>
                          <div className='flex w-full justify-center py-3 text-sm font-semibold md:mb-5'>
                            Drop your image her or
                            <Link
                              to=''
                              className='ml-1 border-b text-blue-500 underline transition-all hover:text-blue-600'
                            >
                              browse
                            </Link>
                          </div>
                        </div>
                        <div className='mx-auto flex max-w-80 justify-center'>
                          <Button className='h-12 w-52 text-base font-semibold md:w-80'>
                            Upload
                          </Button>
                        </div>
                      </div>
                      <div className='-mx-4 flex flex-wrap'>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            IEB/NSC
                          </Label>
                          <div className='w-full'>
                            <Select>
                              <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Select' />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value='apple'>Apple</SelectItem>
                                  <SelectItem value='banana'>Banana</SelectItem>
                                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                                  <SelectItem value='grapes'>Grapes</SelectItem>
                                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Grade
                          </Label>
                          <div className='h-12 w-full'>
                            <Select>
                              <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Select' />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value='apple'>Grade A</SelectItem>
                                  <SelectItem value='banana'>Grade B</SelectItem>
                                  <SelectItem value='blueberry'>Grade C</SelectItem>
                                  <SelectItem value='grapes'>Grade D</SelectItem>
                                  <SelectItem value='pineapple'>Grade E</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Department
                          </Label>
                          <div className='w-full'>
                            <Input
                              id='iem'
                              type='text'
                              placeholder='Type Here'
                              className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                            />
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Subject
                          </Label>
                          <div className='w-full'>
                            <Input
                              id='iem'
                              type='number'
                              placeholder='Type Here'
                              className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                            />
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Topic
                          </Label>
                          <div className='h-12 w-full'>
                            <Select>
                              <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Select' />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value='apple'>Topic 01</SelectItem>
                                  <SelectItem value='banana'>Topic 02</SelectItem>
                                  <SelectItem value='blueberry'>Topic 03</SelectItem>
                                  <SelectItem value='grapes'>Topic 04</SelectItem>
                                  <SelectItem value='pineapple'>Topic 05</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Total Marks
                          </Label>
                          <div className='w-full'>
                            <Input
                              id='iem'
                              type='number'
                              placeholder='Enter total marks (e.g., 500, 1000)'
                              className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                            />
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <label
                            htmlFor='date-of-birth'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Date
                          </label>
                          <Popover open={isCalenderOpen} onOpenChange={setIsCalenderOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant='outline'
                                className='group flex h-12 w-full items-center justify-between border border-solid border-neutral-200 px-4 py-2 text-stone-300 shadow-none hover:bg-transparent'
                              >
                                <span
                                  className={cn(
                                    'text-stone-300',
                                    !date ? 'pick-date' : 'text-zinc-800',
                                  )}
                                >
                                  {date ? formatDate(date) : 'DD-MM-YYYY'}
                                </span>
                                <span className='text-stone-300 group-hover:text-stone-300'>
                                  <CalendarIcon />
                                </span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                              <Calendar
                                mode='single'
                                selected={date}
                                onSelect={handleDateSelect}
                                className='rounded-md border'
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Time
                          </Label>
                          <Input
                            id='iem'
                            type='number'
                            placeholder='e.g., 2 Hours'
                            className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                          />
                        </div>
                      </div>
                      <div className='mx-auto mb-8 flex max-w-80 justify-center'>
                        <Button className='h-12 w-52 text-base font-semibold md:w-80'>
                          Upload
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className='mb-14 flex gap-x-2 sm:m-0 sm:gap-x-4'>
              <div className='h-6 w-6 cursor-pointer'>
                <img
                  src={assetUrl('assets/img/home/attachment.svg')}
                  alt='Generate-2'
                  className='-mb-11 block h-auto'
                />
              </div>
              <div className='h-6 w-6 cursor-pointer'>
                <img
                  src={assetUrl('assets/img/home/attach-download.svg')}
                  alt='Generate-2'
                  className='-mb-11 block h-auto'
                />
              </div>
            </div>
          </div>
          {questions.length !== 0 ? (
            <Carousel className='relative w-full'>
              <CarouselPrevious className='z-50 h-12 w-12 bg-blue-500 text-white hover:bg-blue-400 hover:text-white disabled:bg-zinc-100 disabled:text-stone-300 lg:h-16 lg:w-16'></CarouselPrevious>
              <CarouselContent>
                {questions.map((item, index) => (
                  <CarouselItem className='carousel-item' key={index}>
                    <div className='mb-10 text-sm text-black sm:pl-16 sm:pr-20 md:text-base lg:pl-24 lg:pr-36 lg:text-2xl'>
                      <h3 className='mb-5 text-2xl font-semibold leading-7'>
                        Question No. {index + 1}
                      </h3>
                      <p className='m-0'>{item.question}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className='!absolute z-50 h-12 w-12 bg-blue-500 text-white hover:bg-blue-400 hover:text-white disabled:bg-zinc-100 disabled:text-stone-300 lg:h-16 lg:w-16'></CarouselNext>
            </Carousel>
          ) : null}
        </div>
        <Button onClick={handleAddQuestion} className='mx-auto flex w-80 px-20 py-6 text-base'>
          Add
        </Button>
        <div className='pt-12'>
          {questions.map((item, index) => (
            <div
              key={item.id}
              className='mb-6 rounded-xl border border-solid border-neutral-200 p-4 text-sm md:text-base lg:text-2xl'
            >
              <div className='mb-5 flex justify-between'>
                <span className='inline-block text-2xl font-semibold'>
                  Question No. {index + 1}
                </span>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <i
                      onClick={() => setIsOpen(true)}
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
                          handleDeleteQuestion(item.id);
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
              <p className='mb-10 mt-6 block text-black'>{item.question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
