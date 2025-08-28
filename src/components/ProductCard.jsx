import React from "react";
import { useState } from "react";
export default function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="product-card">
      <div className="product-info">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>DZZ {product.price * 23}</p>
      </div>
      <div className="product-actions">
        <div className="quantity">
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            addToCart(product, quantity);
            setQuantity(1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
