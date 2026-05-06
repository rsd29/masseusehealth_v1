"use client";

import Image from "next/image";

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

type PressCarouselProps = {
  headingClassName: string;
};

export function PressCarousel({ headingClassName }: PressCarouselProps) {
  return (
    <section aria-labelledby="press-carousel-heading" className="overflow-hidden bg-white">
      <div className="w-full pb-16 pt-16 sm:pt-20 lg:pt-24">
        <h2
          id="press-carousel-heading"
          className={`${headingClassName} ${typography.heroHeading} px-4 text-center text-slate-950 sm:px-6 lg:px-8`}
        >
          Proven across elite performance
        </h2>

        <div className="mt-12 w-screen overflow-hidden">
          <div className="press-marquee flex w-max items-stretch will-change-transform">
            {Array.from({ length: 2 }, (_, setIndex) => (
              <div
                key={setIndex}
                className="flex min-w-max items-stretch gap-8 pr-8"
                aria-hidden={setIndex > 0}
              >
                {pressItems.map((item) => (
                  <figure
                    key={`${setIndex}-${item.brand}`}
                    className="flex w-[17rem] shrink-0 flex-col items-center justify-start text-center sm:w-[19rem] lg:w-[21rem]"
                  >
                    <div className="relative mx-auto h-[5.5rem] w-full max-w-60">
                      <Image
                        src={item.logoSrc}
                        alt={`${item.brand} logo`}
                        fill
                        sizes="240px"
                        className="object-contain"
                      />
                    </div>
                    <blockquote
                      aria-label={item.quote}
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
      </div>
    </section>
  );
}
