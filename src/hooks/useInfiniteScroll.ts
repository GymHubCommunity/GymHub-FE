import { useEffect } from 'react';

interface InfiniteScrollOptions {
  target: HTMLDivElement | null;
  fetchData: () => Promise<void>;
}

const useInfiniteScroll = ({ target, fetchData }: InfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver;

    const handleIntersect: IntersectionObserverCallback = async (
      [entry],
      observer,
    ) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await fetchData();
        observer.observe(entry.target);
      }
    };

    if (target) {
      const isVisible = () => {
        const rect = target.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      };

      if (isVisible()) {
        observer = new IntersectionObserver(handleIntersect, { threshold: 1 });
        observer.observe(target);
      } else {
        const visibilityObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              visibilityObserver.disconnect();
              observer = new IntersectionObserver(handleIntersect, {
                threshold: 1,
              });
              observer.observe(target);
            }
          },
          { threshold: 0 },
        );

        visibilityObserver.observe(target);
      }
    }

    return () => observer && observer.disconnect();
  }, [target, fetchData]);
};

export default useInfiniteScroll;
