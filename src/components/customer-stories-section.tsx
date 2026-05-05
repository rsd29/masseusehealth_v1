"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { typography } from "@/lib/design-system";
import { testimonials } from "@/lib/site-content";

const featuredStories = testimonials.slice(0, 3);
const testimonialImageSrc = "/images/testimonial/thermapod%20blake%20acres.png";

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
      </div>
    </section>
  );
}
