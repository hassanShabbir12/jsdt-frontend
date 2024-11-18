import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { toast } from '@/hooks/use-toast';
import {
  ExtendedCreateTopicDto,
  TopicFormReturn,
  TopicFormValues,
  TopicResponse,
  topicSchema,
} from '@/interface/topic';
import { CreateTopicDto } from '@/lib/sdk/jsdt/Api';

export function useTopicForm(
  topics: ExtendedCreateTopicDto[],
  setTopics: (topics: ExtendedCreateTopicDto[]) => void,
): TopicFormReturn {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<ExtendedCreateTopicDto | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TopicFormValues>({
    resolver: zodResolver(topicSchema),
  });

  const handleEdit = (topic: ExtendedCreateTopicDto): void => {
    setSelectedTopic(topic);
    setOpen(true);
  };

  const onSubmit = async (topic: CreateTopicDto): Promise<void> => {
    setLoading(true);
    try {
      if (selectedTopic) {
        await apiClient.topic.topicControllerUpdate(selectedTopic.id, topic);
        setTopics(topics.map((t) => (t.id === selectedTopic.id ? { ...t, ...topic } : t)));
        toast({
          title: 'Topic',
          description: 'Topic updated successfully',
        });
      } else {
        const response = (await apiClient.topic.topicControllerCreate(
          topic,
        )) as unknown as AxiosResponse<TopicResponse>;
        const { data } = response;

        if (data.success) {
          const newTopics = Array.isArray(data.data) ? data.data : [data.data];

          setTopics([...newTopics, ...topics]);
          toast({
            title: 'Topic',
            description: 'Topic created successfully',
          });
        }
      }
      setOpen(false);
      setSelectedTopic(null);
      reset();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to create topic',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    open,
    setOpen,
    selectedTopic,
    handleEdit,
    setSelectedTopic,
    setValue,
    reset,
  };
}
