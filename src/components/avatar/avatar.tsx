import { UserIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import styles from './avatar.module.scss';

interface AvatarProps {
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

export const Avatar = ({ size = 32, className }: AvatarProps) => {
  return (
    <div className={cn(styles.avatar, className)} data-testid="avatar">
      <UserIcon size={size} />
    </div>
  );
};
