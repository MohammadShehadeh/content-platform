import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import { Button } from '@/components/shared/button';
import { cn } from '@/lib/utils';

import styles from './pagination.module.scss';

type PaginationProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

const Pagination = ({ children, className, ...props }: PaginationProps) => {
  return (
    <nav className={cn(styles.pagination, className)} {...props}>
      {children}
    </nav>
  );
};

type PaginationLinkProps = PropsWithChildren &
  LinkProps &
  HTMLAttributes<HTMLAnchorElement> & {
    disabled?: boolean;
  };

const PaginationLink = ({ children, className, disabled, ...props }: PaginationLinkProps) => {
  return (
    <Link className={cn(styles.link, className, disabled && styles.disabled)} {...props}>
      {children}
    </Link>
  );
};

type PaginationItemProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

const PaginationItem = ({ children, className, ...props }: PaginationItemProps) => {
  return (
    <div className={cn(styles.item, className)} {...props}>
      {children}
    </div>
  );
};

const PaginationPrevious = ({ href, className, ...props }: PaginationLinkProps) => {
  return (
    <Button variant="ghost" asChild>
      <PaginationLink href={href} className={cn(styles.previous, className)} {...props}>
        <ChevronLeft width={16} height={16} />
        <span>Previous</span>
      </PaginationLink>
    </Button>
  );
};

const PaginationNext = ({ href, className, ...props }: PaginationLinkProps) => {
  return (
    <Button variant="ghost" asChild>
      <PaginationLink href={href} className={cn(styles.next, className)} {...props}>
        <span>Next</span>
        <ChevronRight width={16} height={16} />
      </PaginationLink>
    </Button>
  );
};

export { Pagination, PaginationItem, PaginationPrevious, PaginationNext };
