import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../componentes/ItemDetail";

const products = [
  { id: 1, name: "Viaje a Cancún", category: "playa" },
  { id: 2, name: "Viaje a Cusco", category: "montana" },
  { id: 3, name: "Viaje a París", category: "ciudad" },
  { id: 4, name: "Viaje a Punta Cana", category: "playa" }
];

function ItemDetailContainer() {
  const { idItem } = useParams(); // 👈 IMPORTANTE
  const [item, setItem] = useState(null);

  useEffect(() => {
    const found = products.find(p => p.id === Number(idItem));
    setItem(found);
  }, [idItem]);

  if (!item) {
    return <h2>Cargando producto...</h2>;
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;