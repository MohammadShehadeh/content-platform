import { COMMENT_API_ROUTE } from '@/constants/apis';
import { safeFetch } from '@/lib/fetch';

import type { Pagination } from './types';

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

/**
 * Get Comments by Post ID
 * @param postId - The ID of the post to get comments for
 * @param offset - The offset of the comments to get
 * @param limit - The limit of the comments to get
 * @returns The comments for the post
 */
export const getCommentsByPostId = async (postId: number, { offset, limit }: Pagination) => {
  const { data, error } = await safeFetch<Comment[]>(
    `${COMMENT_API_ROUTE}?postId=${postId}&_start=${offset}&_limit=${limit}`
  );

  return { data, error };
};
