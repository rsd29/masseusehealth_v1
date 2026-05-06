"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

const productTabs = ["Overview", "Models", "Features", "Dimensions", "Electrical"];

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

type GalleryColumnProps = {
  sizeId: EverglowSizeId;
  finishId: EverglowFinishId;
  onFinishChange: (finishId: EverglowFinishId) => void;
};

function GalleryColumn({ sizeId, finishId, onFinishChange }: GalleryColumnProps) {
  const selectedSize = everglowProductDetail.sizes.find((size) => size.id === sizeId)!;
  const selectedFinish = everglowProductDetail.finishes.find((finish) => finish.id === finishId)!;
  const selectedImage = configurationImages[sizeId][finishId];

  return (
    <div className="space-y-3 lg:sticky lg:top-28 lg:self-start">
      <div className="group relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-slate-950 lg:aspect-auto lg:h-[calc(100svh-20rem)] lg:min-h-[21rem]">
        <Image
          src={selectedImage}
          alt={`Everglow ${selectedSize.label} Infrared Sauna in ${selectedFinish.label}`}
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover transition duration-1000 group-hover:scale-[1.03]"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {everglowProductDetail.finishes.map((finish) => (
          <button
            key={finish.id}
            type="button"
            onClick={() => onFinishChange(finish.id)}
            aria-label={`Preview ${selectedSize.label} in ${finish.label}`}
            className={`group relative aspect-[4/3] overflow-hidden rounded-[0.65rem] bg-slate-100 transition ${
              finishId === finish.id
                ? "shadow-[inset_0_0_0_2px_rgba(15,23,42,1)]"
                : "opacity-75 hover:opacity-100"
            }`}
          >
            <Image
              src={configurationImages[sizeId][finish.id]}
              alt={`Everglow ${selectedSize.label} ${finish.label} finish preview`}
              fill
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-black/62 px-1.5 py-0.5 text-left text-[0.58rem] font-semibold text-white">
              {finish.label.replace("Red Cedar ", "Cedar ")}
            </span>
          </button>
        ))}
      </div>
      <p className="text-xs leading-5 text-slate-500">
        Use the theme picker to compare finishes for the selected {selectedSize.label} model.
      </p>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="mt-12 grid gap-4 border-y border-slate-200 py-10 sm:grid-cols-3">
      {everglowProductDetail.trustBadges.map((b, index) => (
        <div
          key={b.title}
          data-trust-badge
          style={{ transitionDelay: `${index * 90}ms` }}
          className="mx-auto max-w-xs translate-y-4 text-center opacity-0 transition duration-700 ease-out"
        >
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm">
            <TrustIcon title={b.title} />
          </div>
          <p className="mt-4 text-base font-semibold tracking-[-0.02em] text-slate-950">
            {b.title}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{b.description}</p>
        </div>
      ))}
    </div>
  );
}

function TrustIcon({ title }: { title: string }) {
  if (title.includes("Delivery")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h11v10H3z" />
        <path d="M14 10h3.5L21 13.5V17h-7z" />
        <path d="M6.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M17.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    );
  }

  if (title.includes("Warranty")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 5 6v5c0 4.5 2.8 8.4 7 10 4.2-1.6 7-5.5 7-10V6z" />
        <path d="m8.8 12 2.1 2.1 4.4-4.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
      <path d="M7.5 7.5 16.5 16.5" />
      <path d="m16.5 7.5-9 9" />
    </svg>
  );
}

