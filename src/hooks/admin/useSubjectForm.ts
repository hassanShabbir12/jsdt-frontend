import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import {
  ExtendedCreateSubjectDto,
  SubjectFormReturn,
  SubjectFormValues,
  SubjectResponse,
  SubjectSchema,
} from '@/interface/subject';
import { CreateSubjectDto } from '@/lib/sdk/jsdt/Api';

import { toast } from '../use-toast';

export function useSubjectForm(
  subjects: ExtendedCreateSubjectDto[],
  setSubjects: (subjects: ExtendedCreateSubjectDto[]) => void,
): SubjectFormReturn {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<ExtendedCreateSubjectDto | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
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

          setSubjects([...subjects, ...newSubjects]);
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
          description: 'Failed to create subject',
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
    selectedSubject,
    handleEdit,
    setSelectedSubject,
    setValue,
  };
}
