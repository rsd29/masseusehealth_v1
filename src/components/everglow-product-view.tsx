"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { EverglowBuyBox } from "@/components/everglow-buy-box";
import { useCountUp } from "@/hooks/use-count-up";
import {
  everglowProductDetail,
  type EverglowFinishId,
  type EverglowSizeId,
} from "@/lib/site-content";

const productImages = [
  "/images/MHCSauna-40.jpg",
  "/images/productpage_everglow/MHCSauna-56.jpg",
  "/images/productpage_everglow/MHCSauna-83.jpg",
  "/images/productpage_everglow/MHCSauna-93.jpg",
  "/images/productpage_everglow/MHCSauna-190.jpg",
  "/images/productpage_everglow/MHCSauna-198.jpg",
  "/images/productpage_everglow/MHCSauna-199.jpg",
  "/images/productpage_everglow/MHCSauna-42.jpg",
] as const;

const configurationImages: Record<EverglowSizeId, Record<EverglowFinishId, string>> = {
  zen: {
    "red-cedar-black":
      "/images/everglow_infrared/Zen_-_Red_Cedar_Black_-_Size-lifestyle.webp",
    "red-cedar-natural":
      "/images/everglow_infrared/Zen_Red_Cedar_Natural_-_Size1-lifestyle.webp",
    "hemlock-black":
      "/images/everglow_infrared/Zen_Hemlock_Black_-_Size1-lifestyle.webp",
    "hemlock-natural":
      "/images/everglow_infrared/Zen_Hemlock_Natural_-_Size1-lifestyle.webp",
  },
  lux: {
    "red-cedar-black": "/images/everglow_infrared/lux-redcedarblack.webp",
    "red-cedar-natural": "/images/everglow_infrared/lux-redcedarnatural.webp",
    "hemlock-black": "/images/everglow_infrared/lux-hemlockblack.webp",
    "hemlock-natural": "/images/everglow_infrared/lux-hemlocknatural.webp",
  },
  grande: {
    "red-cedar-black": "/images/everglow_infrared/grande-redcedarblack.webp",
    "red-cedar-natural": "/images/everglow_infrared/grande-redcedarnatural.webp",
    "hemlock-black": "/images/everglow_infrared/grande_hemlockblack.webp",
    "hemlock-natural": "/images/everglow_infrared/grande-hemlocknatural.webp",
  },
};

const sizeCardImages: Record<EverglowSizeId, string> = {
  zen: "/images/productpage_everglow/imgi_33_infrared-slider-2_lifestyle.webp",
  lux: "/images/productpage_everglow/everglow-lux.png",
  grande: "/images/MHCSauna-40.jpg",
};

const finishTextColors: Record<EverglowFinishId, string> = {
  "red-cedar-black": "text-[#7a3f1f]",
  "red-cedar-natural": "text-[#c8874a]",
  "hemlock-black": "text-[#7c6a49]",
  "hemlock-natural": "text-[#b58a48]",
};

type GalleryColumnProps = {
  sizeId: EverglowSizeId;
  finishId: EverglowFinishId;
};

