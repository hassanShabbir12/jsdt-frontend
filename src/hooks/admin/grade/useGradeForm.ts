import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';

import { apiClient } from '@/api/clients/apiClient';
import {
  ExtendedCreateGradeDto,
  GradeFormReturn,
  GradeFormValues,
  GradeResponse,
  gradeSchema,
} from '@/interface/grads';
import { CreateGradeDto } from '@/lib/sdk/jsdt/Api';

import { toast } from '../../use-toast';

export function useGradeForm(
  grades: ExtendedCreateGradeDto[],
  setGrades: (grades: ExtendedCreateGradeDto[]) => void,
): GradeFormReturn {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<ExtendedCreateGradeDto | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GradeFormValues>({
    resolver: zodResolver(gradeSchema),
  });

  const handleEdit = (grade: ExtendedCreateGradeDto): void => {
    setSelectedGrade(grade);
    setOpen(true);
  };

  const onSubmit = async (grade: CreateGradeDto): Promise<void> => {
    setLoading(true);
    try {
      if (selectedGrade) {
        await apiClient.grades.gradesControllerUpdate(selectedGrade.id, grade);
        setGrades(grades.map((g) => (g.id === selectedGrade.id ? { ...g, ...grade } : g)));
        toast({
          title: 'Grade',
          description: 'Grade updated successfully',
        });
      } else {
        const response = (await apiClient.grades.gradesControllerCreate(
          grade,
        )) as unknown as AxiosResponse<GradeResponse>;
        const { data } = response;

        if (data.success) {
          const newGrades = Array.isArray(data.data) ? data.data : [data.data];

          setGrades([...grades, ...newGrades]);
          toast({
            title: 'Grade',
            description: 'Grade created successfully',
          });
        }
      }
      setOpen(false);
      setSelectedGrade(null);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to create grade',
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
    selectedGrade,
    handleEdit,
    setSelectedGrade,
    setValue,
  };
}
