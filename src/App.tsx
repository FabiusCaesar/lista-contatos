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

  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer>
        <Sidebar
          menuAberto={menuAberto}
          fecharMenu={() => setMenuAberto(false)}
        />
        <MainContent
          abrirMenu={() => setMenuAberto(true)}
        />
      </AppContainer>
    </Provider>
  )
}

export default App
