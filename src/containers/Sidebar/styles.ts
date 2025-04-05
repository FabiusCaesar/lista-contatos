import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const SidebarLayout = styled.aside<{ $menuAberto: boolean }>`
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  background-color: #f9f9f9;
  //box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  gap: 2%;

  @media (max-width: ${breakpoints.mobile}) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
    width: 100%;
    transform: ${({ $menuAberto }) =>
      $menuAberto ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
  }
`

export const BotaoFechar = styled.button`
  display: none;
  font-size: 20px;
  background: none;
  border: none;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`
