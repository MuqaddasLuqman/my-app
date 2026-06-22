import ProductList from "./ProductList"

function Home({ cartItems, setCartItems }) {
  
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, qty: item.qty + 1 } 
            : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  } 
  
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shop Products</h2>
      <ProductList addToCart={addToCart} />
    </div>
  )
}

export default Home
