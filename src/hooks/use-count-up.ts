"use client";

import { useEffect, useRef, useState } from "react";

type UseCountUpOptions = {
  duration?: number;
  threshold?: number;
};

export function useCountUp<TElement extends HTMLElement = HTMLElement>(
  targetValue: number,
  { duration = 1600, threshold = 0.5 }: UseCountUpOptions = {},
) {
  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef<TElement>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => {
        setValue(targetValue);
        setIsComplete(true);
      });

      return () => window.cancelAnimationFrame(frame);
    }

    let animationFrame = 0;

    const animate = () => {
      if (isAnimatingRef.current) {
        return;
      }

      isAnimatingRef.current = true;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setValue(Math.round(easedProgress * targetValue));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(tick);
        } else {
          isAnimatingRef.current = false;
          setIsComplete(true);
        }
      };

      setValue(0);
      setIsComplete(false);
      animationFrame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          animate();
        } else if (!isAnimatingRef.current) {
          setValue(0);
          setIsComplete(false);
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [duration, targetValue, threshold]);

  return { elementRef, isComplete, value };
}