function GalleryColumn({ sizeId, finishId }: GalleryColumnProps) {
  const selectedSize = everglowProductDetail.sizes.find((size) => size.id === sizeId)!;
  const selectedFinish = everglowProductDetail.finishes.find((finish) => finish.id === finishId)!;
  const selectedImage = configurationImages[sizeId][finishId];

  return (
    <div className="space-y-3 lg:sticky lg:top-24 lg:self-start">
      <div>
        <Image
          src={selectedImage}
          alt={`Everglow ${selectedSize.label} Infrared Sauna in ${selectedFinish.label}`}
          width={1200}
          height={1200}
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="h-auto w-full object-contain"
        />
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Selected configuration
          </p>
          <p className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
            <span className="text-slate-950">Everglow {selectedSize.label}</span>
            <span className={finishTextColors[finishId]}>{selectedFinish.label}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="mt-16 grid gap-10 py-12 sm:grid-cols-3">
      {everglowProductDetail.trustBadges.map((b, index) => (
        <div
          key={b.title}
          data-trust-badge
          style={{ transitionDelay: `${index * 90}ms` }}
          className="mx-auto max-w-sm translate-y-4 text-center opacity-0 transition duration-700 ease-out"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm">
            <TrustIcon title={b.title} />
          </div>
          <p className="mt-6 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
            {b.title}
          </p>
          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {b.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function TrustIcon({ title }: { title: string }) {
  if (title.includes("Delivery")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h11v10H3z" />
        <path d="M14 10h3.5L21 13.5V17h-7z" />
        <path d="M6.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M17.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    );
  }

  if (title.includes("Warranty")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 5 6v5c0 4.5 2.8 8.4 7 10 4.2-1.6 7-5.5 7-10V6z" />
        <path d="m8.8 12 2.1 2.1 4.4-4.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
      <path d="M7.5 7.5 16.5 16.5" />
      <path d="m16.5 7.5-9 9" />
    </svg>
  );
}

function AnimatedOperatingRange() {
  const { elementRef, value } = useCountUp<HTMLParagraphElement>(65, {
    duration: 1700,
  });

  return (
    <p
      ref={elementRef}
      className="mt-6 text-7xl font-semibold tracking-[-0.07em] sm:text-8xl"
    >
      {value}°C
    </p>
  );
}

export function EverglowProductView() {
  const [sizeId, setSizeId] = useState<EverglowSizeId>("lux");
  const [finishId, setFinishId] = useState<EverglowFinishId>("red-cedar-black");
  const featureScrollSectionRef = useRef<HTMLElement>(null);
  const featureTrackRef = useRef<HTMLDivElement>(null);
  const selectedSize = everglowProductDetail.sizes.find((size) => size.id === sizeId)!;
  const selectedFinishMaterial = finishId.startsWith("red-cedar") ? "Red Cedar" : "Hemlock";
  const featureScrollCards = [
    ...everglowProductDetail.featuresDetailed.map((body) => ({
      eyebrow: "Feature",
      title: body,
      body: "",
    })),
    ...everglowProductDetail.scienceBacked.items.map((item) => ({
      eyebrow: "Science-backed recovery",
      title: item.title,
      body: item.body,
    })),
  ];

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-trust-badge]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => {
        element.classList.remove("opacity-0", "translate-y-4", "translate-y-5");
        element.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4", "translate-y-5");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.24 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = featureScrollSectionRef.current;
    const track = featureTrackRef.current;

    if (!section || !track) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const getScrollAmount = () =>
          Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth * 0.28);

        return gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => media.revert();
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <>
      <section
        id="overview"
        className="border-b border-black/5 bg-[radial-gradient(circle_at_50%_0%,_#f4f7fb_0%,_#fff_42%,_#fff_100%)]"
      >
        <div className="w-full px-4 pb-8 pt-32 sm:px-6 sm:pt-36 lg:px-8">
          <div id="models" className="mt-14">
            <div className="max-w-none">
              <h2 className="text-4xl font-semibold leading-none tracking-[-0.055em] text-slate-950 lg:whitespace-nowrap lg:text-6xl">
                Meet the Everglow Infrared Sauna, refined for every recovery space.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Premium infrared heat, Canadian timber, chromotherapy, Bluetooth audio,
                and precise digital control in a sauna built for modern homes.
              </p>
            </div>
            <div data-model-card-grid className="mt-12 grid gap-0 lg:grid-cols-3">
              {everglowProductDetail.sizes.map((size, index) => (
                <article
                  key={size.id}
                  data-model-card
                  className={`flex min-h-[42rem] flex-col bg-white transition duration-300 hover:bg-slate-50 ${
                    index > 0 ? "lg:border-l lg:border-slate-200" : ""
                  }`}
                >
                  <div className="relative h-[30rem] shrink-0 overflow-hidden bg-slate-100 lg:h-[66%]">
                    <Image
                      src={sizeCardImages[size.id]}
                      alt={`Everglow ${size.label} infrared sauna`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className={`object-cover ${
                        size.id === "zen"
                          ? "object-[50%_24%]"
                          : size.id === "lux"
                            ? "scale-[1.04]"
                            : ""
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xl font-bold uppercase tracking-[0.04em] text-slate-950 sm:text-2xl">
                      Everglow {size.label}
                    </p>
                    <p className="mt-6 text-base leading-7 text-slate-600">{size.positioning}</p>
                    <dl className="mt-auto space-y-4 border-t border-slate-200 pt-6 text-sm">
                      <div>
                        <dt className="font-semibold text-slate-950">Dimensions</dt>
                        <dd className="mt-1 text-slate-600">{size.dimensionsLabel}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-950">Best for</dt>
                        <dd className="mt-1 text-slate-600">{size.capacity}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
            <div className="mx-auto mt-12 max-w-xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Sauna type
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Choose the infrared sauna format first.
              </p>
              <div
                role="tablist"
                aria-label="Choose Everglow infrared sauna size"
                className="mx-auto mt-4 grid max-w-md grid-cols-3 rounded-full bg-slate-100 p-1"
              >
                {everglowProductDetail.sizes.map((size) => {
                  const isSelected = sizeId === size.id;

                  return (
                    <button
                      key={size.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSizeId(size.id)}
                      className={`rounded-full px-3 py-3 text-center text-sm font-semibold transition ${
                        isSelected
                          ? "bg-slate-950 text-white shadow-[0_12px_30px_rgba(15,23,42,0.2)]"
                          : "text-slate-600 hover:bg-white hover:text-slate-950"
                      }`}
                    >
                      {size.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            id="buy"
            className="mt-14 grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,1.05fr)] lg:items-start"
          >
            <GalleryColumn
              sizeId={sizeId}
              finishId={finishId}
            />
            <div className="border border-slate-200/80 bg-white/82 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
              <EverglowBuyBox
                sizeId={sizeId}
                finishId={finishId}
                onFinishChange={setFinishId}
              />
            </div>
          </div>

          <TrustRow />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="relative min-h-[30rem] overflow-hidden rounded-[1.25rem] bg-slate-950 lg:min-h-[42rem]">
              <Image
                src={productImages[5]}
                alt="Everglow sauna interior lighting and timber finish"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  Full-spectrum comfort
                </p>
                <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-none tracking-[-0.05em] sm:text-6xl">
                  Heat that works deeper, without feeling heavy.
                </h2>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.25rem] bg-slate-950 p-8 text-white lg:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/48">
                  Operating range
                </p>
                <AnimatedOperatingRange />
                <p className="mt-5 max-w-md text-base leading-7 text-white/68">
                  Dry, breathable infrared heat supports longer, more repeatable
                  recovery sessions after training, work, or long days.
                </p>
              </div>
              <div className="relative min-h-80 overflow-hidden rounded-[1.25rem] bg-slate-100">
                <Image
                  src={productImages[6]}
                  alt="Everglow sauna installed in an outdoor wellness setting"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-20">
        <section
          ref={featureScrollSectionRef}
          id="features"
          aria-labelledby="features-heading"
          className="flex min-h-screen scroll-mt-32 items-center overflow-hidden"
        >
          <div className="w-full space-y-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Features
              </p>
              <h2
                id="features-heading"
                className="mt-4 text-3xl font-semibold leading-none tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl"
              >
                Every detail has a job.
              </h2>
            </div>
            <div className="w-screen overflow-hidden">
              <div
                ref={featureTrackRef}
                className="relative -left-[24vw] flex w-max flex-col gap-4 will-change-transform lg:gap-6"
              >
                {[0, 1].map((rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`flex w-max gap-4 lg:gap-6 ${
                      rowIndex === 1 ? "pl-[18vw]" : ""
                    }`}
                  >
                    {featureScrollCards
                      .filter((_, index) => index % 2 === rowIndex)
                      .map((card, index) => {
                        const featureNumber = index * 2 + rowIndex + 1;

                        return (
                          <article
                            key={`${card.eyebrow}-${card.title}`}
                            className="flex h-72 w-[min(82vw,28rem)] shrink-0 flex-col justify-between bg-slate-950 p-8 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] lg:h-96 lg:w-[clamp(28rem,36vw,36rem)] lg:p-10"
                          >
                            <div className="flex items-center justify-between gap-6">
                              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white/38">
                                {String(featureNumber).padStart(2, "0")}
                              </span>
                              <span className="text-right text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#27C8E6]">
                                {card.eyebrow}
                              </span>
                            </div>
                            <div>
                              <h3 className="max-w-xl text-2xl font-semibold leading-tight tracking-[-0.04em] lg:text-3xl">
                                {card.title}
                              </h3>
                              {card.body ? (
                                <p className="mt-5 max-w-xl text-sm leading-6 text-white/68 lg:text-base lg:leading-7">
                                  {card.body}
                                </p>
                              ) : null}
                            </div>
                          </article>
                        );
                      })}
                  </div>
                ))}
              </div>
            </div>
            </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">
          <section id="dimensions" aria-labelledby="dimensions-heading" className="mt-24 scroll-mt-32">
            <h2
              id="dimensions-heading"
              className="text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-5xl"
            >
              Dimensions & weight
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              Dimensions and approximate weight are shown for your selected model and finish.
            </p>
            <div className="mt-8 overflow-x-auto border border-slate-200">
            <table className="w-full min-w-[640px] border-separate border-spacing-y-2 text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">Width</th>
                  <th className="px-4 py-3">Height</th>
                  <th className="px-4 py-3">Depth</th>
                  <th className="px-4 py-3">Approx. weight</th>
                </tr>
              </thead>
              <tbody className="text-slate-900">
                {everglowProductDetail.sizes.map((size) => {
                  const redCedarWeight = everglowProductDetail.weightElectricalByVariant.find(
                    (row) => row.size === size.label && row.finish === "Red Cedar",
                  );
                  const isSelected = size.id === sizeId;

                  return (
                    <tr
                      key={size.id}
                      className={`bg-white outline outline-1 outline-slate-200 transition ${
                        isSelected
                          ? "bg-[#27C8E6]/10 font-bold outline-[#27C8E6]/55"
                          : "font-medium"
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span>{size.label}</span>
                          {isSelected ? (
                            <span className="inline-flex bg-slate-950 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">
                              Selected
                            </span>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-4 py-3">{size.dimensions.wCm} cm</td>
                      <td className="px-4 py-3">{size.dimensions.hCm} cm</td>
                      <td className="px-4 py-3">{size.dimensions.dCm} cm</td>
                      <td className="px-4 py-3">
                        {redCedarWeight ? `${redCedarWeight.weightKg} kg` : "TBC"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          </section>

          <section id="electrical" aria-labelledby="electrical-heading" className="mt-24 scroll-mt-32">
            <h2
              id="electrical-heading"
              className="text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-5xl"
            >
              Electrical
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 lg:whitespace-nowrap">
              Power requirements vary by size and timber selection. Confirm final
              installation requirements for the configuration you choose.
            </p>
            <div className="mt-8 overflow-x-auto border border-slate-200">
            <table className="w-full min-w-[640px] border-separate border-spacing-y-2 text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">Finish</th>
                  <th className="px-4 py-3">Weight</th>
                  <th className="px-4 py-3">Power (W)</th>
                  <th className="px-4 py-3">Voltage</th>
                  <th className="px-4 py-3">AMP</th>
                  <th className="px-4 py-3">Fuse</th>
                  <th className="px-4 py-3">Phase</th>
                </tr>
              </thead>
              <tbody className="text-slate-900">
                {everglowProductDetail.weightElectricalByVariant.map((row) => {
                  const isSelected =
                    row.size === selectedSize.label && row.finish === selectedFinishMaterial;

                  return (
                    <tr
                      key={`${row.size}-${row.finish}`}
                      className={`bg-white outline outline-1 outline-slate-200 transition ${
                        isSelected
                          ? "bg-[#27C8E6]/10 font-bold outline-[#27C8E6]/55"
                          : "font-medium"
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span>{row.size}</span>
                          {isSelected ? (
                            <span className="inline-flex bg-slate-950 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">
                              Selected
                            </span>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-4 py-3">{row.finish}</td>
                      <td className="px-4 py-3">{row.weightKg} kg</td>
                      <td className="px-4 py-3">{row.powerW}</td>
                      <td className="px-4 py-3">{row.voltage}</td>
                      <td className="px-4 py-3">{row.amps}</td>
                      <td className="px-4 py-3">{row.fuseType}</td>
                      <td className="px-4 py-3 capitalize">{row.phase}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm italic text-slate-500">
            {everglowProductDetail.electricianNote}
          </p>
          </section>
        </div>
      </div>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid w-full gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[34rem] overflow-hidden rounded-[1.25rem] bg-slate-950">
            <Image
              src={productImages[6]}
              alt="Everglow Infrared Sauna lifestyle image"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex min-h-[34rem] flex-col justify-end rounded-[1.25rem] bg-slate-950 p-8 text-white lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              Optional add-on
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-5xl">
              Add red light therapy to your heat ritual.
            </h2>
            <p className="mt-6 text-base leading-7 text-white/68">
              The Red Light Therapy Panel can be added to any Everglow model,
              creating a more complete recovery station for performance, skin,
              and daily wellbeing routines.
            </p>
            <p className="mt-8 text-3xl font-semibold tracking-[-0.05em]">
              {everglowProductDetail.redLightAddOn.price}
            </p>
            <a
              href="#buy"
              className="mt-8 inline-flex w-fit rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/88"
            >
              Add to configuration
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="deep-heat-heading"
        className="border-y border-slate-200 bg-slate-950 py-20 text-white"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2
            id="deep-heat-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {everglowProductDetail.deepHeat.title}
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
            {everglowProductDetail.deepHeat.intro}
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {everglowProductDetail.deepHeat.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[0.875rem] border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative grid gap-12 border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-14">
          <div className="aspect-[4/5] max-h-80 overflow-hidden bg-slate-200 lg:max-h-none" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Our Founder
            </p>
            <blockquote className="mt-6 text-xl font-medium leading-relaxed text-slate-950 sm:text-2xl">
              <span className="whitespace-pre-line">{everglowProductDetail.founder.quote}</span>
            </blockquote>
            <footer className="mt-8">
              <p className="text-lg font-semibold text-slate-950">
                {everglowProductDetail.founder.name}
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                {everglowProductDetail.founder.role}
              </p>
            </footer>
          </div>
          <Image
            src="/assets/masseuse-health-logo-mark.png"
            alt="Masseuse Health Co."
            width={180}
            height={180}
            className="pointer-events-none absolute bottom-6 right-6 h-24 w-24 object-contain opacity-80 sm:h-32 sm:w-32"
          />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Elite recovery leaves no questions unanswered
          </h2>
          <p className="mt-3 text-center text-sm text-slate-600">
            Your path to peak performance starts here.
          </p>
          <div className="mt-12 space-y-3">
            {everglowProductDetail.faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-left text-base font-semibold text-slate-950">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {item.q}
                    <span className="text-slate-400 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
