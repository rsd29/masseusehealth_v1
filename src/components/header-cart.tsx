"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/components/cart-provider";
import {
  everglowProductDetail,
  type EverglowFinishId,
  type EverglowSizeId,
} from "@/lib/site-content";

const cartProductImages: Record<EverglowSizeId, Record<EverglowFinishId, string>> = {
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

function parsePrice(value: string) {
  return Number(value.replace(/[^0-9.]/g, ""));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getCartProductDetails(sku: string, fallbackPrice: string) {
  const skuPrefix = `${everglowProductDetail.sku}-`;

  if (!sku.startsWith(skuPrefix)) {
    return {
      imageSrc: "/images/productpage_everglow/MHCSauna-47.jpg",
      compareAtPrice: "",
      price: fallbackPrice,
      title: "Masseuse Health Co. product",
      details: [sku],
    };
  }

  const skuConfiguration = sku.slice(skuPrefix.length);
  const size = everglowProductDetail.sizes.find((candidate) =>
    skuConfiguration.startsWith(`${candidate.id}-`),
  )!;
  const finishId = skuConfiguration.slice(`${size.id}-`.length);
  const finish = everglowProductDetail.finishes.find((candidate) =>
    finishId.startsWith(candidate.id),
  )!;
  const hasRedLight = finishId.endsWith("-RLT");
  const compareAtPrice = formatCurrency(
    size.compareAtAud +
      (hasRedLight ? everglowProductDetail.redLightAddOn.priceAud : 0),
  );

  return {
    imageSrc: cartProductImages[size.id][finish.id],
    compareAtPrice,
    price: fallbackPrice,
    title: `${everglowProductDetail.title} ${size.label}`,
    details: [
      finish.label,
      size.dimensionsLabel,
      hasRedLight ? everglowProductDetail.redLightAddOn.title : null,
    ].filter(Boolean),
  };
}

type HeaderCartButtonProps = {
  mobile?: boolean;
};

export function HeaderCartButton({
  mobile = false,
}: HeaderCartButtonProps) {
  const { itemCount, toggleCart } = useCart();

  return (
    <button
      type="button"
      onClick={toggleCart}
      aria-haspopup="dialog"
      aria-label={`Cart with ${itemCount} items`}
      className={
        mobile
          ? "inline-flex items-center gap-2 rounded-tl-md rounded-tr-[1rem] rounded-br-md rounded-bl-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm"
          : "inline-flex items-center gap-3 rounded-tl-md rounded-tr-[1rem] rounded-br-md rounded-bl-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-white/90"
      }
    >
      <span>Cart</span>
      <span
        className={
          mobile
            ? "inline-flex min-w-7 items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-[0.7rem] font-bold text-white"
            : "inline-flex min-w-8 items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-xs font-bold text-white"
        }
      >
        {itemCount}
      </span>
    </button>
  );
}

export function HeaderCartDrawer() {
  const { closeCart, isOpen, itemCount, items, removeItem } = useCart();

  const subtotal = items.reduce(
    (total, item) => total + parsePrice(item.price) * item.quantity,
    0,
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <button
          type="button"
          aria-label="Close cart drawer"
          onClick={closeCart}
          className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-[1px]"
        />
      ) : null}

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-black/5 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.2)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Cart
            </p>
            <h2
              id="cart-heading"
              className="mt-2 text-2xl font-semibold text-slate-950"
            >
              {itemCount} item{itemCount === 1 ? "" : "s"}
            </h2>
          </div>

          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="text-lg font-semibold text-slate-950">
                Your cart is empty
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Add products from the store to review your selections here.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const product = getCartProductDetails(item.sku, item.price);

                return (
                  <article
                    key={item.sku}
                    className="grid overflow-hidden border border-slate-200 bg-white shadow-sm sm:grid-cols-[9rem_1fr]"
                  >
                    <div className="relative min-h-44 bg-slate-100">
                      <Image
                        src={product.imageSrc}
                        alt={product.title}
                        fill
                        sizes="144px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col p-4">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-400">
                        {item.sku}
                      </p>
                      <h3 className="mt-2 text-lg font-bold leading-tight tracking-[-0.03em] text-slate-950">
                        {product.title}
                      </h3>
                      <div className="mt-3 space-y-1">
                        {product.details.map((detail) => (
                          <p key={detail} className="text-sm font-medium text-slate-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap items-end gap-2">
                        {product.compareAtPrice ? (
                          <span className="text-sm font-bold text-slate-400 line-through">
                            {product.compareAtPrice}
                          </span>
                        ) : null}
                        <span className="text-2xl font-bold leading-none tracking-[-0.05em] text-[#00e05a]">
                          {product.price}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                        <p className="text-sm font-semibold text-slate-700">
                          Quantity {item.quantity}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeItem(item.sku)}
                          className="text-sm font-semibold text-slate-500 transition hover:text-slate-950"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        <div className="border-t border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span className="text-lg font-semibold text-slate-950">
              ${subtotal.toLocaleString()}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Review your selected items, quantities, and subtotal here.
          </p>
          <Link
            href="/#featured-products"
            onClick={closeCart}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Continue shopping
          </Link>
        </div>
      </aside>
    </>
  );
}
