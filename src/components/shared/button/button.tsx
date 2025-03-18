import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';
import type React from 'react';

import styles from './button.module.scss';

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      outline: styles.outline,
      ghost: styles.ghost,
    },
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    PropsWithChildren {
  asChild?: boolean;
}

export const Button = ({ variant = 'primary', size = 'md', children, className, asChild, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </Comp>
  );
};
