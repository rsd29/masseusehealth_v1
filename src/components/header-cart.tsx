"use client";

import { useEffect } from "react";
import Link from "next/link";

import { useCart } from "@/components/cart-provider";

function parsePrice(value: string) {
  return Number(value.replace(/[^0-9.]/g, ""));
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
          ? "inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white"
          : "inline-flex items-center gap-3 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
      }
    >
      <span>Cart</span>
      <span
        className={
          mobile
            ? "inline-flex min-w-7 items-center justify-center rounded-full bg-white px-2 py-1 text-[0.7rem] font-bold text-slate-950"
            : "inline-flex min-w-8 items-center justify-center rounded-full bg-white px-2 py-1 text-xs font-bold text-slate-950"
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
                Add a few mocked SKUs from the featured products section to test
                the storefront flow.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.sku}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {item.sku}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-950">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold text-slate-950">
                      {item.price}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-slate-600">Qty {item.quantity}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.sku)}
                      className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Mock subtotal</span>
            <span className="text-lg font-semibold text-slate-950">
              ${subtotal.toLocaleString()}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Checkout will be handled later by Shopify. This drawer is only for
            mocked add-to-cart behaviour and cart counts.
          </p>
          <Link
            href="#featured-products"
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
