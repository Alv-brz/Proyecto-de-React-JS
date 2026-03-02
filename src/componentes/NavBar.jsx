import CartWidget from "./CartWidget"

function NavBar(props) {
  return (
    <>
      <header className="encabezado">
        <div className="encabezado__contenedor">
          <h1 className="logo">{props.titulo}</h1>

          <nav className="navegacion">
            <ul className="navegacion__lista">
              <li><a href="#">INICIO</a></li>
              <li><a href="#">QUIÉNES SOMOS</a></li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  CONTÁCTANOS
                </a>
              </li>
            </ul>
          </nav>
          <CartWidget />
        </div>
      </header>
    </>
  )
}

export default NavBar
