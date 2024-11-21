import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import { CreateUserDtoRoleEnum } from '@/lib/sdk/jsdt/Api';

import { ExtendedCreateQuestionDto } from './question';

// Base schema without difficulty level
const baseInvestigationSchema = {
  nsc: z.enum(['IEB', 'NSC'], {
    required_error: 'Please select IEB or NSC',
  }),
  grade: z
    .string({
      required_error: 'Please select a grade',
    })
    .min(1, 'Grade is required'),
  subject: z
    .string({
      required_error: 'Please select a subject',
    })
    .min(1, 'Subject is required'),
  assessmentType: z.enum(['Formative', 'Summative'], {
    required_error: 'Please select an assessment type',
  }),
  topic: z
    .string({
      required_error: 'Please select a topic',
    })
    .min(1, 'Topic is required'),
  totalMarks: z
    .number({
      required_error: 'Total marks is required',
    })
    .min(1, 'Total marks must be greater than 0')
    .max(1000, 'Total marks cannot exceed 1000'),
};

export const investigationSchema = z.discriminatedUnion('role', [
  z.object({
    ...baseInvestigationSchema,
    role: z.literal(CreateUserDtoRoleEnum.Teacher),
    difficultyLevel: z.undefined(),
  }),
  z.object({
    ...baseInvestigationSchema,
    role: z.literal(CreateUserDtoRoleEnum.Learner),
    difficultyLevel: z.enum(['Easy', 'Intermediate', 'Difficult'], {
      required_error: 'Please select difficulty level',
    }),
  }),
]);

export type InvestigationFormData = z.infer<typeof investigationSchema>;

export interface UseInvestigationReturn {
  form: UseFormReturn<InvestigationFormData>;
  isLoading: boolean;
  onSubmit: () => void;
  isLearner: boolean;
  handleAddQuestion: () => void;
  questions: ExtendedCreateQuestionDto[];
  handleDeleteQuestion: (questionId: string) => void;
  handleCheckQuestions: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
