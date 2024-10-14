import { FC } from 'react';

import { Edit, Trash2 } from 'lucide-react';

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Grades: FC = () => (
  <div className='px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
    <div className='rounded-md bg-white pb-7 shadow-lg'>
      <div className='border-b border-neutral-200 px-6 py-3'>
        <h1 className='text-lg font-semibold text-zinc-800'>Grades</h1>
      </div>
      <div className='p-4 sm:px-6 sm:pb-3 sm:pt-8'>
        <Label htmlFor='name' className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
          Grade
        </Label>
        <div className='flex flex-wrap items-center'>
          <Input
            id='name'
            className='h-10 w-auto min-w-0 grow basis-0 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-zinc-800 lg:h-12 lg:px-3 lg:py-2'
            placeholder='Grade 1'
          />
          <DropdownMenu>
            <DropdownMenuTrigger className='ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800'>
              <GradeDots />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='absolute -right-4 top-4 rounded-md drop-shadow-xl'>
              <ul className='m-0 px-2 py-3'>
                <li className='group mb-2 flex cursor-pointer items-center p-1.5'>
                  <div className='text-zinc-800 group-hover:text-blue-500'>
                    <Edit />
                  </div>
                  <h3 className='ml-1.5 text-base text-zinc-800 group-hover:text-blue-500'>Edit</h3>
                </li>
                <li className='group flex cursor-pointer items-center p-1.5'>
                  <div className='text-zinc-800 group-hover:text-blue-500'>
                    <Trash2 />
                  </div>
                  <h3 className='ml-1.5 text-base text-zinc-800 group-hover:text-blue-500'>
                    Delete
                  </h3>
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='mx-auto flex max-w-80 justify-center'>
            <Button className='h-12 w-80 text-base font-semibold'>Add New Grade</Button>
          </div>
        </DialogTrigger>
        <DialogContent className='max-w-[620px]'>
          <DialogHeader>
            <DialogTitle className='text-center'>Add New Grade</DialogTitle>
          </DialogHeader>
          <div className='grid py-4'>
            <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
              Grade
            </Label>
            <div className='flex items-center'>
              <Input
                id='name'
                className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-zinc-800 lg:h-12 lg:px-3 lg:py-2'
                placeholder='Grade 1'
              />
            </div>
          </div>
          <DialogFooter>
            <div className='w-1/2'>
              <Button variant='outline' className='h-12 w-full text-base font-semibold'>
                Cancel
              </Button>
            </div>
            <div className='w-1/2'>
              <Button className='h-12 w-full text-base font-semibold'>Save</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
);
