import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError, AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { handleError } from '@/api/config/errorHandler';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { QuestionFormValues, QuestionSchema } from '@/interface/question';
import { GenerateDescriptionDtoTypeEnum } from '@/lib/sdk/jsdt/Api';

interface GenerateDescriptionResponse {
  data: {
    description: string;
  };
  message: string;
  success: boolean;
}

interface UseQuestionFormReturn {
  form: ReturnType<typeof useForm<QuestionFormValues>>;
  processingText: boolean;
  handleProcessText: (fieldType: 'question' | 'answer') => Promise<void>;
  resetFormFields: () => void;
  processingTextAnswer: boolean;
  mode: 'simple' | 'algebra';
  setMode: (mode: 'simple' | 'algebra') => void;
}

export function useQuestionForm(): UseQuestionFormReturn {
  const [processingText, setProcessingText] = useState(false);
  const [processingTextAnswer, setProcessingTextAnswer] = useState(false);
  const [mode, setMode] = useState<'simple' | 'algebra'>('simple');

  const { logout } = useAuth();
  const navigate = useNavigate();

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

  const handleProcessText = async (fieldType: 'question' | 'answer'): Promise<void> => {
    const text = form.getValues(fieldType);

    if (!text) {
      toast({
        title: 'Error',
        description: `Please enter ${fieldType} text first`,
        variant: 'destructive',
      });

      return;
    }

    if (fieldType === 'question') {
      setProcessingText(true);
    } else {
      setProcessingTextAnswer(true);
    }
    try {
      const type =
        fieldType === 'question'
          ? GenerateDescriptionDtoTypeEnum.Question
          : GenerateDescriptionDtoTypeEnum.Answer;

      const response = (await apiClient.questions.questionsControllerGenerateDescription({
        text,
        type,
      })) as unknown as AxiosResponse<GenerateDescriptionResponse>;

      form.setValue(fieldType, response.data.data.description);
      toast({
        title: 'Success',
        description: `${fieldType.charAt(0).toUpperCase() + fieldType.slice(1)} processed successfully`,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
      }
    } finally {
      if (fieldType === 'question') {
        setProcessingText(false);
      } else {
        setProcessingTextAnswer(false);
      }
    }
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
  };

  return {
    form,
    processingText,
    handleProcessText,
    resetFormFields,
    processingTextAnswer,
    mode,
    setMode,
  };
}
