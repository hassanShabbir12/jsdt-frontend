import { FC } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '@/context/AuthContext';
import { useSignup } from '@/hooks/client/useSignup';
import { Gender, NSCType } from '@/interface/auth';
import { cn } from '@/lib/utils';

export const LearnerSignUp: FC = () => {
  const { form, isLoading, onSubmit, isTeacher, showPassword, setShowPassword } = useSignup();
  const { userRole } = useAuth();

  if (userRole === null) {
    return;
  }

  return (
    <section className='relative flex min-h-full flex-col overflow-hidden bg-white p-4 sm:w-1/2 lg:p-6 xl:p-10'>
      <form onSubmit={onSubmit} noValidate>
        <div className='w-full py-4 sm:py-8 md:py-16'>
          <div className='mb-8 overflow-hidden pt-1 md:mb-10'>
            <h1 className='mb-2 text-2xl font-semibold text-zinc-800'>
              Sign up for {userRole === 'teacher' ? 'Educators' : 'Learners'}
            </h1>
            <p className='mb-1 text-black'>Let’s get started with 5 days free trial</p>
          </div>
          <div className='mb-4 w-full md:mb-5'>
            <Label
              htmlFor='userName'
              className='mb-2 block font-normal leading-none text-black lg:text-base'
            >
              Username
            </Label>
            <Input
              {...form.register('userName')}
              id='userName'
              className='h-10 rounded-lg border-neutral-200 px-3 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
              placeholder='Username'
            />
            {form.formState.errors.userName && (
              <span className='text-sm text-red-500'>{form.formState.errors.userName.message}</span>
            )}
          </div>
          <div className='-mx-2 flex flex-wrap lg:-mx-3'>
            <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
              <Label
                htmlFor='name'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                Name
              </Label>
              <Input
                {...form.register('name')}
                id='name'
                className='h-10 rounded-lg border-neutral-200 px-3 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
                placeholder='Enter your name'
              />
              {form.formState.errors.name && (
                <span className='text-sm text-red-500'>{form.formState.errors.name.message}</span>
              )}
            </div>
            <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
              <Label
                htmlFor='f-name'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                Family Name
              </Label>
              <Input
                {...form.register('familyName')}
                id='f-name'
                className='h-10 rounded-lg border-neutral-200 px-3 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
                placeholder='Enter your family name'
              />
              {form.formState.errors.familyName && (
                <span className='text-sm text-red-500'>
                  {form.formState.errors.familyName.message}
                </span>
              )}
            </div>
            <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
              <Label
                htmlFor='age'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                Age
              </Label>
              <Input
                type='number'
                {...form.register('age')}
                id='age'
                className='h-10 rounded-lg border-neutral-200 px-3 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
                placeholder='Enter your age'
              />
              {form.formState.errors.age && (
                <span className='text-sm text-red-500'>{form.formState.errors.age.message}</span>
              )}
            </div>
            {!isTeacher && (
              <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
                <Label
                  htmlFor='grade'
                  className='mb-2 block font-normal leading-none text-black lg:text-base'
                >
                  Grade
                </Label>
                <Input
                  {...form.register('grade')}
                  id='grade'
                  className='h-10 rounded-lg border-neutral-200 px-3 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
                  placeholder='Your current grade'
                />
                {form.formState.errors.grade && (
                  <span className='text-sm text-red-500'>
                    {form.formState.errors.grade.message}
                  </span>
                )}
              </div>
            )}
            {isTeacher && (
              <>
                <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
                  <Label
                    htmlFor='subjectTeaching'
                    className='mb-2 block font-normal leading-none text-black lg:text-base'
                  >
                    Subject Teaching
                  </Label>
                  <Input
                    {...form.register('subjectTeaching')}
                    id='subjectTeaching'
                    className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
                    placeholder='Enter subject you teach'
                  />
                  {form.formState.errors.subjectTeaching && (
                    <span className='text-sm text-red-500'>
                      {form.formState.errors.subjectTeaching.message}
                    </span>
                  )}
                </div>

                <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
                  <Label
                    htmlFor='gradeTeaching'
                    className='mb-2 block font-normal leading-none text-black lg:text-base'
                  >
                    Grade Teaching
                  </Label>
                  <Input
                    {...form.register('gradeTeaching')}
                    id='gradeTeaching'
                    className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
                    placeholder='Enter grade you teach'
                  />
                  {form.formState.errors.gradeTeaching && (
                    <span className='text-sm text-red-500'>
                      {form.formState.errors.gradeTeaching.message}
                    </span>
                  )}
                </div>
              </>
            )}
            <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
              <Label
                htmlFor='province'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                Province
              </Label>
              <Input
                {...form.register('province')}
                id='province'
                className='h-10 rounded-lg border-neutral-200 px-3 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
                placeholder='Enter your province'
              />
              {form.formState.errors.province && (
                <span className='text-sm text-red-500'>
                  {form.formState.errors.province.message}
                </span>
              )}
            </div>
            <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
              <Label
                htmlFor='school-name'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                School Name
              </Label>
              <Input
                {...form.register('schoolName')}
                id='school-name'
                className='h-10 rounded-lg border-neutral-200 px-3 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
                placeholder='Enter your School name'
              />
              {form.formState.errors.schoolName && (
                <span className='text-sm text-red-500'>
                  {form.formState.errors.schoolName.message}
                </span>
              )}
            </div>
            <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
              <Label
                htmlFor='gender'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                Gender
              </Label>
              <Select
                onValueChange={(value: Gender) =>
                  form.setValue('gender', value, { shouldValidate: true })
                }
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select Gender' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='male'>Male</SelectItem>
                    <SelectItem value='female'>Female</SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {form.formState.errors.gender && (
                <span className='text-sm text-red-500'>{form.formState.errors.gender.message}</span>
              )}
            </div>
            <div
              className={cn(
                'mb-4 w-full px-2 md:mb-5 lg:mb-6',
                userRole === 'teacher' ? 'lg:w-full' : 'lg:w-1/2 lg:px-3',
              )}
            >
              <Label
                htmlFor='nsc'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                IEB/NSC
              </Label>
              <Select
                onValueChange={(value: NSCType) =>
                  form.setValue('nsc', value, { shouldValidate: true })
                }
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select IEB/NSC' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='IEB'>IEB</SelectItem>
                    <SelectItem value='NSC'>NSC</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {form.formState.errors.nsc && (
                <span className='text-sm text-red-500'>{form.formState.errors.nsc.message}</span>
              )}
            </div>
            <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
              <Label
                htmlFor='iem'
                className='mb-2 block font-normal leading-none text-black lg:text-base'
              >
                Email
              </Label>
              <Input
                {...form.register('email')}
                id='iem'
                className='h-10 rounded-lg border-neutral-200 px-3 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
                placeholder='example@gmail.com'
              />
              {form.formState.errors.email && (
                <span className='text-sm text-red-500'>{form.formState.errors.email.message}</span>
              )}
            </div>
            <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
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
                  className='h-10 rounded-lg border-neutral-200 py-2 pl-3 pr-12 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:pl-3'
                  placeholder='Enter your password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-2.5 top-2 cursor-pointer text-zinc-500 lg:top-3'
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
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
            <div className='flex w-full justify-center px-3'>
              <Button
                type='submit'
                className='h-12 min-w-48 text-base lg:min-w-80'
                disabled={isLoading}
                loading={isLoading}
              >
                {isLoading ? 'Signing up...' : 'Sign up'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
