import { useEffect, useRef } from 'react';

const useInfiniteScroll = onIntersection => {
  const elementRef = useRef(null);

  const handleIntersection = entries => {
    const entry = entries[0];

    if (entry.isIntersecting && entry.target) {
      onIntersection();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    });
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [onIntersection, elementRef.current]);

  return elementRef;
};

export default useInfiniteScroll;
