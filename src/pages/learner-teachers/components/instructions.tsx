import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useInstructions } from '@/hooks/client/useInstruction';

export const InstructionsList: React.FC = () => {
  const {
    newInstruction,
    dialogOpen,
    instructions,
    handleSave,
    handleCancel,
    handleDialogChange,
    setNewInstruction,
    loading: listLoading,
  } = useInstructions();

  return (
    <div className='mx-auto max-w-[1340px] px-5'>
      <div className='pl-0 sm:pl-10'>
        <h2 className='mb-2 text-xl font-semibold leading-7 text-zinc-800 sm:text-2xl'>
          Instructions and Information
        </h2>
        <div className='max-w-[956px] font-montserrat text-base text-black'>
          <p className='mb-3'>
            Read the following instructions carefully before answering the questions.
          </p>
          <ol className='list-decimal pl-4'>
            {instructions.map((instruction) => (
              <li key={instruction.id} className='mb-2'>
                <p className='mb-0'>{instruction.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className='py-14'>
          <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
            <DialogTrigger className='mx-auto flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-20 py-6 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
              Add More Instructions
            </DialogTrigger>
            <DialogContent className='max-w-[680px] !rounded-3xl'>
              <DialogHeader>
                <DialogTitle className='mb-2 text-center text-xl font-semibold leading-7 text-zinc-800 sm:text-2xl'>
                  Add New Instruction
                </DialogTitle>
                <DialogDescription>
                  <form>
                    <label className='mb-4 block font-montserrat text-base text-black'>
                      New Instruction
                    </label>
                    <textarea
                      placeholder='Type here'
                      value={newInstruction}
                      onChange={(e) => setNewInstruction(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleSave();
                        }
                      }}
                      className='mb-4 block h-48 w-full resize-none rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6'
                    ></textarea>
                  </form>
                  <div className='flex gap-4'>
                    <Button
                      onClick={handleCancel}
                      className='flex w-1/2 border border-primary bg-white px-10 py-6 text-base font-semibold text-primary hover:text-white'
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSave}
                      loading={listLoading}
                      className='flex w-1/2 border border-primary px-10 py-6 text-base font-semibold'
                    >
                      Save
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
