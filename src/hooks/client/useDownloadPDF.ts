import { MutableRefObject, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { handleError } from '@/api/config/errorHandler';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { ExtendedCreateQuestionDto } from '@/interface/question';

interface UseDownloadQuestionsReturn {
  downloadQuestions: (questions: ExtendedCreateQuestionDto[], type: string) => Promise<void>;
  loading: boolean;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

export const useDownloadQuestions = (): UseDownloadQuestionsReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const downloadQuestions = async (
    questions: ExtendedCreateQuestionDto[],
    type: string,
  ): Promise<void> => {
    try {
      if (!questions || questions.length === 0) {
        toast({
          title: 'Error',
          description: 'No questions available to download.',
        });

        return;
      }
      setLoading(true);
      const idArray = questions.map((item) => item.id);
      const queryParams = { type };
      const body = {
        items: idArray,
      };
      const response = (await apiClient.pdf.pdfControllerQuestionAnswerPdf(
        queryParams,
        body,
      )) as unknown as { data: Blob };
      const pdfUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');

      link.href = pdfUrl;
      link.setAttribute('download', 'custom-design.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(pdfUrl);
      toast({
        title: 'PDF Download',
        description: 'Your PDF has been downloaded successfully.',
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
      }
    } finally {
      setLoading(false);
    }
  };

  return { downloadQuestions, containerRef, loading };
};
