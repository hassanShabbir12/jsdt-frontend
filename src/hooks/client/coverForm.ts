import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { useLocalStorage } from '@/hooks/client/useLocalStorage';
import { CoverFormData, CoverSchema, UseCoverForm } from '@/interface/cover';

export const useCoverForm = (): UseCoverForm => {
  const defaultValue: CoverFormData = {
    nsc: '',
    grade: '',
    subject: '',
    topic: '',
    totalMarks: 0,
    page: 0,
    date: '',
    des: '',
  };

  const [value, setValue] = useLocalStorage<CoverFormData>('coverFormData');
  const [storedData, setStoredData] = useState<CoverFormData>(defaultValue || value);

  useEffect(() => {
    setStoredData(defaultValue);
  }, [defaultValue]);

  const [isOpen, setOpen] = useState<boolean>(false);

  const form = useForm<CoverFormData>({
    resolver: zodResolver(CoverSchema),
    defaultValues: storedData,
    mode: 'onTouched',
  });

  const saveToLocalStorage = (): void => {
    const formData = form.getValues();

    setStoredData(formData);
  };

  const onSubmit: SubmitHandler<CoverFormData> = (data): void => {
    setOpen(true);
    setValue(data);
  };

  return {
    form,
    storedData: storedData || {
      nsc: '',
      grade: '',
      subject: '',
      topic: '',
      totalMarks: 0,
      page: 0,
      date: null,
      des: '',
    },
    saveToLocalStorage,
    onSubmit: form.handleSubmit(onSubmit),
    isOpen,
    setOpen,
  };
};
