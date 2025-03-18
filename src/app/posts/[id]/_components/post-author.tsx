import Link from 'next/link';

import { Description } from '@/components/description';
import { Button } from '@/components/shared/button';
import { Skeleton } from '@/components/shared/skeleton';
import { getUserById } from '@/services/users';

import styles from './post-author.module.scss';

interface PostAuthorProps {
  userId: number;
}

export const PostAuthorSkeleton = () => {
  return (
    <Description color="muted" size="lg" className={styles.skeleton} asChild>
      <div>
        By: <Skeleton style={{ width: '100px', height: '20px' }} />
      </div>
    </Description>
  );
};

export const PostAuthor = async ({ userId }: PostAuthorProps) => {
  const { data: user, error } = await getUserById(userId);

  if (!user || error) {
    return (
      <Description color="muted" size="lg" asChild>
        <div>
          By: <Button variant="link">Anonymous</Button>
        </div>
      </Description>
    );
  }

  return (
    <Description color="muted" size="lg" asChild>
      <div>
        By{' '}
        <Button variant="link" asChild>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </Button>{' '}
        (@{user.username})
      </div>
    </Description>
  );
};
