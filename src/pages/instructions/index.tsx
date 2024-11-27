import { FC } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const Instructions: FC = () => (
  <section className='pb-10 pt-14'>
    <div className='mx-auto max-w-[1340px] px-5'>
      <div className='pl-0 sm:pl-10'>
        <h2 className='mb-2 text-xl font-semibold leading-7 text-zinc-800 sm:text-2xl'>
          Instructions and information
        </h2>
        <div className='max-w-[956px] font-montserrat text-base text-black'>
          <p className='mb-3'>
            Read the following instructions carefully before answering the questions.
          </p>
          <ol className='list-decimal pl-4'>
            <li className='mb-2'>
              <p className='mb-2'>
                This question paper consists of THREE sections and covers TWO main topics.
              </p>
              <p className='m-0'>SECTION A: COMPULSORY</p>
              <p className='m-0'>SECTION B: Consists a1 THREE questions.</p>
              <p className='m-0'>Answer any TWO of the three questions in this section</p>
              <p className='m-0'>SECTION C: Consists of TWO questions.</p>
              <p className='m-0'>Answer any ONE of the two questions in this section.</p>
            </li>
            <li className='mb-2'>
              <p className='mb-1'>
                Read the instructions for each question carefully and take note of whet is required.
              </p>
              <p className='m-0'>
                Note that ONLY (he answers to Ihe first TWO questions selected in SECTION B and me
                answers to ttio FIRST question selected in SECTION C will be marked).
              </p>
            </li>
            <li className='mb-2'>
              <p className='mb-0'>
                Number the answers correctly according to the numbering system used in this question
                paper. NO marks will be awarded for answers that are numbered incorrectly.
              </p>
            </li>
            <li className='mb-2'>
              <p className='mb-0'>
                Except where other instructions are given, answers must be written in full
                sentences.
              </p>
            </li>
            <li className='mb-2'>
              <p className='mb-0'>
                Use the mark allocation and nature dl each question to determine the length and
                depth of an answer.
              </p>
            </li>
            <li className='mb-2'>
              <p className='mb-3'>
                Use the table below as a guide for mark and lime allocation when answering each
                question.
              </p>
            </li>
            <li className='mb-2'>
              <p className='mb-0'>
                Begin the answer to EACH question on a NEW page, e.g, QUESTION 1 - new page.
                QUESTION 2 - new page.
              </p>
            </li>
            <li className='mb-2'>
              <p className='mb-0'>You may use a non-programmable calculator.</p>
            </li>
            <li className='mb-2'>
              <p className='mb-0'>Write neatly and legibly.</p>
            </li>
          </ol>
        </div>
        <div className='py-14'>
          <Dialog>
            <DialogTrigger className='mx-auto flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-20 py-6 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 '>
              Add more instructions
            </DialogTrigger>
            <DialogContent className='max-w-[680px] !rounded-3xl'>
              <DialogHeader>
                <DialogTitle className='mb-2 text-center text-xl font-semibold leading-7 text-zinc-800 sm:text-2xl'>
                  Add New Instruction
                </DialogTitle>
                <DialogDescription>
                  <form>
                    <textarea
                      placeholder='Type here'
                      className='mb-4 block h-48 w-full resize-none rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6'
                    ></textarea>
                  </form>
                  <div className='flex gap-4'>
                    <Button className='flex w-1/2 border border-primary bg-white px-10 py-6 text-base font-semibold text-primary hover:text-white'>
                      Cancel
                    </Button>
                    <Button className='flex w-1/2 border border-primary px-10 py-6 text-base font-semibold'>
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
  </section>
);
