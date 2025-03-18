import { POST_API_ROUTE, USER_API_ROUTE } from '@/constants/apis';
import { safeFetch } from '@/lib/fetch';

import type { Pagination } from './types';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPostsByUserId = async (userId: number, { offset, limit }: Pagination) => {
  const { data, error } = await safeFetch<Post[]>(
    `${USER_API_ROUTE}/${userId}/posts?_start=${offset}&_limit=${limit}`
  );

  return { data, error };
};

export const getPostById = async (id: number) => {
  const { data, error } = await safeFetch<Post>(`${POST_API_ROUTE}/${id}`);

  return { data, error };
};
