import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar({ titulo }) {
  return (
    <header>
      <div className="navbar-container">

        <div className="logo">
          <Link to="/" className="logo-link">
            {titulo}
          </Link>
        </div>

        <nav>
          <ul className="nav-list">

            <li>
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/products/playa" className="nav-link">
                Playa
              </Link>
            </li>

            <li>
              <Link to="/products/montana" className="nav-link">
                Montaña
              </Link>
            </li>

            <li>
              <Link to="/products/ciudad" className="nav-link">
                Ciudad
              </Link>
            </li>

          </ul>
        </nav>

        <div className="cart-container">
          <CartWidget />
        </div>

      </div>
    </header>
  )
}

export default NavBar