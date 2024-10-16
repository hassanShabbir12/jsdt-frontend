import { FC } from 'react';

import { EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const ResetPassword: FC = () => (
  <div className='mx-auto max-w-[468px] py-20'>
    <div className='mx-auto mb-14 max-w-80 text-center text-base text-zinc-800'>
      <h1 className='text-2xl font-semibold text-zinc-800'>Reset Password</h1>
      <p className='m-0'>Enter New Password</p>
    </div>
    <div className='mb-4 w-full px-2 md:mb-3 lg:mb-5 lg:px-3'>
      <Label htmlFor='iem' className='mb-2 block font-normal leading-none text-black lg:text-base'>
        New Password
      </Label>
      <div className='relative'>
        <Input
          id='iem'
          className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-base text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-5'
          placeholder='Enter Your Password'
        />
        <div className='absolute right-4 top-2 cursor-pointer lg:top-3'>
          <EyeOff />
        </div>
      </div>
    </div>
    <div className='mb-4 w-full px-2 md:mb-3 lg:mb-5 lg:px-3'>
      <Label htmlFor='iem' className='mb-2 block font-normal leading-none text-black lg:text-base'>
        Confirm Password
      </Label>
      <div className='relative'>
        <Input
          id='iem'
          className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-base text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-5'
          placeholder='Enter Your Password'
        />
        <div className='absolute right-4 top-2 cursor-pointer lg:top-3'>
          <EyeOff />
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
      <Button className='mx-auto h-12 w-80'>Reset Password</Button>
    </div>
  </div>
);
