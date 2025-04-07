import React, { useState } from 'react'
import ContatoCard from '../../components/ContatoCard'
import { TituloPrincipal } from '../../styles'
import {
  Contatos,
  MainContentLayout,
  BotaoMenuMobile,
  TopoFixo,
  Footer
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Contato } from '../../models/Contatos'
import {
  editarContato,
  removerContato
} from '../../store/reducers/contatosSlice'
import ConfirmationDialog from '../../components/Modal'
import Botao from '../../components/Botao'

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
  const [confirmOpen, setConfirmOpen] = useState(false)

  const alternarSelecao = (id: number) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((sel) => sel !== id) : [...prev, id]
    )
  }

  const handleConfirmarRemocao = () => {
    selecionados.forEach((id) => dispatch(removerContato(id)))
    setSelecionados([])
    setConfirmOpen(false)
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
        <Botao
          variante="remover"
          onClick={() => setConfirmOpen(true)}
          disabled={selecionados.length === 0}
        >
          Remover Selecionados
        </Botao>
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

      <Footer>
        <p>
          © {new Date().getFullYear()} Lista de Contatos. Todos os direitos
          reservados.
        </p>
      </Footer>

      <ConfirmationDialog // Modal de Confirmação
        open={confirmOpen}
        title="Confirmar Remoção"
        text={`Tem certeza que deseja remover o${
          selecionados.length > 1 ? 's' : ''
        } ${selecionados.length > 1 ? selecionados.length : ''} contato${
          selecionados.length > 1 ? 's' : ''
        } selecionado${selecionados.length > 1 ? 's' : ''}?`}
        onConfirm={handleConfirmarRemocao}
        onCancel={() => setConfirmOpen(false)}
        content=""
      />
    </MainContentLayout>
  )
}

export default MainContent
