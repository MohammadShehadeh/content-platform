import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import styles from './title.module.scss';

const titleVariants = cva(styles.title, {
  variants: {
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
      xl: styles.xl,
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  asChild?: boolean;
}

export const Title = ({
  children,
  className,
  asChild = false,
  size,
  ...props
}: TitleProps) => {
  const Comp = asChild ? Slot : 'h1';

  return (
    <Comp className={titleVariants({ size, className })} {...props}>
      {children}
    </Comp>
  );
};
