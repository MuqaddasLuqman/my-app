import { Link } from "react-router-dom"

function CartPage({ cartItems, setCartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const updateQty = (id, newQty) => {
    if (newQty === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, qty: newQty } : item
      ));
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <h2>Cart Page</h2>
        <p>Cart is Empty</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="border p-3 my-2 d-flex justify-content-between align-items-center">
          <div>
            <h5>{item.name}</h5>
            <p>${item.price} x {item.qty} = ${item.price * item.qty}</p>
          </div>
          <div>
            <button className="btn btn-sm btn-secondary me-2" onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
            <span>{item.qty}</span>
            <button className="btn btn-sm btn-secondary ms-2" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            <button className="btn btn-danger btn-sm ms-3" onClick={() => updateQty(item.id, 0)}>Remove</button>
          </div>
        </div>
      ))}
      
      <h3 className="mt-3">Total: ${total}</h3>
      
      {/* Sirf ye wala checkout button rakho */}
      <Link to="/checkout" className="btn btn-success mt-2">Checkout</Link>
    </div>
  );
}

export default CartPage;