import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PostsInfiniteScroll } from '@/app/_components/posts-infinite-scroll';
import { Description } from '@/components/description';
import { Breadcrumb, BreadcrumbItem } from '@/components/shared/breadcrumb';
import { Separator } from '@/components/shared/separator';
import { Title } from '@/components/title';
import { UserDetails } from '@/components/user-details';
import { getPostsByUserId } from '@/services/posts';
import { getUserById } from '@/services/users';

interface UserPageProps {
  params: Promise<{ id: string }>;
}

export const UserPage = async ({ params }: UserPageProps) => {
  const { id } = await params;
  const OFFSET = 0;
  const LIMIT = 5;

  const userPromise = getUserById(Number(id));
  const postsPromise = getPostsByUserId(Number(id), {
    offset: OFFSET,
    limit: LIMIT,
  });

  const [{ data: user, error: userError }, { data: posts }] = await Promise.all([
    userPromise,
    postsPromise,
  ]);

  if (!user || userError) {
    notFound();
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem current>
          <Link href={`/user/${id}`}>User</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Title size="xl">User Details</Title>
      <Description size="lg" color="muted">
        This is the user details page. You can view the user details and their posts.
      </Description>
      <Separator />
      <UserDetails user={user} />
      <Separator />
      <Title size="lg" asChild>
        <h2>Posts</h2>
      </Title>
      <PostsInfiniteScroll
        initialPosts={posts}
        offset={OFFSET}
        limit={LIMIT}
        userId={Number(id)}
      />
    </>
  );
};

export default UserPage;
