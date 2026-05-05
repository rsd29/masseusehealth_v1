"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { typography } from "@/lib/design-system";

const bentoProducts = [
  {
    name: "Everglow Infrared Sauna",
    category: "Sauna",
    href: "/products/everglow-infrared",
    summary: "Full-spectrum infrared heat for deep recovery rituals at home.",
    originalPrice: "$11,995",
    salePrice: "$6,995",
    discount: "42% off",
    imageSrc: "/images/MHCSauna-40.jpg",
    className: "lg:col-span-5 lg:row-span-4",
  },
  {
    name: "ThermaPod",
    category: "Portable sauna",
    href: "/products/thermapod",
    summary: "Compact heat therapy designed for flexible everyday use.",
    originalPrice: "$595",
    salePrice: "$287",
    discount: "52% off",
    imageSrc: "/images/productimages/thermal_pod.webp",
    className: "lg:col-span-4 lg:row-span-3",
  },
  {
    name: "Niseko",
    category: "Plunge",
    href: "/products/niseko",
    summary: "Cold immersion for serious recovery and performance routines.",
    originalPrice: "$12,995",
    salePrice: "$7,177",
    discount: "45% off",
    imageSrc: "/images/productimages/niseko.png",
    className: "lg:col-span-3 lg:row-span-3",
  },
  {
    name: "Plunge",
    category: "Plunge",
    href: "/products/plunge",
    summary: "A smaller-footprint plunge built for quick daily resets.",
    originalPrice: "$695",
    salePrice: "$347",
    discount: "50% off",
    imageSrc: "/images/productimages/plunge.webp",
    className: "lg:col-span-3 lg:row-span-3",
  },
  {
    name: "Aspen",
    category: "Plunge",
    href: "/products/aspen",
    summary: "A refined cold therapy setup with a luxury home presence.",
    originalPrice: "$19,995",
    salePrice: "$6,777",
    discount: "66% off",
    imageSrc: "/images/productimages/aspen.jpg",
    className: "lg:col-span-4 lg:row-span-3",
  },
  {
    name: "Everglow Traditional Sauna",
    category: "Sauna",
    href: "/products/everglow-traditional",
    summary: "Traditional sauna heat for a classic home wellness ritual.",
    originalPrice: "$11,995",
    salePrice: "$7,995",
    discount: "33% off",
    imageSrc: "/images/hero-sauna.png",
    className: "lg:col-span-5 lg:row-span-2",
  },
] as const;

export function ProductBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const strikeLines = gsap.utils.toArray<HTMLElement>("[data-bento-price-strike]");
      const saleGroups = gsap.utils.toArray<HTMLElement>("[data-bento-sale-price]");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(strikeLines, { scaleX: 1 });
        gsap.set(saleGroups, { opacity: 1, x: 0 });
        return;
      }

      gsap.set(strikeLines, {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(saleGroups, {
        opacity: 0,
        x: -12,
      });

      const timeline = gsap.timeline({ paused: true });

      timeline
        .to(strikeLines, {
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
        })
        .to(
          saleGroups,
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.2",
        );

      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        onEnter: () => timeline.play(),
        onLeaveBack: () => timeline.reverse(),
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} aria-labelledby="product-bento-heading" className="bg-white">
      <h2 id="product-bento-heading" className="sr-only">
        Product collections
      </h2>
      <div className="grid gap-4 px-4 pb-16 sm:px-6 lg:h-[calc(100svh-76px)] lg:min-h-[760px] lg:grid-cols-12 lg:grid-rows-6 lg:px-8">
        {bentoProducts.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className={`group relative min-h-80 overflow-hidden rounded-[1.25rem] bg-slate-950 shadow-sm outline-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.22)] focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-4 sm:min-h-96 lg:min-h-0 ${product.className}`}
          >
            <Image
              src={product.imageSrc}
              alt={`${product.name} product image`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5 transition duration-500 group-hover:from-black/82 group-hover:via-black/35" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                {product.category}
              </p>
              <h3 className={`mt-3 ${typography.heroHeading}`}>{product.name}</h3>
              <div
                className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-2xl font-medium tracking-[-0.05em] tabular-nums sm:text-3xl lg:text-4xl"
              >
                <span className="relative inline-flex text-white/76">
                  {product.originalPrice}
                  <span
                    data-bento-price-strike
                    className="absolute left-[-0.08em] top-1/2 h-1 w-[calc(100%+0.16em)] -translate-y-1/2 rounded-full bg-white"
                    aria-hidden="true"
                  />
                </span>
                <span
                  data-bento-sale-price
                  className="inline-flex items-center gap-3 text-[#00e05a]"
                >
                  <span>{product.salePrice}</span>
                  <span className="rounded-full border border-[#00e05a]/55 bg-[#00e05a]/14 px-3 py-1 text-sm font-semibold tracking-[-0.03em] text-[#31ff7a] sm:text-base">
                    {product.discount}
                  </span>
                </span>
              </div>
              <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/78">
                    {product.summary}
                  </p>
                  <span className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">
                    View product
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
