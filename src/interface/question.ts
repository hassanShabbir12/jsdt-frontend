import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import { CreateQuestionDto } from '@/lib/sdk/jsdt/Api';

import { ApiResponse } from './generic';

export const QuestionSchema = z.object({
  question: z.string().min(1, 'Question is required'),
  answer: z.string().min(1, 'Answer is required'),
  certificateType: z.string().min(1, 'Certificate type is required'),
  grade: z.string().min(1, 'Grade is required'),
  subject: z.string().min(1, 'Subject is required'),
  assessmentType: z.string().min(1, 'Assessment type is required'),
  topic: z.string().min(1, 'Topic is required'),
  difficultyLevel: z.string().min(1, 'Difficulty level is required'),
  totalMarks: z.string().min(1, 'Total marks is required'),
});

export type QuestionFormValues = z.infer<typeof QuestionSchema>;

export interface ExtendedCreateQuestionDto extends CreateQuestionDto {
  id: string;
}

export interface UseQuestionReturn {
  loading: boolean;
  form: UseFormReturn<QuestionFormValues>;
  onSubmit: (e: React.BaseSyntheticEvent) => Promise<void>;
  questions: ExtendedCreateQuestionDto[];
  deleteQuestion: (id: string) => Promise<void>;
  deleteModalOpen: boolean;
  setDeleteModalOpen: (open: boolean) => void;
  questionToDelete: ExtendedCreateQuestionDto | null;
  handleDeleteClick: (question: ExtendedCreateQuestionDto) => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  handleEditClick: (question: ExtendedCreateQuestionDto) => void;
  resetFormFields: () => void;
  handleProcessText: (fieldType: 'question' | 'answer') => Promise<void>;
  processingText: boolean;
}

export type QuestionResponse = ApiResponse<ExtendedCreateQuestionDto[]>;
