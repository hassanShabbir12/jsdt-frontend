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
import { useTopicForm } from '@/hooks/admin/useTopics';

export const Topic: FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    loading,
    open,
    setOpen,
    topics,
    deleteTopic,
    handleEdit,
    selectedTopic,
    setSelectedTopic,
    setValue,
    handleDeleteClick,
    deleteModalOpen,
    setDeleteModalOpen,
    topicToDelete,
    setTopicToDelete,
  } = useTopicForm();

  return (
    <>
      <div className='mb-12 px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
        <div className='rounded-md bg-white pb-7 shadow-lg'>
          <div className='border-b border-neutral-200 px-6 py-3'>
            <h1 className='text-lg font-semibold text-zinc-800'>Topics</h1>
          </div>
          <div className='p-4 sm:px-6 sm:pb-3 sm:pt-8'>
            <Label
              htmlFor='name'
              className='mb-2 block text-sm font-normal leading-none text-zinc-800'
            >
              Topic
            </Label>
            <div className='flex flex-wrap items-center'>
              <Input
                id='name'
                className='h-10 w-auto min-w-0 grow basis-0 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-zinc-800 lg:h-12 lg:px-3 lg:py-2'
                placeholder='Enter topic'
              />
              <DropdownMenu>
                <DropdownMenuTrigger className='ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800'>
                  <GradeDots />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='absolute -right-4 top-4 rounded-md drop-shadow-xl'>
                  <ul className='m-0 px-2 py-3'>
                    <li className='group mb-2 flex cursor-pointer items-center p-1.5'>
                      <div className='text-zinc-800 group-hover:text-blue-500'>
                        <Edit />
                      </div>
                      <h3 className='ml-1.5 text-base text-zinc-800 group-hover:text-blue-500'>
                        Edit
                      </h3>
                    </li>
                    <li className='group flex cursor-pointer items-center p-1.5'>
                      <div className='text-zinc-800 group-hover:text-blue-500'>
                        <Trash2 />
                      </div>
                      <h3 className='ml-1.5 text-base text-zinc-800 group-hover:text-blue-500'>
                        Delete
                      </h3>
                    </li>
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Dialog
            open={deleteModalOpen}
            onOpenChange={(open) => {
              setDeleteModalOpen(open);
              if (!open) {
                setTopicToDelete(null);
              }
            }}
          >
            <DialogContent className='max-w-[620px]'>
              <DialogHeader>
                <DialogTitle className='text-center'>Delete Topic</DialogTitle>
              </DialogHeader>
              <div className='py-4 text-center'>
                <p>Are you sure you want to delete this topic?</p>
                <p className='mt-2 font-semibold'>{topicToDelete?.title}</p>
              </div>
              <DialogFooter>
                <div className='w-1/2'>
                  <Button
                    variant='outline'
                    className='h-12 w-full text-base font-semibold'
                    type='button'
                    onClick={() => setDeleteModalOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
                <div className='w-1/2'>
                  <Button
                    loading={loading}
                    className='h-12 w-full text-base font-semibold'
                    onClick={deleteTopic}
                  >
                    Yes
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog
            open={open}
            onOpenChange={(open) => {
              setOpen(open);
              if (!open) {
                setSelectedTopic(null);
              }
            }}
          >
            <DialogTrigger asChild>
              <div className='mx-auto flex max-w-80 justify-center'>
                <Button
                  className='h-12 w-60 text-base font-semibold sm:w-80'
                  onClick={() => {
                    setValue('title', '');
                    setOpen(true);
                  }}
                >
                  Add New Topic
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className='max-w-[620px]'>
              <DialogHeader>
                <DialogTitle className='text-center'>
                  {selectedTopic ? 'Edit Topic' : 'Add New Topic'}
                </DialogTitle>
              </DialogHeader>
              <form
                onSubmit={handleSubmit}
                onReset={() => {
                  setSelectedTopic(null);
                }}
              >
                <div className='grid py-4'>
                  <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                    Topic
                  </Label>
                  <div className='flex items-center'>
                    <Input
                      {...register('title')}
                      id='title'
                      className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3 lg:py-2'
                      placeholder='Enter topic'
                      error={errors.title?.message}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <div className='w-1/2'>
                    <Button
                      variant='outline'
                      className='h-12 w-full text-base font-semibold'
                      type='button'
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div className='w-1/2'>
                    <Button
                      loading={loading}
                      className='h-12 w-full text-base font-semibold'
                      type='submit'
                    >
                      Save
                    </Button>
                  </div>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className='px-6 md:px-0 md:pr-10'>
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
              {topics.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className='font-base text-zinc-800'>{item.title}</TableCell>
                  <TableCell className='border-l border-solid border-zinc-300'>
                    <i
                      onClick={() => handleDeleteClick(item)}
                      className='duration-400 inline-block cursor-pointer transition-all hover:text-primary'
                    >
                      <Trash2 />
                    </i>
                    <i
                      onClick={() => {
                        handleEdit(item);
                        setValue('title', item.title);
                      }}
                      className='duration-400 inline-block cursor-pointer transition-all hover:text-primary'
                    >
                      <Edit />
                    </i>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};
