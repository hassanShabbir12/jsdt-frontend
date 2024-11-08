import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { z } from 'zod';

import { CreateSubjectDto } from '@/lib/sdk/jsdt/Api';

import { ApiResponse } from './generic';

// Schema
export const SubjectSchema = z.object({
  title: z.string().min(1, 'Subject is required').max(20, 'subject cannot exceed 20 characters'),
});

// Types
export type SubjectFormValues = z.infer<typeof SubjectSchema>;

// Interfaces
export interface UseSubjectFormReturn {
  register: UseFormRegister<SubjectFormValues>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<SubjectFormValues>;
  loading: boolean;
  setOpen: (open: boolean) => void;
  open: boolean;
  subjects: ExtendedCreateSubjectDto[];
  deleteSubject: () => Promise<void>;
  selectedSubject: ExtendedCreateSubjectDto | null;
  handleEdit: (subject: ExtendedCreateSubjectDto) => void;
  setSelectedSubject: (subject: ExtendedCreateSubjectDto | null) => void;
  setValue: UseFormSetValue<SubjectFormValues>;
  handleDeleteClick: (subject: ExtendedCreateSubjectDto) => void;
  deleteModalOpen: boolean;
  setDeleteModalOpen: (open: boolean) => void;
  subjectToDelete: ExtendedCreateSubjectDto | null;
  setSubjectToDelete: (subject: ExtendedCreateSubjectDto | null) => void;
}

export interface ExtendedCreateSubjectDto extends CreateSubjectDto {
  id: string;
}

export type SubjectResponse = ApiResponse<ExtendedCreateSubjectDto[]>;
