import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { CommentsInfiniteScroll } from '@/app/_components/comments-infinite-scroll';
import { Description } from '@/components/description/description';
import { BreadcrumbItem, Breadcrumb } from '@/components/shared/breadcrumb';
import { Separator } from '@/components/shared/separator';
import { Title } from '@/components/title';
import { getCommentsByPostId } from '@/services/comments';
import { getPostById } from '@/services/posts';

import { PostAuthor, PostAuthorSkeleton } from './_components/post-author';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export const PostPage = async ({ params }: PostPageProps) => {
  const { id } = await params;
  const OFFSET = 0;
  const LIMIT = 5;

  const postPromise = getPostById(Number(id));
  const commentsPromise = getCommentsByPostId(Number(id), {
    offset: OFFSET,
    limit: LIMIT,
  });

  const [{ data: post, error: postError }, { data: comments }] = await Promise.all([
    postPromise,
    commentsPromise,
  ]);

  if (!post || postError) {
    notFound();
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem current>
          <Link href={`/post/${id}`}>Post</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Title size="xl">{post.title}</Title>
      <Suspense fallback={<PostAuthorSkeleton />}>
        <PostAuthor userId={post.userId} />
      </Suspense>
      <Description size="lg" color="muted">
        {post.body}
      </Description>
      <Separator />
      <CommentsInfiniteScroll
        initialComments={comments}
        offset={OFFSET}
        limit={LIMIT}
        postId={Number(id)}
      />
    </>
  );
};

export default PostPage;
