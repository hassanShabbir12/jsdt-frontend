import { FC } from 'react';

import { EyeOff } from 'lucide-react';

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

export const EducatorSignUp: FC = () => (
  <section className='relative flex min-h-full flex-col overflow-hidden bg-white p-4 sm:w-1/2 lg:p-6 xl:p-10'>
    <div className='w-full py-4 sm:py-8 md:py-16'>
      <div className='mb-8 overflow-hidden pt-1 md:mb-10'>
        <h1 className='mb-2 text-2xl font-semibold text-zinc-800'>Sign up for Educators</h1>
        <p className='mb-1 text-black'>Let’s get started with 5 days free trial</p>
      </div>
      <div className='mb-4 w-full md:mb-5 lg:mb-6'>
        <Label
          htmlFor='name'
          className='mb-2 block font-normal leading-none text-black lg:text-base'
        >
          Username
        </Label>
        <Input
          id='name'
          className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
          placeholder='Username'
        />
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
            id='name'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
            placeholder='Enter your name'
          />
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
          <Label
            htmlFor='f-name'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Family Name
          </Label>
          <Input
            id='f-name'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
            placeholder='Enter your family name'
          />
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
          <Label
            htmlFor='age'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Age
          </Label>
          <Input
            id='age'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
            placeholder='Enter your age'
          />
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
          <Label
            htmlFor='subject-teaching'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Subject Teaching
          </Label>
          <Input
            id='subject-teaching'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
            placeholder='Subject (e.g., Science, History)'
          />
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
          <Label
            htmlFor='grade'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Grades Teaching
          </Label>
          <Input
            id='grade'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
            placeholder='Enter your teaching grade'
          />
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
          <Label
            htmlFor='province'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Province
          </Label>
          <Input
            id='province'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
            placeholder='Enter your province'
          />
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
          <Label
            htmlFor='school-name'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            School Name
          </Label>
          <Input
            id='school-name'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
            placeholder='Enter your School name'
          />
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
          <Label
            htmlFor='gender'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Gender
          </Label>
          <div className='w-full'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Male/Female' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='male'>Male</SelectItem>
                  <SelectItem value='female'>Female</SelectItem>
                  <SelectItem value='other'>Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-7 lg:px-3'>
          <Label
            htmlFor='iem'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            IEB/NSC
          </Label>
          <div className='w-full'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='IEB/NSC' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='01'>01</SelectItem>
                  <SelectItem value='02'>02</SelectItem>
                  <SelectItem value='03'>03</SelectItem>
                  <SelectItem value='04'>04</SelectItem>
                  <SelectItem value='05'>05</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
          <Label
            htmlFor='iem'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Email
          </Label>
          <Input
            id='iem'
            className='h-10 rounded-lg border-neutral-200 px-4 py-2 text-sm text-black shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3'
            placeholder='example@gmail.com'
          />
        </div>
        <div className='mb-4 w-full px-2 md:mb-5 lg:mb-6 lg:w-1/2 lg:px-3'>
          <Label
            htmlFor='iem'
            className='mb-2 block font-normal leading-none text-black lg:text-base'
          >
            Password
          </Label>
          <div className='relative'>
            <Input
              id='iem'
              className='h-10 rounded-lg border-neutral-200 py-2 pl-4 pr-12 text-sm text-black shadow-none lg:h-12 lg:pl-3'
              placeholder='.........................'
            />
            <div className='absolute right-4 top-2 cursor-pointer text-zinc-500 lg:top-3'>
              <EyeOff />
            </div>
          </div>
        </div>
        <div className='flex w-full justify-center px-3'>
          <Button className='h-12 min-w-48 lg:min-w-80'>Sign up</Button>
        </div>
      </div>
    </div>
  </section>
);
