import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "../componentes/ItemDetail"

function ItemDetailContainer() {

  const { idItem } = useParams()
  const [product, setProduct] = useState(null)

  const productsMock = [
    { id: 1, name: "Viaje a Cancún", category: "playa" },
    { id: 2, name: "Viaje a Cusco", category: "montana" },
    { id: 3, name: "Viaje a París", category: "ciudad" },
    { id: 4, name: "Viaje a Punta Cana", category: "playa" }
  ]

  useEffect(() => {

    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsMock.find(prod => prod.id === Number(idItem)))
      }, 1000)
    })

    getProduct.then((res) => {
      setProduct(res)
    })

  }, [idItem])

  if (!product) return <p>Cargando detalle...</p>

  return <ItemDetail product={product} />
}

export default ItemDetailContainer