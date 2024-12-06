import React from 'react';

import DOMPurify from 'dompurify';

interface DisplayHtmlProps {
  htmlContent: string;
}

const DisplayHtml: React.FC<DisplayHtmlProps> = ({ htmlContent }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return <div className='html-content' dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default DisplayHtml;
