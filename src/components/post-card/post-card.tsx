import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/shared/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shared/card';
import type { Post } from '@/services/posts';

import styles from './post-card.module.scss';

type PostCardProps = Pick<Post, 'title' | 'body' | 'id'> & {
  className?: string;
};

export const PostCard = ({ title, body, id, className }: PostCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={styles.description}>{body}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="link" size="sm" asChild>
          <Link href={`/posts/${id}`} className={styles.link}>
            View Post
            <ArrowRight width={16} height={16} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
