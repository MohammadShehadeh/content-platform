import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import styles from './description.module.scss';

const descriptionVariants = cva(styles.description, {
  variants: {
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
    color: {
      default: styles.default,
      muted: styles.muted,
    },
    disableGutter: {
      true: styles.disableGutter,
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
    disableGutter: false,
  },
});

interface DescriptionProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof descriptionVariants> {
  asChild?: boolean;
  disableGutter?: boolean;
}

export const Description = ({
  children,
  className,
  asChild = false,
  disableGutter,
  size,
  color = 'default',
  ...props
}: DescriptionProps) => {
  const Comp = asChild ? Slot : 'p';

  return (
    <Comp
      className={descriptionVariants({ size, color, className, disableGutter })}
      {...props}
    >
      {children}
    </Comp>
  );
};
