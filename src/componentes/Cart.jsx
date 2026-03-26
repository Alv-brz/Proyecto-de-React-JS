import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeItem, clear } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <h2 style={{
        textAlign: "center",
        marginTop: "40px"
      }}>
        El carrito está vacío 🛒
      </h2>
    );
  }

  return (
    <div style={{
      maxWidth: "700px",
      margin: "40px auto",
      padding: "20px"
    }}>
      <h2 style={{
        textAlign: "center",
        marginBottom: "20px"
      }}>
        Carrito de Compras
      </h2>

      {cart.map(item => (
        <div key={item.id} style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h4 style={{ marginBottom: "5px" }}>
            {item.name}
          </h4>

          <p style={{ marginBottom: "10px" }}>
            Cantidad: <strong>{item.quantity}</strong>
          </p>

          <button
            onClick={() => removeItem(item.id)}
            style={{
              background: "#dc3545",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Eliminar
          </button>
        </div>
      ))}

      <button
        onClick={clear}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "10px",
          background: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
}

export default Cart;