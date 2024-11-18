import React from 'react'
import ContatoCard from '../../components/ContatoCard'
import Titulo from '../../components/Titulo'
import { Contatos } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaContatos: React.FC = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.contatos)

  return (
    <div>
      <Titulo />
      <Contatos>
        {contatos.length === 0 ? (
          <p>Nenhum contato adicionado ainda.</p>
        ) : (
          // Lista de contatos
          contatos.map((contato) => (
            <ContatoCard
              key={contato.id}
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
            />
          ))
        )}
      </Contatos>
    </div>
  )
}

export default ListaContatos
