import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Cart({ cart, removeFromCart, getTotal, payCart }) {
  return (
    <aside className="cart">
      <h2>Cart</h2>
      {cart.length === 0 && <p>No items yet.</p>}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} × {(item.price * 23).toFixed(2)} DZD
            <button onClick={() => removeFromCart(item.id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      {cart.length > 0 && (
        <>
          <h3>Total: {getTotal().toFixed(2)} DZD</h3>
          <button onClick={payCart}> Pay</button>
        </>
      )}
    </aside>
  );
}
