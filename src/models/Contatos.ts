export interface Contato {
  id: number
  nome: string
  email: string
  telefone: string
}

export interface ContatoState {
  contatos: Contato[]
}
