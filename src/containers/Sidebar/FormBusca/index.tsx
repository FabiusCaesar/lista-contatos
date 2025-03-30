import React, { useEffect, useState } from 'react'
import * as S from '../../../components/FormElements/styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { TituloSecao } from '../../../styles'

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
      <TituloSecao>Pesquisa</TituloSecao>
      <S.Form>
        <S.FieldGroup>
          <S.Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </S.FieldGroup>
        <S.FieldGroup>
          <S.Input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.FieldGroup>
        <S.FieldGroup>
          <S.Input
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </S.FieldGroup>
      </S.Form>
    </>
  )
}

export default FormBusca
