import { Link } from "react-router-dom"

function Item({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  )
}

export default Item