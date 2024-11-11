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
  UseQuestionOperationsReturn: UseQuestionOperationsReturn;
  handleProcessText: (fieldType: 'question' | 'answer') => Promise<void>;
  processingText: boolean;
}

export interface UseQuestionOperationsReturn {
  loading: boolean;
  questions: ExtendedCreateQuestionDto[];
  deleteModalOpen: boolean;
  questionToDelete: ExtendedCreateQuestionDto | null;
  isEditing: boolean;
  modalOpen: boolean;
  onSubmit: (data: QuestionFormValues) => Promise<void>;
  handleDeleteClick: (question: ExtendedCreateQuestionDto) => void;
  deleteQuestion: (id: string) => Promise<void>;
  setDeleteModalOpen: (open: boolean) => void;
  setIsEditing: (editing: boolean) => void;
  setModalOpen: (open: boolean) => void;
  handleEditClick: (question: ExtendedCreateQuestionDto) => void;
}

export type QuestionResponse = ApiResponse<ExtendedCreateQuestionDto[]>;
