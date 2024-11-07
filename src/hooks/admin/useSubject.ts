import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import {
  ExtendedCreateSubjectDto,
  SubjectFormValues,
  SubjectResponse,
  SubjectSchema,
  UseSubjectFormReturn,
} from '@/interface/subject';
import { CreateSubjectDto } from '@/lib/sdk/jsdt/Api';

import { toast } from '../use-toast';

export function useSubjectForm(): UseSubjectFormReturn {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [subjects, setSubjects] = useState<ExtendedCreateSubjectDto[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<ExtendedCreateSubjectDto | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState<ExtendedCreateSubjectDto | null>(null);

  const handleDeleteClick = (subject: ExtendedCreateSubjectDto): void => {
    setSubjectToDelete(subject);
    setDeleteModalOpen(true);
  };

  const handleEdit = (subject: ExtendedCreateSubjectDto): void => {
    setSelectedSubject(subject);
    setOpen(true);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SubjectFormValues>({
    resolver: zodResolver(SubjectSchema),
  });

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
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
        });
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
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const onSubmit = async (subject: CreateSubjectDto): Promise<void> => {
    setLoading(true);
    try {
      if (selectedSubject) {
        await apiClient.subject.subjectControllerUpdate(selectedSubject.id, subject);
        setSubjects(subjects.map((s) => (s.id === selectedSubject.id ? { ...s, ...subject } : s)));
        toast({
          title: 'Subject',
          description: 'Subject updated successfully',
        });
      } else {
        const response = (await apiClient.subject.subjectControllerCreate(
          subject,
        )) as unknown as AxiosResponse<SubjectResponse>;
        const { data } = response;

        if (data.success) {
          const newsubject = Array.isArray(data.data) ? data.data : [data.data];

          setSubjects([...subjects, ...newsubject]);
          toast({
            title: 'Subject',
            description: 'Subject created successfully',
          });
        }
      }
      setOpen(false);
      setSelectedSubject(null);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'An unexpected error occurred',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    open,
    setOpen,
    subjects,
    deleteSubject,
    selectedSubject,
    handleEdit,
    setSelectedSubject,
    setValue,
    handleDeleteClick,
    deleteModalOpen,
    setDeleteModalOpen,
    subjectToDelete,
    setSubjectToDelete,
  };
}
