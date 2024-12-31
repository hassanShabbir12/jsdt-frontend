import { useRef, useState } from 'react';

import { useLocalStorage } from '@/hooks/client/useLocalStorage';
import { toast } from '@/hooks/use-toast';
import { UseCoverReturn } from '@/interface/cover';

export const useCover = (): UseCoverReturn => {
  const [image, setImage] = useLocalStorage<string | null>('image', null);
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
      const currentDate = new Date();

      currentDate.setHours(0, 0, 0, 0);

      const selectedDateNoTime = new Date(selectedDate);

      selectedDateNoTime.setHours(0, 0, 0, 0);

      setDate(selectedDate);
      setIsCalenderOpen(false);
    } else {
      setIsCalenderOpen(false);
    }
  };

  const minDate = new Date();

  minDate.setHours(0, 0, 0, 0);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file: File | undefined = event.target.files?.[0];

    if (file && file.size > 2 * 1024 * 1024) {
      toast({
        description: 'Image size should not exceed 2MB.',
      });
      return;
    }


    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onloadend = (): void => {
          const base64Image = reader.result as string;

          setImage(base64Image);
        };

        reader.readAsDataURL(file);
      } else {
        toast({
          description: 'Please upload a valid image file.',
        });
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onloadend = (): void => {
          const base64Image = reader.result as string;

          setImage(base64Image);
        };

        reader.readAsDataURL(file);
      } else {
        toast({
          description: 'Please upload a valid image file.',
        });
      }
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
    minDate,
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
