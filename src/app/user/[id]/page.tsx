import Link from 'next/link';

import { BreadcrumbItem, Breadcrumb } from '@/components/shared/breadcrumb';

interface UserPageProps {
  params: Promise<{ id: string }>;
}

export const UserPage = async ({ params }: UserPageProps) => {
  const { id } = await params;

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem current>
          <Link href={`/user/${id}`}>User {id}</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default UserPage;
