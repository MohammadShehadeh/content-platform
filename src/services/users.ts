import { USER_API_ROUTE } from '@/constants/apis';
import { safeFetch } from '@/lib/fetch';

import type { Pagination } from './types';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

/**
 * Get Users
 * @returns The users
 */
export const getUsers = async ({ offset = 0, limit = 10 }: Pagination) => {
  const { data, error } = await safeFetch<User[]>(
    `${USER_API_ROUTE}?_start=${offset}&_limit=${limit}`
  );

  return { data, error };
};

/**
 * Get User by ID
 * @param id - The ID of the user to get
 * @returns The user
 */
export const getUserById = async (id: number) => {
  const { data, error } = await safeFetch<User>(`${USER_API_ROUTE}/${id}`);

  return { data, error };
};
