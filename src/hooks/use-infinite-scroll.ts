import { useEffect, useRef, useCallback, useState } from 'react';

export const useInfiniteScroll = <T extends HTMLElement>(callback: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const lastElementRef = useCallback(
    (node: T | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setIsLoading(true);

          Promise.resolve(callback()).finally(() => {
            setIsLoading(false);
          });
        }
      });

      if (node) observer.current.observe(node);
    },
    [callback, isLoading]
  );

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return { lastElementRef, isLoading };
};
