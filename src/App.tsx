import { Provider } from 'react-redux'
import { AppContainer } from './styles'
import store from './store'
import { useState } from 'react'
import GlobalStyle from './styles'
import Sidebar from './containers/Sidebar'
import MainContent from './containers/MainContent'
import { Contato } from './models/Contatos'

function App() {
  // Menu Hamburguer Sidebar
  const [menuAberto, setMenuAberto] = useState(false)

  //Estado para busca
  const [contatosFiltrados, setContatosFiltrados] = useState<Contato[]>([])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer>
        <Sidebar
          menuAberto={menuAberto}
          fecharMenu={() => setMenuAberto(false)}
          setContatosFiltrados={setContatosFiltrados}
        />
        <MainContent
          abrirMenu={() => setMenuAberto(true)}
          contatosFiltrados={contatosFiltrados}
        />
      </AppContainer>
    </Provider>
  )
}

export default App
