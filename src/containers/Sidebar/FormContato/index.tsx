import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionarContato } from '../../../store/reducers/contatosSlice'
import * as S from '../../../components/FormElements/styles'
import { TituloSecao } from '../../../styles'
import { Contato } from '../../../models/Contatos'



// O componente principal
const FormContato: React.FC<FormContatoProps> = ({
}) => {
  const dispatch = useDispatch() // Permite disparar ações para o Redux Store

  // Estados locais para armazenar os valores do formulário
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  // Função que será chamada quando o formulário for enviado
  const formSubmitContato = (event: React.FormEvent) => {
    event.preventDefault() // Evita o recarregamento da página

    // Criando o objeto do novo contato
    const novoContato = {
      id: Date.now(), // Gera um ID único com base no timestamp atual
      nome,
      email,
      telefone
    }

    dispatch(adicionarContato(novoContato)) // Envia o contato ao Redux Store

    // Resetar busca e mostrar todos os contatos
    setBuscaAtiva(false)
    setContatosFiltrados([])

    // Limpar os campos
    setNome('')
    setEmail('')
    setTelefone('')
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
        <button type="submit">Adicionar Contato</button>
      </S.Form>
    </>
  )
}

export default FormContato
