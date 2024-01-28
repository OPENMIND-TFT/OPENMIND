import { useEffect, useRef } from 'react';

const useInfiniteScroll = onIntersection => {
  const elementRef = useRef(null);

  const handleIntersection = entries => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      onIntersection();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [onIntersection]);

  return elementRef;
};

export default useInfiniteScroll;
