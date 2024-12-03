import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AxiosError, AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { handleError } from '@/api/config/errorHandler';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { ExtendedCreateTopicDto, TopicListReturn, TopicResponse } from '@/interface/topic';

export function useTopicList(): TopicListReturn {
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState<ExtendedCreateTopicDto[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [topicToDelete, setTopicToDelete] = useState<ExtendedCreateTopicDto | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

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
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
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
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
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
