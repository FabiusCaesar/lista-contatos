import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contatosSlice'

const store = configureStore({
  reducer: {
    contatos: contatoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
