import { Provider } from 'react-redux'
import { AppContainer } from './styles'
import store from './store'
import { useState } from 'react'
import GlobalStyle from './styles'
import Sidebar from './containers/Sidebar'
import MainContent from './containers/MainContent'
import { Contato } from './models/Contatos'

function App() {
  // Gerenciar o estado dos contatos filtrados
  const [contatosFiltrados, setContatosFiltrados] = useState<Contato[]>([])

  const [buscaAtiva, setBuscaAtiva] = useState(false)

  // Menu Hamburguer Sidebar
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer>
        <Sidebar
          menuAberto={menuAberto}
          fecharMenu={() => setMenuAberto(false)}
          setContatosFiltrados={setContatosFiltrados}
          setBuscaAtiva={setBuscaAtiva}
        />
        <MainContent
          abrirMenu={() => setMenuAberto(true)}
          contatosFiltrados={contatosFiltrados}
          buscaAtiva={buscaAtiva}
        />
      </AppContainer>
    </Provider>
  )
}

export default App
