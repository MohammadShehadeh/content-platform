'use client';

import { Skeleton } from '@/components/shared/skeleton';
import { UserCard } from '@/components/user-card';
import { useInfiniteData } from '@/hooks/use-infinite-data';
import { getUsers } from '@/services/users';
import type { User } from '@/services/users';

export const UsersInfiniteScroll = ({
  initialUsers,
  offset,
  limit,
}: {
  initialUsers: User[] | null;
  offset: number;
  limit: number;
}) => {
  const {
    data: users,
    hasMore,
    lastElementRef,
    isLoading,
  } = useInfiniteData<User, unknown>({
    initialData: initialUsers,
    initialOffset: offset,
    limit,
    fetcher: (_, options) => getUsers(options),
    fetcherParams: {},
  });

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}

      {hasMore && <div ref={lastElementRef} />}

      {isLoading && <Skeleton style={{ width: '100%', height: '100px' }} />}
    </>
  );
};
