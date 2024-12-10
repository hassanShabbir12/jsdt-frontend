import React from 'react';
import ReactQuill from 'react-quill';
// eslint-disable-next-line no-restricted-syntax
import 'react-quill/dist/quill.snow.css';

interface QuillEditorProps {
  onChange: (content: string) => void;
  placeholder?: string;
  value: string;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ onChange, placeholder, value }) => {
  const handleChange = (content: string): void => {
    onChange(content);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      //   ['link', 'image', 'video'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ['clean'],
    ],
  };

  // Define the formats you want to support
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'script',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'color',
    'background',
    'align',
  ];

  return (
    <div className='relative overflow-hidden rounded-md border border-input focus-within:border-blue-700'>
      <ReactQuill
        onChange={handleChange}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        value={value}
        theme='snow'
      />
    </div>
  );
};

export default QuillEditor;
