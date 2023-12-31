import { RefObject, useEffect, useState } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIsInViewport = (
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {},
): boolean => {
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsInViewport(entry.isIntersecting);
        },
        { ...options },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, options]);

  return isInViewport;
};

export default useIsInViewport;
