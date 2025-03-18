import { useRef, useState, useCallback } from 'react';

import type { Pagination } from '@/services/types';

import { useInfiniteScroll } from './use-infinite-scroll';

type FetcherResponse<T> = {
  data: T[] | null;
  error?: boolean;
};

type UseInfiniteDataProps<T, P> = {
  initialData: T[] | null;
  initialOffset: number;
  limit: number;
  fetcher: (params: P, options: Pagination) => Promise<FetcherResponse<T>>;
  fetcherParams: P;
};

export function useInfiniteData<T, P>({
  initialData,
  initialOffset,
  limit,
  fetcher,
  fetcherParams,
}: UseInfiniteDataProps<T, P>) {
  const length = initialData?.length ?? 0;
  const offsetRef = useRef(initialOffset);
  const [data, setData] = useState<T[]>(initialData ?? []);
  const [hasMore, setHasMore] = useState(length > 0);

  const loadMore = useCallback(async () => {
    if (!hasMore) return;

    const { data: newItems, error } = await fetcher(fetcherParams, {
      offset: offsetRef.current + limit,
      limit,
    });

    if (newItems && !error) {
      if (newItems.length === 0) {
        setHasMore(false);
        return;
      }

      setData((prevItems) => [...prevItems, ...newItems]);
      offsetRef.current += limit;
    }
  }, [hasMore, fetcher, fetcherParams, limit]);

  const { lastElementRef, isLoading } = useInfiniteScroll(loadMore);

  return { data, isLoading, hasMore, lastElementRef };
}
