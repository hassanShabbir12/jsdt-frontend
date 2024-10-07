import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Label } from '@radix-ui/react-label';
import { EyeOff } from 'lucide-react';

import LoggedIn from '@/components/icon/logged-in';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login: FC = () => (
  <section className='mx-auto max-w-[468px] px-4 py-24'>
    <div className='mb-12 text-center text-base'>
      <h2 className='mb-3 text-center text-2xl font-semibold text-zinc-800'>JSDT Examiner</h2>
      <p className='m-0'>Welcome Back</p>
    </div>
    <div className='mb-7 w-full'>
      <Label htmlFor='name' className='mb-1 block font-normal leading-none text-black lg:text-base'>
        User Name
      </Label>
      <Input
        id='iem'
        type='text'
        placeholder='Mansoor.Luqman'
        className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-zinc-800 focus-visible:outline-none focus-visible:ring-0 lg:px-6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
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
          placeholder='..........'
          className='flex h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-zinc-800 focus-visible:outline-none focus-visible:ring-0 lg:px-6 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        />
        <div className='absolute right-7 top-3'>
          <EyeOff />
        </div>
      </div>
    </div>
    <div className='mb-6 flex items-center justify-between'>
      <div className='flex gap-x-1'>
        <div className='text-zinc-800'>
          <LoggedIn />
        </div>
        <h3>Keep me logged in</h3>
      </div>
      <Link
        to=''
        className='border-b border-blue-500 text-sm font-semibold text-blue-500 hover:border-none'
      >
        Forgot Password?
      </Link>
    </div>
    <Button className='mx-auto flex h-12 w-80'>Log In</Button>
  </section>
);

export default Login;
