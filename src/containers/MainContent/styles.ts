import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const MainContentLayout = styled.main`
  padding: 40px;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 16px;
    height: auto;
  }
`

export const BotaoMenuMobile = styled.button`
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`

export const Contatos = styled.div`
  padding: 24px;
  height: 100vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr; // tablets
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr; // celulares
  }
`
