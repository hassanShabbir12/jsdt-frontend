import { useEffect, useLayoutEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { handleError } from '@/api/config/errorHandler';
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
import { initialInstructions, staticImage } from '@/utils/dump';

// import useEditor from './useGrid';

export const useInvestigation = (editorValue: string): UseInvestigationReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState<ExtendedCreateQuestionDto[]>([]);
  const [clonedQuestions, setClonedQuestions] = useState<ExtendedCreateQuestionDto[]>([]);
  const [isLearner, setIsLearner] = useState<boolean | null>(null);
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  interface IUploadedFileResponse {
    publicUrl: string;
  }

  useEffect(() => {
    if (user) {
      setIsLearner(user?.role === CreateUserDtoRoleEnum.Learner ? true : false);
    }
  }, [user]);

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

  const handleCheckData = async (): Promise<void> => {
    const img: string | null = localStorage.getItem('image');
    let coverimage = null;

    if (questions.length === 0) {
      toast({
        title: 'No Questions',
        description: 'Please add questions before proceeding.',
      });

      return;
    }
    const instructions = JSON.parse(localStorage.getItem('instructions') as string);

    const coverData = localStorage.getItem('coverFormData') as string;

    if (!coverData && !isLearner) {
      toast({
        title: 'No Cover Data',
        description: 'Please add cover data before proceeding.',
      });

      return;
    }

    try {
      setPdfLoading(true);
      if (img !== 'null' && img) {
        const convertImage = JSON.parse(img);
        const base64Data = convertImage?.split(',')[1];
        const byteCharacters = atob(base64Data);
        const byteArray = new Uint8Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
          byteArray[i] = byteCharacters.charCodeAt(i);
        }

        // Create a Blob from the byte array
        const blob = new Blob([byteArray], { type: 'image/jpeg' });

        // Create FormData and append the Blob
        const formData: FormData = new FormData();

        formData.append('file', blob, 'image.jpg');

        const imageResponse = (await apiClient.upload.uploadControllerUploadMedia({
          file: formData.get('file') as File,
        })) as unknown as AxiosResponse<ApiResponse<IUploadedFileResponse>>;

        coverimage = imageResponse?.data?.data?.publicUrl;
      }
      const data = {
        coverData: isLearner
          ? null
          : { imageURL: coverimage ? coverimage : staticImage, ...JSON.parse(coverData) },
        instructionsData:
          typeof instructions === 'object' ? instructions : JSON.parse(instructions),
        items: questions.map((item) => item.id),
        grid: editorValue,
      };
      const response = (await apiClient.pdf.pdfControllerDownloadPdf(data)) as unknown as {
        data: Blob;
      };
      const pdfUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');

      link.href = pdfUrl;
      link.setAttribute('download', 'custom-design.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(pdfUrl);
      localStorage.removeItem('coverFormData');
      localStorage.removeItem('image');
      localStorage.setItem('instructions', JSON.stringify(initialInstructions));
      toast({
        title: 'PDF Download',
        description: 'Your PDF has been downloaded successfully.',
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
      }
    } finally {
      setPdfLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      const isLearner = user.role === CreateUserDtoRoleEnum.Learner;

      form.reset({
        nsc: undefined,
        grade: '',
        subject: '',
        assessmentType: undefined,
        topic: '',
        role: isLearner ? CreateUserDtoRoleEnum.Learner : CreateUserDtoRoleEnum.Teacher,
        difficultyLevel: isLearner ? undefined : undefined,
        totalMarks: undefined,
      });
    }
  }, [user, form]);

  useEffect(() => {
    localStorage.setItem('instructions', JSON.stringify(initialInstructions));
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.onload = (): void => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 150);
    };
  }, []);

  useLayoutEffect(() => {
    const handleBeforeUnload = (): void => {
      localStorage.removeItem('coverFormData');
      localStorage.removeItem('image');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return (): void => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return {
    form,
    isLoading,
    onSubmit: form.handleSubmit(onSubmit),
    isLearner,
    questions,
    handleAddQuestion,
    handleDeleteQuestion,
    handleCheckData,
    isOpen,
    setIsOpen,
    pdfLoading,
    currentQuestionId,
    setCurrentQuestionId,
  };
};
