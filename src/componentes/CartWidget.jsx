import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { calcItemsQty } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
      🛒 {calcItemsQty()}
    </Link>
  );
}

export default CartWidget;