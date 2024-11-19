import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contato {
  id: number
  nome: string
  email: string
  telefone: string
}

interface ContatoState {
  contatos: Contato[]
}

const initialState: ContatoState = {
  contatos: [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      telefone: '123456789'
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      telefone: '987654321'
    },
    {
      id: 3,
      nome: 'Carlos Pereira',
      email: 'carlos.pereira@example.com',
      telefone: '456789123'
    },
    {
      id: 4,
      nome: 'Ana Souza',
      email: 'ana.souza@example.com',
      telefone: '654123987'
    },
    {
      id: 5,
      nome: 'Roberto Silva',
      email: 'roberto.silva@expl.com',
      telefone: '321789456'
    },
    {
      id: 6,
      nome: 'Fernanda Costa',
      email: 'fernanda.costa@expl.com',
      telefone: '789456123'
    },
    {
      id: 7,
      nome: 'Carlos Mendes',
      email: 'carlos.mendes@expl.com',
      telefone: '147258369'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato(state, action: PayloadAction<Contato>) {
      state.contatos.push(action.payload)
    },
    removerContato(state, action: PayloadAction<number>) {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editarContato(
      state,
      action: PayloadAction<{ id: number; dadosAtualizados: Partial<Contato> }>
    ) {
      const contatoIndex = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (contatoIndex >= 0) {
        state.contatos[contatoIndex] = {
          ...state.contatos[contatoIndex],
          ...action.payload.dadosAtualizados
        }
      }
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contatosSlice.actions

export default contatosSlice.reducer
