import type { PropsWithChildren } from 'react';
import type React from 'react';

import { cn } from '@/lib/utils';

import styles from './card.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  return (
    <div className={cn(styles.header, className)} {...props}>
      {children}
    </div>
  );
};

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement>, PropsWithChildren {}

export const CardTitle = ({ children, className, ...props }: CardTitleProps) => {
  return (
    <h3 className={cn(styles.title, className)} {...props}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {}

export const CardDescription = ({ children, className, ...props }: CardDescriptionProps) => {
  return (
    <p className={cn(styles.description, className)} {...props}>
      {children}
    </p>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export const CardContent = ({ children, className, ...props }: CardContentProps) => {
  return (
    <div className={cn(styles.content, className)} {...props}>
      {children}
    </div>
  );
};

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export const CardFooter = ({ children, className, ...props }: CardFooterProps) => {
  return (
    <div className={cn(styles.footer, className)} {...props}>
      {children}
    </div>
  );
};
