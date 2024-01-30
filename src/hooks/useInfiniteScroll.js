import { useEffect, useRef, useState } from 'react';

const useInfiniteScroll = onIntersection => {
  const elementRef = useRef(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleIntersection = entries => {
    const entry = entries[0];

    if (entry.isIntersecting && entry.target && !isFirstRender) {
      onIntersection();
    }
  };

  useEffect(() => {
    setIsFirstRender(false);
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
