function Checkout({ cartItems, setCartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleOrder = () => {
    alert("Order Placed Successfully! 🎉");
    setCartItems([]);
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <p>Total Items: {cartItems.reduce((sum, i) => sum + i.qty, 0)}</p>
          <h3>Total Amount: ${total}</h3>
          <button className="btn btn-success" onClick={handleOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default Checkout;