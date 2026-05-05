"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

import { typography } from "@/lib/design-system";

const pressItems = [
  {
    brand: "AFL",
    quote:
      "Recovery is central to repeat performance across a long AFL season. Tools that help athletes reset, manage soreness, and stay consistent belong in every serious program.",
    logoSrc: "/images/AFL LOGO BLACK_contrast.png",
  },
  {
    brand: "NRL",
    quote:
      "Rugby league demands resilience week after week. Accessible heat and cold recovery gives players a practical way to prepare, recover, and return ready for contact.",
    logoSrc: "/images/NRL_contrast.png",
  },
  {
    brand: "NBL",
    quote:
      "Basketball performance depends on fresh legs, mobility, and fast recovery between sessions. Consistent recovery routines help athletes stay sharp through heavy training blocks.",
    logoSrc: "/images/NBL_contrast.png",
  },
  {
    brand: "UFC",
    quote:
      "Combat athletes need recovery that supports intense conditioning, weight cuts, and daily sparring loads. Reliable recovery equipment helps keep preparation disciplined.",
    logoSrc: "/images/UFC.png",
  },
  {
    brand: "Olympics",
    quote:
      "World-class performance is built through small, repeatable habits. Recovery systems that support sleep, circulation, and readiness can make every training day count.",
    logoSrc: "/images/olympics.png",
  },
  {
    brand: "AusCycling",
    quote:
      "Cyclists understand the value of recovery after long rides, intervals, and competition. Smart home recovery helps athletes manage load and maintain training momentum.",
    logoSrc: "/images/auscycling-main-black.png",
  },
] as const;

const visibleItems = 4;

type PressCarouselProps = {
  headingClassName: string;
};

export function PressCarousel({ headingClassName }: PressCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);

  const slides = useMemo(() => {
    return pressItems.map((_, index) =>
      Array.from({ length: visibleItems }, (__, offset) => pressItems[(index + offset) % pressItems.length]),
    );
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const handleDragStart = (clientX: number) => {
    dragStartXRef.current = clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) {
      return;
    }

    setDragOffset(clientX - dragStartXRef.current);
  };

  const handleDragEnd = () => {
    if (!isDragging) {
      return;
    }

    const dragThreshold = 70;

    if (dragOffset > dragThreshold) {
      goToSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      goToSlide(activeIndex + 1);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section aria-labelledby="press-carousel-heading" className="bg-white">
      <div className="w-full px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <h2
          id="press-carousel-heading"
          className={`${headingClassName} ${typography.heroHeading} text-center text-slate-950`}
        >
          Trusted by the best
        </h2>

        <div
          className={`mt-12 overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={(event) => handleDragStart(event.clientX)}
          onMouseMove={(event) => handleDragMove(event.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(event) => handleDragStart(event.touches[0].clientX)}
          onTouchMove={(event) => handleDragMove(event.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            className={`flex select-none ${isDragging ? "" : "transition-transform duration-500 ease-out"}`}
            style={{ transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))` }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid min-w-full gap-10 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8"
                aria-hidden={slideIndex !== activeIndex}
              >
                {slide.map((item) => (
                  <figure key={`${slideIndex}-${item.brand}`} className="text-center">
                    <div className="relative mx-auto h-16 w-full max-w-44">
                      <Image
                        src={item.logoSrc}
                        alt={`${item.brand} logo`}
                        fill
                        sizes="176px"
                        className="object-contain"
                      />
                    </div>
                    <blockquote
                      className={`mx-auto mt-5 max-w-72 ${typography.brandQuote} italic text-slate-700`}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2" aria-label="Press carousel controls">
          {pressItems.map((item, index) => (
            <button
              key={item.brand}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition ${
                activeIndex === index ? "w-2.5 bg-slate-950" : "w-2.5 bg-slate-400 hover:bg-slate-600"
              }`}
              aria-label={`Show press quote ${index + 1}`}
              aria-current={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
