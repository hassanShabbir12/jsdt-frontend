import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForgotPassword } from '@/hooks/client/useForgotPassword';

export const ForgotPassword: FC = () => {
  const { form, isLoading, onSubmit } = useForgotPassword();
  const {
    formState: { errors },
  } = form;

  return (
    <div className='mx-auto max-w-[468px] py-20'>
      <div className='mx-auto mb-14 max-w-80 text-center text-base text-zinc-800'>
        <h1 className='text-2xl font-semibold text-zinc-800'>Forgot Password</h1>
        <p className='m-0'>Enter your email address to get reset password link</p>
      </div>
      <form onSubmit={onSubmit} noValidate>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-7 lg:px-3'>
          <Label
            htmlFor='email'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Email Address
          </Label>
          <Input
            {...form.register('email')}
            id='email'
            type='email'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-base text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-5'
            placeholder='Username@gmail.com'
            disabled={isLoading}
          />
          {errors.email && (
            <span className='mt-1 text-sm text-red-500'>{errors.email.message}</span>
          )}
        </div>
        <div className='flex justify-center'>
          <Button type='submit' className='mx-auto h-12 w-52 md:w-80' disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Link'}
          </Button>
        </div>
      </form>
    </div>
  );
};
