function ItemDetail({ product }) {
  return (
    <div className="detail-card">
      <h2>{product.name}</h2>
      <p><strong>Categoría:</strong> {product.category}</p>
    </div>
  )
}

export default ItemDetail