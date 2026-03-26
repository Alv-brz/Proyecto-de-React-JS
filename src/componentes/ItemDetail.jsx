import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);

  const handleAdd = () => {
    addItem(item, 1);
  };

  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "400px",
      margin: "40px auto",
      textAlign: "center"
    }}>
      <h2>{item.name}</h2>
      <p><strong>Categoría:</strong> {item.category}</p>

      <button onClick={handleAdd} style={{
        marginTop: "15px",
        padding: "10px 15px",
        background: "#0d6efd",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetail;