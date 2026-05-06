"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useCountUp } from "@/hooks/use-count-up";
import { typography } from "@/lib/design-system";
import { testimonials } from "@/lib/site-content";

const featuredStories = testimonials.slice(0, 3);
const testimonialImages = [
  "/images/testimonial/testimonial1.png",
  "/images/testimonial/testimonial2.JPG",
  "/images/testimonial/testimonial3.png",
] as const;
const instagramUrl = "https://www.instagram.com/masseusehealthco/?hl=en";

const legacyStats = [
  {
    value: 30000,
    suffix: "+",
    label: "Australians trust our products",
  },
  {
    value: 17,
    suffix: "+ years",
    label: "Experience in wellness",
  },
  {
    value: 100,
    suffix: "%",
    label: "Australian owned & operated",
  },
] as const;

type CountUpStatProps = {
  value: number;
  suffix: string;
};

function CountUpStat({ value: targetValue, suffix }: CountUpStatProps) {
  const { elementRef, isComplete, value } = useCountUp<HTMLSpanElement>(
    targetValue,
    {
      duration: targetValue > 1000 ? 1900 : 1600,
      threshold: 0.55,
    },
  );

  return (
    <span
      ref={elementRef}
      className={`inline-flex transition duration-700 ${
        isComplete
          ? "text-[#27C8E6] [text-shadow:0_0_24px_rgba(39,200,230,0.38)]"
          : "text-slate-950"
      }`}
    >
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export function CustomerStoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const context = gsap.context(() => {
      const captions = gsap.utils.toArray<HTMLElement>("[data-customer-story-caption]");
      const legacyStatRows = gsap.utils.toArray<HTMLElement>("[data-legacy-stat-row]");

      gsap.set([...captions, ...legacyStatRows], {
        opacity: 0,
        y: 28,
        willChange: "opacity, transform",
      });

      captions.forEach((caption) => {
        ScrollTrigger.create({
          trigger: caption,
          start: "top 82%",
          onEnter: () => {
            gsap.to(caption, {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(caption, {
              opacity: 0,
              y: 28,
              duration: 0.35,
              ease: "power2.out",
            });
          },
        });
      });

      ScrollTrigger.create({
        trigger: "[data-legacy-stats]",
        start: "top 78%",
        onEnter: () => {
          gsap.to(legacyStatRows, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
          });
        },
        onLeaveBack: () => {
          gsap.to(legacyStatRows, {
            opacity: 0,
            y: 28,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05,
          });
        },
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="customer-stories-heading"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="w-full">
        <div className="max-w-6xl">
          <h2
            id="customer-stories-heading"
            className={`${typography.heroHeading} text-slate-950 lg:whitespace-nowrap`}
          >
            Recovery routines, captured in real life.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featuredStories.map((story, index) => (
            <article key={story.author} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-slate-100 shadow-sm transition-[border-radius] duration-500 ease-out group-hover:rounded-[1.5rem]">
                <Image
                  src={testimonialImages[index]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent" />
              </div>

              <div data-customer-story-caption className="px-2 pt-6">
                <blockquote className="text-lg leading-8 text-slate-700">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {story.author}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
          >
            Want to see more amazing stories? Follow us on
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white transition group-hover:bg-slate-800">
              <svg
                viewBox="0 0 24 24"
                aria-label="Instagram"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="mt-20 grid gap-10 border-y border-slate-200 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="max-w-4xl">
            <h3 className="max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              Masseuse Health Co. is the next chapter in whole-body{" "}
              <span className="italic">wellness</span>.
            </h3>
            <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              <p>
                Masseuse Health Co. was born from the same team behind Masseuse Massage
                Chairs, one of Australia&apos;s most trusted wellness brands, known for
                delivering high-quality recovery tools and exceptional service for over
                a decade.
              </p>
              <p>
                With more than 30,000 Australians using our massage chairs to support
                their physical and mental wellbeing at home, Masseuse has built a
                reputation for care, innovation, and lasting results.
              </p>
              <p>
                We&apos;re bringing that deep experience into active recovery with ice
                baths, infrared saunas, and tools built for modern performance. Same
                commitment to quality. Same customer-first service. A powerful evolution
                into whole-body wellness.
              </p>
            </div>
          </div>

          <div
            data-legacy-stats
            className="mx-auto grid w-full max-w-md gap-10 self-center border-l border-slate-200 pl-6 sm:pl-8 lg:justify-items-center lg:border-l-0 lg:pl-0"
          >
            {legacyStats.map((stat) => (
              <div
                key={stat.label}
                data-legacy-stat-row
                className="w-full text-left lg:max-w-xs lg:text-center"
              >
                <p className="text-5xl font-semibold leading-none tracking-[-0.06em] text-slate-950 sm:text-7xl">
                  <CountUpStat value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
