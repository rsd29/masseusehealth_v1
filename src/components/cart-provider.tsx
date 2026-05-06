"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CartItem = {
  sku: string;
  name: string;
  price: string;
  quantity: number;
};

type AddCartItemInput = Omit<CartItem, "quantity">;

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  isOpen: boolean;
  addItem: (item: AddCartItemInput) => void;
  decrementItem: (sku: string) => void;
  removeItem: (sku: string) => void;
  closeCart: () => void;
  openCart: () => void;
  toggleCart: () => void;
};

const CART_STORAGE_KEY = "masseuse-health-cart";

const CartContext = createContext<CartContextValue | null>(null);

function readStoredCart(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage.getItem(CART_STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStoredCart(items: CartItem[]) {
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage can be unavailable in privacy-restricted browser contexts.
  }
}

function parseStoredItems(value: string | null): CartItem[] {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as CartItem[];

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item) =>
        typeof item?.sku === "string" &&
        typeof item?.name === "string" &&
        typeof item?.price === "string" &&
        typeof item?.quantity === "number",
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hasHydratedStoredCart, setHasHydratedStoredCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setItems(parseStoredItems(readStoredCart()));
      setHasHydratedStoredCart(true);
    });
  }, []);

  useEffect(() => {
    if (!hasHydratedStoredCart) {
      return;
    }

    writeStoredCart(items);
  }, [hasHydratedStoredCart, items]);

  const addItem = useCallback((item: AddCartItemInput) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (currentItem) => currentItem.sku === item.sku,
      );

      if (existingItem) {
        return currentItems.map((currentItem) =>
          currentItem.sku === item.sku
            ? { ...currentItem, quantity: currentItem.quantity + 1 }
            : currentItem,
        );
      }

      return [...currentItems, { ...item, quantity: 1 }];
    });

    setIsOpen(true);
  }, []);

  const removeItem = useCallback((sku: string) => {
    setItems((currentItems) =>
      currentItems.filter((currentItem) => currentItem.sku !== sku),
    );
  }, []);

  const decrementItem = useCallback((sku: string) => {
    setItems((currentItems) =>
      currentItems.flatMap((currentItem) => {
        if (currentItem.sku !== sku) {
          return [currentItem];
        }

        if (currentItem.quantity <= 1) {
          return [];
        }

        return [{ ...currentItem, quantity: currentItem.quantity - 1 }];
      }),
    );
  }, []);

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      isOpen,
      addItem,
      decrementItem,
      removeItem,
      closeCart: () => setIsOpen(false),
      openCart: () => setIsOpen(true),
      toggleCart: () => setIsOpen((currentValue) => !currentValue),
    }),
    [addItem, decrementItem, isOpen, itemCount, items, removeItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
}
