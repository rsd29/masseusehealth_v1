"use client";

import { useEffect, useRef, useState } from "react";

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
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        addItem({ sku, name, price });
        setJustAdded(true);
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(() => setJustAdded(false), 1200);
      }}
      className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
    >
      {justAdded ? "Added" : "Add to cart"}
    </button>
  );
}
