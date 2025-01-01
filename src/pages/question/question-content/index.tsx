// src/components/QuestionContent.tsx
import React from 'react';

interface QuestionContentProps {
  content: string;
}

const QuestionContent: React.FC<QuestionContentProps> = ({ content }) => (
  <div className='ck-content' dangerouslySetInnerHTML={{ __html: content }} />
);

export default QuestionContent;
