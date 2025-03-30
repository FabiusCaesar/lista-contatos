import { SidebarLayout } from './styles'
import FormContato from './FormContato'
import FormBusca from './FormBusca'
import { useState } from 'react'

interface SidebarlProps {
  menuAberto: boolean
  fecharMenu: () => void
  setContatosFiltrados: (contatos: any[]) => void
  setBuscaAtiva: (ativa: boolean) => void
}

const Sidebar: React.FC<SidebarlProps> = ({
  menuAberto,
  fecharMenu,
  setContatosFiltrados,
  setBuscaAtiva
}) => {
  return (
    <SidebarLayout $menuAberto={menuAberto}>
      <button onClick={fecharMenu}>Fechar</button>
      <FormBusca
        setContatosFiltrados={setContatosFiltrados}
        setBuscaAtiva={setBuscaAtiva}
      />
      <FormContato />
    </SidebarLayout>
  )
}

export default Sidebar
