import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemList from "../componentes/ItemList"

function ItemListContainer({ greeting }) {

  const { idCategory } = useParams()
  const [products, setProducts] = useState([])

  const productsMock = [
    { id: 1, name: "Viaje a Cancún", category: "playa" },
    { id: 2, name: "Viaje a Cusco", category: "montana" },
    { id: 3, name: "Viaje a París", category: "ciudad" },
    { id: 4, name: "Viaje a Punta Cana", category: "playa" }
  ]

  useEffect(() => {

    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsMock)
      }, 1000)
    })

    getProducts.then((res) => {

      if (idCategory) {
        setProducts(res.filter(prod => prod.category === idCategory))
      } else {
        setProducts(res)
      }

    })

  }, [idCategory])

return (
  <section className="container">
    {greeting && <h2>{greeting}</h2>}

    {products.length === 0 ? (
      <p>Cargando productos...</p>
    ) : (
      <div className="products-grid">
        <ItemList products={products} />
      </div>
    )}
  </section>
)
}

export default ItemListContainer