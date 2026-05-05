"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { typography } from "@/lib/design-system";
import { testimonials } from "@/lib/site-content";

const featuredStories = testimonials.slice(0, 3);
const testimonialImageSrc = "/images/testimonial/thermapod%20blake%20acres.png";
const instagramUrl = "https://www.instagram.com/masseusehealthco/?hl=en";

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

      gsap.set(captions, {
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
      <div className="mx-auto max-w-7xl">
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-sm">
                <Image
                  src={testimonialImageSrc}
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
      </div>
    </section>
  );
}
