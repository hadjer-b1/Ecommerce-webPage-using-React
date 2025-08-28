import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity * 23, 0);
  };

  const payCart = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    const total = getTotal();
    alert(`Payment successful!\nTotal paid: ${total.toFixed(2)} DZD`);
    clearCart();
  };

  return { cart, addToCart, removeFromCart, clearCart, payCart, getTotal };
}
