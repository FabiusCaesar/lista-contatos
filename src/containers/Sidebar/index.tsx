import { SidebarLayout } from './styles'
import FormContato from './FormContato'
import FormBusca from './FormBusca'
import { useState } from 'react'

interface PainelLateralProps {
  setContatosFiltrados: (contatos: any[]) => void
}

const Sidebar: React.FC<PainelLateralProps> = ({ setContatosFiltrados }) => {
  return (
    <SidebarLayout>
      <FormBusca setContatosFiltrados={setContatosFiltrados} />
      <FormContato />
    </SidebarLayout>
  )
}

export default Sidebar
