import { Provider } from 'react-redux'
import ListaContatos from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import PainelLateral from './containers/PainelLateral'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <PainelLateral />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
