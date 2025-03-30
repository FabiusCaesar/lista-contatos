import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const SidebarLayout = styled.aside<{ $menuAberto: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* sem scroll aqui */

  @media (max-width: ${breakpoints.mobile}) {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    transform: ${({ $menuAberto }) =>
      $menuAberto ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
  }
`
