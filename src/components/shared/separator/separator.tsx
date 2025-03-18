import { cn } from '@/lib/utils';

import styles from './separator.module.scss';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Separator = ({
  orientation = 'horizontal',
  className,
  ...props
}: SeparatorProps) => {
  return (
    <div
      className={cn(styles.wrapper, className)}
      role="separator"
      aria-orientation={orientation}
      {...props}
    >
      <div
        className={cn(styles.separator, {
          [styles.vertical]: orientation === 'vertical',
          [styles.horizontal]: orientation === 'horizontal',
        })}
      />
    </div>
  );
};
