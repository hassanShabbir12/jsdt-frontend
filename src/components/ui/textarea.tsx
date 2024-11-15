import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <div className='relative overflow-hidden rounded-md border border-input focus-within:border-blue-700'>
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-none !border-0 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));

Textarea.displayName = 'Textarea';

export { Textarea };
