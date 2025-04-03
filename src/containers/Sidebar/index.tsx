import { SidebarLayout } from './styles'
import FormContato from './FormContato'
import FormBusca from './FormBusca'
import { useState } from 'react'
import { Contato } from '../../models/Contatos'

interface SidebarlProps {
  menuAberto: boolean
  fecharMenu: () => void
}

const Sidebar: React.FC<SidebarlProps> = ({ menuAberto, fecharMenu }) => {
  return (
    <SidebarLayout $menuAberto={menuAberto}>
      <button onClick={fecharMenu}>Fechar</button>
      <FormBusca />
      <FormContato />
    </SidebarLayout>
  )
}

export default Sidebar
