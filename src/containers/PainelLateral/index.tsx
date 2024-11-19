import { Painel } from './styles'
import FormContato from '../FormContato'
import FormBusca from '../FormBusca'
import { useState } from 'react'

const PainelLateral = () => {
  const [contatosFiltrados, setContatosFiltrados] = useState([])

  return (
    <Painel>
      <FormBusca setContatosFiltrados={setContatosFiltrados} />
      <FormContato />
    </Painel>
  )
}

export default PainelLateral
