import React, { useEffect, useState } from 'react'
import * as S from '../../../components/FormElements/styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { TituloSecao } from '../../../styles'
import { Contato } from '../../../models/Contatos'
import Botao from '../../../components/Botao'

interface FormBuscaProps {
  setContatosFiltrados: React.Dispatch<React.SetStateAction<Contato[]>>
}

const FormBusca: React.FC<FormBuscaProps> = ({ setContatosFiltrados }) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const contatos = useSelector((state: RootReducer) => state.contatos.contatos)

  useEffect(() => {
    // Lógica do filtro
    const contatosFiltrados = contatos.filter((contato: Contato) => {
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
  }, [nome, email, telefone, contatos])

  const handleLimparCampos = () => {
    setNome('')
    setEmail('')
    setTelefone('')
  }

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
        <Botao
          variante="primarioOutline"
          onClick={handleLimparCampos}
          disabled={!nome && !email && !telefone}
        >
          Limpar
        </Botao>
      </S.Form>
    </>
  )
}

export default FormBusca
