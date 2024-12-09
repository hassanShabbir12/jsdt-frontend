import { FC } from 'react';
import { Edit, Trash2 } from 'lucide-react';

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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGradeForm } from '@/hooks/admin/grade/useGradeForm';
import { useGradeList } from '@/hooks/admin/grade/useGradeList';

export const Grades: FC = () => {
  const {
    loading: listLoading,
    grades,
    setGrades,
    deleteGrade,
    handleDeleteClick,
    deleteModalOpen,
    setDeleteModalOpen,
    gradeToDelete,
    setGradeToDelete,
  } = useGradeList();

  const {
    register,
    handleSubmit,
    errors,
    loading: formLoading,
    open,
    setOpen,
    selectedGrade,
    handleEdit,
    setSelectedGrade,
    setValue,
    reset,
  } = useGradeForm(grades, setGrades);

  return (
    <div className='mb-12 px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
      <div className='rounded-md bg-white pb-7 shadow-lg'>
        <div className='mb-5 flex items-center justify-between border-b border-neutral-200 px-6 py-3'>
          <h1 className='text-lg font-semibold text-zinc-800'>Grades</h1>
          <Dialog
            open={open}
            onOpenChange={(open) => {
              setOpen(open);
              if (!open) {
                setSelectedGrade(null);
                reset();
              }
            }}
          >
            <DialogTrigger asChild>
              <div className='flex justify-center'>
                <Button
                  className='h-10 w-32 text-sm font-semibold sm:h-12 sm:w-40 sm:text-base'
                  onClick={() => {
                    setValue('title', '');
                    setOpen(true);
                  }}
                >
                  Add New Grade
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className='max-w-[620px]'>
              <DialogHeader>
                <DialogTitle className='text-center'>
                  {selectedGrade ? 'Edit Grade' : 'Add New Grade'}
                </DialogTitle>
              </DialogHeader>
              <form
                onSubmit={handleSubmit}
                onReset={() => {
                  setSelectedGrade(null);
                }}
              >
                <div className='grid py-4'>
                  <Label className='mb-2 block text-sm font-normal leading-none text-zinc-800'>
                    Grade
                  </Label>
                  <div>
                    <Input
                      {...register('title')}
                      id='title'
                      className='h-10 rounded-lg border-neutral-200 px-4 text-base text-zinc-800 shadow-none placeholder:text-stone-300 lg:h-12 lg:px-3 lg:py-2'
                      placeholder='Enter grade'
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
                      Save
                    </Button>
                  </div>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className='px-6'>
          <Table>
            <TableCaption>Showing 1 to 10 of 100 listings</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[86%]'>Grades</TableHead>
                <TableHead className='border-l border-solid border-zinc-300'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grades.map((item, index) => (
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
        <Dialog
          open={deleteModalOpen}
          onOpenChange={(open) => {
            setDeleteModalOpen(open);
            if (!open) {
              setGradeToDelete(null);
            }
          }}
        >
          <DialogContent className='max-w-[620px]'>
            <DialogHeader>
              <DialogTitle className='text-center'>Delete Grade</DialogTitle>
            </DialogHeader>
            <div className='py-4 text-center'>
              <p>Are you sure you want to delete this grade?</p>
              <p className='mt-2 font-semibold'>{gradeToDelete?.title}</p>
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
                  onClick={deleteGrade}
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
