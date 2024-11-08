import * as React from 'react';

import { cn } from '@/lib/utils';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string; // Optional error message prop
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => (
    <>
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus:border-blue-500 focus:bg-transparent disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        tabIndex={-1}
        {...props}
      />
      {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
    </>
  ),
);

Input.displayName = 'Input';

export { Input };
