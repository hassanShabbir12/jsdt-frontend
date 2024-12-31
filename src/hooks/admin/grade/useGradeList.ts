import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AxiosError, AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { handleError } from '@/api/config/errorHandler';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { ExtendedCreateGradeDto, GradeListReturn, GradeResponse } from '@/interface/grads';

export function useGradeList(): GradeListReturn {
  const [loading, setLoading] = useState(false);
  const [grades, setGrades] = useState<ExtendedCreateGradeDto[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [gradeLoading, setGradeLoading] = useState(false);
  const [gradeToDelete, setGradeToDelete] = useState<ExtendedCreateGradeDto | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleDeleteClick = (grade: ExtendedCreateGradeDto): void => {
    setGradeToDelete(grade);
    setDeleteModalOpen(true);
  };

  const fetchGrades = async (): Promise<void> => {
    setGradeLoading(true);
    try {
      const response =
        // eslint-disable-next-line max-len
        (await apiClient.grades.gradesControllerFindAll()) as unknown as AxiosResponse<GradeResponse>;
      const { data } = response;
      const extendedGrades = data.data.map((grade) => ({
        ...grade,
        id: grade.id || '',
      }));

      setGrades(extendedGrades);
    } catch (error) {
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
      }
    } finally {
      setGradeLoading(false);
    }
  };

  const deleteGrade = async (): Promise<void> => {
    setLoading(true);
    try {
      if (gradeToDelete) {
        await apiClient.grades.gradesControllerRemove(gradeToDelete?.id);
        setGrades(grades.filter((grade) => grade.id !== gradeToDelete?.id));
        setDeleteModalOpen(false);
        toast({
          title: 'Grade',
          description: 'Grade Deleted successfully',
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
    fetchGrades();
  }, []);

  return {
    loading,
    grades,
    setGrades,
    deleteGrade,
    handleDeleteClick,
    deleteModalOpen,
    setDeleteModalOpen,
    gradeToDelete,
    setGradeToDelete,
    gradeLoading,
  };
}
