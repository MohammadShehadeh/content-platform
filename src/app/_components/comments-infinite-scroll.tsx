'use client';

import { Comments } from '@/components/comments';
import { Skeleton } from '@/components/shared/skeleton';
import { Title } from '@/components/title';
import { useInfiniteData } from '@/hooks/use-infinite-data';
import type { Comment } from '@/services/comments';
import { getCommentsByPostId } from '@/services/comments';

export const CommentsInfiniteScroll = ({
  initialComments,
  offset,
  limit,
  postId,
}: {
  initialComments: Comment[] | null;
  offset: number;
  limit: number;
  postId: number;
}) => {
  const {
    data: comments,
    hasMore,
    lastElementRef,
    isLoading,
  } = useInfiniteData<Comment, number>({
    initialData: initialComments,
    initialOffset: offset,
    limit,
    fetcher: getCommentsByPostId,
    fetcherParams: postId,
  });

  return (
    <>
      <Title size="lg" asChild>
        <h2>Comments ({comments.length})</h2>
      </Title>

      {comments.map((comment) => (
        <Comments key={comment.id} {...comment} />
      ))}

      {hasMore && <div ref={lastElementRef} />}

      {isLoading && <Skeleton style={{ width: '100%', height: '100px' }} />}
    </>
  );
};
