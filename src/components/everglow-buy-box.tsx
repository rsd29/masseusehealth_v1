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

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function EverglowBuyBox() {
  const [sizeId, setSizeId] = useState<EverglowSizeId>("zen");
  const [finishId, setFinishId] = useState<EverglowFinishId>("red-cedar-black");
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
        Save {size.savings} on {size.label}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {everglowProductDetail.title}
      </h1>
      <p className="mt-3 text-sm font-medium text-slate-600">
        {everglowProductDetail.socialProof}
      </p>

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
        <div className="mt-3 flex flex-wrap gap-2">
          {everglowProductDetail.saunaTypes.map((t) =>
            t.disabled ? (
              <span
                key={t.id}
                className="inline-flex cursor-not-allowed select-none rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-400 opacity-70"
                aria-disabled="true"
              >
                {t.label}
              </span>
            ) : (
              <span
                key={t.id}
                className="inline-flex rounded-md border border-slate-950 bg-slate-950 px-4 py-2 text-sm font-medium text-white"
              >
                {t.label}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Size
        </p>
        <p className="mt-1 text-sm text-slate-600">Which one fits you best?</p>
        <div className="mt-4 grid gap-3">
          {everglowProductDetail.sizes.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSizeId(s.id)}
              className={`rounded-[0.75rem] border p-4 text-left transition ${
                sizeId === s.id
                  ? "border-slate-950 bg-slate-950 text-white shadow-[0_18px_44px_rgba(15,23,42,0.22)]"
                  : "border-slate-200 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              <span className="flex items-start justify-between gap-4">
                <span>
                  <span className="block text-base font-semibold">{s.label}</span>
                  <span
                    className={`mt-1 block text-xs leading-5 ${
                      sizeId === s.id ? "text-white/68" : "text-slate-500"
                    }`}
                  >
                    {s.positioning}
                  </span>
                </span>
                <span className="text-right">
                  <span
                    className={`block text-sm line-through ${
                      sizeId === s.id ? "text-white/45" : "text-slate-400"
                    }`}
                  >
                    {s.compareAtPrice}
                  </span>
                  <span className="block text-lg font-semibold">{s.price}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-medium text-slate-950">{size.dimensionsLabel}</p>
          <p className="mt-2 leading-7">{size.capacity}</p>
          <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
            Warranty · {size.warranty}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Finish · {size.label}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-2">
          {everglowProductDetail.finishes.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFinishId(f.id)}
              className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${
                finishId === f.id
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
              }`}
            >
              {f.label}
            </button>
          ))}
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

      <p className="mt-4 text-xs text-slate-500">Now available. Order today!</p>
    </div>
  );
}
