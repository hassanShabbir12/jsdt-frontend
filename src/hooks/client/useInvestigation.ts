import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { ApiResponse } from '@/interface/generic';
import {
  InvestigationFormData,
  investigationSchema,
  UseInvestigationReturn,
} from '@/interface/investigation';
import { ExtendedCreateQuestionDto } from '@/interface/question';
import { CreateUserDtoRoleEnum } from '@/lib/sdk/jsdt/Api';

export const useInvestigation = (): UseInvestigationReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState<ExtendedCreateQuestionDto[]>([]);
  const [clonedQuestions, setClonedQuestions] = useState<ExtendedCreateQuestionDto[]>([]);
  const { user } = useAuth();

  const isLearner = user?.role === CreateUserDtoRoleEnum.Learner;

  const form = useForm<InvestigationFormData>({
    resolver: zodResolver(investigationSchema),
    defaultValues: {
      nsc: undefined,
      grade: '',
      subject: '',
      assessmentType: undefined,
      topic: '',
      role: isLearner ? CreateUserDtoRoleEnum.Learner : CreateUserDtoRoleEnum.Teacher,
      difficultyLevel: isLearner ? undefined : undefined,
      totalMarks: undefined,
    },
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<InvestigationFormData> = async (data): Promise<void> => {
    try {
      setIsLoading(true);

      const response = (await apiClient.questions.questionsControllerGetQuestion({
        grade: data.grade,
        subject: data.subject,
        topic: data.topic,
        assessmentType: data.assessmentType,
        difficultyLevel: data.difficultyLevel,
        totalMarks: String(data.totalMarks),
        certificateType: data.nsc,
      })) as unknown as AxiosResponse<ApiResponse<ExtendedCreateQuestionDto[]>>;
      const newQuestions = response.data.data.filter(
        (newQuestion) =>
          !clonedQuestions.some((existingQuestion) => existingQuestion.id === newQuestion.id),
      );

      if (newQuestions.length === 0) {
        toast({
          title: 'No New Questions',
          description: 'All questions from this selection already exist in your list.',
        });

        return;
      }

      setClonedQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
      if (questions.length > 0) {
        if (newQuestions.length > 0 && questions.length > 0) {
          toast({
            title: 'Questions Added',
            description: 'Questions have been added to your list.',
          });
        }
        setQuestions(questions);
      } else {
        setQuestions([response.data.data[0]]);
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
          description: 'Failed to fetch questions',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddQuestion = (): void => {
    const remainingQuestions = clonedQuestions.filter(
      (availableQ) => !questions.some((selectedQ) => selectedQ.id === availableQ.id),
    );

    if (remainingQuestions.length === 0) {
      toast({
        title: 'No More Questions',
        description: 'All available questions have been added.',
      });

      return;
    }

    // Randomly select one question from remaining questions
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const newQuestion = remainingQuestions[randomIndex];

    setQuestions((prev) => [...prev, newQuestion]);
  };

  const handleDeleteQuestion = (questionId: string): void => {
    // Remove from questions array
    setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== questionId));

    // Remove from clonedQuestions array
    setClonedQuestions((prevCloned) => prevCloned.filter((q) => q.id !== questionId));

    toast({
      title: 'Question Deleted',
      description: 'The question has been removed successfully.',
    });
  };

  return {
    form,
    isLoading,
    onSubmit: form.handleSubmit(onSubmit),
    isLearner,
    questions,
    handleAddQuestion,
    handleDeleteQuestion,
    isOpen,
    setIsOpen,
  };
};
