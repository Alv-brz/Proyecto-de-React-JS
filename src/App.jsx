import { Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar"
import ItemListContainer from "./containers/ItemListContainer"
import ItemDetailContainer from "./containers/ItemDetailContainer"

function App() {
  return (
    <>
      <NavBar titulo="Travel World" />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a nuestra agencia de viajes!" />}
        />

        <Route
          path="/products/:idCategory"
          element={<ItemListContainer />}
        />

        <Route
          path="/item/:idItem"
          element={<ItemDetailContainer />}
        />

        <Route
          path="*"
          element={<h2>404 - Página no encontrada</h2>}
        />
      </Routes>
    </>
  )
}

export default App