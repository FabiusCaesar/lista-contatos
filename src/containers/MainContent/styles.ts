import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'
import colors from '../../styles/colors'

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
  padding: 16px 32px 32px;
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
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

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

export const Footer = styled.footer`
  text-align: center;
  font-size: 0.75rem;
  color: ${colors.cinzaEscuro};
  margin-top: 32px;
  padding-bottom: 16px;
`
