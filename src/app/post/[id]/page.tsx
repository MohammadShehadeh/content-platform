import Link from 'next/link';

import { BreadcrumbItem, Breadcrumb } from '@/components/shared/breadcrumb';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export const PostPage = async ({ params }: PostPageProps) => {
  const { id } = await params;

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem current>
          <Link href={`/post/${id}`}>Post {id}</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default PostPage;
