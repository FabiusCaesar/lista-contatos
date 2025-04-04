import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const MainContentLayout = styled.main`
  padding: 0;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
    height: auto;
  }
`

export const Contatos = styled.div`
  padding: 0 32px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr; // tablets
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr; // celulares
  }
`

export const TopoFixo = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  padding: 16px 16px;
  display: flex;
  flex-direction: column; // Alinha verticalmente por padrão
  align-items: center;
  gap: 8px; // Espaço entre o título e o botão

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row; // Em mobile, alinha horizontalmente
    justify-content: space-between;
    align-items: center;
  }
`

export const BotaoMenuMobile = styled.button`
  display: none;
  font-size: 28px;
  background: none;
  border: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`

export const BotaoRemover = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  margin: 0 24px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 8px;
    margin: 0 8px;
  }
`
