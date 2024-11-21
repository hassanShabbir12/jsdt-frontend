import { useState } from 'react';

import axios from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { toast } from '@/hooks/use-toast';
import { ExtendedCreateQuestionDto } from '@/interface/question';

interface UseDownloadQuestionsReturn {
  downloadQuestions: (questions: ExtendedCreateQuestionDto[], type: string) => Promise<void>;
  loading: boolean;
}

export const useDownloadQuestions = (): UseDownloadQuestionsReturn => {
  const [loading, setLoading] = useState<boolean>(false);
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
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to change password',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { downloadQuestions, loading };
};
