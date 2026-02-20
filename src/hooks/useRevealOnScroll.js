import { useEffect, useRef } from 'react';

const useRevealOnScroll = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        element.classList.add('visible');
        observer.unobserve(element);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [options]); // Re-run if options change (though usually stable)

  return ref;
};

export default useRevealOnScroll;
