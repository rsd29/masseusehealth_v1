"use client";

import { useEffect, useRef, useState } from "react";

const clickableSelector = [
  "a",
  "button",
  "summary",
  "select",
  "input",
  "textarea",
  "[role='button']",
  "[data-cursor-clickable]",
].join(",");

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const isClickableRef = useRef(false);
  const isVisibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    document.documentElement.classList.add("custom-cursor-enabled");

    const updateCursor = () => {
      const cursor = cursorRef.current;

      if (cursor) {
        const currentPosition = currentPositionRef.current;
        const targetPosition = targetPositionRef.current;

        currentPosition.x += (targetPosition.x - currentPosition.x) * 0.24;
        currentPosition.y += (targetPosition.y - currentPosition.y) * 0.24;

        cursor.style.transform = `translate3d(${currentPosition.x}px, ${currentPosition.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameRef.current = window.requestAnimationFrame(updateCursor);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetPositionRef.current = { x: event.clientX, y: event.clientY };

      if (!isVisibleRef.current) {
        currentPositionRef.current = { x: event.clientX, y: event.clientY };
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      const target = event.target;
      const nextIsClickable =
        target instanceof Element && Boolean(target.closest(clickableSelector));

      if (nextIsClickable !== isClickableRef.current) {
        isClickableRef.current = nextIsClickable;
        setIsClickable(nextIsClickable);
      }
    };

    const handlePointerLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handlePointerEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    animationFrameRef.current = window.requestAnimationFrame(updateCursor);
    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    document.documentElement.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.documentElement.removeEventListener("pointerenter", handlePointerEnter);

      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden bg-white mix-blend-difference transition-[width,height,border-radius,opacity] duration-200 ease-out md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        isClickable
          ? "h-8 w-8 rounded-[0.15rem]"
          : "h-3.5 w-3.5 rounded-full"
      }`}
    />
  );
}
