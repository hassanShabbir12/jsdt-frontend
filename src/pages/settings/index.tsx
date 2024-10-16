import { FC } from 'react';

import { EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Settings: FC = () => (
  <div className='px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
    <div className='w-full md:max-w-[468px]'>
      <div className='mb-6 text-xs'>
        <h1 className='mb-0 text-lg font-semibold'>Reset Password</h1>
        <p className='m-0'>To change your password please confirm here</p>
      </div>
      <div className='mb-5 w-full'>
        <Label
          htmlFor='name'
          className='mb-1.5 block text-base font-normal leading-none text-zinc-800'
        >
          Current Password
        </Label>
        <div className='relative'>
          <Input
            id='name'
            className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3 lg:py-2'
            placeholder='Enter Your Password'
          />
          <div className='absolute right-4 top-2 cursor-pointer lg:top-3'>
            <EyeOff />
          </div>
        </div>
      </div>
      <div className='mb-5 w-full'>
        <Label
          htmlFor='name'
          className='mb-1.5 block text-base font-normal leading-none text-zinc-800'
        >
          New Password
        </Label>
        <div className='relative'>
          <Input
            id='name'
            className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3 lg:py-2'
            placeholder='Enter Your Password'
          />
          <div className='absolute right-4 top-2 cursor-pointer lg:top-3'>
            <EyeOff />
          </div>
        </div>
      </div>
      <div className='mb-5 w-full'>
        <Label
          htmlFor='name'
          className='mb-1.5 block text-base font-normal leading-none text-zinc-800'
        >
          Re-type New Password
        </Label>
        <div className='relative'>
          <Input
            id='name'
            className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3 lg:py-2'
            placeholder='Enter Your Password'
          />
          <div className='absolute right-4 top-2 cursor-pointer lg:top-3'>
            <EyeOff />
          </div>
        </div>
      </div>
      <Button className='h-12 w-80 text-base'>Save</Button>
    </div>
  </div>
);
