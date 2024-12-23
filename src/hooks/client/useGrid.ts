import { useState } from 'react';

const useEditor = (
  initialValue: string = '',
): {
  editorValue: string;
  handleEditorChange: (newValue: string) => void;
} => {
  const [editorValue, setEditorValue] = useState(initialValue);

  const handleEditorChange = (newValue: string): void => {
    setEditorValue(newValue);
  };

  return {
    editorValue,
    handleEditorChange,
  };
};

export default useEditor;
