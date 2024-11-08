import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { z } from 'zod';

import { CreateGradeDto } from '@/lib/sdk/jsdt/Api';

import { ApiResponse } from './generic';

export const gradeSchema = z.object({
  title: z.string().min(1, 'Grade is required').max(20, 'Grade cannot exceed 20 characters'),
});
export type GradeFormValues = z.infer<typeof gradeSchema>;

export interface UseGradeFormReturn {
  register: UseFormRegister<GradeFormValues>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<GradeFormValues>;
  loading: boolean;
  setOpen: (open: boolean) => void;
  open: boolean;
  grades: ExtendedCreateGradeDto[];
  deleteGrade: () => Promise<void>;
  selectedGrade: ExtendedCreateGradeDto | null;
  handleEdit: (grade: ExtendedCreateGradeDto) => void;
  setSelectedGrade: (grade: ExtendedCreateGradeDto | null) => void;
  setValue: UseFormSetValue<GradeFormValues>;
  handleDeleteClick: (grade: ExtendedCreateGradeDto) => void;
  deleteModalOpen: boolean;
  setDeleteModalOpen: (open: boolean) => void;
  gradeToDelete: ExtendedCreateGradeDto | null;
  setGradeToDelete: (grade: ExtendedCreateGradeDto | null) => void;
}

export interface ExtendedCreateGradeDto extends CreateGradeDto {
  id: string;
}

export type GradeResponse = ApiResponse<ExtendedCreateGradeDto[]>;
