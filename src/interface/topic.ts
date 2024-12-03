import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { z } from 'zod';

import { CreateTopicDto } from '@/lib/sdk/jsdt/Api';

import { ApiResponse } from './generic';

// Schema
export const topicSchema = z.object({
  title: z
    .string()
    .min(1, 'Topic is required')
    .max(75, 'Topic cannot exceed 75 characters')
    .refine((value) => value.trim().length > 0, 'Topic cannot be empty or just spaces')
    .transform((value) => value.trim()),
});

// Types
export type TopicFormValues = z.infer<typeof topicSchema>;

// Interfaces
export interface TopicListReturn {
  loading: boolean;
  topics: ExtendedCreateTopicDto[];
  setTopics: (topics: ExtendedCreateTopicDto[]) => void;
  deleteTopic: () => Promise<void>;
  handleDeleteClick: (topic: ExtendedCreateTopicDto) => void;
  deleteModalOpen: boolean;
  setDeleteModalOpen: (open: boolean) => void;
  topicToDelete: ExtendedCreateTopicDto | null;
  setTopicToDelete: (topic: ExtendedCreateTopicDto | null) => void;
}

export interface TopicFormReturn {
  register: UseFormRegister<TopicFormValues>;
  handleSubmit: (e: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<TopicFormValues>;
  loading: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedTopic: ExtendedCreateTopicDto | null;
  handleEdit: (topic: ExtendedCreateTopicDto) => void;
  setSelectedTopic: (topic: ExtendedCreateTopicDto | null) => void;
  setValue: UseFormSetValue<TopicFormValues>;
  reset: () => void;
}

export interface ExtendedCreateTopicDto extends CreateTopicDto {
  id: string;
}

export type TopicResponse = ApiResponse<ExtendedCreateTopicDto[]>;
