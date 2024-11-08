import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { ApiResponse } from '@/interface/generic';
import {
  ExtendedCreateQuestionDto,
  QuestionFormValues,
  QuestionResponse,
  QuestionSchema,
  UseQuestionReturn,
} from '@/interface/question';

import { toast } from '../use-toast';

export function useQuestion(): UseQuestionReturn {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<ExtendedCreateQuestionDto[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState<ExtendedCreateQuestionDto | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm<QuestionFormValues>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      question: '',
      answer: '',
      certificateType: '',
      grade: '',
      subject: '',
      assessmentType: '',
      topic: '',
      difficultyLevel: '',
      totalMarks: '',
    },
  });

  const handleDeleteClick = (question: ExtendedCreateQuestionDto): void => {
    setQuestionToDelete(question);
    setDeleteModalOpen(true);
  };

  const deleteQuestion = async (id: string): Promise<void> => {
    setLoading(true);
    try {
      await apiClient.questions.questionsControllerRemove(id);
      setQuestions(questions.filter((question) => question.id !== id));
      toast({
        title: 'Success',
        description: 'Question deleted successfully',
      });
      setDeleteModalOpen(false);
      setQuestionToDelete(null);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to delete question',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (questiondata: QuestionFormValues): Promise<void> => {
    setLoading(true);
    try {
      if (isEditing && questionToDelete?.id) {
        await apiClient.questions.questionsControllerUpdate(questionToDelete.id, questiondata);
        setQuestions(
          questions.map((question) =>
            question.id === questionToDelete.id ? { ...question, ...questiondata } : question,
          ),
        );
        toast({
          title: 'Success',
          description: 'Question updated successfully',
        });
      } else {
        const response = (await apiClient.questions.questionsControllerCreate(
          questiondata,
        )) as unknown as AxiosResponse<QuestionResponse>;
        const { data } = response;
        const newquestion = Array.isArray(data.data) ? data.data : [data.data];

        setQuestions([...questions, ...newquestion]);
        toast({
          title: 'Success',
          description: 'Question created successfully',
        });
      }
      form.reset();
      setModalOpen(false);
      setIsEditing(false);
      setQuestionToDelete(null);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: `Failed to ${isEditing ? 'update' : 'create'} question`,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchQuestions = async (): Promise<void> => {
    setLoading(true);
    try {
      const response =
        (await apiClient.questions.questionsControllerGetQuestion()) as unknown as AxiosResponse<
          ApiResponse<ExtendedCreateQuestionDto[]>
        >;

      const extendedquestion = response.data.data.map((question) => ({
        ...question,
        id: question.id || '',
      }));

      setQuestions(extendedquestion);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch questions',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleEditClick = (question: ExtendedCreateQuestionDto): void => {
    form.reset({
      question: question.question,
      answer: question.answer,
      certificateType: question.certificateType,
      grade: question.grade,
      subject: question.subject,
      assessmentType: question.assessmentType,
      topic: question.topic,
      difficultyLevel: question.difficultyLevel,
      totalMarks: question.totalMarks,
    });
    setQuestionToDelete(question);
    setIsEditing(true);
    setModalOpen(true);
  };

  const resetFormFields = (): void => {
    form.reset({
      question: '',
      answer: '',
      certificateType: '',
      grade: '',
      subject: '',
      assessmentType: '',
      topic: '',
      difficultyLevel: '',
      totalMarks: '',
    });
    setIsEditing(false);
    setQuestionToDelete(null);
  };

  return {
    loading,
    form,
    questions,
    onSubmit: form.handleSubmit(onSubmit),
    deleteQuestion,
    deleteModalOpen,
    setDeleteModalOpen,
    questionToDelete,
    handleDeleteClick,
    isEditing,
    setIsEditing,
    modalOpen,
    setModalOpen,
    handleEditClick,
    resetFormFields,
  };
}
