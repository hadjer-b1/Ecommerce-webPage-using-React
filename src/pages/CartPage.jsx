import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

export default function CartPage() {
  const { cart, addToCart, decrementItem, removeLine, clearCart, getTotal } = useCartContext();
  const total = getTotal();

  if (cart.length === 0)
    return (
      <div className="cart">
        <h2 className="cart-title">Cart</h2>
        <p>No items yet</p>
        <Link className="link" to="/products">Browse products</Link>
      </div>
    );

  return (
    <aside className="cart">
      <h2 className="cart-title">Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-row">
            <div className="cart-row-info">
              <img src={item.image} alt={item.title} className="cart-thumb" />
              <div>
                <div className="cart-title">{item.title}</div>
                <div className="cart-line">
                  DZD {(item.price * 23).toFixed(2)} × {item.quantity} ={" "}
                  <strong>DZD {(item.price * 23 * item.quantity).toFixed(2)}</strong>
                </div>
              </div>
            </div>
            <div className="cart-row-actions">
              <button onClick={() => decrementItem(item.id)}>-</button>
              <button onClick={() => addToCart(item, 1)}>+</button>
              <button onClick={() => removeLine(item.id)}><FaTrash /></button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: {total.toFixed(2)} DZD</h3>
      <div className="cart-actions">
        <button onClick={clearCart} className="link-btn clear-btn">Clear</button>
        <Link to="/checkout" className="link-btn">Checkout</Link>
      </div>
    </aside>
  );
}
