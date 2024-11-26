import { useRef, useState } from 'react';

import { ImageFile, UseCoverReturn } from '@/interface/cover';

export const useCover = (): UseCoverReturn => {
  const [image, setImage] = useState<ImageFile | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const formatDate = (date: Date): string => {
    if (!date) {
      return '';
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const handleDateSelect = (selectedDate: Date | undefined): void => {
    if (selectedDate) {
      setDate(selectedDate);
      setIsCalenderOpen(false);

      if (selectedDate?.getTime() === date?.getTime()) {
        setIsCalenderOpen(false);
      } else {
        setDate(selectedDate);
      }
    } else {
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

  const handleImageRemove = (): void => {
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return {
    image,
    setImage,
    handleImageUpload,
    handleDrop,
    handleDragOver,
    handleButtonClick,
    fileInputRef,
    date,
    handleDateSelect,
    isCalenderOpen,
    formatDate,
    setIsCalenderOpen,
    handleImageRemove,
  };
};
