import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionarContato } from '../../../store/reducers/contatosSlice'
import * as S from '../../../components/FormElements/styles'

// O componente principal
const FormContato: React.FC = () => {
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

    // Reseta os campos do formulário
    setNome('')
    setEmail('')
    setTelefone('')
  }
  // O JSX para renderizar o formulário
  return (
    <>
      <h2>Adicionar Contato</h2>
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
