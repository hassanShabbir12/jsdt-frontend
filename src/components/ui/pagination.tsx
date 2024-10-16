import * as React from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Pagination: React.FC<React.ComponentProps<'nav'>> = ({ className, ...props }) => (
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn('mx-auto flex w-full justify-end', className)}
    {...props}
  />
);

Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  ),
);

PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(
        'group h-7 w-7 rounded text-stone-300 flex items-center cursor-pointer justify-center bg-zinc-100 hover:text-white focus:text-stone-300 hover:bg-blue-500 hover:w-7 hover:h-7',
        'nth-child-2:bg-green-500 nth-child-2:text-white',
        className,
      )}
      {...props}
    />
  ),
);

PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: string;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink: React.FC<PaginationLinkProps> = ({
  className,
  isActive = 'icon',
  ...props
}) => <a aria-current={isActive ? 'page' : undefined} className={cn('', className)} {...props} />;

PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious: React.FC<React.ComponentProps<typeof PaginationLink>> = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label='Go to previous page'
    size='default'
    className={cn('gap-1', className)}
    {...props}
  >
    <ChevronLeftIcon className='h-4 w-4' />
  </PaginationLink>
);

PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext: React.FC<React.ComponentProps<typeof PaginationLink>> = ({
  className: _className,
  ...props
}) => (
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cn('gap-1 text-blue-500 group-hover:text-white', _className)}
    {...props}
  >
    <ChevronRightIcon className='h-4 w-4' />
  </PaginationLink>
);

PaginationNext.displayName = 'PaginationNext';

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
};
