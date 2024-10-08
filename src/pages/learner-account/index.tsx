import { FC } from 'react';

import { Label } from '@radix-ui/react-label';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { assetUrl } from '@/lib/asset-url';

export const LearnerAccount: FC = () => (
  <section className='pb-10 pt-14'>
    <div className='mx-auto max-w-[1340px] px-3'>
      <h2 className='mb-12 text-xl font-semibold leading-7 text-zinc-800 sm:text-2xl'>
        Investigation/Exam (Learner account)
      </h2>
      <div className='-mx-4 mb-8 flex flex-wrap'>
        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
          <Label
            htmlFor='name'
            className='mb-1 block font-normal leading-none text-black lg:text-base'
          >
            IEB/NSC
          </Label>
          <div className='w-full'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
          <Label
            htmlFor='name'
            className='mb-1 block font-normal leading-none text-black lg:text-base'
          >
            Choose Grade
          </Label>
          <div className='w-full'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Grades</SelectLabel>
                  <SelectItem value='apple'>Grade A</SelectItem>
                  <SelectItem value='banana'>Grade B</SelectItem>
                  <SelectItem value='blueberry'>Grade C</SelectItem>
                  <SelectItem value='grapes'>Grade D</SelectItem>
                  <SelectItem value='pineapple'>Grade E</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
          <Label
            htmlFor='name'
            className='mb-1 block font-normal leading-none text-black lg:text-base'
          >
            Choose Subject
          </Label>
          <div className='w-full'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Subjects</SelectLabel>
                  <SelectItem value='apple'>Subject 01</SelectItem>
                  <SelectItem value='banana'>Subject 02</SelectItem>
                  <SelectItem value='blueberry'>Subject 03</SelectItem>
                  <SelectItem value='grapes'>Subject 04</SelectItem>
                  <SelectItem value='pineapple'>Subject 05</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
          <Label
            htmlFor='name'
            className='mb-1 block font-normal leading-none text-black lg:text-base'
          >
            Choose Assessment Type
          </Label>
          <div className='w-full'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Types</SelectLabel>
                  <SelectItem value='apple'>Type 01</SelectItem>
                  <SelectItem value='banana'>Type 02</SelectItem>
                  <SelectItem value='blueberry'>Type 03</SelectItem>
                  <SelectItem value='grapes'>Type 04</SelectItem>
                  <SelectItem value='pineapple'>Type 05</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
          <Label
            htmlFor='name'
            className='mb-1 block font-normal leading-none text-black lg:text-base'
          >
            Choose Topic
          </Label>
          <div className='w-full'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Topics</SelectLabel>
                  <SelectItem value='apple'>Topic 01</SelectItem>
                  <SelectItem value='banana'>Topic 02</SelectItem>
                  <SelectItem value='blueberry'>Topic 03</SelectItem>
                  <SelectItem value='grapes'>Topic 04</SelectItem>
                  <SelectItem value='pineapple'>Topic 05</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
          <Label
            htmlFor='name'
            className='mb-1 block font-normal leading-none text-black lg:text-base'
          >
            Level of Difficulty
          </Label>
          <div className='w-full'>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Levels</SelectLabel>
                  <SelectItem value='apple'>Level 01</SelectItem>
                  <SelectItem value='banana'>Level 02</SelectItem>
                  <SelectItem value='blueberry'>Level 03</SelectItem>
                  <SelectItem value='grapes'>Level 04</SelectItem>
                  <SelectItem value='pineapple'>Level 05</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
          <Label
            htmlFor='name'
            className='mb-1 block font-normal leading-none text-black lg:text-base'
          >
            Total Marks
          </Label>
          <Input
            id='iem'
            type='number'
            placeholder='Enter total marks (e.g., 500, 1000)'
            className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-neutral-400 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:pl-5 lg:pr-48 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
          />
        </div>
      </div>
      <div className='relative mb-10 rounded-xl border border-solid border-neutral-200 p-3'>
        <div className='mb-10 items-center justify-between sm:flex'>
          <div className='mb-5 flex justify-between sm:mb-0 sm:justify-start sm:gap-x-3'>
            <Button variant='destructive' className='px-6 py-5 text-base sm:px-16 sm:py-6'>
              Test
            </Button>
            <Button variant='destructive' className='px-6 py-5 text-base sm:px-12 sm:py-6'>
              Solution
            </Button>
            <Button variant='destructive' className='px-6 py-5 text-base sm:px-9 sm:py-6'>
              Instructions
            </Button>
          </div>
          <div className='flex gap-x-2 sm:gap-x-4'>
            <div className='h-6 w-6 cursor-pointer'>
              <img
                src={assetUrl('assets/img/home/attachment.svg')}
                alt='Generate-2'
                className='-mb-11 block h-auto'
              />
            </div>
            <div className='h-6 w-6 cursor-pointer'>
              <img
                src={assetUrl('assets/img/home/attach-download.svg')}
                alt='Generate-2'
                className='-mb-11 block h-auto'
              />
            </div>
          </div>
        </div>
        <Carousel className='relative w-full'>
          <CarouselPrevious className='z-50 h-12 w-12 bg-blue-500 hover:bg-blue-200 hover:text-white lg:h-16 lg:w-16'></CarouselPrevious>
          <CarouselContent>
            <CarouselItem className='carousel-item'>
              <div className='max-w-6xl text-sm font-semibold text-black sm:pl-16 sm:pr-20 md:text-xl lg:pl-24 lg:pr-36 lg:text-2xl'>
                <h3 className='mb-5 text-2xl font-semibold leading-7'>Question No. 1</h3>
                <p className='m-0'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className='carousel-item'>
              <div className='max-w-6xl text-sm font-semibold text-black sm:pl-16 sm:pr-20 md:text-base lg:pl-24 lg:pr-36 lg:text-2xl'>
                <h3 className='mb-5 text-2xl font-semibold leading-7'>Question No. 2</h3>
                <p className='m-0'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className='carousel-item'>
              <div className='max-w-6xl text-sm font-semibold text-black sm:pl-16 sm:pr-20 md:text-xl lg:pl-24 lg:pr-36 lg:text-2xl'>
                <h3 className='mb-5 text-2xl font-semibold leading-7'>Question No. 3</h3>
                <p className='m-0'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className='z-50 h-12 w-12 bg-blue-500 hover:bg-blue-200 hover:text-white lg:h-16 lg:w-16'></CarouselNext>
        </Carousel>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem className='bg-blue-500'>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Button className='mx-auto flex px-20 py-6 text-base'>Add more questions</Button>
    </div>
  </section>
);
