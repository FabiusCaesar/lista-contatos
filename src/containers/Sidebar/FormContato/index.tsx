import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionarContato } from '../../../store/reducers/contatosSlice'
import * as S from '../../../components/FormElements/styles'
import { TituloSecao } from '../../../styles'
import { Contato } from '../../../models/Contatos'
import ConfirmationDialog from '../../../components/Modal'
import Botao from '../../../components/Botao'

// O componente principal
const FormContato: React.FC = () => {
  const dispatch = useDispatch() // Permite disparar ações para o Redux Store

  // Estados locais para armazenar os valores do formulário
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [novoContato, setNovoContato] = useState<Contato | null>(null)

  // Função que será chamada quando o formulário for enviado
  const formSubmitContato = (event: React.FormEvent) => {
    event.preventDefault() // Evita o recarregamento da página

    // Criando o objeto do novo contato
    const novoContato: Contato = {
      id: Date.now(), // Gera um ID único com base no timestamp atual
      nome,
      email,
      telefone
    }
    setNovoContato(novoContato)
    setConfirmOpen(true)
  }
  const handleConfirmarAdicao = () => {
    if (novoContato) {
      dispatch(adicionarContato(novoContato)) // Envia o contato ao Redux Store

      // Limpar os campos
      setNome('')
      setEmail('')
      setTelefone('')
      setNovoContato(null)
      setConfirmOpen(false)
    }
  }
  // O JSX para renderizar o formulário
  return (
    <>
      <TituloSecao>Adicionar Contato</TituloSecao>
      <S.Form onSubmit={formSubmitContato}>
        <S.FieldGroup>
          <S.Label>Nome:</S.Label>
          <S.Input
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </S.FieldGroup>
        <S.FieldGroup>
          <S.Label>Email:</S.Label>
          <S.Input
            type="email"
            placeholder="Digite o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </S.FieldGroup>
        <S.FieldGroup>
          <S.Label>Telefone:</S.Label>
          <S.Input
            type="tel"
            placeholder="Digite o telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </S.FieldGroup>
        <Botao type="submit" variante="primario">
          Adicionar Contato
        </Botao>
      </S.Form>

      <ConfirmationDialog // Modal de Confirmação
        open={confirmOpen}
        title="Confirmar Adição de Novo contato"
        text="Será adicionado o seguinte contato:"
        content={
          <>
            <strong>Nome:</strong> {nome}
            <br />
            <strong>Email:</strong> {email}
            <br />
            <strong>Telefone:</strong> {telefone}
          </>
        }
        onConfirm={handleConfirmarAdicao}
        onCancel={() => setConfirmOpen(false)}
      />
    </>
  )
}

export default FormContato
