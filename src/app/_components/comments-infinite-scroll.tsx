'use client';

import { useRef, useState, useCallback } from 'react';

import { Comments } from '@/components/comments';
import { Title } from '@/components/title';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
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
  const offsetRef = useRef(offset);
  const [comments, setComments] = useState<Comment[]>(initialComments ?? []);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreComments = useCallback(async () => {
    if (!hasMore) return;

    const { data: newComments, error } = await getCommentsByPostId(postId, {
      offset: offsetRef.current + limit,
      limit,
    });

    if (newComments && !error) {
      if (newComments.length === 0) {
        setHasMore(false);
        return;
      }

      setComments((prevComments) => [...prevComments, ...newComments]);
      offsetRef.current += limit;
    }
  }, [hasMore, limit]);

  const lastElementRef = useInfiniteScroll<HTMLDivElement>(loadMoreComments);

  return (
    <>
      <Title size="lg" asChild>
        <h2>Comments ({comments.length})</h2>
      </Title>

      {comments.map((comment) => (
        <Comments key={comment.id} {...comment} />
      ))}

      {hasMore && <div ref={lastElementRef} />}
    </>
  );
};
