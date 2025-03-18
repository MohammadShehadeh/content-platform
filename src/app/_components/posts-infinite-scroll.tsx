'use client';

import { PostCard } from '@/components/post-card';
import { Skeleton } from '@/components/shared/skeleton';
import { useInfiniteData } from '@/hooks/use-infinite-data';
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
  const {
    data: posts,
    hasMore,
    lastElementRef,
    isLoading,
  } = useInfiniteData<Post, number>({
    initialData: initialPosts,
    initialOffset: offset,
    limit,
    fetcher: getPostsByUserId,
    fetcherParams: userId,
  });

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}

      {hasMore && <div ref={lastElementRef} />}

      {isLoading && <Skeleton style={{ width: '100%', height: '100px' }} />}
    </>
  );
};
