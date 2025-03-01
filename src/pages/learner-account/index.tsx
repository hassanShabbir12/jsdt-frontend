import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Label } from '@radix-ui/react-label';
import { MoveRight, Trash2, TriangleAlert } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { assetUrl } from '@/lib/asset-url';

export const LearnerAccount: FC = () => (
  <section className='pb-10 pt-5'>
    <div className='mx-auto max-w-[1340px] px-3'>
      <div className='mb-5 flex items-center rounded-xl bg-red-100 px-2.5 py-1 text-sm md:text-base'>
        <span className='mr-2 inline-block text-red-700'>
          <TriangleAlert />
        </span>
        <p className='text-red-700'>
          This account is currently deactivated due to failed payment.{' '}
          <Link
            className='group inline-flex items-center gap-x-1 font-bold text-red-700 underline transition-all duration-300 hover:text-red-500'
            to='/payment'
          >
            Update payment method
            <span className='duration-400 inline-block h-6 w-6 transition-all group-hover:translate-x-2'>
              <MoveRight />
            </span>
          </Link>
        </p>
      </div>
      <h2 className='mb-8 text-base font-semibold leading-7 text-zinc-800 sm:mb-10 sm:text-2xl md:mb-12 md:text-xl'>
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
            min='0'
            type='number'
            placeholder='Enter total marks (e.g., 500, 1000)'
            className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
          />
        </div>
      </div>
      <div className='relative mb-10 rounded-xl border border-solid border-neutral-200 p-3'>
        <div className='block items-center justify-between lg:flex'>
          <div className='mb-5 block sm:mb-0 sm:justify-start sm:gap-x-3 md:flex'>
            <div className='px-2'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant='destructive'
                    className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                  >
                    Test
                  </Button>
                </DialogTrigger>
                <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                  <DialogHeader>
                    <div className='mb-6 text-left text-2xl'>
                      <DialogTitle>Following are the questions</DialogTitle>
                    </div>
                  </DialogHeader>
                  <div className='w-full text-sm sm:text-lg'>
                    <div className='mb-5 md:mb-10'>
                      <h2 className='mb-2 text-lg font-semibold md:mb-3 md:text-2xl'>
                        Question No. 1
                      </h2>
                      <p className='m-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis.
                      </p>
                    </div>
                    <div className='mb-5 md:mb-10'>
                      <h2 className='mb-2 text-lg font-semibold md:mb-3 md:text-2xl'>
                        Question No. 2
                      </h2>
                      <p className='m-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis.
                      </p>
                    </div>
                    <div className='mb-5 md:mb-10'>
                      <h2 className='mb-2 text-lg font-semibold md:mb-3 md:text-2xl'>
                        Question No. 3
                      </h2>
                      <p className='m-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis.
                      </p>
                    </div>
                    <div className='mb-5 md:mb-10'>
                      <h2 className='mb-2 text-lg font-semibold md:mb-3 md:text-2xl'>
                        Question No. 4
                      </h2>
                      <p className='m-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className='px-2'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant='destructive'
                    className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                  >
                    Solutions
                  </Button>
                </DialogTrigger>
                <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                  <DialogHeader>
                    <div className='mb-8 flex justify-between pt-8 sm:items-center sm:justify-start'>
                      <DialogTitle className=''>Answer of the following questions</DialogTitle>
                      <div className='ml-0 h-6 w-6 cursor-pointer sm:ml-3'>
                        <img
                          src={assetUrl('assets/img/home/attach-download.svg')}
                          alt='Generate-2'
                          className='-mb-11 block h-auto'
                        />
                      </div>
                    </div>
                  </DialogHeader>
                  <div className='relative'>
                    <div className='mb-7 w-full rounded-xl border border-solid border-neutral-200 p-3 text-sm sm:text-lg md:p-7'>
                      <div className='mb-4 md:mb-7'>
                        <h2 className='mb-1.5 text-lg font-semibold md:mb-3 md:text-2xl'>
                          Question No. 1
                        </h2>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis.
                        </p>
                      </div>
                      <div className='mb-4 md:mb-7'>
                        <h2 className='mb-1.5 text-lg font-semibold md:mb-3 md:text-2xl'>
                          Answer :
                        </h2>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat?
                        </p>
                      </div>
                    </div>
                    <div className='mb-7 w-full rounded-xl border border-solid border-neutral-200 p-3 text-sm sm:text-lg md:p-7'>
                      <div className='mb-4 md:mb-7'>
                        <h2 className='mb-1.5 text-lg font-semibold md:mb-3 md:text-2xl'>
                          Question No. 2
                        </h2>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis.
                        </p>
                      </div>
                      <div className='mb-4 md:mb-7'>
                        <h2 className='mb-1.5 text-lg font-semibold md:mb-3 md:text-2xl'>
                          Answer :
                        </h2>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat?
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className='mb-10 flex gap-x-2 pt-4 sm:mb-0 sm:gap-x-4 sm:pt-0'>
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
          <CarouselPrevious className='z-50 h-12 w-12 bg-blue-500 text-white hover:bg-blue-200 disabled:bg-zinc-100 disabled:text-stone-300 lg:h-16 lg:w-16'></CarouselPrevious>
          <CarouselContent>
            <CarouselItem className='carousel-item'>
              <div className='mb-10 text-sm text-black sm:pl-16 sm:pr-20 md:text-base lg:pl-24 lg:pr-36 lg:text-2xl'>
                <h3 className='mb-5 text-2xl font-semibold leading-7'>Question No. 1</h3>
                <p className='m-0'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className='carousel-item'>
              <div className='mb-10 text-sm text-black sm:pl-16 sm:pr-20 md:text-base lg:pl-24 lg:pr-36 lg:text-2xl'>
                <h3 className='mb-5 text-2xl font-semibold leading-7'>Question No. 2</h3>
                <p className='m-0'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className='carousel-item'>
              <div className='mb-10 text-sm text-black sm:pl-16 sm:pr-20 md:text-base lg:pl-24 lg:pr-36 lg:text-2xl'>
                <h3 className='mb-5 text-2xl font-semibold leading-7'>Question No. 3</h3>
                <p className='m-0'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className='!absolute z-50 h-12 w-12 bg-blue-500 text-white hover:bg-blue-200 disabled:bg-zinc-100 disabled:text-stone-300 lg:h-16 lg:w-16'></CarouselNext>
        </Carousel>
      </div>
      <Button className='mx-auto flex px-20 py-6 text-base'>Add more questions</Button>
      <div className='pt-12'>
        <div className='mb-6 rounded-xl border border-solid border-neutral-200 p-4 text-sm md:text-base lg:text-2xl'>
          <div className='mb-5 flex justify-between'>
            <span className='inline-block text-2xl font-semibold'>Question No. 1</span>
            <Dialog>
              <DialogTrigger asChild>
                <i className='inline-block cursor-pointer transition-all duration-300 hover:text-primary'>
                  <Trash2 />
                </i>
              </DialogTrigger>
              <DialogContent className='max-w-[620px]'>
                <DialogHeader>
                  <DialogTitle className='mb-6 pt-6 text-center text-lg sm:pt-0 md:text-xl lg:text-2xl'>
                    Do you want to delete that question?
                  </DialogTitle>
                </DialogHeader>
                <DialogFooter>
                  <div className='w-1/2'>
                    <Button variant='outline' className='h-12 w-full text-base font-semibold'>
                      Cancel
                    </Button>
                  </div>
                  <div className='w-1/2'>
                    <Button className='h-12 w-full text-base font-semibold'>Yes</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <p className='block text-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
          </p>
        </div>
        <div className='mb-6 rounded-xl border border-solid border-neutral-200 p-4 text-sm md:text-base lg:text-2xl'>
          <div className='mb-5 flex justify-between'>
            <span className='inline-block text-2xl font-semibold'>Question No. 2</span>
            <Dialog>
              <DialogTrigger asChild>
                <i className='inline-block cursor-pointer transition-all duration-300 hover:text-primary'>
                  <Trash2 />
                </i>
              </DialogTrigger>
              <DialogContent className='max-w-[620px]'>
                <DialogHeader>
                  <DialogTitle className='mb-6 pt-6 text-center text-lg sm:pt-0 md:text-xl lg:text-2xl'>
                    Do you want to delete that question?
                  </DialogTitle>
                </DialogHeader>
                <DialogFooter>
                  <div className='w-1/2'>
                    <Button variant='outline' className='h-12 w-full text-base font-semibold'>
                      Cancel
                    </Button>
                  </div>
                  <div className='w-1/2'>
                    <Button className='h-12 w-full text-base font-semibold'>Yes</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <p className='block text-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
          </p>
        </div>
      </div>
    </div>
  </section>
);
