import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Label } from '@radix-ui/react-label';
import { SelectLabel } from '@radix-ui/react-select';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
    isLoading,
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
            <Label
              htmlFor='name'
              className='mb-1 block font-normal leading-none text-black lg:text-base'
            >
              Date
            </Label>
          </div>
          <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
            <Label
              htmlFor='time'
              className='mb-1 block font-normal leading-none text-black lg:text-base'
            >
              Time
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
          <Button
            className='h-12 w-52 text-base font-semibold md:w-80'
            type='submit'
            disabled={isLoading}
            loading={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Preview'}
          </Button>
        </div>
      </div>
    </form>
  );
};
