"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { typography } from "@/lib/design-system";

type HeroSectionProps = {
  headingClassName: string;
  productHref: string;
};

export function HeroSection({ headingClassName, productHref }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const media = mediaRef.current;
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;
    const centerContent = centerContentRef.current;

    if (!section || !media || !leftContent || !rightContent || !centerContent) {
      return;
    }

    const context = gsap.context(() => {
      const centerLines = gsap.utils.toArray<HTMLElement>(
        "[data-hero-center-line]",
        centerContent,
      );

      gsap.set(media, {
        borderRadius: 0,
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        willChange: "clip-path, border-radius",
      });

      gsap.set([leftContent, rightContent], {
        willChange: "opacity",
      });

      gsap.set([leftContent, rightContent], { opacity: 1 });
      gsap.set(centerLines, {
        opacity: 0,
        y: 18,
        willChange: "opacity, transform",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "40% top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          media,
          {
            borderRadius: 48,
            clipPath: "inset(4vw 4vw 4vw 4vw round 48px)",
            duration: 1.2,
            ease: "none",
          },
          0,
        )
        .to(
          [leftContent, rightContent],
          {
            opacity: 0,
            duration: 0.45,
            ease: "none",
          },
          0,
        );

      const lineReveal = gsap.to(centerLines, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power1.out",
        stagger: 0.3,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        onEnter: () => lineReveal.play(),
        onLeaveBack: () => lineReveal.reverse(),
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white">
      <div className="relative h-[calc(100dvh-76px)] min-h-[calc(100svh-76px)] w-full">
        <div ref={mediaRef} className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/MHCSauna-40.jpg"
            alt="Everglow infrared sauna glowing in a styled wellness room"
            fill
            priority
            quality={100}
            sizes="100vw"
            unoptimized
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div
            ref={rightContentRef}
            className="pointer-events-none absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8"
          >
            <Image
              src="/assets/masseuse-health-logo-mark.png"
              alt=""
              width={180}
              height={180}
              priority
              aria-hidden="true"
              className="hero-mark-enter h-20 w-20 object-contain brightness-0 invert sm:h-28 sm:w-28 lg:h-40 lg:w-40"
            />
          </div>
          <div
            ref={leftContentRef}
            className="absolute bottom-6 left-4 z-10 sm:bottom-8 sm:left-6 lg:bottom-10 lg:left-8"
          >
            <div className="flex flex-col items-start gap-3">
              <p
                className={`${headingClassName} max-w-xs ${typography.heroHeading} text-white sm:max-w-md lg:max-w-xl`}
              >
                Everglow Infrared
              </p>
              <Link
                href={productHref}
                className={`group inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-black px-6 py-3 ${typography.actionLabel} text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-neutral-900 hover:shadow-[0_10px_24px_rgba(15,23,42,0.18)]`}
              >
                Experience Real Recovery
                <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
          <div
            ref={centerContentRef}
            className="pointer-events-none absolute inset-x-0 bottom-[18%] z-10 flex justify-center px-3 text-center sm:bottom-[16%] sm:px-4 lg:bottom-[14%]"
          >
            <p
              className={`${headingClassName} max-w-[98vw] text-[clamp(0.82rem,3.25vw,3.35rem)] font-normal leading-tight tracking-[-0.04em] text-white [text-shadow:0_10px_38px_rgba(0,0,0,0.5),0_3px_14px_rgba(0,0,0,0.45)]`}
            >
              <span data-hero-center-line className="block whitespace-nowrap">
                Backed by{" "}
                <span className="text-[#f0b35f]">research</span>, trusted by{" "}
                <span className="italic text-white/95">pros</span>
              </span>
              <span data-hero-center-line className="block whitespace-nowrap">
                unlock <span className="italic text-white/95">deeper recovery</span>,
                sharper focus,
              </span>
              <span data-hero-center-line className="block whitespace-nowrap">
                and{" "}
                <span className="italic text-[#f2d7b6] drop-shadow-[0_0_18px_rgba(242,215,182,0.5)]">
                  lasting wellbeing
                </span>{" "}
                with every session.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
