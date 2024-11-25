import { useState } from 'react';
import { useLocalStorage } from 'react-use';

import { toast } from '@/hooks/use-toast';

interface UseInstructionsReturn {
  newInstruction: string;
  dialogOpen: boolean;
  instructions: string | undefined;
  handleSave: () => void;
  handleCancel: () => void;
  handleDialogChange: (isOpen: boolean) => void;
  setNewInstruction: (value: string) => void;
  loading: boolean;
}

export const useInstructions = (): UseInstructionsReturn => {
  const [loading, setLoading] = useState(false);

  const initialInstructionsString = `This question paper consists of THREE sections and covers TWO main topics.
Read the instructions for each question carefully and take note of what is required.
Number the answers correctly according to the numbering system used in this question paper.
Except where other instructions are given, answers must be written in full sentences.
Use the mark allocation and nature of each question to determine the length and depth of an answer.
Begin the answer to EACH question on a NEW page, e.g., QUESTION 1 - new page. QUESTION 2 - new page.
You may use a non-programmable calculator.
Write neatly and legibly.`;

  // Using useLocalStorage from react-use
  const [instructions, setInstructions] = useLocalStorage(
    'instructions',
    initialInstructionsString,
  );

  const [newInstruction, setNewInstruction] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSave = (): void => {
    setLoading(true);
    try {
      if (newInstruction.trim()) {
        // Append new instruction to the existing instructions
        setInstructions((prev) => `${prev}\n${newInstruction}`);
        setNewInstruction('');
        setDialogOpen(false);

        toast({
          description: 'Instructions saved successfully.',
        });
      } else {
        toast({
          description: 'Please add an instruction before saving.',
        });
      }
    } catch {
      toast({
        description: 'Failed to save instructions.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = (): void => {
    setNewInstruction('');
    setDialogOpen(false);
  };

  const handleDialogChange = (isOpen: boolean): void => {
    if (!isOpen) {
      setNewInstruction('');
    }
    setDialogOpen(isOpen);
  };

  return {
    loading,
    newInstruction,
    dialogOpen,
    instructions,
    handleSave,
    handleCancel,
    handleDialogChange,
    setNewInstruction,
  };
};
