import React, { useState } from 'react'
import ContatoCard from '../../components/ContatoCard'
import { TituloPrincipal } from '../../styles'
import {
  Contatos,
  MainContentLayout,
  BotaoMenuMobile,
  TopoFixo,
  BotaoRemover
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Contato } from '../../models/Contatos'
import {
  editarContato,
  removerContato
} from '../../store/reducers/contatosSlice'

interface MainContentProps {
  abrirMenu: () => void
  contatosFiltrados: Contato[]
}

const MainContent: React.FC<MainContentProps> = ({
  abrirMenu,
  contatosFiltrados
}) => {
  const dispatch = useDispatch()
  const todosContatos = useSelector(
    (state: RootReducer) => state.contatos.contatos
  )

  const [selecionados, setSelecionados] = useState<number[]>([])

  const alternarSelecao = (id: number) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((sel) => sel !== id) : [...prev, id]
    )
  }

  const removerSelecionados = () => {
    selecionados.forEach((id) => dispatch(removerContato(id)))
    setSelecionados([])
  }

  const handleEditarContato = (
    id: number,
    nome: string,
    email: string,
    telefone: string
  ) => {
    dispatch(editarContato({ id, dadosAtualizados: { nome, email, telefone } }))
  }

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
        <BotaoRemover
          onClick={removerSelecionados}
          disabled={selecionados.length === 0}
        >
          Remover Selecionados
        </BotaoRemover>
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
              selecionado={selecionados.includes(contato.id)}
              aoSelecionar={() => alternarSelecao(contato.id)}
              aoEditar={(nome, email, telefone) =>
                handleEditarContato(contato.id, nome, email, telefone)
              }
            />
          ))
        )}
      </Contatos>
    </MainContentLayout>
  )
}

export default MainContent
