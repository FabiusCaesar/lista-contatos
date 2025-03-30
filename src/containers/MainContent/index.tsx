import React from 'react'
import ContatoCard from '../../components/ContatoCard'
import { TituloPrincipal } from '../../styles'
import { Contatos, MainContentLayout } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

interface ListaContatoProps {
  contatos?: Array<{
    id: number
    nome: string
    email: string
    telefone: string
  }>
}

const MainContent: React.FC<ListaContatoProps> = ({ contatos }) => {
  const todosContatos = useSelector(
    (state: RootReducer) => state.contatos.contatos
  )

  // Usar os contatos passados por prop ou todos os contatos
  const contatosExibir = contatos || todosContatos

  return (
    <MainContentLayout>
      <TituloPrincipal>Contatos</TituloPrincipal>
      <Contatos>
        {contatosExibir.length === 0 ? (
          <p>Nenhum contato adicionado ainda.</p>
        ) : (
          // Lista de contatos
          contatosExibir.map((contato) => (
            <ContatoCard
              key={contato.id}
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
            />
          ))
        )}
      </Contatos>
    </MainContentLayout>
  )
}

export default MainContent
