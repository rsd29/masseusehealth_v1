"use client";

import type { ReactNode } from "react";

import type { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";

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

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
