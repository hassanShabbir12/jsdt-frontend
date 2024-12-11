import { useState } from 'react';

import { useLocalStorage } from '@/hooks/client/useLocalStorage';
import { toast } from '@/hooks/use-toast';
import { Instruction } from '@/interface/question';

interface UseInstructionsReturn {
  newInstruction: string;
  dialogOpen: boolean;
  instructions: Instruction[];
  handleSave: () => void;
  handleCancel: () => void;
  handleDialogChange: (isOpen: boolean) => void;
  setNewInstruction: (value: string) => void;
  handleDelete: (index: number) => void;
  handleUpdate: (index: number, updatedTitle: string) => void;
  editIndex: number | null;
}

export const useInstructions = (): UseInstructionsReturn => {
  const [instructions, setInstructions] = useLocalStorage<string>('instructions', '[]');
  const instructionsArray: Instruction[] =
    typeof instructions === 'string' ? JSON.parse(instructions) : instructions;

  const [newInstruction, setNewInstruction] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSave = (): void => {
    if (newInstruction.trim()) {
      const updatedInstructions = [...instructionsArray];

      if (editIndex !== null) {
        updatedInstructions[editIndex] = { title: newInstruction };
        toast({ description: 'Instruction updated successfully.' });
      } else {
        updatedInstructions.push({ title: newInstruction });
        toast({ description: 'Instruction added successfully.' });
      }
      setInstructions(JSON.stringify(updatedInstructions));
      setNewInstruction('');
      setDialogOpen(false);
      setEditIndex(null);
    } else {
      toast({ description: 'Please add an instruction before saving.' });
    }
  };

  const handleCancel = (): void => {
    setNewInstruction('');
    setDialogOpen(false);
    setEditIndex(null);
  };

  const handleDialogChange = (isOpen: boolean): void => {
    if (!isOpen) {
      setNewInstruction('');
      setEditIndex(null);
    }
    setDialogOpen(isOpen);
  };

  const handleDelete = (index: number): void => {
    const updatedInstructions = instructionsArray.filter((_, i) => i !== index);

    setInstructions(JSON.stringify(updatedInstructions));

    toast({ description: 'Instruction deleted successfully.' });
  };

  const handleUpdate = (index: number, updatedTitle: string): void => {
    setEditIndex(index);
    setNewInstruction(updatedTitle);
    handleDialogChange(true);
  };

  return {
    newInstruction,
    dialogOpen,
    instructions: instructionsArray,
    handleSave,
    handleCancel,
    handleDialogChange,
    setNewInstruction,
    handleDelete,
    handleUpdate,
    editIndex,
  };
};
