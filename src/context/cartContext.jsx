import React, { createContext, useContext } from "react";
import { useCart } from "../hooks/useCart";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const cartApi = useCart();
  return <CartContext.Provider value={cartApi}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  return useContext(CartContext);
}
