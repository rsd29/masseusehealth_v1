"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AddToCartButton } from "@/components/add-to-cart-button";
import {
  everglowProductDetail,
  type EverglowFinishId,
  type EverglowSizeId,
} from "@/lib/site-content";

const paymentIcons = [
  { src: "/images/paymenticons/AMEX.svg", alt: "American Express", width: 59, height: 16 },
  { src: "/images/paymenticons/ApplePay.svg", alt: "Apple Pay", width: 51, height: 22 },
  { src: "/images/paymenticons/GooglePay.svg", alt: "Google Pay", width: 50, height: 22 },
  { src: "/images/paymenticons/Mastercard.svg", alt: "Mastercard", width: 46, height: 28 },
  { src: "/images/paymenticons/PayPal.svg", alt: "PayPal", width: 82, height: 22 },
  { src: "/images/paymenticons/visa-logo.svg", alt: "Visa", width: 50, height: 17 },
] as const;

const finishThemes: Record<
  EverglowFinishId,
  {
    description: string;
    leftSwatchClassName: string;
    rightSwatchClassName: string;
  }
> = {
  "red-cedar-black": {
    description: "Warm cedar cabin with black exterior accents.",
    leftSwatchClassName: "bg-[#7a3f1f]",
    rightSwatchClassName: "bg-[#111827]",
  },
  "red-cedar-natural": {
    description: "Warm cedar inside and out for a softer wellness-room feel.",
    leftSwatchClassName: "bg-[#7a3f1f]",
    rightSwatchClassName: "bg-[#c8874a]",
  },
  "hemlock-black": {
    description: "Light hemlock interior paired with a clean black shell.",
    leftSwatchClassName: "bg-[#d4b98a]",
    rightSwatchClassName: "bg-[#111827]",
  },
  "hemlock-natural": {
    description: "Light, natural timber for bright minimalist spaces.",
    leftSwatchClassName: "bg-[#d4b98a]",
    rightSwatchClassName: "bg-[#f3e3c2]",
  },
};

