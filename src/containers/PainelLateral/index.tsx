import { Painel } from './styles'
import FormContato from './FormContato'
import FormBusca from './FormBusca'
import { useState } from 'react'

interface PainelLateralProps {
  setContatosFiltrados: (contatos: any[]) => void
}

const PainelLateral: React.FC<PainelLateralProps> = ({
  setContatosFiltrados
}) => {
  return (
    <Painel>
      <FormBusca setContatosFiltrados={setContatosFiltrados} />
      <FormContato />
    </Painel>
  )
}

export default PainelLateral
