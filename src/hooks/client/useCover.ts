import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { CoverFormData, CoverSchema, ImageFile, UseCoverReturn } from '@/interface/cover';

export const useCover = (): UseCoverReturn => {
  const [isLoading] = useState(false);
  const [image, setImage] = useState<ImageFile | ''>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const loadLocalStorageData = (): CoverFormData => {
    const savedData = localStorage.getItem('coverFormData');
    const savedImage = localStorage.getItem('coverImage');

    const initialData = savedData
      ? JSON.parse(savedData)
      : {
          nsc: null,
          grade: '',
          subject: '',
          topic: '',
          totalMarks: null,
          time: null,
          date: null,
        };

    return {
      ...initialData,
      image: savedImage ? JSON.parse(savedImage) : '',
    };
  };

  const [storedData, setStoredData] = useState<CoverFormData>(loadLocalStorageData());

  useEffect(() => {
    localStorage.setItem('coverFormData', JSON.stringify(storedData));
    if (image) {
      localStorage.setItem('coverImage', JSON.stringify(image));
    }
  }, [storedData, image]);

  const form = useForm<CoverFormData>({
    resolver: zodResolver(CoverSchema),
    defaultValues: storedData,
    mode: 'onTouched',
  });

  useEffect(() => {
    if (previewMode) {
      const updatedData = loadLocalStorageData();

      setStoredData(updatedData);
      setPreviewMode(false);
    }
  }, [previewMode]);

  const saveToLocalStorage = (): void => {
    const formData = form.getValues();

    localStorage.setItem('coverFormData', JSON.stringify(formData));
    if (image) {
      localStorage.setItem('coverImage', JSON.stringify(image));
    }

    setPreviewMode(true);
  };

  const handleDateSelect = (selectedDate: Date): void => {
    if (selectedDate instanceof Date && !Number.isNaN(selectedDate.getTime())) {
      setDate(selectedDate);
      setIsCalenderOpen(false);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (file) {
      const imageFile: ImageFile = {
        name: file.name,
        type: file.type,
        size: file.size,
        file,
      };

      setImage(imageFile);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];

    if (file) {
      const imageFile: ImageFile = {
        name: file.name,
        type: file.type,
        size: file.size,
        file,
      };

      setImage(imageFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  const handleButtonClick = (): void => {
    fileInputRef.current?.click();
  };

  const onSubmit: SubmitHandler<CoverFormData> = (data): void => {
    setStoredData(data);
  };

  return {
    form,
    isLoading,
    onSubmit: form.handleSubmit(onSubmit),
    image,
    handleImageUpload,
    handleDrop,
    handleDragOver,
    handleButtonClick,
    fileInputRef,
    handleDateSelect,
    date,
    isCalenderOpen,
    setIsCalenderOpen,
    storedData,
    saveToLocalStorage,
  };
};
