import { FC, useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useChangePassword } from '@/hooks/useChangePassword';

export const Settings: FC = () => {
  const {
    loading,
    form: {
      register,
      formState: { errors },
    },
    onSubmit,
  } = useChangePassword();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
      <div className='w-full md:max-w-[468px]'>
        <div className='mb-6 text-sm'>
          <h1 className='mb-0 text-lg font-semibold'>Reset Password</h1>
          <p className='m-0'>To change your password please confirm here</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className='mb-5 w-full'>
            <Label
              htmlFor='oldPassword'
              className='mb-1.5 block text-base font-normal leading-none text-zinc-800'
            >
              Current Password
            </Label>
            <div className='relative'>
              <Input
                id='oldPassword'
                type={showOldPassword ? 'text' : 'password'}
                {...register('oldPassword')}
                className='h-10 rounded-lg border-neutral-200 px-4 pr-14 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:py-2 lg:pl-3'
                placeholder='Enter Your Password'
              />
              <div
                className='absolute right-4 top-2 cursor-pointer text-stone-300 lg:top-3'
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? <Eye /> : <EyeOff />}
              </div>
              {errors.oldPassword && (
                <span className='text-sm text-red-500'>{errors.oldPassword.message}</span>
              )}
            </div>
          </div>

          <div className='mb-5 w-full'>
            <Label
              htmlFor='newPassword'
              className='mb-1.5 block text-base font-normal leading-none text-zinc-800'
            >
              New Password
            </Label>
            <div className='relative'>
              <Input
                id='newPassword'
                type={showNewPassword ? 'text' : 'password'}
                {...register('newPassword')}
                className='h-10 rounded-lg border-neutral-200 px-4 pr-14 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:py-2 lg:pl-3'
                placeholder='Enter New Password'
              />
              <div
                className='absolute right-4 top-2 cursor-pointer text-stone-300 lg:top-3'
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <Eye /> : <EyeOff />}
              </div>
              {errors.newPassword && (
                <span className='text-sm text-red-500'>{errors.newPassword.message}</span>
              )}
            </div>
          </div>

          <div className='mb-5 w-full'>
            <Label
              htmlFor='confirmPassword'
              className='mb-1.5 block text-base font-normal leading-none text-zinc-800'
            >
              Confirm New Password
            </Label>
            <div className='relative'>
              <Input
                id='confirmPassword'
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                className='h-10 rounded-lg border-neutral-200 px-4 pr-14 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:py-2 lg:pl-3'
                placeholder='Confirm New Password'
              />
              <div
                className='absolute right-4 top-2 cursor-pointer text-stone-300 lg:top-3'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <Eye /> : <EyeOff />}
              </div>
              {errors.confirmPassword && (
                <span className='text-sm text-red-500'>{errors.confirmPassword.message}</span>
              )}
            </div>
          </div>

          <Button type='submit' className='h-12 w-52 text-base md:w-80' loading={loading}>
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};
