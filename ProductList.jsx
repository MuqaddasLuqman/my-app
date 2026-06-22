function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 800, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
    { id: 2, name: "Phone", price: 500, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 3, name: "Headphones", price: 100, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 4, name: "Keyboard", price: 50, img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400" },
    { id: 5, name: "Mouse", price: 25, img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400" },
   { id: 6, name: "Monitor", price: 200, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400" },
    { id: 7, name: "Tablet", price: 300, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400" },
    { id: 8, name: "Smartwatch", price: 150, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { id: 9, name: "Speaker", price: 80, img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400" },
    { id: 10, name: "Webcam", price: 60, img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400" },
    { id: 11, name: "USB Cable", price: 10, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
    { id: 12, name: "Power Bank", price: 40, img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400" },
    { id: 13, name: "Gaming Chair", price: 250, img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400" },
    { id: 14, name: "Desk Lamp", price: 30, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400" },
    { id: 15, name: "Bluetooth Earbuds", price: 120, img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400" },
   { id: 16, name: "Gaming Mouse Pad", price: 25, img: "https://images.unsplash.com/photo-1612444530588-a08268fb5be8?w=400" },
    { id: 17, name: "Mic", price: 70, img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400" },
    { id: 18, name: "Router", price: 65, img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400" },
    { id: 19, name: "Printer", price: 110, img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400" },
    { id: 20, name: "Graphics Tablet", price: 180, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400" }
  ]

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-3 col-sm-6 mb-4">
          <div className="card h-100">
            <img 
              src={product.img} 
              className="card-img-top" 
              alt={product.name} 
              style={{height: "200px", objectFit: "cover"}} 
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text fw-bold">${product.price}</p>
              <button 
                onClick={() => addToCart(product)} 
                className="btn btn-primary mt-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList