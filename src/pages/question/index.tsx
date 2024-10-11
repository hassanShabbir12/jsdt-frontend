import { FC } from 'react';

import { Edit, Trash2 } from 'lucide-react';

import GradeDots from '@/components/icon/grade-dots';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export const Question: FC = () => (
  <div className='px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
    <div className='rounded-md bg-white pb-7 shadow-lg'>
      <div className='border-b border-neutral-200 px-6 py-3'>
        <h1 className='text-lg font-semibold text-zinc-800'>Questions</h1>
      </div>
      <div className='p-4 sm:px-6 sm:pb-3 sm:pt-8'>
        <Label
          htmlFor='name'
          className='mb-1.5 block text-sm font-normal leading-none text-zinc-800'
        >
          Question
        </Label>
        <div className='flex flex-wrap items-center'>
          <Input
            id='name'
            className='h-10 w-auto min-w-0 grow basis-0 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-zinc-800 lg:h-12 lg:px-3 lg:py-2'
            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
          />
          <DropdownMenu>
            <DropdownMenuTrigger className='ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 hover:bg-zinc-800 hover:text-white data-[state=open]:bg-zinc-800 data-[state=open]:text-white'>
              <GradeDots />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='absolute -right-4 top-4 rounded-md drop-shadow-xl'>
              <ul className='m-0 px-2 py-3'>
                <li className='mb-2 flex cursor-pointer items-center p-1.5'>
                  <div className='text-zinc-800'>
                    <Edit />
                  </div>
                  <h3 className='ml-1.5 text-base text-zinc-800'>Edit</h3>
                </li>
                <li className='flex cursor-pointer items-center p-1.5'>
                  <div className='text-zinc-800'>
                    <Trash2 />
                  </div>
                  <h3 className='ml-1.5 text-base text-zinc-800'>Delete</h3>
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='mx-auto flex max-w-80 justify-center px-4'>
            <Button className='h-12 w-80 text-base font-semibold'>Add New question</Button>
          </div>
        </DialogTrigger>
        <DialogContent className='h-full max-w-[1173px] overflow-y-auto overflow-x-hidden'>
          <DialogHeader>
            <DialogTitle className='mb-8 text-center text-2xl'>Add New Question</DialogTitle>
          </DialogHeader>
          <div className='-mx-2.5 block flex-wrap sm:flex'>
            <div className='mb-4 w-full px-2.5 sm:w-1/2'>
              <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                IEB/NSC
              </Label>
              <div className='w-full'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Exam Type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Types</SelectLabel>
                      <SelectItem value='type 1'>Type 1</SelectItem>
                      <SelectItem value='type 2'>Type 2</SelectItem>
                      <SelectItem value='type 3'>Type 3</SelectItem>
                      <SelectItem value='type 4'>Type 4</SelectItem>
                      <SelectItem value='type 5'>Type 5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='mb-4 w-full px-2.5 sm:w-1/2'>
              <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                Choose Grade
              </Label>
              <div className='w-full'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='e.g. 12th Grade' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Grades</SelectLabel>
                      <SelectItem value='grade 1'>grade 1</SelectItem>
                      <SelectItem value='grade 2'>grade 2</SelectItem>
                      <SelectItem value='grade 3'>grade 3</SelectItem>
                      <SelectItem value='grade 4'>grade 4</SelectItem>
                      <SelectItem value='grade 5'>grade 5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='mb-4 w-full px-2.5 sm:w-1/2'>
              <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                Assessment Type
              </Label>
              <div className='w-full'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Multiple Choice' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Choices</SelectLabel>
                      <SelectItem value='choice 1'>choice 1</SelectItem>
                      <SelectItem value='choice 2'>choice 2</SelectItem>
                      <SelectItem value='choice 3'>choice 3</SelectItem>
                      <SelectItem value='choice 4'>choice 4</SelectItem>
                      <SelectItem value='choice 5'>choice 5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='mb-4 w-full px-2.5 sm:w-1/2'>
              <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                Choose Topic
              </Label>
              <div className='w-full'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Basic Education' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Topics</SelectLabel>
                      <SelectItem value='topic 1'>Topic 1</SelectItem>
                      <SelectItem value='topic 2'>Topic 2</SelectItem>
                      <SelectItem value='topic 3'>Topic 3</SelectItem>
                      <SelectItem value='topic 4'>Topic 4</SelectItem>
                      <SelectItem value='topic 5'>Topic 5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='mb-4 w-full px-2.5 sm:w-1/2'>
              <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                Choose Subject
              </Label>
              <div className='w-full'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Chemistry' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Physics</SelectLabel>
                      <SelectItem value='biology'>Biology</SelectItem>
                      <SelectItem value='english'>English</SelectItem>
                      <SelectItem value='chemistry'>Chemistry</SelectItem>
                      <SelectItem value='urdu'>Urdu</SelectItem>
                      <SelectItem value='math'>Math</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='mb-4 w-full px-2.5 sm:w-1/2'>
              <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                EASY/INTERMEDIATE/DIFFICULT
              </Label>
              <div className='w-full'>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Easy' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Easy</SelectLabel>
                      <SelectItem value='easy 1'>Easy 1</SelectItem>
                      <SelectItem value='easy 2'>Easy 2</SelectItem>
                      <SelectItem value='easy 3'>Easy 3</SelectItem>
                      <SelectItem value='easy 4'>Easy 4</SelectItem>
                      <SelectItem value='easy 5'>Easy 5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
              Question
            </Label>
            <div className='relative'>
              <Textarea
                className='h-44 w-full resize-none rounded-xl border border-solid
  border-neutral-200 p-4 text-sm text-stone-300 placeholder:text-stone-300'
                placeholder='Type here...'
              />
              <div className='absolute bottom-5 left-4 rounded-full bg-gray-200 px-3 py-2 text-xs text-blue-500'>
                Write question with AI
              </div>
            </div>
          </div>
          <div className='w-full'>
            <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
              Answer
            </Label>
            <div className='relative'>
              <Textarea
                className='h-44 w-full resize-none rounded-xl border border-solid
  border-neutral-200 p-4 text-sm text-stone-300 placeholder:text-stone-300'
                placeholder='Type here...'
              />
              <div className='absolute bottom-5 left-4 rounded-full bg-gray-200 px-3 py-2 text-xs text-blue-500'>
                Write question with AI
              </div>
            </div>
          </div>
          <DialogFooter>
            <div className='mx-auto flex max-w-xl gap-x-4'>
              <div className='w-64'>
                <Button variant='outline' className='h-12 w-full text-base font-semibold'>
                  Cancel
                </Button>
              </div>
              <div className='w-64'>
                <Button className='h-12 w-full text-base font-semibold'>Save</Button>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
);
