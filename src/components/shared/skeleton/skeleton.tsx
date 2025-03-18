import type React from 'react';

import { cn } from '@/lib/utils';

import styles from './skeleton.module.scss';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return <div className={cn(styles.skeleton, className)} {...props} />;
};
