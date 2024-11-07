import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Label } from '@radix-ui/react-label';
import { EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export const AdminLogin: FC = () => (
  <section className='mx-auto max-w-[468px] px-4 py-24'>
    <div className='mb-12 text-center text-base'>
      <h2 className='mb-3 text-center text-2xl font-semibold text-zinc-800'>JSDT Examiner</h2>
      <p className='m-0'>Welcome Back</p>
    </div>
    <div className='mb-7 w-full'>
      <Label htmlFor='name' className='mb-1 block font-normal leading-none text-black lg:text-base'>
        Username
      </Label>
      <Input
        id='iem'
        type='text'
        placeholder='Username'
        className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-sm placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
      />
    </div>
    <div className='mb-2 w-full'>
      <Label htmlFor='name' className='mb-1 block font-normal leading-none text-black lg:text-base'>
        Password
      </Label>
      <div className='relative'>
        <Input
          id='iem'
          type='number'
          placeholder='Enter Your Password'
          className='flex h-12 rounded-lg border border-solid border-neutral-200 py-2 pl-4 pr-12 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        />
        <div className='absolute right-4 top-3 cursor-pointer text-stone-300'>
          <EyeOff />
        </div>
      </div>
    </div>
    <div className='mb-6 flex items-center justify-between'>
      <div className='flex items-center gap-x-1.5 md:gap-x-2.5'>
        <Checkbox />
        <h3>Keep me logged in</h3>
      </div>
      <Link
        to='/forgot-password'
        className='text-sm font-semibold text-blue-500 underline hover:text-blue-700'
      >
        Forgot Password?
      </Link>
    </div>
    <Button className='mx-auto flex h-12 w-80'>Log In</Button>
  </section>
);
