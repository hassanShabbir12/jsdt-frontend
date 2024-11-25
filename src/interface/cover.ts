import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

const baseCoverSchema = {
  nsc: z
    .enum(['IEB', 'NSC'], {
      required_error: 'Please select IEB or NSC',
    })
    .nullable(),
  grade: z
    .string({
      required_error: 'Please select a grade',
    })
    .min(1, 'Grade is required'),
  subject: z
    .string({
      required_error: 'Please select a subject',
    })
    .min(1, 'Subject is required'),

  topic: z
    .string({
      required_error: 'Please select a topic',
    })
    .min(1, 'Topic is required'),
  totalMarks: z
    .number({
      required_error: 'Total marks is required',
    })
    .min(1, 'Total marks must be greater than 0')
    .max(1000, 'Total marks cannot exceed 1000')
    .nullable(),
  page: z
    .number({
      required_error: 'Page is required',
    })
    .nullable(),
  date: z
    .date({
      required_error: 'Date is required',
    })
    .nullable(),
  des: z
    .string({
      required_error: 'Please select a description',
    })
    .nullable(),
};

export const CoverSchema = z.object({
  ...baseCoverSchema,
});

export type CoverFormData = z.infer<typeof CoverSchema>;

export interface ImageFile {
  name: string;
  type: string;
  size: number;
  file: File;
}

export interface UseCoverForm {
  form: UseFormReturn<CoverFormData>;
  storedData: CoverFormData;
  saveToLocalStorage: () => void;
  onSubmit: () => void;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UseCoverReturn {
  image: ImageFile | null;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleButtonClick: () => void;
  handleDateSelect: (date: Date) => void;
  isCalenderOpen: boolean;
  setIsCalenderOpen: React.Dispatch<React.SetStateAction<boolean>>;
  date: Date | null;
  setImage: React.Dispatch<React.SetStateAction<ImageFile | null>>;
  handleImageRemove: () => void;
}
