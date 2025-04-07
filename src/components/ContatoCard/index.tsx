import React, { useState } from 'react'
import { Card, Input } from './styles'
import ConfirmationDialog from '../Modal'
import Botao from '../Botao'

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
  const [confirmOpen, setConfirmOpen] = useState(false)

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
    setConfirmOpen(true)
  }

  const confirmarEdicao = () => {
    if (aoEditar) {
      aoEditar(nomeEditado, emailEditado, telefoneEditado)
    }
    setConfirmOpen(false)
    setEmEdicao(false)
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
          <Botao variante="confirmar" onClick={handleSalvar}>
            Salvar
          </Botao>
          <Botao variante="cancelar" onClick={handleCancelar}>
            Cancelar
          </Botao>
        </>
      ) : (
        <>
          <h3>{nome}</h3>
          <p>{email}</p>
          <p>{telefone}</p>
          <Botao variante="secundario" onClick={handleEditar}>
            Editar
          </Botao>
        </>
      )}

      <ConfirmationDialog // Modal de Confirmação
        open={confirmOpen}
        title="Confirmar Edição"
        text="O contato será salvo como:"
        content={
          <>
            <strong>Nome:</strong> {nomeEditado}
            <br />
            <strong>Email:</strong> {emailEditado}
            <br />
            <strong>Telefone:</strong> {telefoneEditado}
          </>
        }
        onConfirm={confirmarEdicao}
        onCancel={() => setConfirmOpen(false)}
      />
    </Card>
  )
}

export default ContatoCard
