import { Description } from '@/components/description';
import { Card } from '@/components/shared/card';
import { Title } from '@/components/title';
import type { Comment } from '@/services/comments';

import styles from './comments.module.scss';

type CommentsProps = Comment;

export const Comments = ({ name, email, body }: CommentsProps) => {
  return (
    <Card className={styles.comment}>
      <Title asChild>
        <h3>{name}</h3>
      </Title>
      <Description color="muted">{email}</Description>
      <Description size="lg">{body}</Description>
    </Card>
  );
};
