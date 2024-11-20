import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { CoverFormData, CoverSchema, ImageFile, UseCoverReturn } from '@/interface/cover';

export const useCover = (): UseCoverReturn => {
  const [isLoading] = useState(false);
  const [image, setImage] = useState<ImageFile | ''>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<CoverFormData>({
    resolver: zodResolver(CoverSchema),
    defaultValues: {
      nsc: undefined,
      grade: '',
      subject: '',
      topic: '',
      totalMarks: undefined,
      time: undefined,
    },
    mode: 'onTouched',
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (file) {
      setImage({
        name: file.name,
        type: file.type,
        size: file.size,
        file: file,
      });
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];

    if (file) {
      setImage({
        name: file.name,
        type: file.type,
        size: file.size,
        file: file,
      });
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  const handleButtonClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onSubmit: SubmitHandler<CoverFormData> = async (): Promise<void> => {};

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
  };
};
