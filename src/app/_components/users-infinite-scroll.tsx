'use client';

import { useRef, useState, useCallback } from 'react';

import { UserCard } from '@/components/user-card';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
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
  const offsetRef = useRef(offset);
  const [users, setUsers] = useState<User[]>(initialUsers ?? []);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreUsers = useCallback(async () => {
    if (!hasMore) return;

    const { data: newUsers, error } = await getUsers({
      offset: offsetRef.current + limit,
      limit,
    });

    if (newUsers && !error) {
      if (newUsers.length === 0) {
        setHasMore(false);
        return;
      }

      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      offsetRef.current += limit;
    }
  }, [hasMore, limit]);

  const lastElementRef = useInfiniteScroll<HTMLDivElement>(loadMoreUsers);

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}

      {hasMore && <div ref={lastElementRef} />}
    </>
  );
};
