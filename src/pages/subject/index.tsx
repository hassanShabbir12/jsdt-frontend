import { FC, useState } from 'react';

import GradeDots from '@/components/icon/grade-dots';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Subjects: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
      <div className='rounded-md bg-white pb-7 shadow-lg'>
        <div className='border-b border-neutral-200 px-6 py-3'>
          <h1 className='text-lg font-semibold text-zinc-800'>Subjects</h1>
        </div>
        <div className='p-4 sm:px-6 sm:pb-3 sm:pt-8'>
          <Label
            htmlFor='name'
            className='mb-1.5 block text-sm font-normal leading-none text-zinc-800'
          >
            Subject Name
          </Label>
          <div className='flex items-center'>
            <Input
              id='name'
              className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-zinc-800 lg:h-12 lg:px-3 lg:py-2'
              placeholder='Chemistry'
            />
            <div className='relative'>
              <div
                className='ml-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-zinc-800'
                onClick={toggleDropdown}
              >
                <GradeDots />
              </div>
            </div>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div className='flex justify-center px-4'>
              <Button className='h-12 w-80 text-base font-semibold'>Add New Subject</Button>
            </div>
          </DialogTrigger>
          <DialogContent className='max-w-[620px]'>
            <DialogHeader>
              <DialogTitle className='text-center'>Add New Subject</DialogTitle>
            </DialogHeader>
            <div className='grid py-4'>
              <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                New Subject
              </Label>
              <div className='flex items-center'>
                <Input
                  id='name'
                  className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3 lg:py-2'
                  placeholder='Type here'
                />
              </div>
            </div>
            <DialogFooter>
              <div className='w-1/2'>
                <Button className='h-12 w-full text-base font-semibold' type='submit'>
                  Cancel
                </Button>
              </div>
              <div className='w-1/2'>
                <Button className='h-12 w-full text-base font-semibold' type='submit'>
                  Save
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
