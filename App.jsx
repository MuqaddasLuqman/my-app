import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import CartPage from "./CartPage"
import Checkout from "./Checkout"

function Navbar({ cartCount }){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">🛒 MyShop</Link>
        <div>
          <Link className="nav-link d-inline me-3 text-white" to="/">Home</Link>
          <Link className="nav-link d-inline text-white" to="/cart">Cart ({cartCount})</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

