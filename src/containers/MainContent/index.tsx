import React from 'react'
import ContatoCard from '../../components/ContatoCard'
import { TituloPrincipal } from '../../styles'
import {
  Contatos,
  MainContentLayout,
  BotaoMenuMobile,
  TopoFixo
} from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Contato } from '../../models/Contatos'

interface MainContentProps {
  abrirMenu: () => void
  contatosFiltrados: Contato[]
}

const MainContent: React.FC<MainContentProps> = ({
  abrirMenu,
  contatosFiltrados
}) => {
  const todosContatos = useSelector(
    (state: RootReducer) => state.contatos.contatos
  )

  const contatosParaExibir =
    contatosFiltrados.length > 0 || isAlgumFiltroAtivo(contatosFiltrados)
      ? contatosFiltrados
      : todosContatos

  function isAlgumFiltroAtivo(lista: Contato[]) {
    return lista.length !== todosContatos.length
  }

  return (
    <MainContentLayout>
      <TopoFixo>
        <TituloPrincipal>Contatos</TituloPrincipal>
        <BotaoMenuMobile onClick={abrirMenu}>☰</BotaoMenuMobile>
      </TopoFixo>
      <Contatos>
        {contatosParaExibir.length === 0 ? (
          <p>Nenhum contato encontrado.</p>
        ) : (
          // Lista de contatos
          contatosParaExibir.map((contato: Contato) => (
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
