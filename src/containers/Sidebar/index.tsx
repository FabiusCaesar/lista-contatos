import { SidebarLayout } from './styles'
import FormContato from './FormContato'
import FormBusca from './FormBusca'
import { useState } from 'react'
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
      <button onClick={fecharMenu}>Fechar</button>
      <FormBusca setContatosFiltrados={setContatosFiltrados} />
      <FormContato />
    </SidebarLayout>
  )
}

export default Sidebar
