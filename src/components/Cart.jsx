import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import {  decreaseQuantity, clearCart } from "../store/slices/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handlePay = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Payment successful!\nTotal paid: ${total.toFixed(2)} DZD`);
    dispatch(clearCart());
  };

  return (
    <aside className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>No items yet.</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} × {(item.price * 23).toFixed(2)} DZD
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      {cartItems.length > 0 && (
        <>
          <h3>Total: {total.toFixed(2)} DZD</h3>
          <button onClick={handlePay}>Pay</button>
        </>
      )}
    </aside>
  );
}
