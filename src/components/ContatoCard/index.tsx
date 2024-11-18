import React from 'react'
import { Card } from './styles'

interface ContatoProps {
  nome: string
  email: string
  telefone: string
}

const ContatoCard: React.FC<ContatoProps> = ({ nome, email, telefone }) => {
  return (
    <Card>
      <h3>{nome}:</h3>
      <p>{email}</p>
      <p>{telefone}</p>
    </Card>
  )
}

export default ContatoCard