const bulletShapeClipPaths = [
  "circle(50% at 50% 50%)",
  "polygon(50% 7%, 93% 82%, 7% 82%)",
  "polygon(12% 12%, 88% 12%, 88% 88%, 12% 88%)",
  "polygon(50% 5%, 95% 38%, 78% 92%, 22% 92%, 5% 38%)",
  "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
  "polygon(50% 4%, 89% 19%, 99% 61%, 72% 95%, 28% 95%, 1% 61%, 11% 19%)",
  "polygon(30% 4%, 70% 4%, 96% 30%, 96% 70%, 70% 96%, 30% 96%, 4% 70%, 4% 30%)",
  "polygon(50% 3%, 82% 12%, 98% 40%, 92% 72%, 67% 94%, 33% 94%, 8% 72%, 2% 40%, 18% 12%)",
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

type EverglowBuyBoxProps = {
  sizeId: EverglowSizeId;
  finishId: EverglowFinishId;
  onFinishChange: (finishId: EverglowFinishId) => void;
};

export function EverglowBuyBox({
  sizeId,
  finishId,
  onFinishChange,
}: EverglowBuyBoxProps) {
  const [includeRedLight, setIncludeRedLight] = useState(false);
  const featureListRef = useRef<HTMLUListElement>(null);

  const size = useMemo(
    () => everglowProductDetail.sizes.find((s) => s.id === sizeId)!,
    [sizeId],
  );

  const finishLabel = useMemo(
    () => everglowProductDetail.finishes.find((f) => f.id === finishId)!.label,
    [finishId],
  );

  const totalPrice = useMemo(
    () =>
      formatCurrency(
        size.saleAud +
          (includeRedLight ? everglowProductDetail.redLightAddOn.priceAud : 0),
      ),
    [includeRedLight, size.saleAud],
  );

  const cartName = `${everglowProductDetail.title} - ${size.label} / ${finishLabel}${
    includeRedLight ? " + Red Light Therapy Panel" : ""
  }`;

  useEffect(() => {
    const featureList = featureListRef.current;

    if (!featureList) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const featureLines = gsap.utils.toArray<HTMLElement>("[data-everglow-feature-line]");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(featureLines, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(featureLines, {
        opacity: 0,
        y: 18,
        willChange: "opacity, transform",
      });

      gsap.to(featureLines, {
        opacity: 1,
        y: 0,
        duration: 0.62,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: featureList,
          start: "top 78%",
        },
      });
    }, featureList);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {everglowProductDetail.title}
      </h1>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="relative inline-flex text-2xl font-bold tracking-[-0.05em] text-slate-400 tabular-nums sm:text-3xl">
          {size.compareAtPrice}
          <span
            className="absolute left-[-0.08em] top-1/2 h-1 w-[calc(100%+0.16em)] -translate-y-1/2 bg-slate-950"
            aria-hidden="true"
          />
        </span>
        <span className="inline-flex items-center gap-2.5 text-3xl font-bold tracking-[-0.055em] text-[#00e05a] tabular-nums sm:text-4xl">
          <span>{size.price}</span>
          <span className="inline-flex rounded-none bg-[#168a42] px-2 py-1 text-xs font-semibold uppercase leading-none tracking-[-0.02em] text-white">
            Save {size.savings}
          </span>
        </span>
      </div>

      <ul ref={featureListRef} className="mt-8 space-y-4 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
        {everglowProductDetail.heroBullets.map((line, index) => (
          <li key={line} data-everglow-feature-line className="flex gap-4">
            <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden="true">
              <span
                className="block h-4 w-4 bg-slate-950"
                style={{ clipPath: bulletShapeClipPaths[index % bulletShapeClipPaths.length] }}
              />
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Finish theme · {size.label}
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Pick the timber and exterior look that matches your room.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {everglowProductDetail.finishes.map((f) => {
            const isSelected = finishId === f.id;
            const theme = finishThemes[f.id];

            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onFinishChange(f.id)}
                className={`rounded-xl border p-3 text-left transition ${
                  isSelected
                    ? "border-slate-950 bg-slate-950 text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)]"
                    : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                }`}
              >
                <span
                  className={`flex h-12 overflow-hidden rounded-lg border ${
                    isSelected ? "border-white/20" : "border-black/5"
                  }`}
                  aria-hidden="true"
                >
                  <span className={`block h-full flex-1 ${theme.leftSwatchClassName}`} />
                  <span className={`block h-full flex-1 ${theme.rightSwatchClassName}`} />
                </span>
                <span className="mt-3 block text-sm font-semibold">{f.label}</span>
                <span
                  className={`mt-1 block text-xs leading-5 ${
                    isSelected ? "text-white/62" : "text-slate-500"
                  }`}
                >
                  {theme.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Red light add-on
            </p>
            <p className="mt-1 font-medium text-slate-950">
              {everglowProductDetail.redLightAddOn.title}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {everglowProductDetail.redLightAddOn.description}
            </p>
          </div>
          <p className="text-lg font-semibold text-slate-950">
            {everglowProductDetail.redLightAddOn.price}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIncludeRedLight((current) => !current)}
          className={`mt-4 w-full rounded-md border py-2.5 text-sm font-semibold transition ${
            includeRedLight
              ? "border-slate-950 bg-slate-950 text-white"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400"
          }`}
        >
          {includeRedLight ? "Added to configuration" : "Add to configuration"}
        </button>
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Selection: {size.label} / {finishLabel}
        {includeRedLight ? " / Red Light Therapy Panel" : ""}
      </p>

      <p className="mt-4 text-sm font-medium text-slate-600">
        Configured total{" "}
        <span className="text-lg font-semibold text-slate-950">{totalPrice}</span>
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <AddToCartButton
          sku={`${everglowProductDetail.sku}-${size.id}-${finishId}${
            includeRedLight ? "-RLT" : ""
          }`}
          name={cartName}
          price={totalPrice}
        />
        <span
          className="inline-flex cursor-not-allowed select-none items-center justify-center rounded-md border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-400"
          aria-disabled="true"
        >
          Request a callback
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3" aria-label="Accepted payment methods">
        {paymentIcons.map((icon) => (
          <Image
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            className="h-4 w-auto opacity-40 grayscale"
          />
        ))}
      </div>

    </div>
  );
}
