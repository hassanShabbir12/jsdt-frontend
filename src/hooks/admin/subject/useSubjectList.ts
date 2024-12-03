import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AxiosError, AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { handleError } from '@/api/config/errorHandler';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { ExtendedCreateSubjectDto, SubjectListReturn, SubjectResponse } from '@/interface/subject';

export function useSubjectList(): SubjectListReturn {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState<ExtendedCreateSubjectDto[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState<ExtendedCreateSubjectDto | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleDeleteClick = (subject: ExtendedCreateSubjectDto): void => {
    setSubjectToDelete(subject);
    setDeleteModalOpen(true);
  };

  const fetchSubjects = async (): Promise<void> => {
    try {
      const response =
        // eslint-disable-next-line max-len
        (await apiClient.subject.subjectControllerFindAll()) as unknown as AxiosResponse<SubjectResponse>;
      const { data } = response;
      const extendedSubjects = data.data.map((subject) => ({
        ...subject,
        id: subject.id || '',
      }));

      setSubjects(extendedSubjects);
    } catch (error) {
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteSubject = async (): Promise<void> => {
    setLoading(true);
    try {
      if (subjectToDelete) {
        await apiClient.subject.subjectControllerRemove(subjectToDelete?.id);
        setSubjects(subjects.filter((subject) => subject.id !== subjectToDelete?.id));
        setDeleteModalOpen(false);
        toast({
          title: 'Subject',
          description: 'Subject Deleted successfully',
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
    fetchSubjects();
  }, []);

  return {
    loading,
    subjects,
    setSubjects,
    deleteSubject,
    handleDeleteClick,
    deleteModalOpen,
    setDeleteModalOpen,
    subjectToDelete,
    setSubjectToDelete,
  };
}
