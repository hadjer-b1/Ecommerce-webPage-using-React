import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { useCartContext } from "../context/cartContext"; 

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { data, loading, err } = useProduct(id);
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  if (loading) return <p>Loading...</p>;
  if (err || !data) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <div className="details-left">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="details-right">
        <h2>{data.title}</h2>
        <p className="price">DZD {(data.price * 23).toFixed(2)}</p>
        <p className="desc">{data.description}</p>
        <div className="quantity">
          <button className="quantity-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
          <span>{quantity}</span>
          <button className="quantity-btn" onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
        <button
          onClick={() => {
            addToCart(data, quantity);
            setQuantity(1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
