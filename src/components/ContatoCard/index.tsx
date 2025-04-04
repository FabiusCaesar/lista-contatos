import React, { useState } from 'react'
import { Button, Card, Input } from './styles'

interface ContatoProps {
  nome: string
  email: string
  telefone: string
  selecionado?: boolean
  aoSelecionar?: () => void
  aoEditar?: (novoNome: string, novoEmail: string, novoTelefone: string) => void
}

const ContatoCard: React.FC<ContatoProps> = ({
  nome,
  email,
  telefone,
  selecionado = false,
  aoSelecionar,
  aoEditar
}) => {
  const [emEdicao, setEmEdicao] = useState(false)
  const [nomeEditado, setNomeEditado] = useState(nome)
  const [emailEditado, setEmailEditado] = useState(email)
  const [telefoneEditado, setTelefoneEditado] = useState(telefone)

  const handleEditar = (event: React.MouseEvent) => {
    event.stopPropagation()
    setEmEdicao(true)
  }

  const handleCancelar = (event: React.MouseEvent) => {
    event.stopPropagation()
    setEmEdicao(false)
    setNomeEditado(nome)
    setEmailEditado(email)
    setTelefoneEditado(telefone)
  }

  const handleSalvar = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (aoEditar) {
      aoEditar(nomeEditado, emailEditado, telefoneEditado)
    }
    setEmEdicao(false)
    // Exibir confirmação após salvar, se necessário
  }

  return (
    <Card
      $selecionado={selecionado}
      onClick={!emEdicao ? aoSelecionar : undefined}
    >
      {emEdicao ? (
        <>
          <Input
            type="text"
            value={nomeEditado}
            onChange={(e) => setNomeEditado(e.target.value)}
          />
          <Input
            type="email"
            value={emailEditado}
            onChange={(e) => setEmailEditado(e.target.value)}
          />
          <Input
            type="tel"
            value={telefoneEditado}
            onChange={(e) => setTelefoneEditado(e.target.value)}
          />
          <Button onClick={handleSalvar}>Salvar</Button>
          <Button onClick={handleCancelar}>Cancelar</Button>
        </>
      ) : (
        <>
          <h3>{nome}</h3>
          <p>{email}</p>
          <p>{telefone}</p>
          <Button onClick={handleEditar}>Editar</Button>
        </>
      )}
    </Card>
  )
}

export default ContatoCard
