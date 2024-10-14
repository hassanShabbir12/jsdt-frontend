import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
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
              className='h-autsso ml-2 block'
            />
          </div>
          <div className='mb-5 flex w-full justify-center py-3 text-sm font-semibold'>
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
          <Button className='h-12 w-80 text-base font-semibold'>Upload</Button>
        </div>
      </div>
    </div>
  );
};
