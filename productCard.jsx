function ProductCard({ product }) {
  return (
    <div className="card h-100 text-center p-3">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">${product.price}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  )
}

export default ProductCard