import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Label } from '@radix-ui/react-label';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLogin } from '@/hooks/client/useLogin';

export const LearnerLogin: FC = () => {
  const { form, isLoading, onSubmit, showPassword, togglePassword } = useLogin();

  return (
    <section className='relative flex min-h-full flex-col overflow-hidden bg-white p-4 font-montserrat sm:w-1/2 lg:p-6 xl:p-10'>
      <form onSubmit={onSubmit} noValidate>
        <div className='w-full py-4 sm:py-8 md:py-14'>
          <div className='mb-8 overflow-hidden pt-1 md:mb-10'>
            <h1 className='mb-2 text-2xl font-semibold text-zinc-800'>Login</h1>
            <p className='mb-1 text-black'>Let&apos;s get started</p>
          </div>
          <div className='-mx-2 flex flex-wrap lg:-mx-3'>
            <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:px-3'>
              <Label
                htmlFor='userName'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                Email
              </Label>
              <Input
                {...form.register('email')}
                id='email'
                className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-5'
                placeholder='Email'
              />
              {form.formState.errors.email && (
                <span className='text-sm text-red-500'>{form.formState.errors.email.message}</span>
              )}
            </div>
            <div className='relative mb-2 w-full px-2 md:mb-5 lg:mb-3 lg:px-3'>
              <Label
                htmlFor='password'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                Password
              </Label>
              <div className='relative'>
                <Input
                  {...form.register('password')}
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className='h-10 rounded-lg border-neutral-200 py-2 pl-4 pr-12 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:pl-5'
                  placeholder='Enter Your Password'
                />
                <button
                  type='button'
                  onClick={togglePassword}
                  className='absolute right-4 top-2 cursor-pointer text-zinc-500 lg:top-3'
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
              {form.formState.errors.password && (
                <span className='text-sm text-red-500'>
                  {form.formState.errors.password.message}
                </span>
              )}
            </div>
            <div className='mb-6 flex w-full justify-between px-3 lg:mb-7'>
              <Link
                to='/forgot-password'
                className='text-xs font-semibold text-blue-500 underline hover:text-blue-700 md:text-sm'
              >
                Forgot Password?
              </Link>
              <Link
                to='/pricing-plan'
                className='text-xs font-semibold text-blue-500 underline hover:text-blue-700 md:text-sm'
              >
                Sign up
              </Link>
            </div>
            <div className='flex w-full justify-center px-3'>
              <Button
                type='submit'
                className='h-12 min-w-48 font-montserrat text-base font-semibold lg:min-w-80'
                disabled={isLoading}
                loading={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
