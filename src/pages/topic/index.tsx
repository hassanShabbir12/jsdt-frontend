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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    invoice: 'Topic 1',
    icon: <Trash2 />,
  },
  {
    invoice: 'Topic 2',
    icon: <Trash2 />,
  },
  {
    invoice: 'Topic 3',
    icon: <Trash2 />,
  },
  {
    invoice: 'Topic 4',
    icon: <Trash2 />,
  },
];

export const Topic: FC = () => (
  <>
    <div className='mb-12 px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
      <div className='rounded-md bg-white pb-7 shadow-lg'>
        <div className='border-b border-neutral-200 px-6 py-3'>
          <h1 className='text-lg font-semibold text-zinc-800'>Topics</h1>
        </div>
        <div className='p-4 sm:px-6 sm:pb-3 sm:pt-8'>
          <Label
            htmlFor='name'
            className='mb-1.5 block text-sm font-normal leading-none text-zinc-800'
          >
            Topics
          </Label>
          <div className='flex flex-wrap items-center'>
            <Input
              id='name'
              className='h-10 w-auto min-w-0 grow basis-0 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-zinc-800 lg:h-12 lg:px-3 lg:py-2'
              placeholder='Basic Education'
            />
            <DropdownMenu>
              <DropdownMenuTrigger className='ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800'>
                <GradeDots />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='absolute -right-4 top-4 rounded-md drop-shadow-xl'>
                <ul className='m-0 px-2 py-3'>
                  <li className='group mb-2 flex cursor-pointer items-center p-1.5'>
                    <div className='text-zinc-800 duration-300 ease-in group-hover:text-blue-500'>
                      <Edit />
                    </div>
                    <h3 className='ml-1.5 text-base text-zinc-800 duration-300 ease-in group-hover:text-blue-500'>
                      Edit
                    </h3>
                  </li>
                  <li className='group flex cursor-pointer items-center p-1.5'>
                    <div className='text-zinc-800 duration-300 ease-in group-hover:text-blue-500'>
                      <Trash2 />
                    </div>
                    <h3 className='ml-1.5 text-base text-zinc-800 duration-300 ease-in group-hover:text-blue-500'>
                      Delete
                    </h3>
                  </li>
                </ul>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div className='mx-auto flex max-w-80 justify-center'>
              <Button className='h-12 w-52 text-base font-semibold md:w-80'>Add New Topic</Button>
            </div>
          </DialogTrigger>
          <DialogContent className='max-w-[620px]'>
            <DialogHeader>
              <DialogTitle className='text-center text-lg md:text-xl lg:text-2xl'>
                Add New Topic
              </DialogTitle>
            </DialogHeader>
            <div className='grid py-4'>
              <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                New Topic
              </Label>
              <div className='flex items-center'>
                <Input
                  id='name'
                  className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3 lg:py-2'
                  placeholder='Type here'
                />
              </div>
            </div>
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
    </div>
    <div className='px-6 md:px-0 md:pr-4'>
      <div className='rounded-md bg-white p-4 shadow-lg lg:p-6'>
        <Table>
          <TableCaption>Showing 1 to 10 of 100 listings</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[86%]'>Topics</TableHead>
              <TableHead className='border-l border-solid border-zinc-300'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className='font-base text-zinc-800'>{invoice.invoice}</TableCell>
                <TableCell className='border-l border-solid border-zinc-300'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <i className='inline-block cursor-pointer transition-all duration-300 hover:text-primary'>
                        {invoice.icon}
                      </i>
                    </DialogTrigger>
                    <DialogContent className='max-w-[620px]'>
                      <DialogHeader>
                        <DialogTitle className='mb-6 text-center'>
                          Do you want to delete?
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </>
);
