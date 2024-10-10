import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
import { assetUrl } from '@/lib/asset-url';

export const Logo: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className='px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
      <div className='rounded-md bg-white pb-7 shadow-lg'>
        <div className='border-b border-neutral-200 px-6 py-3'>
          <h1 className='text-lg font-semibold text-zinc-800'>Upload Logo</h1>
        </div>
        <div className='p-4 sm:px-6 sm:pb-3 sm:pt-8'>
          <Label
            htmlFor='name'
            className='mb-1.5 block text-sm font-normal leading-none text-zinc-800'
          >
            Choose logo from your local directory
          </Label>
          <div className='flex h-32 w-full items-center justify-center border border-dashed border-neutral-200'>
            <img
              src={assetUrl('assets/img/home/upload-logo.png')}
              alt='round-arrow'
              className='ml-2 block h-auto'
            />
          </div>
          <div className='mb-5 flex w-full justify-center py-3 text-sm font-semibold'>
            Drop your image her or
            <Link
              to=''
              className='ml-1 border-b border-blue-500 text-blue-500 transition-all hover:border-white'
            >
              browse
            </Link>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div className='mx-auto flex max-w-80 justify-center px-4'>
              <Button className='h-12 w-80 text-base font-semibold'>Upload</Button>
            </div>
          </DialogTrigger>
          <DialogContent className='max-w-[620px]'>
            <DialogHeader>
              <DialogTitle className='text-center'>Add New Topic</DialogTitle>
            </DialogHeader>
            <div className='grid py-4'>
              <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                New Topic
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
                <Button className='h-12 w-full text-base font-semibold'>Cancel</Button>
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
};
