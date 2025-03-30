import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contato } from '../../models/Contatos'

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
      nome: 'Carlos Souza',
      email: 'carlos.souza@example.com',
      telefone: '456789123'
    },
    {
      id: 4,
      nome: 'Ana Lima',
      email: 'ana.lima@example.com',
      telefone: '654321987'
    },
    {
      id: 5,
      nome: 'Bruno Alves',
      email: 'bruno.alves@example.com',
      telefone: '789123456'
    },
    {
      id: 6,
      nome: 'Paula Fernandes',
      email: 'paula.fernandes@example.com',
      telefone: '321987654'
    },
    {
      id: 7,
      nome: 'Renato Costa',
      email: 'renato.costa@example.com',
      telefone: '987123654'
    },
    {
      id: 8,
      nome: 'Camila Rocha',
      email: 'camila.rocha@example.com',
      telefone: '123987456'
    },
    {
      id: 9,
      nome: 'Juliana Martins',
      email: 'juliana.martins@example.com',
      telefone: '456123789'
    },
    {
      id: 10,
      nome: 'Lucas Vieira',
      email: 'lucas.vieira@example.com',
      telefone: '654789321'
    },
    {
      id: 11,
      nome: 'Fernanda Ribeiro',
      email: 'fernanda.ribeiro@example.com',
      telefone: '789654123'
    },
    {
      id: 12,
      nome: 'Eduardo Dias',
      email: 'eduardo.dias@example.com',
      telefone: '321654987'
    },
    {
      id: 13,
      nome: 'Beatriz Moreira',
      email: 'beatriz.moreira@example.com',
      telefone: '987456321'
    },
    {
      id: 14,
      nome: 'Ricardo Nunes',
      email: 'ricardo.nunes@example.com',
      telefone: '123654789'
    },
    {
      id: 15,
      nome: 'Helena Alves',
      email: 'helena.alves@example.com',
      telefone: '456789654'
    },
    {
      id: 16,
      nome: 'Gabriel Santos',
      email: 'gabriel.santos@example.com',
      telefone: '654123987'
    },
    {
      id: 17,
      nome: 'Carla Mendes',
      email: 'carla.mendes@example.com',
      telefone: '7788123456'
    },
    {
      id: 18,
      nome: 'Lucas Almeida',
      email: 'lucas.almeida@example.com',
      telefone: '6688123456'
    },
    {
      id: 19,
      nome: 'Carla Silva',
      email: 'carla.silva@example.com',
      telefone: '5588123456'
    },
    {
      id: 20,
      nome: 'Juliana Oliveira',
      email: 'juliana.oliveira@example.com',
      telefone: '4488123456'
    },
    {
      id: 21,
      nome: 'Carlos Mendes',
      email: 'carlos.mendes@example.com',
      telefone: '3388123456'
    },
    {
      id: 22,
      nome: 'Fernanda Almeida',
      email: 'fernanda.almeida@example.com',
      telefone: '2288123456'
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
