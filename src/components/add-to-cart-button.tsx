"use client";

import { useCart } from "@/components/cart-provider";

type AddToCartButtonProps = {
  sku: string;
  name: string;
  price: string;
};

export function AddToCartButton({
  sku,
  name,
  price,
}: AddToCartButtonProps) {
  const { addItem, decrementItem, items } = useCart();
  const cartItem = items.find((item) => item.sku === sku);
  const quantity = cartItem?.quantity ?? 0;

  if (quantity > 0) {
    return (
      <div className="inline-flex items-center gap-2">
        <button
          type="button"
          onClick={() => decrementItem(sku)}
          className="inline-flex h-14 w-14 items-center justify-center rounded-md border border-slate-200 bg-white text-2xl font-semibold leading-none text-slate-950 shadow-sm transition hover:border-slate-950 hover:bg-slate-50"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="inline-flex h-14 min-w-32 items-center justify-center rounded-md bg-slate-950 px-8 text-center text-xl font-bold text-white tabular-nums shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => addItem({ sku, name, price })}
          className="inline-flex h-14 w-14 items-center justify-center rounded-md border border-slate-200 bg-white text-2xl font-semibold leading-none text-slate-950 shadow-sm transition hover:border-[#27C8E6] hover:bg-[#27C8E6]"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        addItem({ sku, name, price });
      }}
      className="group inline-flex h-14 items-center justify-center gap-3 rounded-md bg-slate-950 px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#27C8E6] hover:text-slate-950 hover:shadow-[0_24px_60px_rgba(39,200,230,0.28)] active:translate-y-0"
    >
      <span>Add to cart</span>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 transition duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </button>
  );
}
