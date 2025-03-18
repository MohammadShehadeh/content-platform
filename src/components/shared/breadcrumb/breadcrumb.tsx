'use client';

import { Slot } from '@radix-ui/react-slot';
import type { PropsWithChildren } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';

import styles from './breadcrumb.module.scss';

interface BreadcrumbContextValue {
  separator: React.ReactNode;
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({
  separator: '/',
});

const useBreadcrumb = () => {
  const context = React.useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumb must be used within a Breadcrumb component');
  }
  return context;
};

interface BreadcrumbProps extends PropsWithChildren {
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumb = ({ children, separator = '/', className, ...props }: BreadcrumbProps) => {
  return (
    <BreadcrumbContext.Provider value={{ separator }}>
      <nav className={cn(styles.breadcrumb, className)} aria-label="Breadcrumb" {...props}>
        <ol className={styles.breadcrumbList}>{children}</ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
};

interface BreadcrumbItemProps extends PropsWithChildren {
  href?: string;
  current?: boolean;
  className?: string;
}

export const BreadcrumbItem = ({ children, current, className, ...props }: BreadcrumbItemProps) => {
  const { separator } = useBreadcrumb();

  return (
    <li className={styles.listItem}>
      <span
        className={cn(
          styles.item,
          {
            [styles.current]: current,
          },
          className
        )}
        aria-current={current ? 'page' : undefined}
        {...props}
      >
        {children}
      </span>
      {!current && <span className={styles.separator}>{separator}</span>}
    </li>
  );
};

interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
  asChild?: boolean;
  current?: boolean;
}

export const BreadcrumbLink = ({ children, asChild, current, className, ...props }: BreadcrumbLinkProps) => {
  const { separator } = useBreadcrumb();
  const Comp = asChild ? Slot : 'a';

  return (
    <li className={styles.listItem}>
      <Comp
        className={cn(
          styles.item,
          {
            [styles.current]: current,
          },
          className
        )}
        aria-current={current ? 'page' : undefined}
        {...props}
      >
        {children}
      </Comp>
      {!current && <span className={styles.separator}>{separator}</span>}
    </li>
  );
};

interface BreadcrumbSeparatorProps {
  children?: React.ReactNode;
  className?: string;
}

export const BreadcrumbSeparator = ({ children, className, ...props }: BreadcrumbSeparatorProps) => {
  const { separator } = React.useContext(BreadcrumbContext);

  return (
    <span className={cn(styles.separator, className)} {...props}>
      {children || separator}
    </span>
  );
};
