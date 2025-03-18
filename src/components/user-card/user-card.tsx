import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/shared/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shared/card';
import type { User } from '@/services/users';

import styles from './user-card.module.scss';

type UserCardProps = Pick<User, 'name' | 'email' | 'id'> & {
  className?: string;
};

export const UserCard = ({ name, email, id, className }: UserCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>
          {name}
          <span className={styles.email}>{email}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="link" size="sm" asChild>
          <Link href={`/users/${id}`} className={styles.link}>
            View User
            <ArrowRight width={16} height={16} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
