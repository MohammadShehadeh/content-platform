import { Slot } from '@radix-ui/react-slot';
import type { PropsWithChildren } from 'react';
import type React from 'react';

import { cn } from '@/lib/utils';

import styles from './container.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  asChild?: boolean;
}

export const Container = ({ children, className, asChild, ...props }: ContainerProps) => {
  const Component = asChild ? Slot : 'div';

  return (
    <Component className={cn(styles.container, className)} {...props}>
      {children}
    </Component>
  );
};
