import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import FilterSort from "./components/FilterSort";
import Cart from "./components/Cart";
import FilterProduct from "./components/FilterProduct";
import { useCart } from "./hooks/useCart";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const { cart, addToCart, removeFromCart, getTotal, payCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (product, quantity = 1) => {
    addToCart(product, quantity);
  };

  return (
    <div className="app">
      <header className="header">
        <a href="/">Darken Shop</a>
      </header>
      <div className="filters">
        <FilterSort products={products} setFiltered={setFiltered} />
        <FilterProduct products={products} setFiltered={setFiltered} />
      </div>

      <main className="main">
        <ProductList products={filtered} addToCart={handleAddToCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          getTotal={getTotal}
          payCart={payCart}
        />
      </main>
    </div>
  );
}
