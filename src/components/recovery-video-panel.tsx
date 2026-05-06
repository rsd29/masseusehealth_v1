"use client";

import { useEffect, useRef, useState } from "react";

const recoveryVideoSrc =
  "/videos/recovery-preview.mp4";

export function RecoveryVideoPanel() {
  const panelRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "600px 0px",
        threshold: 0,
      },
    );

    observer.observe(panel);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) {
      return;
    }

    videoRef.current?.play().catch(() => {
      // Some browsers defer autoplay until the media is ready; the autoplay
      // attribute still handles the normal muted playback path.
    });
  }, [shouldLoadVideo]);

  return (
    <div
      ref={panelRef}
      className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-sm"
    >
      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          src={recoveryVideoSrc}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : null}
    </div>
  );
}
