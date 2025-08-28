import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCartContext } from "../context/cartContext";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import DiamondIcon from "@mui/icons-material/Diamond";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import "../styles.css";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartContext();

  useEffect(() => {
    // Fetch only a few featured products for the home page
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Darkin Shop</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link to="/products" className="btn btn-secondary">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Products</h2>
          <p className="section-subtitle">Check out our handpicked selection</p>

          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/products" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Darken Shop?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <LocalShippingIcon className="icon" />
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to your doorstep</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <LockIcon className="icon" />
              </div>
              <h3>Secure Payment</h3>
              <p>Your transactions are safe and secure</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <DiamondIcon className="icon" />
              </div>
              <h3>Quality Products</h3>
              <p>Curated selection of high-quality items</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <SupportAgentIcon className="icon" />
              </div>
              <h3>24/7 Support</h3>
              <p>We're here to help you anytime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
