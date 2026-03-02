import NavBar from "./components/NavBar"
import ItemListContainer from "./containers/ItemListContainer"

function App() {
  return (
    <>
      <NavBar titulo="Travel World" />
      <ItemListContainer greeting="¡Bienvenido a nuestra agencia de viajes!" />
    </>
  )
}

export default App
