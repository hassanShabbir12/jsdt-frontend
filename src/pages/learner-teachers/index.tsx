import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Label } from '@radix-ui/react-label';
import { Calendar, MoveRight, Trash2, TriangleAlert } from 'lucide-react';

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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { assetUrl } from '@/lib/asset-url';

export const LearnerTeacher: FC = () => {
  const navigate = useNavigate();

  const onHandleClick = (): void => {
    navigate('/instructions');
  };

  return (
    <section className='pb-10 pt-14'>
      <div className='mx-auto max-w-[1340px] px-3'>
        <div className='mb-5 flex items-center rounded-xl bg-red-100 px-2.5 py-1'>
          <span className='mr-2 inline-block text-red-700'>
            <TriangleAlert />
          </span>
          <p className='text-red-700'>
            This account is currently deactivated due to failed payment.
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
        <h2 className='mb-12 text-xl font-semibold leading-7 text-zinc-800 sm:text-2xl'>
          Investigation/Exam (Educator&rsquo;s account)
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
              Total Marks
            </Label>
            <Input
              id='iem'
              type='number'
              placeholder='Enter total marks (e.g., 500, 1000)'
              className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            />
          </div>
        </div>
        <div className='relative mb-10 rounded-xl border border-solid border-neutral-200 p-3'>
          <div className='mb-10 block items-center justify-between md:flex'>
            <div className='mb-5 block sm:-mx-2 sm:flex sm:justify-start md:mb-0'>
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
                      <div className='flex'>
                        <div className='mb-6 text-left'>
                          <DialogTitle>Following are the questions</DialogTitle>
                        </div>
                        <div className='ml-0 h-6 w-6 cursor-pointer sm:ml-3'>
                          <img
                            src={assetUrl('assets/img/home/attach-download.svg')}
                            alt='Generate-2'
                            className='-mb-11 block h-auto'
                          />
                        </div>
                      </div>
                    </DialogHeader>
                    <div className='w-full text-sm sm:text-lg'>
                      <div className='mb-5 md:mb-10'>
                        <h2 className='mb-2 text-lg font-semibold md:mb-3 md:text-2xl'>
                          Question No. 1
                        </h2>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis.
                        </p>
                      </div>
                      <div className='mb-5 md:mb-10'>
                        <h2 className='mb-2 text-lg font-semibold md:mb-3 md:text-2xl'>
                          Question No. 2
                        </h2>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis.
                        </p>
                      </div>
                      <div className='mb-5 md:mb-10'>
                        <h2 className='mb-2 text-lg font-semibold md:mb-3 md:text-2xl'>
                          Question No. 3
                        </h2>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis.
                        </p>
                      </div>
                      <div className='mb-5 md:mb-10'>
                        <h2 className='mb-2 text-lg font-semibold md:mb-3 md:text-2xl'>
                          Question No. 4
                        </h2>
                        <p className='m-0'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis.
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
                        <DialogTitle>Answer of the following questions</DialogTitle>
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
              <div className='px-2'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant='destructive'
                      className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                    >
                      Tax. Grid
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                    <div className='md:px-2'>
                      <div className='mx-auto max-w-[1340px] md:py-8 lg:pb-24 lg:pt-16'>
                        <h1 className='mb-8 text-center text-2xl font-semibold text-zinc-800 sm:mb-12'>
                          Taxonomy Grid
                        </h1>
                        <div className='overflow-auto'>
                          <table className='mx-auto mb-3 w-[625px] border-collapse border border-black lg:w-[825px]'>
                            <thead>
                              <tr>
                                <th className='w-1/5 border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-3 sm:py-5 sm:text-base'></th>
                                <th className='w-1/5 border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-3 sm:py-5 sm:text-base'>
                                  Level 1
                                </th>
                                <th className='w-1/5 border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-3 sm:py-5 sm:text-base'>
                                  Level 2
                                </th>
                                <th className='w-1/5 border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-3 sm:py-5 sm:text-base'>
                                  Level 3
                                </th>
                                <th className='w-1/5 border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-3 sm:py-5 sm:text-base'>
                                  Level 4
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  1.1
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  Marks (2)
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                              </tr>
                              <tr>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  1.2
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  Marks (3)
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                              </tr>
                              <tr>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  2.1
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  Marks (1)
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                              </tr>
                              <tr>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  2.2
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  Marks (4)
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                              </tr>
                              <tr>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  3.1
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  Marks (2)
                                </td>
                              </tr>
                              <tr>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  3.2
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  Marks (2)
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'></td>
                              </tr>
                              <tr>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  Total Marks
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  3
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  3
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  6
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  2
                                </td>
                              </tr>
                              <tr>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  Percentage
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  21%
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  21%
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  43%
                                </td>
                                <td className='border-2 border-black px-1 py-3 text-center text-xs font-semibold sm:px-4 sm:py-5 sm:text-base'>
                                  15
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className='px-2'>
                <Button
                  variant='destructive'
                  onClick={onHandleClick}
                  className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                >
                  Instructions
                </Button>
              </div>
              <div className='px-2'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant='destructive'
                      className='mb-1 w-full px-6 py-5 text-base sm:px-9 sm:py-6 md:mb-0 lg:w-40'
                    >
                      Cover Page
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='!container block max-h-[92vh] max-w-[96%] overflow-y-auto overflow-x-hidden lg:px-8'>
                    <div className='pt-14 md:pl-0 md:pt-16'>
                      <h1 className='mb-6 text-2xl font-semibold'>Add cover page details.</h1>
                      <div className='mb-16 rounded-md bg-white pb-7 shadow-lg'>
                        <div className='border-b border-neutral-200 px-6 py-3'>
                          <strong className='text-lg font-semibold text-zinc-800'>
                            Upload Logo
                          </strong>
                        </div>
                        <div className='p-4 sm:px-6 sm:pb-3 sm:pt-8'>
                          <Label
                            htmlFor='name'
                            className='mb-3 block text-sm font-normal leading-none text-zinc-800'
                          >
                            Choose logo from your local directory
                          </Label>
                          <div className='flex h-32 w-full items-center justify-center border border-dashed border-neutral-200'>
                            <img
                              src={assetUrl('assets/img/home/upload-logo.png')}
                              alt='round-arrow'
                              className='h-autsso ml-2 block'
                            />
                          </div>
                          <div className='mb-5 flex w-full justify-center py-3 text-sm font-semibold'>
                            Drop your image her or
                            <Link
                              to=''
                              className='ml-1 border-b text-blue-500 underline transition-all hover:text-blue-600'
                            >
                              browse
                            </Link>
                          </div>
                        </div>
                        <div className='mx-auto flex max-w-80 justify-center'>
                          <Button className='h-12 w-52 text-base font-semibold md:w-80'>
                            Upload
                          </Button>
                        </div>
                      </div>
                      <div className='-mx-4 flex flex-wrap'>
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
                            Grade
                          </Label>
                          <div className='h-12 w-full'>
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
                            Department
                          </Label>
                          <div className='w-full'>
                            <Input
                              id='iem'
                              type='number'
                              placeholder='Type Here'
                              className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                            />
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Subject
                          </Label>
                          <div className='w-full'>
                            <Input
                              id='iem'
                              type='number'
                              placeholder='Type Here'
                              className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                            />
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Topic
                          </Label>
                          <div className='h-12 w-full'>
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
                            Total Marks
                          </Label>
                          <div className='w-full'>
                            <Input
                              id='iem'
                              type='number'
                              placeholder='Enter total marks (e.g., 500, 1000)'
                              className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                            />
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Date
                          </Label>
                          <div className='relative'>
                            <Input
                              id='iem'
                              type='number'
                              placeholder='01-01-2024'
                              className='h-12 rounded-lg border border-solid border-neutral-200 py-2 pl-4 pr-12 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                            />
                            <i className='absolute right-5 top-2.5 cursor-pointer text-stone-300'>
                              <Calendar />
                            </i>
                          </div>
                        </div>
                        <div className='mb-4 w-full px-4 md:mb-6 md:w-1/2'>
                          <Label
                            htmlFor='name'
                            className='mb-1 block font-normal leading-none text-black lg:text-base'
                          >
                            Time
                          </Label>
                          <Input
                            id='iem'
                            type='number'
                            placeholder='e.g., 2 Hours'
                            className='h-12 rounded-lg border border-solid border-neutral-200 px-4 py-2 text-sm text-zinc-800 shadow-none [appearance:textfield] placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 lg:px-3.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                          />
                        </div>
                      </div>
                      <div className='mx-auto mb-8 flex max-w-80 justify-center'>
                        <Button className='h-12 w-52 text-base font-semibold md:w-80'>
                          Upload
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
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
            <CarouselPrevious className='z-50 h-12 w-12 bg-blue-500 text-white hover:bg-blue-400 hover:text-white disabled:bg-zinc-100 disabled:text-stone-300 lg:h-16 lg:w-16'></CarouselPrevious>
            <CarouselContent>
              <CarouselItem className='carousel-item'>
                <div className='mb-20 text-sm font-semibold text-black sm:pl-16 sm:pr-20 md:text-base lg:pl-24 lg:pr-36 lg:text-2xl'>
                  <h3 className='mb-5 text-2xl font-semibold leading-7'>Question No. 1</h3>
                  <p className='m-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className='carousel-item'>
                <div className='mb-20 text-sm font-semibold text-black sm:pl-16 sm:pr-20 md:text-base lg:pl-24 lg:pr-36 lg:text-2xl'>
                  <h3 className='mb-5 text-2xl font-semibold leading-7'>Question No. 2</h3>
                  <p className='m-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className='carousel-item'>
                <div className='mb-20 text-sm font-semibold text-black sm:pl-16 sm:pr-20 md:text-base lg:pl-24 lg:pr-36 lg:text-2xl'>
                  <h3 className='mb-5 text-2xl font-semibold leading-7'>Question No. 3</h3>
                  <p className='m-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className='z-50 h-12 w-12 bg-blue-500 text-white hover:bg-blue-400 hover:text-white disabled:bg-zinc-100 disabled:text-stone-300 lg:h-16 lg:w-16'></CarouselNext>
          </Carousel>
        </div>
        <Button className='mx-auto flex w-80 px-20 py-6 text-base'>Add</Button>
        <div className='pt-12'>
          <div className='mb-6 rounded-xl border border-solid border-neutral-200 p-4 text-2xl'>
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
                    <DialogTitle className='mb-6 text-center'>Do you want to delete?</DialogTitle>
                  </DialogHeader>
                  <DialogFooter>
                    <div className='w-1/2'>
                      <Button variant='outline' className='h-12 w-full text-base font-semibold'>
                        Cancel
                      </Button>
                    </div>
                    <div className='w-1/2'>
                      <Button className='h-12 w-full text-base font-semibold'>Save</Button>
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
          <div className='mb-6 rounded-xl border border-solid border-neutral-200 p-4 text-2xl'>
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
                    <DialogTitle className='mb-6 text-center'>Do you want to delete?</DialogTitle>
                  </DialogHeader>
                  <DialogFooter>
                    <div className='w-1/2'>
                      <Button variant='outline' className='h-12 w-full text-base font-semibold'>
                        Cancel
                      </Button>
                    </div>
                    <div className='w-1/2'>
                      <Button className='h-12 w-full text-base font-semibold'>Save</Button>
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
};
