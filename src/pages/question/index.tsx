import { FC } from 'react';
import { Controller } from 'react-hook-form';

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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGradeList } from '@/hooks/admin/grade/useGradeList';
import { useQuestionForm } from '@/hooks/admin/question/useQuestionForm';
import { useQuestionOperations } from '@/hooks/admin/question/useQuestionOperations';
import { useSubjectList } from '@/hooks/admin/subject/useSubjectList';
import { useTopicList } from '@/hooks/admin/topic/useTopicList';
import { cn } from '@/lib/utils';

import DisplayHtml from './dompurify';
import MathFormulaDisplay from './formula';
import MathLiveInput from './math-live';
import QuillEditor from './quill-editor';

export const Question: FC = () => {
  const {
    form,
    processingText,
    handleProcessText,
    resetFormFields,
    processingTextAnswer,
    mode,
    setMode,
  } = useQuestionForm();

  const {
    loading,
    questions,
    deleteModalOpen,
    setDeleteModalOpen,
    questionToDelete,
    handleDeleteClick,
    isEditing,
    modalOpen,
    setModalOpen,
    handleEditClick,
    deleteQuestion,
    onSubmit,
    setIsEditing,
  } = useQuestionOperations(form, mode);

  const {
    control,
    formState: { errors },
  } = form;

  const { grades } = useGradeList();
  const { subjects } = useSubjectList();
  const { topics } = useTopicList();

  // State to manage the selected mode

  // console.log('form::::::;', form.getValues('question'));

  return (
    <div className='mb-12 px-6 pt-24 md:pl-0 md:pr-6 md:pt-16'>
      <div className='rounded-md bg-white pb-7 shadow-lg'>
        <div className='mb-6 flex items-center justify-between border-b border-neutral-200 px-6 py-3'>
          <h1 className='text-lg font-semibold text-zinc-800'>Questions</h1>
          <Dialog
            open={modalOpen}
            onOpenChange={(open) => {
              setModalOpen(open);
              if (!open) {
                resetFormFields();
                setIsEditing(false);
              }
            }}
          >
            <DialogTrigger asChild>
              <Button className='w-34 h-10 text-sm font-semibold sm:h-12 sm:w-40 sm:text-base'>
                Add New Question
              </Button>
            </DialogTrigger>
            <DialogContent
              className='!container max-h-[80%] max-w-[96%] overflow-y-auto overflow-x-hidden'
              onPointerDownOutside={(e) => e.preventDefault()}
            >
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader>
                  <DialogTitle className='mb-4 text-center text-lg md:text-xl lg:text-2xl'>
                    {isEditing ? 'Edit Question' : 'Add New Question'}
                  </DialogTitle>
                </DialogHeader>
                <div className='grow-1 -mx-2.5 block flex-wrap sm:flex'>
                  <div className='mb-4 w-full px-2.5 sm:w-1/2'>
                    <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                      IEB/NSC
                    </Label>
                    <div className='w-full'>
                      <Controller
                        name='certificateType'
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='Select certificate type' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Types</SelectLabel>
                                <SelectItem value='IEB'>IEB</SelectItem>
                                <SelectItem value='NSC'>NSC</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    {errors.certificateType && (
                      <span className='text-sm text-red-500'>{errors.certificateType.message}</span>
                    )}
                  </div>
                  <div className='mb-4 w-full px-2.5 sm:w-1/2'>
                    <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                      Grade
                    </Label>
                    <div className='w-full'>
                      <Controller
                        name='grade'
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='Select grade' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Grades</SelectLabel>
                                {grades.map((grade) => (
                                  <SelectItem key={grade.id} value={grade.title}>
                                    {grade.title}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.grade && (
                        <span className='text-sm text-red-500'>{errors.grade.message}</span>
                      )}
                    </div>
                  </div>
                  <div className='mb-4 w-full px-2.5 sm:w-1/2'>
                    <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                      Assessment Type
                    </Label>
                    <div className='w-full'>
                      <Controller
                        name='assessmentType'
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='Select assessment type' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Types</SelectLabel>
                                <SelectItem value='Formative'>Formative</SelectItem>
                                <SelectItem value='Summative'>Summative</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.assessmentType && (
                        <span className='text-sm text-red-500'>
                          {errors.assessmentType.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='mb-4 w-full px-2.5 sm:w-1/2'>
                    <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                      Topic
                    </Label>
                    <div className='w-full'>
                      <Controller
                        name='topic'
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='Select topic' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Topics</SelectLabel>
                                {topics.map((topic) => (
                                  <SelectItem key={topic.id} value={topic.title}>
                                    {topic.title}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.topic && (
                        <span className='text-sm text-red-500'>{errors.topic.message}</span>
                      )}
                    </div>
                  </div>
                  <div className='mb-4 w-full px-2.5 sm:w-1/2'>
                    <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                      Subject
                    </Label>
                    <div className='w-full'>
                      <Controller
                        name='subject'
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='Select subject' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Subjects</SelectLabel>
                                {subjects.map((subject) => (
                                  <SelectItem key={subject.id} value={subject.title}>
                                    {subject.title}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.subject && (
                        <span className='text-sm text-red-500'>{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  <div className='mb-4 w-full px-2.5 sm:w-1/2'>
                    <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                      Difficulty Level
                    </Label>
                    <div className='w-full'>
                      <Controller
                        name='difficultyLevel'
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='Select difficulty level' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Difficulty</SelectLabel>
                                <SelectItem value='Easy'>Easy</SelectItem>
                                <SelectItem value='Intermediate'>Intermediate</SelectItem>
                                <SelectItem value='Difficult'>Difficult</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.difficultyLevel && (
                        <span className='text-sm text-red-500'>
                          {errors.difficultyLevel.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='mb-4 w-full px-2.5 sm:w-1/2'>
                    <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                      Total Marks
                    </Label>
                    <div className='w-full'>
                      <Controller
                        name='totalMarks'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <Input
                            min='0'
                            type='number'
                            value={value || ''}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder='Enter total marks (e.g., 500, 1000)'
                            className='h-12 rounded-lg border border-solid 
                        border-neutral-200 px-4 py-2 text-sm 
          text-zinc-800 shadow-none [appearance:textfield] placeholder:text-sm 
          placeholder:text-stone-300 focus-visible:outline-none focus-visible:ring-0 
          lg:px-3 [&::-webkit-inner-spin-button]:appearance-none 
          [&::-webkit-outer-spin-button]:appearance-none'
                          />
                        )}
                      />
                      {errors.totalMarks && (
                        <span className='text-sm text-red-500'>{errors.totalMarks.message}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className='mb-4 w-full'>
                  <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                    Select Mode
                  </Label>
                  <div className='flex space-x-4'>
                    <label>
                      <input
                        type='radio'
                        value='simple'
                        checked={mode === 'simple'}
                        onChange={() => setMode('simple')}
                      />
                      Simple
                    </label>
                    <label>
                      <input
                        type='radio'
                        value='algebra'
                        checked={mode === 'algebra'}
                        onChange={() => setMode('algebra')}
                      />
                      Algebra
                    </label>
                  </div>
                </div>
                <div className='mb-4 w-full'>
                  <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                    Question
                  </Label>
                  <div className='relative overflow-hidden rounded-md border border-input focus-within:border-blue-700 [&_>div]:border-0'>
                    {mode === 'simple' ? (
                      <>
                        <QuillEditor
                          value={form.getValues('question')}
                          onChange={(content) => form.setValue('question', content)}
                          placeholder='Type here...'
                        />
                        <div className='relative p-4 pt-2'>
                          <Button
                            type='button'
                            onClick={() => handleProcessText('question')}
                            loading={processingText}
                            variant='outline'
                            className={cn(
                              'cursor-pointer w-40 rounded-full !border-0 px-3 py-2 text-xs text-blue-500',
                              'bg-gray-200',
                              {
                                'bg-primary': processingText,
                              },
                            )}
                          >
                            Write question with AI
                          </Button>
                        </div>
                      </>
                    ) : (
                      <MathLiveInput
                        value={form.getValues('question')}
                        onChange={(value) => {
                          form.setValue('question', value); // Update the form state
                        }}
                        placeholder='Type your algebraic expression here...'
                      />
                    )}
                  </div>
                  {errors.question && (
                    <span className='text-sm text-red-500'>{errors.question.message}</span>
                  )}
                </div>
                {/* <MathFormulaDisplay formula={form.getValues('question')} /> */}

                {/* <DisplayHtml htmlContent={form.getValues('question')} /> */}
                <div className='w-full'>
                  <Label className='mb-2 block text-base font-normal leading-none text-zinc-800'>
                    Answer
                  </Label>
                  <div className='relative overflow-hidden rounded-md border border-input focus-within:border-blue-700 [&_>div]:border-0'>
                    {mode === 'simple' ? (
                      <>
                        <QuillEditor
                          value={form.getValues('answer')}
                          onChange={(content) => form.setValue('answer', content)}
                          placeholder='Type here...'
                        />
                        <div className='relative p-4 pt-2'>
                          <Button
                            type='button'
                            onClick={() => handleProcessText('answer')}
                            loading={processingTextAnswer}
                            variant='outline'
                            className={cn(
                              'cursor-pointer rounded-full w-40 !border-0 px-3 py-2 text-xs text-blue-500',
                              'bg-gray-200',
                              {
                                'bg-primary': processingTextAnswer,
                              },
                            )}
                          >
                            Write answer with AI
                          </Button>
                        </div>
                      </>
                    ) : (
                      <MathLiveInput
                        value={form.getValues('answer')}
                        onChange={(value) => {
                          form.setValue('answer', value); // Update the form state
                        }}
                        placeholder='Type your algebraic expression here...'
                      />
                    )}
                  </div>
                  {errors.answer && (
                    <span className='text-sm text-red-500'>{errors.answer.message}</span>
                  )}
                </div>

                <DialogFooter>
                  <div className='mx-auto flex max-w-xl gap-x-4 pt-5'>
                    <div className='w-32 sm:w-40 md:w-64'>
                      <Button
                        type='button'
                        variant='outline'
                        className='h-12 w-full text-base font-semibold hover:!bg-primary hover:text-white'
                        onClick={() => {
                          setModalOpen(false);
                          resetFormFields();
                          setIsEditing(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                    <div className='w-32 sm:w-40 md:w-64'>
                      <Button
                        type='submit'
                        loading={loading}
                        className='h-12 w-full text-base font-semibold'
                      >
                        {isEditing ? 'Update' : 'Save'}
                      </Button>
                    </div>
                  </div>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className='px-6'>
          <div className='overflow-auto'>
            <Table className='w-[800px] sm:w-full'>
              <TableCaption>Showing 1 to 10 of 100 listings</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[86%]'>Questions</TableHead>
                  <TableHead className='border-l border-solid border-zinc-300'>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {questions.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className='font-base text-zinc-800'>
                      {item.type === 'simple' ? (
                        <DisplayHtml htmlContent={item.question} />
                      ) : (
                        <MathFormulaDisplay formula={item.question} />
                      )}
                    </TableCell>
                    <TableCell className='border-l border-solid border-zinc-300'>
                      <div className='flex gap-2'>
                        <i
                          onClick={() => handleEditClick(item)}
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
        <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
          <DialogContent className='max-w-[620px]'>
            <DialogHeader>
              <DialogTitle className='mb-6 text-center'>Do you want to delete?</DialogTitle>
            </DialogHeader>
            <p className='mb-6 text-center text-gray-600'>
              Are you sure you want to delete this question? This action cannot be undone.
            </p>
            <DialogFooter>
              <div className='flex w-full justify-center gap-4'>
                <div className='w-1/2'>
                  <Button
                    variant='outline'
                    className='h-12 w-full text-base font-semibold hover:!bg-primary'
                    onClick={() => setDeleteModalOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
                <div className='w-1/2'>
                  <Button
                    className='h-12 w-full text-base font-semibold'
                    loading={loading}
                    onClick={() => questionToDelete && deleteQuestion(questionToDelete.id)}
                  >
                    Yes
                  </Button>
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
