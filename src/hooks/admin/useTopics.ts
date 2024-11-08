import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import {
  ExtendedCreateTopicDto,
  TopicFormValues,
  TopicResponse,
  topicSchema,
  UseTopicFormReturn,
} from '@/interface/topic';
import { CreateTopicDto } from '@/lib/sdk/jsdt/Api';

import { toast } from '../use-toast';

export function useTopicForm(): UseTopicFormReturn {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [topics, setTopics] = useState<ExtendedCreateTopicDto[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<ExtendedCreateTopicDto | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [topicToDelete, setTopicToDelete] = useState<ExtendedCreateTopicDto | null>(null);

  const handleDeleteClick = (topic: ExtendedCreateTopicDto): void => {
    setTopicToDelete(topic);
    setDeleteModalOpen(true);
  };

  const handleEdit = (topic: ExtendedCreateTopicDto): void => {
    setSelectedTopic(topic);
    setOpen(true);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TopicFormValues>({
    resolver: zodResolver(topicSchema),
  });

  const fetchTopics = async (): Promise<void> => {
    try {
      const response =
        (await apiClient.topic.topicControllerFindAll()) as unknown as AxiosResponse<TopicResponse>;
      const { data } = response;
      const extendedTopics = data.data.map((topic) => ({
        ...topic,
        id: topic.id || '',
      }));

      setTopics(extendedTopics);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteTopic = async (): Promise<void> => {
    setLoading(true);
    try {
      if (topicToDelete) {
        await apiClient.topic.topicControllerRemove(topicToDelete?.id);
        setTopics(topics.filter((topic) => topic.id !== topicToDelete?.id));
        setDeleteModalOpen(false);
        toast({
          title: 'Topic',
          description: 'Topic Deleted successfully',
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

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
          const newTopic = Array.isArray(data.data) ? data.data : [data.data];

          setTopics([...topics, ...newTopic]);
          toast({
            title: 'Topic',
            description: 'Topic created successfully',
          });
        }
      }
      setOpen(false);
      setSelectedTopic(null);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
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
    topics,
    deleteTopic,
    selectedTopic,
    handleEdit,
    setSelectedTopic,
    setValue,
    handleDeleteClick,
    deleteModalOpen,
    setDeleteModalOpen,
    topicToDelete,
    setTopicToDelete,
    fetchTopics,
  };
}
