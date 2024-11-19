import { Provider } from 'react-redux'
import ListaContatos from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import PainelLateral from './containers/PainelLateral'
import { useState } from 'react'

function App() {
  // Gerenciar o estado dos contatos filtrados
  const [contatosFiltrados, setContatosFiltrados] = useState<any[]>([])

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <PainelLateral setContatosFiltrados={setContatosFiltrados} />
        <ListaContatos contatos={contatosFiltrados} />
      </Container>
    </Provider>
  )
}

export default App
