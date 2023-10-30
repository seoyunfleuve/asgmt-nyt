import React, { RefObject, useEffect, useRef } from 'react';

interface IIntersectionObserverProps {
  observerCallback: IntersectionObserverCallback;
  threshold?: number;
}

export const intersectionObserver = ({
  observerCallback,
  threshold = 0.1,
}: IIntersectionObserverProps) => {
  const targetRef: RefObject<HTMLDivElement> = useRef(null);

  const observer = new IntersectionObserver(observerCallback, {
    threshold,
  });

  useEffect(() => {
    if (!targetRef) return;

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [observerCallback, targetRef]);

  return { targetRef };
};

export default intersectionObserver;
