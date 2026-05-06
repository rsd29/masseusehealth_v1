"use client";

import { useMemo, useState } from "react";

import { AddToCartButton } from "@/components/add-to-cart-button";
import {
  everglowProductDetail,
  type EverglowFinishId,
  type EverglowSizeId,
} from "@/lib/site-content";

const paymentMethods =
  "American Express · Apple Pay · Google Pay · Mastercard · PayPal · Shop Pay · Union Pay · Visa · Humm";

const finishThemes: Record<
  EverglowFinishId,
  {
    description: string;
    swatchClassName: string;
  }
> = {
  "red-cedar-black": {
    description: "Warm cedar cabin with black exterior accents.",
    swatchClassName: "bg-[linear-gradient(135deg,#7a3f1f_0_48%,#111827_48%_100%)]",
  },
  "red-cedar-natural": {
    description: "Warm cedar inside and out for a softer wellness-room feel.",
    swatchClassName: "bg-[linear-gradient(135deg,#7a3f1f_0_48%,#c8874a_48%_100%)]",
  },
  "hemlock-black": {
    description: "Light hemlock interior paired with a clean black shell.",
    swatchClassName: "bg-[linear-gradient(135deg,#d4b98a_0_48%,#111827_48%_100%)]",
  },
  "hemlock-natural": {
    description: "Light, natural timber for bright minimalist spaces.",
    swatchClassName: "bg-[linear-gradient(135deg,#d4b98a_0_48%,#f3e3c2_48%_100%)]",
  },
};

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
  onSizeChange: (sizeId: EverglowSizeId) => void;
  onFinishChange: (finishId: EverglowFinishId) => void;
};

export function EverglowBuyBox({
  sizeId,
  finishId,
  onSizeChange,
  onFinishChange,
}: EverglowBuyBoxProps) {
  const [includeRedLight, setIncludeRedLight] = useState(false);

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

  return (
    <div className="flex flex-col">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">
        Sauna theme picker
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {everglowProductDetail.title}
      </h1>

      <div className="mt-8 flex flex-wrap items-end gap-3">
        <p className="text-lg text-slate-400 line-through">
          {size.compareAtPrice}
        </p>
        <p className="text-3xl font-semibold text-slate-950 sm:text-4xl">
          {size.price}
        </p>
      </div>

      <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-700">
        {everglowProductDetail.heroBullets.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true">
              ✔︎
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Sauna type
        </p>
        <p className="mt-1 text-sm text-slate-600">Choose the infrared sauna format first.</p>
        <div
          role="tablist"
          aria-label="Choose Everglow infrared sauna size"
          className="mt-4 grid grid-cols-3 rounded-full bg-slate-100 p-1"
        >
          {everglowProductDetail.sizes.map((s) => {
            const isSelected = sizeId === s.id;

            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onSizeChange(s.id)}
                className={`rounded-full px-3 py-3 text-center text-sm font-semibold transition ${
                  isSelected
                    ? "bg-slate-950 text-white shadow-[0_12px_30px_rgba(15,23,42,0.2)]"
                    : "text-slate-600 hover:bg-white hover:text-slate-950"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Selected format
        </p>
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-slate-950">Everglow {size.label}</p>
              <p className="mt-2 font-medium text-slate-950">{size.dimensionsLabel}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400 line-through">{size.compareAtPrice}</p>
              <p className="text-xl font-semibold text-slate-950">{size.price}</p>
            </div>
          </div>
          <p className="mt-2 leading-7">{size.capacity}</p>
          <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
            Warranty · {size.warranty}
          </p>
        </div>
      </div>

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
                  className={`block h-12 rounded-lg border ${
                    isSelected ? "border-white/20" : "border-black/5"
                  } ${theme.swatchClassName}`}
                  aria-hidden="true"
                />
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

      <p className="mt-6 text-[0.65rem] font-medium uppercase leading-relaxed tracking-wide text-slate-500">
        {paymentMethods}
      </p>

    </div>
  );
}
