import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const ForgotPassword: FC = () => (
  <div className='mx-auto max-w-[468px] py-20'>
    <div className='mx-auto mb-14 max-w-80 text-center text-base text-zinc-800'>
      <h1 className='text-2xl font-semibold text-zinc-800'>Forgot Password</h1>
      <p className='m-0'>Enter your email address to get reset password link</p>
    </div>
    <div className='mb-4 w-full px-2 md:mb-5 lg:mb-7 lg:px-3'>
      <Label htmlFor='iem' className='mb-2 block font-normal leading-none text-black lg:text-base'>
        Email Address
      </Label>
      <Input
        id='iem'
        className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-zinc-800 lg:h-12 lg:px-5'
        placeholder='Mansoor.Luqman@gmail.com'
      />
    </div>
    <div className='flex justify-center'>
      <Button className='mx-auto h-12 w-80'>Send Link</Button>
    </div>
  </div>
);
