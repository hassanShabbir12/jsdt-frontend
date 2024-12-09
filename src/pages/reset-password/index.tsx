import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useResetPasswordToken } from '@/hooks/client/useResetPasswordToken';
import { ResetPasswordFormValues, ResetPasswordSchema } from '@/interface/password';
import { useNavigate } from 'react-router-dom';

export const ResetPassword: FC = () => {
  const {
    resetPassword,
    loading,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useResetPasswordToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = (data) => {
    resetPassword(data.password);
  };

  const navigate = useNavigate();

  return (
    <div className='mx-auto max-w-[468px] py-20'>
      <div className='mx-auto mb-14 max-w-80 text-center text-base text-zinc-800'>
        <h1 className='text-2xl font-semibold text-zinc-800'>Reset Password</h1>
        <p className='m-0'>Enter New Password</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4 w-full px-2 md:mb-3 lg:mb-5 lg:px-3'>
          <Label
            htmlFor='password'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            New Password
          </Label>
          <div className='relative'>
            <Input
              id='password'
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className='h-10 rounded-lg border-neutral-200 py-2 pl-4 pr-12 text-base text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:pl-5'
              placeholder='Enter Your Password'
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-4 top-2 cursor-pointer text-zinc-500 lg:top-3'
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </div>
          </div>
          {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
        </div>
        <div className='w-full px-2 lg:px-3'>
          <Label
            htmlFor='confirmPassword'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Confirm Password
          </Label>
          <div className='relative'>
            <Input
              id='confirmPassword'
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
              className='h-10 rounded-lg border-neutral-200 py-2 pl-4 pr-12 text-base text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:pl-5'
              placeholder='Confirm Your Password'
            />
            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-4 top-2 cursor-pointer text-zinc-500 lg:top-3'
            >
              {showConfirmPassword ? <Eye /> : <EyeOff />}
            </div>
          </div>
          {errors.confirmPassword && (
            <p className='text-sm text-red-500'>{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className='flex justify-end pb-4 px-3'>
          <p onClick={() => navigate("/login")} className='text-xs mb-5 font-semibold text-blue-500 cursor-pointer underline hover:text-blue-700 md:text-sm'>Return to login</p>
        </div>
        <div className='flex justify-center'>
          <Button loading={loading} type='submit' className='mx-auto h-12 w-52 md:w-80'>
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
};
