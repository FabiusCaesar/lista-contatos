import { BotaoFechar, SidebarLayout } from './styles'
import FormContato from './FormContato'
import FormBusca from './FormBusca'
import { Contato } from '../../models/Contatos'

interface SidebarProps {
  menuAberto: boolean
  fecharMenu: () => void
  setContatosFiltrados: React.Dispatch<React.SetStateAction<Contato[]>>
}

const Sidebar: React.FC<SidebarProps> = ({
  menuAberto,
  fecharMenu,
  setContatosFiltrados
}) => {
  return (
    <SidebarLayout $menuAberto={menuAberto}>
      <BotaoFechar onClick={fecharMenu}>Fechar</BotaoFechar>
      <FormBusca setContatosFiltrados={setContatosFiltrados} />
      <FormContato />
    </SidebarLayout>
  )
}

export default Sidebar
