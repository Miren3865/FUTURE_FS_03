'use client';

import { Product } from '@/data/products';
import { createContext, ReactNode, useContext, useState } from 'react';

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedColor?: string, selectedSize?: number, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, selectedColor?: string, selectedSize?: number, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, selectedColor, selectedSize }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}; 