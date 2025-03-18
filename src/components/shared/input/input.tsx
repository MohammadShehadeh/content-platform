import type React from 'react';

import { cn } from '@/lib/utils';

import styles from './input.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={cn(styles.input, className)} {...props} />;
};
