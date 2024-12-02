import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError, AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import { handleError } from '@/api/config/errorHandler';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import {
  ExtendedCreateSubjectDto,
  SubjectFormReturn,
  SubjectFormValues,
  SubjectResponse,
  SubjectSchema,
} from '@/interface/subject';
import { CreateSubjectDto } from '@/lib/sdk/jsdt/Api';

export function useSubjectForm(
  subjects: ExtendedCreateSubjectDto[],
  setSubjects: (subjects: ExtendedCreateSubjectDto[]) => void,
): SubjectFormReturn {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<ExtendedCreateSubjectDto | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<SubjectFormValues>({
    resolver: zodResolver(SubjectSchema),
  });

  const handleEdit = (subject: ExtendedCreateSubjectDto): void => {
    setSelectedSubject(subject);
    setOpen(true);
  };

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
          const newSubjects = Array.isArray(data.data) ? data.data : [data.data];

          setSubjects([...newSubjects, ...subjects]);
          toast({
            title: 'Subject',
            description: 'Subject created successfully',
          });
        }
      }
      setOpen(false);
      setSelectedSubject(null);
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        handleError(error, logout, toast, navigate);
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
    selectedSubject,
    handleEdit,
    setSelectedSubject,
    setValue,
    reset,
  };
}
