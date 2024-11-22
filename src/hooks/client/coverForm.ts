import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { CoverFormData, CoverSchema, UseCoverForm } from '@/interface/cover';

export const useCoverForm = (): UseCoverForm => {
  const loadLocalStorageData = (): CoverFormData => {
    const savedData = localStorage.getItem('coverFormData');

    return savedData
      ? JSON.parse(savedData)
      : {
          nsc: null,
          grade: '',
          subject: '',
          topic: '',
          totalMarks: null,
          time: null,
          date: null,
          description: null,
        };
  };

  const [storedData, setStoredData] = useState<CoverFormData>(loadLocalStorageData());

  useEffect(() => {
    localStorage.setItem('coverFormData', JSON.stringify(storedData));
  }, [storedData]);

  const form = useForm<CoverFormData>({
    resolver: zodResolver(CoverSchema),
    defaultValues: storedData,
    mode: 'onTouched',
  });

  const saveToLocalStorage = (): void => {
    const formData = form.getValues();

    localStorage.setItem('coverFormData', JSON.stringify(formData));
    setStoredData(formData);
  };

  const onSubmit: SubmitHandler<CoverFormData> = (data): void => {
    setStoredData(data);
  };

  return {
    form,
    storedData,
    saveToLocalStorage,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
