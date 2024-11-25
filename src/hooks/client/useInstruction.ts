import { useEffect, useState } from 'react';

import { toast } from '@/hooks/use-toast';

interface Instruction {
  id: number;
  text: string;
}

interface UseInstructionsReturn {
  newInstruction: string;
  dialogOpen: boolean;
  instructions: Instruction[];
  handleSave: () => void;
  handleCancel: () => void;
  handleDialogChange: (isOpen: boolean) => void;
  setNewInstruction: (value: string) => void;
  loading: boolean;
}

export const useInstructions = (): UseInstructionsReturn => {
  const [loading, setLoading] = useState(false);

  const initialInstructionsString = `
    This question paper consists of THREE sections and covers TWO main topics.
    Read the instructions for each question carefully and take note of what is required.
    Number the answers correctly according to the numbering system used in this question paper.
    Except where other instructions are given, answers must be written in full sentences.
    Use the mark allocation and nature of each question to determine the length and depth of an answer.
    Begin the answer to EACH question on a NEW page, e.g., QUESTION 1 - new page. QUESTION 2 - new page.
    You may use a non-programmable calculator.
    Write neatly and legibly.
  `;

  const initialInstructions = initialInstructionsString
    .trim()
    .split('\n')
    .map((text, index) => ({
      id: index + 1,
      text: text.trim(),
    }));

  const savedInstructions = localStorage.getItem('instructions');
  const [instructions, setInstructions] = useState<Instruction[]>(
    savedInstructions ? JSON.parse(savedInstructions) : initialInstructions,
  );

  const [newInstruction, setNewInstruction] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('instructions', JSON.stringify(instructions));
  }, [instructions]);

  const handleSave = (): void => {
    setLoading(true);
    try {
      if (newInstruction.trim()) {
        setInstructions((prev) => [...prev, { id: prev.length + 1, text: newInstruction }]);
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
