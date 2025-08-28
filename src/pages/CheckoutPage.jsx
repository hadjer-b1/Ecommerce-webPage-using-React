import React from "react";
import { useCartContext } from "../context/cartContext";

export default function CheckoutPage() {
  const { cart, getTotal, payCart } = useCartContext();
  const total = getTotal();

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-summary">
        {cart.map((i) => (
          <div key={i.id} className="checkout-row">
            <span>{i.title}</span>
            <span>
              DZD {(i.price * 23).toFixed(2)} × {i.quantity} ={" "}
              {(i.price * 23 * i.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <h3>Total: {total.toFixed(2)} DZD</h3>
      <button onClick={payCart}>Pay</button>
    </div>
  );
}
