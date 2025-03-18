import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Description } from '@/components/description';
import { Breadcrumb, BreadcrumbItem } from '@/components/shared/breadcrumb';
import { Separator } from '@/components/shared/separator';
import { Title } from '@/components/title';
import { getUsers } from '@/services/users';

import { UsersInfiniteScroll } from './_components/users-infinite-scroll';

const HomePage = async () => {
  const LIMIT = 5;
  const OFFSET = 0;

  const { data: users, error } = await getUsers({ offset: OFFSET, limit: LIMIT });

  if (!users || error) {
    notFound();
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem current>
          <Link href="/">Users</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Title size="xl">List of Users</Title>
      <Description size="lg" color="muted">
        This is a list of users. You can click on a user to view their details.
      </Description>
      <Separator />
      <UsersInfiniteScroll initialUsers={users} offset={OFFSET} limit={LIMIT} />
    </>
  );
};

export default HomePage;
