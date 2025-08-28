import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
export default function Layout() {
  const { getCount } = useCartContext();
  const count = getCount();

  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">Darken Shop</Link>
        <nav className="nav">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart ({count})</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
