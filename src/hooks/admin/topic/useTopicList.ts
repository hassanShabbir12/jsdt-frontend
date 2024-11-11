import { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { ExtendedCreateTopicDto, TopicListReturn, TopicResponse } from '@/interface/topic';

import { toast } from '../../use-toast';

export function useTopicList(): TopicListReturn {
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState<ExtendedCreateTopicDto[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [topicToDelete, setTopicToDelete] = useState<ExtendedCreateTopicDto | null>(null);

  const handleDeleteClick = (topic: ExtendedCreateTopicDto): void => {
    setTopicToDelete(topic);
    setDeleteModalOpen(true);
  };

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
          description: 'Failed to fetch topics',
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
          description: 'Failed to delete topic',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return {
    loading,
    topics,
    setTopics,
    deleteTopic,
    handleDeleteClick,
    deleteModalOpen,
    setDeleteModalOpen,
    topicToDelete,
    setTopicToDelete,
  };
}
