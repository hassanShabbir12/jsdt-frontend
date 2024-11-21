import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Label } from '@radix-ui/react-label';
import { SelectLabel } from '@radix-ui/react-select';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCover } from '@/hooks/client/useCover';
import { assetUrl } from '@/lib/asset-url';

interface CoverProps {
  topics: { id: string; title: string }[];
  grades: { id: string; title: string }[];
  subjects: { id: string; title: string }[];
}

export const Cover: FC<CoverProps> = ({ topics, grades, subjects }) => {
  const {
    form,
    onSubmit,
    handleImageUpload,
    handleDrop,
    handleDragOver,
    handleButtonClick,
    fileInputRef,
    image,
    isCalenderOpen,
    setIsCalenderOpen,
    handleDateSelect,
    date,
    storedData,
    saveToLocalStorage,
  } = useCover();

  return (
    <form onSubmit={onSubmit}>
      <div className='pt-14 md:pl-0 md:pt-16'>
        <h1 className='mb-6 text-2xl font-semibold'>Add cover page details.</h1>
        <div className='mb-16 rounded-md bg-white pb-7 shadow-lg'>
          <div className='border-b border-neutral-200 px-6 py-3'>
            <strong className='text-lg font-semibold text-zinc-800'>Upload Logo</strong>
          </div>
          <div className='p-4 sm:px-6 sm:pb-3 sm:pt-8'>
            <Label
              htmlFor='name'
              className='mb-3 block text-sm font-normal leading-none text-zinc-800'
            >
              Choose logo from your local directory
            </Label>
            <div
              className='flex h-32 w-full items-center justify-center border border-dashed border-neutral-200'
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image.file)}
                  alt='Uploaded'
                  className='ml-2 block h-24'
                />
              ) : (
                <img
                  src={assetUrl('assets/img/home/upload-logo.png')}
                  alt='Upload Placeholder'
                  className='ml-2 block h-auto'
                />
              )}
            </div>
            <div className='flex w-full justify-center py-3 text-sm font-semibold md:mb-5'>
              Drop your image here or
              <label className='ml-1 cursor-pointer border-b text-blue-500 underline transition-all hover:text-blue-600'>
                browse
                <input
                  type='file'
                  accept='image/*'
                  className='hidden'
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
          <div className='mx-auto flex max-w-80 justify-center'>
            <Button
              type='button'
              className='h-12 w-52 text-base font-semibold md:w-80'
              onClick={handleButtonClick}
            >
              Upload
            </Button>
          </div>
        </div>
        <div className='-mx-4 flex flex-wrap'>
          <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
            <Label htmlFor='nsc' className='mb-0.5 block'>
              IEB/NSC
            </Label>
            <div className='w-full'>
              <Controller
                name='nsc'
                control={form.control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ? field.value : undefined}
                  >
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
            <Label
              htmlFor='grade'
              className='mb-1 block font-normal leading-none text-black lg:text-base'
            >
              Grade
            </Label>
            <div className='h-12 w-full'>
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
                <span className='text-sm text-red-500'>{form.formState.errors.grade.message}</span>
              )}
            </div>
          </div>

          <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
            <Label
              htmlFor='subject'
              className='mb-1 block font-normal leading-none text-black lg:text-base'
            >
              Subject
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
            <Label
              htmlFor='topic'
              className='mb-1 block font-normal leading-none text-black lg:text-base'
            >
              Topic
            </Label>
            <div className='h-12 w-full'>
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
                <span className='text-sm text-red-500'>{form.formState.errors.topic.message}</span>
              )}
            </div>
          </div>
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
          <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
            <label
              htmlFor='date'
              className='mb-1 block font-normal leading-none text-black lg:text-base'
            >
              Date
            </label>
            <div className='h-12 w-full'>
              <Controller
                name='date'
                control={form.control}
                rules={{ required: 'Date is required' }}
                render={({ field }) => (
                  <Popover open={isCalenderOpen} onOpenChange={setIsCalenderOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        className='group flex h-12 w-full items-center justify-between border border-solid border-neutral-200 px-4 py-2 font-normal text-stone-300 shadow-none hover:bg-transparent'
                      >
                        <span className='text-zinc-800 group-hover:text-zinc-800'>
                          {field.value ? new Date(field.value).toDateString() : 'Pick a date'}
                        </span>
                        <span className='text-stone-300 group-hover:text-stone-300'>
                          <CalendarIcon />
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode='single'
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={(selectedDate) => {
                          field.onChange(selectedDate ?? date);

                          handleDateSelect(selectedDate as Date);
                        }}
                        className='rounded-md border'
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {form.formState.errors.date && (
                <span className='text-sm text-red-500'>{form.formState.errors.date.message}</span>
              )}
            </div>
          </div>

          <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
            <Label
              htmlFor='page'
              className='mb-1 block font-normal leading-none text-black lg:text-base'
            >
              Pages
            </Label>

            <Controller
              name='time'
              control={form.control}
              render={({ field: { onChange, value } }) => (
                <Input
                  type='number'
                  value={value || ''}
                  onChange={(e) => onChange(Number(e.target.value))}
                  placeholder='e.g., 2 Hours'
                  className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                />
              )}
            />
            {form.formState.errors.time && (
              <span className='text-sm text-red-500'>{form.formState.errors.time.message}</span>
            )}
          </div>
        </div>
        <div className='mx-auto mb-8 flex max-w-80 justify-center'>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className='h-12 w-52 text-base font-semibold md:w-80'
                onClick={() => saveToLocalStorage()}
              >
                Preview
              </Button>
            </DialogTrigger>
            <DialogContent className='!container block max-h-[92vh] max-w-[80%] overflow-y-auto overflow-x-hidden lg:px-8'>
              <section className='mx-auto max-w-[850px] px-4 pb-5 pt-10'>
                <div className='gap-x-4 sm:flex'>
                  <div className='relative'>
                    <Label
                      htmlFor='file-upload'
                      className='mb-2.5 flex h-28 w-28  items-center justify-center rounded-full border border-solid border-zinc-800 text-center text-base text-zinc-800 hover:opacity-90'
                    >
                      {image ? (
                        <img
                          src={URL.createObjectURL(image.file)}
                          alt='Uploaded Image'
                          className='h-full w-full rounded-full object-cover'
                        />
                      ) : (
                        'Logo Here'
                      )}
                    </Label>
                  </div>
                  <div className='mb-1.5 w-full'>
                    <div className='border-b-2 border-solid border-neutral-200'>
                      <h1 className='text-basefont-semibold pb-3 pl-3 text-zinc-900'>
                        Basic Information
                      </h1>
                    </div>
                    <div className='mb-8 pl-3 text-base text-zinc-800'>
                      <p className='mb-1'>{storedData.nsc || 'National Senior Certificate'}</p>
                      <p className='mb-1'>{storedData.grade || 'Grade'}</p>
                      <p className='mb-1'>{storedData.subject || 'Subject'}</p>
                    </div>
                  </div>
                </div>
                <div className='sm:pl-32'>
                  <div className='mb-5 sm:mb-10'>
                    <p className='!focus-visible:ring-0 h-12 w-full bg-black text-base font-semibold !text-white placeholder:text-white focus:border-none focus:bg-black'>
                      {storedData.nsc || ''}
                    </p>
                  </div>
                  <div className='mb-5 sm:mb-10'>
                    <p className='h-12 w-full bg-blue-500 text-base font-semibold !text-white placeholder:text-white focus:bg-blue-500'>
                      Grade: {storedData.grade || ''}
                    </p>
                  </div>
                  <div className='mb-5 rounded-xl border border-dashed border-blue-400 bg-yellow-200 pb-4 pt-3 sm:mb-8'>
                    <div className='items-center p-2 sm:flex'>
                      <Label
                        htmlFor='subject'
                        className='text-sm font-semibold text-zinc-800 sm:text-base'
                      >
                        Subject name & paper no. :
                      </Label>
                      <div className='h-4 w-full rounded-none border-0 border-b border-black bg-transparent p-0 text-xs shadow-none outline-none focus:!outline-none focus:!ring-0 sm:w-48'>
                        <p>{storedData.subject || ''}</p>
                      </div>
                    </div>
                    <div className='items-center p-2 sm:flex'>
                      <Label
                        htmlFor='subject'
                        className='text-sm font-semibold text-zinc-800 sm:text-base'
                      >
                        Date:
                      </Label>
                      <div>
                        <div className='h-4 w-full rounded-none border-0 border-b border-black bg-transparent p-0 text-xs shadow-none outline-none focus:!outline-none focus:!ring-0 sm:w-32'>
                          <p>{new Date(storedData.date as Date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-5 rounded-xl bg-blue-500 p-2 py-3 text-center text-sm text-white sm:mb-14 sm:px-9 sm:text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a
                    magna at elementum. Cras. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Consequat nunc ac a magna at elementum. Cras.
                  </div>
                  <div className='mb-14 items-center justify-between sm:mb-28 sm:flex'>
                    <div className='mb-5 w-full sm:mb-0 sm:flex sm:w-52'>
                      <Label htmlFor='subject' className='text-base text-zinc-800'>
                        Marks:
                      </Label>
                      <div className='h-[18px] w-full rounded-none border-0 border-b border-black bg-transparent p-0 text-xs shadow-none outline-none focus:!outline-none focus:!ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'>
                        <p>{storedData.totalMarks}</p>
                      </div>
                    </div>
                    <div className='w-full sm:flex sm:w-52'>
                      <Label htmlFor='subject' className='text-base text-zinc-800'>
                        Total:
                      </Label>
                      <div className='h-[18px] w-full rounded-none border-0 border-b border-black bg-transparent p-0 text-xs shadow-none outline-none focus:!outline-none focus:!ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'>
                        <p>{storedData.totalMarks}</p>
                      </div>
                    </div>
                  </div>
                  <div className='mb-8 text-base text-zinc-800 sm:mb-14'>
                    This question paper contains of ____ {storedData.time}pages.
                  </div>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-base text-zinc-800'>Copyrights reserved</h3>
                    <div className='flex items-center'>
                      <h3 className='m-0 text-base text-zinc-800'>Please turnover</h3>
                      <img
                        src={assetUrl('assets/img/home/arrow-right-around.svg')}
                        alt='round-arrow'
                        className='ml-2 block h-auto'
                      />
                    </div>
                  </div>
                </div>
              </section>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </form>
  );
};
