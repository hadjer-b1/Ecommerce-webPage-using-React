import React from "react";
import useProducts from "../hooks/useProducts";
import FilterSort from "../components/FilterSort";
import FilterProduct from "../components/FilterProduct";
import ProductCard from "../components/ProductCard";
import { useCartContext } from "../context/cartContext"; 

export default function ProductsPage() {
  const { products, filtered, setFiltered, loading, err } = useProducts();
  const { addToCart } = useCartContext();

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Failed to load products</p>;

  return (
    <div className="products-page">
      <div className="filters">
        <FilterSort products={products} setFiltered={setFiltered} />
        <FilterProduct products={products} setFiltered={setFiltered} />
      </div>
      <div className="product-list">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
