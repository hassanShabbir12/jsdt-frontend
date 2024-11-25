import { useRef, useState } from 'react';

import { ImageFile, UseCoverReturn } from '@/interface/cover';

export const useCover = (): UseCoverReturn => {
  const [image, setImage] = useState<ImageFile | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleImageRemove = (): void => {
    setImage(null);
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
    setIsCalenderOpen,
    handleImageRemove,
  };
};
