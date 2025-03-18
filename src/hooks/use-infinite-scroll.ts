import { useEffect, useRef, useCallback } from 'react';

export const useInfiniteScroll = <T extends HTMLElement>(callback: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const isLoading = useRef(false);

  const lastElementRef = useCallback(
    (node: T | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading.current) {
          isLoading.current = true;

          Promise.resolve(callback()).finally(() => {
            isLoading.current = false;
          });
        }
      });

      if (node) observer.current.observe(node);
    },
    [callback]
  );

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return lastElementRef;
};
