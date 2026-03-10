"use client";

import { useState, useCallback, useMemo } from "react";
import type { Service, CartItem, CartState } from "@/types";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((service: Service, note?: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.service.id === service.id);
      if (existing) {
        return prev.map((i) =>
          i.service.id === service.id
            ? { ...i, quantity: i.quantity + 1, note: note ?? i.note }
            : i
        );
      }
      return [...prev, { service, quantity: 1, note }];
    });
  }, []);

  const removeItem = useCallback((serviceId: string) => {
    setItems((prev) => prev.filter((i) => i.service.id !== serviceId));
  }, []);

  const updateQuantity = useCallback((serviceId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.service.id !== serviceId));
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.service.id === serviceId ? { ...i, quantity } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const state: CartState = useMemo(() => ({
    items,
    total: items.reduce((acc, i) => acc + i.service.price * i.quantity, 0),
  }), [items]);

  const itemCount = useMemo(
    () => items.reduce((acc, i) => acc + i.quantity, 0),
    [items]
  );

  const isInCart = useCallback(
    (serviceId: string) => items.some((i) => i.service.id === serviceId),
    [items]
  );

  return {
    ...state,
    itemCount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isInCart,
  };
}
