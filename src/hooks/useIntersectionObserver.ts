import { RefObject, useEffect, useRef } from 'react';

export const useIntersectionObserver = (
  target: RefObject<Element>,
  onIntersect: () => void,
  enabled = true,
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!enabled || !target.current) {
      return;
    }

    observer.current?.disconnect();
    observer.current = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onIntersect(),
      {
        rootMargin: '100px',
      },
    );

    const currentTarget = target.current;
    observer.current.observe(currentTarget);

    return () => observer.current?.disconnect();
  }, [target, onIntersect, enabled]);
};
