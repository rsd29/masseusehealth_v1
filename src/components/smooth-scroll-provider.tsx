"use client";

import { useEffect, type ReactNode } from "react";

import type { LenisOptions } from "lenis";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lenisOptions: LenisOptions = {
  autoRaf: true,
  smoothWheel: true,
  syncTouch: true,
  syncTouchLerp: 0.08,
  touchMultiplier: 1.05,
  wheelMultiplier: 0.95,
  lerp: 0.085,
  anchors: {
    duration: 1.1,
  },
  stopInertiaOnNavigate: true,
};

function ScrollTriggerLenisSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, []);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      <ScrollTriggerLenisSync />
      {children}
    </ReactLenis>
  );
}
