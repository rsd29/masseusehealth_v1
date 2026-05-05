"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import { typography } from "@/lib/design-system";

const pressItems = [
  {
    brand: "AFL",
    quote:
      "Recovery tools that help athletes reset and stay consistent through a long season.",
    logoSrc: "/images/AFL LOGO BLACK_contrast.png",
  },
  {
    brand: "NRL",
    quote:
      "Heat and cold recovery built for week-after-week resilience.",
    logoSrc: "/images/NRL_contrast.png",
  },
  {
    brand: "NBL",
    quote:
      "Recovery routines that help keep legs fresh and athletes sharp.",
    logoSrc: "/images/NBL_contrast.png",
  },
  {
    brand: "UFC",
    quote:
      "Reliable recovery support for intense conditioning and daily training loads.",
    logoSrc: "/images/UFC.png",
  },
  {
    brand: "Olympics",
    quote:
      "Small recovery habits that help make every training day count.",
    logoSrc: "/images/olympics.png",
  },
  {
    brand: "AusCycling",
    quote:
      "Smart recovery for managing load and maintaining training momentum.",
    logoSrc: "/images/auscycling-main-black.png",
  },
] as const;

const visibleItems = 4;

type PressCarouselProps = {
  headingClassName: string;
};

function AnimatedQuoteText({ quote }: { quote: string }) {
  const quotedText = `“${quote}”`;

  return (
    <>
      {quotedText.split(" ").map((word, wordIndex, words) => (
        <span
          key={`${word}-${wordIndex}`}
          data-press-quote-word
          className="inline-block whitespace-nowrap"
        >
          {Array.from(word).map((character, characterIndex) => (
            <span
              key={`${character}-${characterIndex}`}
              data-press-quote-char
              className="inline-block"
            >
              {character}
            </span>
          ))}
          {wordIndex < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </>
  );
}

export function PressCarousel({ headingClassName }: PressCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartXRef = useRef(0);

  const slides = useMemo(() => {
    return pressItems.map((_, index) =>
      Array.from({ length: visibleItems }, (__, offset) => pressItems[(index + offset) % pressItems.length]),
    );
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const context = gsap.context(() => {
      const allCharacters = gsap.utils.toArray<HTMLElement>("[data-press-quote-char]");
      const activeSlide = carousel.querySelector<HTMLElement>(
        `[data-press-slide="${activeIndex}"]`,
      );
      const activeQuotes = activeSlide
        ? Array.from(activeSlide.querySelectorAll<HTMLElement>("[data-press-quote]"))
        : [];

      gsap.killTweensOf(allCharacters);
      gsap.set(allCharacters, { opacity: 0, y: "0.35em" });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(activeSlide?.querySelectorAll("[data-press-quote-char]") ?? [], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      activeQuotes.forEach((quote) => {
        const words = Array.from(
          quote.querySelectorAll<HTMLElement>("[data-press-quote-word]"),
        );
        const timeline = gsap.timeline();

        words.forEach((word, wordIndex) => {
          const characters = word.querySelectorAll<HTMLElement>(
            "[data-press-quote-char]",
          );

          timeline.to(
            characters,
            {
              opacity: 1,
              y: 0,
              duration: 0.16,
              ease: "power1.out",
              stagger: 0.018,
            },
            wordIndex * 0.095,
          );
        });
      });
    }, carousel);

    return () => {
      context.revert();
    };
  }, [activeIndex]);

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
          Proven across elite performance
        </h2>

        <div
          ref={carouselRef}
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
                data-press-slide={slideIndex}
                className="grid min-w-full gap-10 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8"
                aria-hidden={slideIndex !== activeIndex}
              >
                {slide.map((item) => (
                  <figure key={`${slideIndex}-${item.brand}`} className="text-center">
                    <div className="relative mx-auto h-24 w-full max-w-64">
                      <Image
                        src={item.logoSrc}
                        alt={`${item.brand} logo`}
                        fill
                        sizes="256px"
                        className="object-contain"
                      />
                    </div>
                    <blockquote
                      data-press-quote
                      aria-label={item.quote}
                      className={`mx-auto mt-5 max-w-72 ${typography.brandQuote} italic text-slate-700`}
                    >
                      <span aria-hidden="true">
                        <AnimatedQuoteText quote={item.quote} />
                      </span>
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
