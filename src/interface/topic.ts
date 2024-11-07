import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { z } from 'zod';

import { CreateTopicDto } from '@/lib/sdk/jsdt/Api';

import { ApiResponse } from './generic';

// Schema
export const topicSchema = z.object({
  title: z.string().min(1, 'Topic is required'),
});

// Types
export type TopicFormValues = z.infer<typeof topicSchema>;

// Interfaces
export interface UseTopicFormReturn {
  register: UseFormRegister<TopicFormValues>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<TopicFormValues>;
  loading: boolean;
  setOpen: (open: boolean) => void;
  open: boolean;
  topics: ExtendedCreateTopicDto[];
  deleteTopic: () => Promise<void>;
  selectedTopic: ExtendedCreateTopicDto | null;
  handleEdit: (topic: ExtendedCreateTopicDto) => void;
  setSelectedTopic: (topic: ExtendedCreateTopicDto | null) => void;
  setValue: UseFormSetValue<TopicFormValues>;
  handleDeleteClick: (topic: ExtendedCreateTopicDto) => void;
  deleteModalOpen: boolean;
  setDeleteModalOpen: (open: boolean) => void;
  topicToDelete: ExtendedCreateTopicDto | null;
  setTopicToDelete: (topic: ExtendedCreateTopicDto | null) => void;
}

export interface ExtendedCreateTopicDto extends CreateTopicDto {
  id: string;
}

export type TopicResponse = ApiResponse<ExtendedCreateTopicDto[]>;
