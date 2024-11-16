import ListaContatos from './containers/ListaContatos'
import Painel from './containers/Painel/inex'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Painel />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App
