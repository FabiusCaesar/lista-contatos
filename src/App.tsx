import { Provider } from 'react-redux'
import { AppContainer } from './styles'
import store from './store'
import { useState } from 'react'
import GlobalStyle from './styles'
import Sidebar from './containers/Sidebar'
import MainContent from './containers/MainContent'

function App() {
  // Gerenciar o estado dos contatos filtrados
  const [contatosFiltrados, setContatosFiltrados] = useState<any[]>([])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer>
        <Sidebar setContatosFiltrados={setContatosFiltrados} />
        <MainContent contatos={contatosFiltrados} />
      </AppContainer>
    </Provider>
  )
}

export default App
