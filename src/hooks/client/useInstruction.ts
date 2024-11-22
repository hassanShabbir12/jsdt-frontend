import { useState } from 'react';

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
}

export const useInstructions = (): UseInstructionsReturn => {
  const initialInstructions: Instruction[] = [
    { id: 1, text: 'This question paper consists of THREE sections and covers TWO main topics.' },
    {
      id: 2,
      text: 'Read the instructions for each question carefully and take note of what is required.',
    },
    {
      id: 3,
      text: 'Number the answers correctly according to the numbering system used in this question paper.',
    },
    {
      id: 4,
      text: 'Except where other instructions are given, answers must be written in full sentences.',
    },
    {
      id: 5,
      text: 'Use the mark allocation and nature of each question to determine the length and depth of an answer.',
    },
    {
      id: 6,
      text: 'Begin the answer to EACH question on a NEW page, e.g., QUESTION 1 - new page. QUESTION 2 - new page.',
    },
    { id: 7, text: 'You may use a non-programmable calculator.' },
    { id: 8, text: 'Write neatly and legibly.' },
  ];

  const [newInstruction, setNewInstruction] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [instructions, setInstructions] = useState<Instruction[]>(initialInstructions);

  const handleSave = (): void => {
    if (newInstruction.trim()) {
      setInstructions((prev) => [...prev, { id: prev.length + 1, text: newInstruction }]);
      setNewInstruction('');
      setDialogOpen(false);
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
    newInstruction,
    dialogOpen,
    instructions,
    handleSave,
    handleCancel,
    handleDialogChange,
    setNewInstruction,
  };
};