function ProductTabs() {
  return (
    <div className="sticky top-16 z-30 border-y border-slate-200/80 bg-white/86 backdrop-blur-xl">
      <div className="flex w-full flex-wrap items-center gap-5 px-4 py-2 text-xs font-semibold text-slate-600 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-5">
          {productTabs.map((tab, index) => (
            <a
              key={tab}
              href={`#${tab.toLowerCase()}`}
              className={index === 0 ? "text-slate-950" : "text-slate-500 hover:text-slate-950"}
            >
              {tab}
            </a>
          ))}
        </div>
      </div>
    </div>
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

function SelectedVariantCard() {
  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative min-h-80 overflow-hidden rounded-[1rem] bg-slate-200 lg:min-h-[28rem]">
            <Image
              src={productImages[4]}
              alt="Everglow Infrared Sauna close-up"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Ready when you are
            </p>
            <h3 className="mt-3 max-w-xl text-4xl font-semibold leading-none tracking-[-0.055em] text-slate-950 sm:text-5xl">
              Build the Everglow that fits your space.
            </h3>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              Start with Zen from {everglowProductDetail.sizes[0].price}, step up to Lux
              for more room, or choose Grande for a flagship recovery room.
            </p>
            <div className="mt-6">
              <a
                href="#buy"
                className="inline-flex rounded-md bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Configure yours
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EverglowProductView() {
  const [sizeId, setSizeId] = useState<EverglowSizeId>("zen");
  const [finishId, setFinishId] = useState<EverglowFinishId>("red-cedar-black");

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-hex-feature], [data-trust-badge]"),
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

  return (
    <>
      <section
        id="overview"
        className="border-b border-black/5 bg-[radial-gradient(circle_at_50%_0%,_#f4f7fb_0%,_#fff_42%,_#fff_100%)]"
      >
        <div className="w-full px-4 pb-8 pt-32 sm:px-6 sm:pt-36 lg:px-8">
          <div id="models" className="mt-14">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Choose your Everglow
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.055em] text-slate-950 sm:text-6xl">
                Three formats. One seriously refined recovery ritual.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Premium infrared heat, Canadian timber, chromotherapy, Bluetooth audio,
                and precise digital control in a sauna built for modern homes.
              </p>
            </div>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {everglowProductDetail.sizes.map((size) => (
                <article
                  key={size.id}
                  className="rounded-[1rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Everglow {size.label}
                  </p>
                  <p className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-slate-950">
                    {size.price}
                  </p>
                  <p className="mt-2 text-base text-slate-400 line-through">
                    {size.compareAtPrice}
                  </p>
                  <p className="mt-6 text-base leading-7 text-slate-600">{size.positioning}</p>
                  <dl className="mt-8 space-y-4 border-t border-slate-200 pt-6 text-sm">
                    <div>
                      <dt className="font-semibold text-slate-950">Dimensions</dt>
                      <dd className="mt-1 text-slate-600">{size.dimensionsLabel}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-950">Best for</dt>
                      <dd className="mt-1 text-slate-600">{size.capacity}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>

          <div
            id="buy"
            className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,1.05fr)] lg:items-start lg:gap-16"
          >
            <GalleryColumn
              sizeId={sizeId}
              finishId={finishId}
              onFinishChange={setFinishId}
            />
            <div className="rounded-[1rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
              <EverglowBuyBox
                sizeId={sizeId}
                finishId={finishId}
                onSizeChange={setSizeId}
                onFinishChange={setFinishId}
              />
            </div>
          </div>

          <TrustRow />
        </div>
      </section>

      <ProductTabs />

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

      <div className="w-full px-4 py-20 sm:px-6 lg:px-8">
        <section id="features" aria-labelledby="features-heading" className="scroll-mt-32">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Features
              </p>
              <h2
                id="features-heading"
                className="mt-4 whitespace-nowrap text-3xl font-semibold leading-none tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl"
              >
                Every detail has a job.
              </h2>
            </div>
            <div className="feature-honeycomb">
              {everglowProductDetail.featuresDetailed.map((line, index) => (
                <div
                  key={line}
                  data-hex-feature
                  style={{ transitionDelay: `${(index % 4) * 70}ms` }}
                  className="feature-hex flex translate-y-5 items-center justify-center bg-slate-950 p-7 text-center text-sm font-medium leading-6 text-white opacity-0 shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition duration-700 ease-out"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-sm italic leading-7 text-slate-500">
            {everglowProductDetail.designProtectionNote}
          </p>
        </section>

        <section id="dimensions" aria-labelledby="dimensions-heading" className="mt-24 scroll-mt-32">
          <h2
            id="dimensions-heading"
            className="text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-5xl"
          >
            Dimensions
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {everglowProductDetail.sizes.map((s) => (
              <div
                key={s.id}
                className="border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-950">{s.label}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>
                    <span className="font-medium text-slate-900">Width:</span> {s.dimensions.wCm}{" "}
                    cm
                  </li>
                  <li>
                    <span className="font-medium text-slate-900">Height:</span>{" "}
                    {s.dimensions.hCm} cm
                  </li>
                  <li>
                    <span className="font-medium text-slate-900">Depth:</span> {s.dimensions.dCm}{" "}
                    cm
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <h2
            id="weight-heading"
            className="mt-16 text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-5xl"
          >
            Weight
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {everglowProductDetail.weightElectricalByVariant
              .filter((row) => row.finish === "Red Cedar")
              .map((row) => (
                <div key={row.size} className="border border-slate-200 p-6">
                  <p className="text-lg font-semibold text-slate-950">{row.size}</p>
                  <p className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-slate-950">
                    {row.weightKg}kg
                  </p>
                  <p className="mt-3 text-sm text-slate-500">Approximate Red Cedar weight</p>
                </div>
              ))}
          </div>
        </section>

        <section id="electrical" aria-labelledby="electrical-heading" className="mt-24 scroll-mt-32">
          <h2
            id="electrical-heading"
            className="text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-5xl"
          >
            Electrical
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            Power requirements vary by size and timber selection. Confirm final
            installation requirements for the configuration you choose.
          </p>
          <div className="mt-8 overflow-x-auto border border-slate-200">
            <table className="w-full min-w-[640px] text-left text-sm">
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
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {everglowProductDetail.weightElectricalByVariant.map((row) => (
                  <tr key={`${row.size}-${row.finish}`} className="bg-white">
                    <td className="px-4 py-3 font-medium">{row.size}</td>
                    <td className="px-4 py-3">{row.finish}</td>
                    <td className="px-4 py-3">{row.weightKg} kg</td>
                    <td className="px-4 py-3">{row.powerW}</td>
                    <td className="px-4 py-3">{row.voltage}</td>
                    <td className="px-4 py-3">{row.amps}</td>
                    <td className="px-4 py-3">{row.fuseType}</td>
                    <td className="px-4 py-3 capitalize">{row.phase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm italic text-slate-500">
            {everglowProductDetail.electricianNote}
          </p>
        </section>
      </div>

      <SelectedVariantCard />

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

      <section className="bg-slate-50 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Science-Backed Recovery
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {everglowProductDetail.scienceBacked.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[0.75rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-[1.25rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-14">
          <div className="aspect-[4/5] max-h-80 overflow-hidden rounded-[1rem] bg-slate-200 lg:max-h-none" />
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
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-950">
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
