'use client';

import { useRef, useState, useCallback } from 'react';

import { PostCard } from '@/components/post-card';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import type { Post } from '@/services/posts';
import { getPostsByUserId } from '@/services/posts';

export const PostsInfiniteScroll = ({
  initialPosts,
  offset,
  limit,
  userId,
}: {
  initialPosts: Post[] | null;
  offset: number;
  limit: number;
  userId: number;
}) => {
  const offsetRef = useRef(offset);
  const [posts, setPosts] = useState<Post[]>(initialPosts ?? []);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = useCallback(async () => {
    if (!hasMore) return;

    const { data: newPosts, error } = await getPostsByUserId(userId, {
      offset: offsetRef.current + limit,
      limit,
    });

    if (newPosts && !error) {
      if (newPosts.length === 0) {
        setHasMore(false);
        return;
      }

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      offsetRef.current += limit;
    }
  }, [hasMore, limit]);

  const lastElementRef = useInfiniteScroll<HTMLDivElement>(loadMorePosts);

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}

      {hasMore && <div ref={lastElementRef} />}
    </>
  );
};
