import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Label } from '@radix-ui/react-label';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const LearnerLogin: FC = () => (
  <section className='relative flex min-h-full flex-col overflow-hidden bg-white p-4 font-montserrat sm:w-1/2 lg:p-6 xl:p-10'>
    <div className='w-full py-4 sm:py-8 md:py-14'>
      <div className='mb-8 overflow-hidden pt-1 md:mb-10'>
        <h1 className='mb-2 text-2xl font-semibold text-zinc-800'>Login for Leaners</h1>
        <p className='mb-1 text-black'>Let’s get started</p>
      </div>
      <div className='-mx-2 flex flex-wrap lg:-mx-3'>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:px-3'>
          <Label
            htmlFor='name'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Username
          </Label>
          <Input
            id='name'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-zinc-800 lg:h-12 lg:px-5'
            placeholder='Username'
          />
        </div>
        <div className='relative mb-2 w-full px-2 md:mb-5 lg:mb-3 lg:px-3'>
          <Label
            htmlFor='password'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Password
          </Label>
          <Input
            id='password'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-zinc-800 lg:h-12 lg:px-5'
            placeholder='..........'
          />
          <div className='absolute right-7 top-9 cursor-pointer lg:top-11'>
            <EyeOff className='h-5 w-5' />
          </div>
          <div className='absolute right-7 top-9 hidden cursor-pointer lg:top-11'>
            <Eye className='h-5 w-5' />
          </div>
        </div>
        <div className='mb-6 flex w-full justify-between px-3 lg:mb-7'>
          <div className='flex gap-2'>
            <input type='checkbox' id='check' />
            <Label
              htmlFor='check'
              className='font-montserrat text-xs font-medium text-zinc-800 md:text-base'
            >
              Keep me logged in
            </Label>
          </div>
          <Link
            to='/'
            className='text-xs font-semibold text-blue-500 underline hover:text-blue-700 md:text-sm'
          >
            Forgot Password?
          </Link>
        </div>
        <div className='flex w-full justify-center px-3'>
          <Button className='h-12 min-w-48 font-montserrat text-base font-semibold lg:min-w-80'>
            Log In
          </Button>
        </div>
      </div>
    </div>
  </section>
);
