import React from 'react'
import ContatoCard from '../../components/ContatoCard'
import { TituloPrincipal } from '../../styles'
import { Contatos, MainContentLayout, BotaoMenuMobile } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

interface MainContentProps {
  abrirMenu: () => void
  contatosFiltrados: Array<{
    id: number
    nome: string
    email: string
    telefone: string
  }>
  buscaAtiva: boolean
}

const MainContent: React.FC<MainContentProps> = ({
  abrirMenu,
  contatosFiltrados,
  buscaAtiva
}) => {
  const todosContatos = useSelector(
    (state: RootReducer) => state.contatos.contatos
  )

  console.log('🚀 todosContatos (Redux):', todosContatos)

  const contatosExibir = buscaAtiva ? contatosFiltrados : todosContatos

  return (
    <MainContentLayout>
      <BotaoMenuMobile onClick={abrirMenu}>☰</BotaoMenuMobile>
      <TituloPrincipal>Contatos</TituloPrincipal>
      <Contatos>
        {contatosExibir.length === 0 ? (
          <p>Nenhum contato encontrado.</p>
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
