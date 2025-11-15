import { useState, useEffect } from "react";

export interface CartItem {
  name: string;
  price: number;
  image: string;
  cause: string;
  size: string;
  quantity: number;
}

const CART_STORAGE_KEY = "tfac-cart";

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === item.name && cartItem.size === item.size
      );

      if (existingIndex !== -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += 1;
        return newCart;
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.name === name && item.size === size))
    );
  };

  const updateQuantity = (name: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(name, size);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };
};
