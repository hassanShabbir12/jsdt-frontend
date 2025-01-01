import { FC } from 'react';

import { Edit, LoaderCircle, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useTopicForm } from '@/hooks/admin/topic/useTopicForm';
import { useTopicList } from '@/hooks/admin/topic/useTopicList';

import AdminRecord from '../admin-record';

export const Topic: FC = () => {
  const {
    loading: listLoading,
    topics,
    setTopics,
    deleteTopic,
    handleDeleteClick,
    deleteModalOpen,
    setDeleteModalOpen,
    topicToDelete,
    setTopicToDelete,
    topicLoading,
  } = useTopicList();

  const {
    register,
    handleSubmit,
    errors,
    loading: formLoading,
    open,
    setOpen,
    selectedTopic,
    handleEdit,
    setSelectedTopic,
    setValue,
    reset,
  } = useTopicForm(topics, setTopics);

  return (
    <div className='mb-12 px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
      <div className='rounded-md bg-white pb-7 shadow-lg'>
        <div className='mb-5 flex items-center justify-between border-b border-neutral-200 px-6 py-3'>
          <h1 className='text-lg font-semibold text-zinc-800'>Topics</h1>
          <Dialog
            open={open}
            onOpenChange={(open) => {
              setOpen(open);
              if (!open) {
                setSelectedTopic(null);
                reset();
              }
            }}
          >
            <DialogTrigger asChild>
              <div className='max-w-80 justify-center'>
                <Button
                  className='z-20 h-10 w-36 text-sm font-semibold sm:h-12 sm:w-40 sm:text-base'
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
                  <div>
                    <Input
                      {...register('title')}
                      id='title'
                      className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3 lg:py-2'
                      placeholder='Enter Topic'
                      error={errors.title?.message}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <div className='w-1/2'>
                    <Button
                      variant='outline'
                      className='h-12 w-full text-base font-semibold hover:!bg-primary'
                      type='button'
                      onClick={() => {
                        setOpen(false);
                        reset();
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div className='w-1/2'>
                    <Button
                      loading={formLoading}
                      className='h-12 w-full text-base font-semibold'
                      type='submit'
                    >
                      {selectedTopic ? 'Update' : 'Save'}
                    </Button>
                  </div>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className='px-6'>
          <div className={topics.length > 0 ? 'overflow-auto' : ''}>
            <Table className={topics.length > 0 ? 'w-[800px] sm:w-full' : 'w-full'}>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[86%]'>Topics</TableHead>
                  <TableHead className='border-l border-solid border-zinc-300'>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topicLoading && (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <div className='flex items-center justify-center'>
                        <LoaderCircle className='h-20 w-10 animate-spin text-primary' />
                      </div>
                    </TableCell>
                  </TableRow>
                )}

                {!topicLoading && topics.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <div className='flex items-center justify-center'>
                        <AdminRecord />
                      </div>
                    </TableCell>
                  </TableRow>
                )}

                {!topicLoading &&
                  topics.length > 0 &&
                  topics.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className='font-base text-zinc-800'>{item.title}</TableCell>
                      <TableCell className='border-l border-solid border-zinc-300'>
                        <div className='flex gap-2'>
                          <i
                            onClick={() => {
                              handleEdit(item);
                              setValue('title', item.title);
                            }}
                            className='duration-400 inline-block cursor-pointer transition-all hover:text-primary'
                          >
                            <Edit />
                          </i>
                          <i
                            onClick={() => handleDeleteClick(item)}
                            className='duration-400 inline-block cursor-pointer transition-all hover:text-primary'
                          >
                            <Trash2 />
                          </i>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
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
                  className='h-12 w-full text-base font-semibold hover:!bg-primary'
                  type='button'
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
              <div className='w-1/2'>
                <Button
                  loading={listLoading}
                  className='h-12 w-full text-base font-semibold'
                  onClick={deleteTopic}
                >
                  Yes
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
