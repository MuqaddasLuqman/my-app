import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"
import Checkout from "./pages/Checkout"

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

function App(){
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.reduce((total, item) => total + item.qty, 0)

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </>
  )
}

export default App