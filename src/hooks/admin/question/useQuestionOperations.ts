import { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AxiosError, AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { handleError } from '@/api/config/errorHandler';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { ApiResponse } from '@/interface/generic';
import {
  ExtendedCreateQuestionDto,
  QuestionFormValues,
  QuestionResponse,
  UseQuestionOperationsReturn,
} from '@/interface/question';

interface IUploadedFileResponse {
  publicUrl: string;
}

export function useQuestionOperations(
  form: UseFormReturn<QuestionFormValues>,
  mode: string,
  setMode: (newMode: string) => void,
  setTempImage: (newImage: string) => void,
): UseQuestionOperationsReturn {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<ExtendedCreateQuestionDto[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState<ExtendedCreateQuestionDto | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const fetchQuestions = async (): Promise<void> => {
    setLoading(true);
    try {
      const response =
        (await apiClient.questions.questionsControllerGetQuestion()) as unknown as AxiosResponse<
          ApiResponse<ExtendedCreateQuestionDto[]>
        >;

      const extendedquestion = response.data.data.map((question) => ({
        ...question,
        id: question.id as string,
      }));

      setQuestions(extendedquestion);
    } catch (error) {
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
      }
    } finally {
      setLoading(false);
    }
  };

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
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
      }
    } finally {
      setLoading(false);
    }
  };

  const processImage = async (image: string): Promise<string> => {
    // Check if the image string starts with 'https'
    if (image.startsWith('https')) {
      return image; // Return the image URL directly if it's already a valid URL
    }

    const [, base64Data] = image.split(',');
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

    // Upload the image and get the response
    const imageResponse = (await apiClient.upload.uploadControllerUploadMedia({
      file: formData.get('file') as File,
    })) as unknown as AxiosResponse<ApiResponse<IUploadedFileResponse>>;

    return imageResponse?.data?.data?.publicUrl; // Return the uploaded image URL
  };

  const onSubmit = async (questiondata: QuestionFormValues): Promise<void> => {
    setLoading(true);
    let convertImage = '';

    try {
      if (form.getValues('image') !== 'null' && form.getValues('image')) {
        convertImage = await processImage(form.getValues('image') as string);
      }
      if (isEditing && questionToDelete?.id) {
        await apiClient.questions.questionsControllerUpdate(questionToDelete.id, {
          ...questiondata,
          image: convertImage,
          type: mode,
        });
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
        const response = (await apiClient.questions.questionsControllerCreate({
          ...questiondata,
          image: convertImage,
          type: 'simple',
        })) as unknown as AxiosResponse<QuestionResponse>;
        const newquestion = Array.isArray(response.data.data)
          ? response.data.data
          : [response.data.data];

        setQuestions([...newquestion, ...questions]);
        toast({
          title: 'Success',
          description: 'Question created successfully',
        });
      }
      form.reset(); // Use the passed form
      setModalOpen(false);
      setIsEditing(false);
      setQuestionToDelete(null);
    } catch (error) {
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
      }
    } finally {
      setLoading(false);
    }
  };

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
    setMode(question.type);
    setTempImage(question.image);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return {
    loading,
    questions,
    deleteModalOpen,
    questionToDelete,
    isEditing,
    modalOpen,
    onSubmit,
    handleDeleteClick,
    deleteQuestion,
    setDeleteModalOpen,
    setIsEditing,
    setModalOpen,
    handleEditClick,
  };
}
