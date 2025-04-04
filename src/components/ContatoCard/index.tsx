import React from 'react'
import { Card } from './styles'

interface ContatoProps {
  nome: string
  email: string
  telefone: string
  selecionado?: boolean
  aoSelecionar?: () => void
}

const ContatoCard: React.FC<ContatoProps> = ({
  nome,
  email,
  telefone,
  selecionado = false,
  aoSelecionar
}) => {
  return (
    <Card $selecionado={selecionado} onClick={aoSelecionar}>
      <h3>{nome}</h3>
      <p>{email}</p>
      <p>{telefone}</p>
    </Card>
  )
}

export default ContatoCard
