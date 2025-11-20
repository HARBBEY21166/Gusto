
'use client';

import { useState, useEffect, useRef } from 'react';

type IntersectionObserverOptions = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
};

export const useInView = (options: IntersectionObserverOptions = {}) => {
  const { threshold = 0, root = null, rootMargin = '0px', triggerOnce = false } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else {
            if (!triggerOnce) {
                setInView(false);
            }
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return { ref, inView };
};
