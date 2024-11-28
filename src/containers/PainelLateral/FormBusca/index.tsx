import React, { useEffect, useState } from 'react'
import * as S from '../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'

interface FormBuscaProps {
  setContatosFiltrados: (contatos: any[]) => void
}

const FormBusca: React.FC<FormBuscaProps> = ({ setContatosFiltrados }) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const contatos = useSelector((state: RootReducer) => state.contatos.contatos)

  useEffect(() => {
    const contatosFiltrados = contatos.filter((contato) => {
      return (
        (nome
          ? contato.nome.toLowerCase().includes(nome.toLowerCase())
          : true) &&
        (email
          ? contato.email.toLowerCase().includes(email.toLowerCase())
          : true) &&
        (telefone ? contato.telefone.includes(telefone) : true)
      )
    })
    setContatosFiltrados(contatosFiltrados)
  }, [nome, email, telefone, contatos, setContatosFiltrados])

  return (
    <>
      <h2>Pesquisa</h2>
      <S.Form>
        <S.FieldGroup>
          <S.Label>Busca:</S.Label>
          <S.Input
            type="text"
            placeholder="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </S.FieldGroup>
        <S.FieldGroup>
          <S.Label>Busca por:</S.Label>
          <S.Input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.FieldGroup>
        <S.FieldGroup>
          <S.Label>Busca por telefone:</S.Label>
          <S.Input
            type="tel"
            placeholder="Digite o telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </S.FieldGroup>
      </S.Form>
    </>
  )
}

export default FormBusca
