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
}

export const useInstructions = (): UseInstructionsReturn => {
  // Using useLocalStorage from react-use
  const [instructions, setInstructions] = useLocalStorage<string>('instructions');
  let instructionsArray: Instruction[] = [];

  instructionsArray = typeof instructions === 'string' ? JSON.parse(instructions) : instructions;
  const [newInstruction, setNewInstruction] = useState('');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSave = (): void => {
    if (newInstruction) {
      if (editIndex === null) {
        // Add new instruction
        instructionsArray.push({ title: newInstruction });
        toast({
          description: 'Instruction added successfully.',
        });
      } else {
        // Update existing instruction at the given editIndex
        instructionsArray[editIndex] = { title: newInstruction };
        toast({
          description: 'Instruction updated successfully.',
        });
      }

      // Save the updated instructions as a string in localStorage
      setInstructions(JSON.stringify(instructionsArray));
      setNewInstruction('');
      setDialogOpen(false);
    } else {
      toast({
        description: 'Please add an instruction before saving.',
      });
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

  // Handle delete instruction
  const handleDelete = (index: number): void => {
    instructionsArray.splice(index, 1); // Remove the instruction at the given index

    // Update the localStorage
    setInstructions(JSON.stringify(instructionsArray));

    toast({
      description: 'Instruction deleted successfully.',
    });
  };

  // Handle update instruction
  const handleUpdate = (index: number, updatedTitle: string): void => {
    setEditIndex(index);
    setNewInstruction(updatedTitle);
    handleDialogChange(true);
    // if (updatedTitle) {
    //   instructionsArray[index].title = updatedTitle;

    //   // Update the localStorage
    //   setInstructions(JSON.stringify(instructionsArray));

    //   toast({
    //     description: 'Instruction updated successfully.',
    //   });
    // } else {
    //   toast({
    //     description: 'Please provide a valid instruction to update.',
    //   });
    // }
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
  };
};
