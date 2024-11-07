// hooks/useGradeForm.ts
import { useEffect, useState } from 'react';
import { FieldErrors, useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosResponse } from 'axios';
import { z } from 'zod';

import { apiClient } from '@/api/clients/apiClient';
import { ApiResponse } from '@/interface/generic';
import { CreateGradeDto } from '@/lib/sdk/jsdt/Api';

import { toast } from '../use-toast';

const gradeSchema = z.object({
  title: z.string().min(1, 'Grade is required'),
});

type GradeFormValues = z.infer<typeof gradeSchema>;

interface UseGradeFormReturn {
  register: UseFormRegister<GradeFormValues>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<GradeFormValues>;
  loading: boolean;
  setOpen: (open: boolean) => void;
  open: boolean;
  grades: ExtendedCreateGradeDto[];
  deleteGrade: () => Promise<void>;
  selectedGrade: ExtendedCreateGradeDto | null;
  handleEdit: (grade: ExtendedCreateGradeDto) => void;
  setSelectedGrade: (grade: ExtendedCreateGradeDto | null) => void;
  setValue: UseFormSetValue<GradeFormValues>;
  handleDeleteClick: (grade: ExtendedCreateGradeDto) => void;
  deleteModalOpen: boolean;
  setDeleteModalOpen: (open: boolean) => void;
  gradeToDelete: ExtendedCreateGradeDto | null;
  setGradeToDelete: (grade: ExtendedCreateGradeDto | null) => void;
}

interface ExtendedCreateGradeDto extends CreateGradeDto {
  id: string;
}

type gradeResponse = ApiResponse<ExtendedCreateGradeDto[]>;

export function useGradeForm(): UseGradeFormReturn {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [grades, setGrades] = useState<ExtendedCreateGradeDto[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<ExtendedCreateGradeDto | null>(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [gradeToDelete, setGradeToDelete] = useState<ExtendedCreateGradeDto | null>(null);

  const handleDeleteClick = (grade: ExtendedCreateGradeDto): void => {
    setGradeToDelete(grade);
    setDeleteModalOpen(true);
  };

  const handleEdit = (grade: ExtendedCreateGradeDto): void => {
    setSelectedGrade(grade);
    setOpen(true);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GradeFormValues>({
    resolver: zodResolver(gradeSchema),
  });

  const fetchGrades = async (): Promise<void> => {
    try {
      const response =
        // eslint-disable-next-line max-len
        (await apiClient.grades.gradesControllerFindAll()) as unknown as AxiosResponse<gradeResponse>;
      const { data } = response;
      const extendedGrades = data.data.map((grade) => ({
        ...grade,
        id: grade.id || '',
      }));

      setGrades(extendedGrades);
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
    fetchGrades();
  }, []);

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
        )) as unknown as AxiosResponse<gradeResponse>;
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
    grades,
    deleteGrade,
    selectedGrade,
    handleEdit,
    setSelectedGrade,
    setValue,
    handleDeleteClick,
    deleteModalOpen,
    setDeleteModalOpen,
    gradeToDelete,
    setGradeToDelete,
  };
}
