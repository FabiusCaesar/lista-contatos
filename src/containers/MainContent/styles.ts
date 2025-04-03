import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const MainContentLayout = styled.main`
  padding: 0 40px 40px 40px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
    height: auto;
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

export const Contatos = styled.div`
  padding: 24px;
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
  padding: 16px 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: space-between;
  }
`
